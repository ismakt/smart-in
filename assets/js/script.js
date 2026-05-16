// ============================
// VARIABLES GLOBALES
// ============================
 
let addressMarkers = [];
let activeAddress = null;
let activeSector = null;
let addressInput;
const MAX_ADDRESS_MARKERS = 3;
 
var bruxellesLayer;
var currentThemeLayer = null;
var activeTheme = null;
var polygonsOn = true;
 
// ============================
// COULEURS & UTILITAIRES
// ============================
 
const COLORS = [
  "#f7fbff",
  "#c6dbef",
  "#6baed6",
  "#2171b5",
  "#08306b"
];
 
function parseDecimal(val) {
  if (val == null) return NaN;
  const str = String(val).replace(',', '.').replace(/\s/g, '').replace('%', '');
  return parseFloat(str);
}
 
function computeQuantiles(values, n = 5) {
  const sorted = [...values].sort((a, b) => a - b);
  const breaks = [];
  for (let i = 1; i < n; i++) {
    breaks.push(sorted[Math.floor((i / n) * sorted.length)]);
  }
  return breaks;
}
 
// ============================
// THEMES
// ============================
 
const ALL_THEMES = [
  // ---------------- Immobilier - Transactions ----------------
  { name: "Total sales 2013-2024",                        file: "merge_total_sales_2013_2024_BX_only_with_geofile.geojson",                  property: "total_sales_2013_2024" },
  { name: "2-3 facades houses total sales 2013-2024",     file: "merge_sales_2_3_facades_BX_only_with_geofile.geojson",                     property: "total_sales" },
  { name: "4 or plus facades houses total sales 2013-2024", file: "merge_sales_4_or_plus_facades_BX_only_with_geofile.geojson",             property: "total_sales" },
  { name: "apartments total sales 2013-2024",             file: "merge_apartments_BX_only_with_geofile.geojson",                            property: "total_sales" },
  { name: "Appartements vendus 2011",                     file: "immo_nb_appart_sales_2011.geojson",                                        property: "total_sales" },
  { name: "Appartements vendus 2021",                     file: "immo_nb_appart_sales_2021.geojson",                                        property: "total_sales" },
  { name: "Maisons vendus 2011",                          file: "immo_nb_houses_sales_2011.geojson",                                        property: "total_sales" },
  { name: "Maisons vendus 2021",                          file: "immo_nb_houses_sales_2021.geojson",                                        property: "total_sales" },
 
  // ---------------- Immobilier - Prix ----------------
  { name: "median sale price 2013",                       file: "merge_sales_median_2013_BX_only_with_geofile.geojson",                     property: "MS_P50 (MEDIAN_PRICE)" },
  { name: "median sale price 2023",                       file: "merge_sales_median_2023_BX_only_with_geofile.geojson",                     property: "MS_P50 (MEDIAN_PRICE)" },
  { name: "median sale price apartment 2013",             file: "merge_sales_median_apartment_2013_BX_only_with_geofile.geojson",           property: "MS_P50 (MEDIAN_PRICE)" },
  { name: "median sale price apartment 2023",             file: "merge_sales_median_apartment_2023_BX_only_with_geofile.geojson",           property: "MS_P50 (MEDIAN_PRICE)" },
  { name: "MS_P10_2013",                                  file: "merge_sales_ms_p10_2013_BX_only_with_geofile.geojson",                     property: "MS_P10" },
  { name: "MS_P10_2023",                                  file: "merge_sales_ms_p10_2023_BX_only_with_geofile.geojson",                     property: "MS_P10" },
  { name: "MS_P25_2013",                                  file: "merge_sales_ms_p25_2013_BX_only_with_geofile.geojson",                     property: "MS_P25" },
  { name: "MS_P25_2023",                                  file: "merge_sales_ms_p25_2023_BX_only_with_geofile.geojson",                     property: "MS_P25" },
  { name: "MS_P75_2013",                                  file: "merge_sales_ms_p75_2013_BX_only_with_geofile.geojson",                     property: "MS_P75" },
  { name: "MS_P75_2023",                                  file: "merge_sales_ms_p75_2023_BX_only_with_geofile.geojson",                     property: "MS_P75" },
  { name: "MS_P90_2013",                                  file: "merge_sales_ms_p90_2013_BX_only_with_geofile.geojson",                     property: "MS_P90" },
  { name: "MS_P90_2023",                                  file: "merge_sales_ms_p90_2023_BX_only_with_geofile.geojson",                     property: "MS_P90" },
  { name: "MS_P10_2013_all_houses",                       file: "merge_sales_ms_p10_2013_BX_only_with_geofile_all_houses.geojson",          property: "MS_P10" },
  { name: "MS_P10_2013_apartments",                       file: "merge_sales_ms_p10_2013_BX_only_with_geofile_Appartements.geojson",        property: "MS_P10" },
  { name: "MS_P10_2023_all_houses",                       file: "merge_sales_ms_p10_2023_BX_only_with_geofile_all_houses.geojson",          property: "MS_P10" },
  { name: "MS_P10_2023_apartments",                       file: "merge_sales_ms_p10_2023_BX_only_with_geofile_apartments.geojson",          property: "MS_P10" },
  { name: "MS_P25_2013_all_houses",                       file: "merge_sales_ms_p25_2013_BX_only_with_geofile_all_houses.geojson",          property: "MS_P25" },
  { name: "MS_P25_2013_apartments",                       file: "merge_sales_ms_p25_2013_BX_only_with_geofile_Appartements.geojson",        property: "MS_P25" },
  { name: "MS_P25_2023_all_houses",                       file: "merge_sales_ms_p25_2023_BX_only_with_geofile_all_houses.geojson",          property: "MS_P25" },
  { name: "MS_P25_2023_apartments",                       file: "merge_sales_ms_p25_2023_BX_only_with_geofile_apartments.geojson",          property: "MS_P25" },
  { name: "MS_P75_2013_all_houses",                       file: "merge_sales_ms_p75_2013_BX_only_with_geofile_all_houses.geojson",          property: "MS_P75" },
  { name: "MS_P75_2013_apartments",                       file: "merge_sales_ms_p75_2013_BX_only_with_geofile_apartments.geojson",          property: "MS_P75" },
  { name: "MS_P75_2023_all_houses",                       file: "merge_sales_ms_p75_2023_BX_only_with_geofile_all_houses.geojson",          property: "MS_P75" },
  { name: "MS_P75_2023_apartments",                       file: "merge_sales_ms_p75_2023_BX_only_with_geofile_apartments.geojson",          property: "MS_P75" },
  { name: "MS_P90_2013_all_houses",                       file: "merge_sales_ms_p90_2013_BX_only_with_geofile_all_houses.geojson",          property: "MS_P90" },
  { name: "MS_P90_2013_apartments",                       file: "merge_sales_ms_p90_2013_BX_only_with_geofile_apartments.geojson",          property: "MS_P90" },
  { name: "MS_P90_2023_all_houses",                       file: "merge_sales_ms_p90_2023_BX_only_with_geofile_all_houses.geojson",          property: "MS_P90" },
  { name: "MS_P90_2023_apartments",                       file: "merge_sales_ms_p90_2023_BX_only_with_geofile_apartments.geojson",          property: "MS_P90" },
  { name: "TotalRentP50LessorLegalPerson2024",            file: "merged_StatisticalUnitWideRealEstateRentsAnnual_2024_lessorlegalperson_totalrentp50_BX_only.geojson",  property: "TotalRentP50" },
  { name: "TotalRentP50LessorNeutralPerson2024",          file: "merged_StatisticalUnitWideRealEstateRentsAnnual_2024_lessorneutralperson_totalrentp50_BX_only.geojson", property: "TotalRentP50" },
  { name: "TotalRentP50TakerLegalPerson2024",             file: "merged_StatisticalUnitWideRealEstateRentsAnnual_2024_takerlegalperson_totalrentp50_BX_only.geojson",   property: "TotalRentP50" },
  { name: "Loyer moyen",                                  file: "immo_avg_rent.geojson",                                                    property: "immo_avg_rent" },
  { name: "Prix median appartements 2011",                file: "immo_median_saleprice_appart_2011.geojson",                                property: "immo_median_saleprice_appart_2011" },
  { name: "Prix median appartements 2021",                file: "immo_median_saleprice_appart_2021.geojson",                                property: "immo_median_saleprice_appart_2021" },
  { name: "Prix median maisons 2011",                     file: "immo_median_saleprice_house_2011.geojson",                                 property: "immo_median_saleprice_house_2011" },
  { name: "Prix median maisons 2021",                     file: "immo_median_saleprice_house_2021.geojson",                                 property: "immo_median_saleprice_house_2021" },
 
  // ---------------- Immobilier - Parc ----------------
  { name: "Logements sociaux",                            file: "immo_nb_logsoc.geojson",                                                   property: "immo_nb_logsoc" },
  { name: "Batiments residentiels",                       file: "immo_nb_bat_resid.geojson",                                                property: "immo_nb_bat_resid" },
  { name: "Parc immobilier 2 a 3 facades",                file: "immo_tx_23fac_houses.geojson",                                             property: "immo_tx_23fac_houses" },
  { name: "Parc immobilier 4 facades",                    file: "immo_tx_4f_houses.geojson",                                                property: "immo_tx_4f_houses" },
  { name: "Parc immobilier immeuble appartements",        file: "immo_tx_immeub_appart.geojson",                                            property: "immo_tx_immeub_appart" },
 
  // ---------------- Tendances ----------------
  { name: "Gentrification",                               file: "gentrification.geojson",                                                   property: "gentrification" },
 
  // ---------------- Sécurité ----------------
  { name: "Vols_2024",         file: "zp_crime_type_vol_2024_bx_geofile.geojson",              property: "vol" },
  { name: "Vols_2014",         file: "zp_crime_type_vol_2014_bx_geofile.geojson",              property: "vol" },
  { name: "Vols_2000",         file: "zp_crime_type_vol_2000_bx_geofile.geojson",              property: "vol" },
  { name: "coups_blessures_2024", file: "zp_crime_type_coups_blessures_2024_bx_geofile.geojson", property: "coups_blessures" },
  { name: "coups_blessures_2014", file: "zp_crime_type_coups_blessures_2014_bx_geofile.geojson", property: "coups_blessures" },
  { name: "coups_blessures_2000", file: "zp_crime_type_coups_blessures_2000_bx_geofile.geojson", property: "coups_blessures" },
  { name: "drogues_2024",      file: "zp_crime_type_drogues_2024_bx_geofile.geojson",          property: "drogues" },
  { name: "drogues_2014",      file: "zp_crime_type_drogues_2014_bx_geofile.geojson",          property: "drogues" },
  { name: "drogues_2000",      file: "zp_crime_type_drogues_2000_bx_geofile.geojson",          property: "drogues" },
  { name: "alcool_2024",       file: "zp_crime_type_alcool_2024_bx_geofile.geojson",           property: "alcool" },
  { name: "alcool_2014",       file: "zp_crime_type_alcool_2014_bx_geofile.geojson",           property: "alcool" },
  { name: "alcool_2000",       file: "zp_crime_type_alcool_2000_bx_geofile.geojson",           property: "alcool" },
  { name: "armes_2024",        file: "zp_crime_type_armes_2024_bx_geofile.geojson",            property: "armes" },
  { name: "armes_2014",        file: "zp_crime_type_armes_2014_bx_geofile.geojson",            property: "armes" },
  { name: "armes_2000",        file: "zp_crime_type_armes_2000_bx_geofile.geojson",            property: "armes" },
  { name: "secu_publiq_2024",  file: "zp_crime_type_secu_publiq_2024_bx_geofile.geojson",      property: "secu_publiq" },
  { name: "secu_publiq_2014",  file: "zp_crime_type_secu_publiq_2014_bx_geofile.geojson",      property: "secu_publiq" },
  { name: "secu_publiq_2000",  file: "zp_crime_type_secu_publiq_2000_bx_geofile.geojson",      property: "secu_publiq" },
  { name: "degradat_prop_2024",file: "zp_crime_type_degradat_prop_2024_bx_geofile.geojson",    property: "degradat_prop" },
  { name: "degradat_prop_2014",file: "zp_crime_type_degradat_prop_2014_bx_geofile.geojson",    property: "degradat_prop" },
  { name: "degradat_prop_2000",file: "zp_crime_type_degradat_prop_2000_bx_geofile.geojson",    property: "degradat_prop" },
  { name: "Cambriolages_2024", file: "zp_crime_type_cambriolage_2024_bx_geofile.geojson",      property: "cambriolage" },
  { name: "Cambriolages_2014", file: "zp_crime_type_cambriolage_2014_bx_geofile.geojson",      property: "cambriolage" },
  { name: "Cambriolages_2000", file: "zp_crime_type_cambriolage_2000_bx_geofile.geojson",      property: "cambriolage" },
 
  // ---------------- Espaces verts ----------------
  { name: "Taux vegetation",                        file: "eco_tx_veget.geojson",                          property: "eco_tx_veget" },
  { name: "Taux espaces verts accessibles public",  file: "eco_tx_espacevert_accesspublic.geojson",         property: "eco_tx_espacevert_accesspublic" },
 
  // ---------------- Economics ----------------
  { name: "Avg_Revenue_2023",                       file: "merged_statsector_revenue_BX_only_2023_partialmatch.geojson", property: "MS_AVG_TOT_NET_TAXABLE_INC" },
  { name: "Revenu Médian",                          file: "fin_med_rev.geojson",                            property: "fin_med_rev" },
  { name: "Taux naissances sans revenu de travail", file: "fin_tx_births_noworkrevenue.geojson",             property: "fin_tx_births_noworkrevenue" },
  { name: "Taux naissances meres etrangeres",       file: "fin_tx_naissances_mere_etrang.geojson",           property: "fin_tx_naissances_mere_etrang" },
  { name: "Taux emploi",                            file: "fin_tx_emploi.geojson",                          property: "fin_tx_emploi" },
  { name: "Taux emploi 15 à 24 ans",               file: "fin_tx_emploi_15_24.geojson",                    property: "fin_tx_emploi_15_24" },
  { name: "Taux emploi 25 à 49 ans",               file: "fin_tx_emploi_25_49.geojson",                    property: "fin_tx_emploi_25_49" },
  { name: "Taux emploi 50 à 64 ans",               file: "fin_tx_emploi_50_64.geojson",                    property: "fin_tx_emploi_50_64" },
  { name: "Taux salariés",                          file: "fin_tx_sal.geojson",                             property: "fin_tx_sal" },
  { name: "Taux indépendants",                      file: "fin_tx_indep.geojson",                           property: "fin_tx_indep" },
  { name: "Taux ouvriers",                          file: "fin_tx_ouvr.geojson",                            property: "fin_tx_ouvr" },
  { name: "Taux employés",                          file: "fin_tx_employee.geojson",                        property: "fin_tx_employee" },
  { name: "Emplois Institutions Internationales",   file: "fin_nb_internat_instit_jobs.geojson",             property: "fin_nb_internat_instit_jobs" },
  { name: "Taux fonctionnaires",                    file: "fin_tx_fonct.geojson",                           property: "fin_tx_fonct" },
  { name: "Secteurs economiques majeures",          file: "caract_economiq.geojson",                        property: "caract_economiq" },
  { name: "Sieges sociaux",                         file: "fin_soc_siege.geojson",                          property: "fin_soc_siege" },
  { name: "Etablissements",                         file: "fin_nb_etabls.geojson",                          property: "fin_nb_etabls" },
  { name: "Solde migration entreprises 2009 a 2020",              file: "fin_soldmig_firms_total_2009_2020.geojson",       property: "fin_soldmig_firms_total_2009_2020" },
  { name: "Solde migration entreprises 2009 a 2020 Horeca",       file: "fin_soldmig_2009_2020_horeca.geojson",            property: "fin_soldmig_2009_2020_horeca" },
  { name: "Solde migration entreprises 2009 a 2020 commerce detail", file: "fin_soldmig_2009_2020_commrcdetail.geojson",  property: "fin_soldmig_2009_2020_commrcdetail" },
  { name: "Solde migration entreprises 2009 a 2020 IT",           file: "fin_soldmig_2009_2020_IT.geojson",               property: "fin_soldmig_2009_2020_IT" },
  { name: "Solde migration entreprises 2009 a 2020 RBC",          file: "fin_soldmig_RBC_2009_2022.geojson",              property: "fin_soldmig_RBC_2009_2022" },
  { name: "Solde migration entreprises 2009 a 2020 Régions",      file: "fin_soldmig_ firms_Wal_Flan_2009_2022.geojson",  property: "fin_soldmig_firms_Wal_Flan_2009_2022" },
  { name: "Taux chomage",                           file: "fin_tx_chomg.geojson",                           property: "fin_tx_chomg" },
  { name: "Taux chomage LD",                        file: "fin_tx_chom_longduree.geojson",                  property: "fin_tx_chom_longduree" },
  { name: "Taux chomage 15 a 24 ans",              file: "fin_15_24yo_tx_chom.geojson",                    property: "fin_15_24yo_tx_chom" },
  { name: "Taux chomage 25 a 49 ans",              file: "fin_tx_chom_25_49.geojson",                      property: "fin_tx_chom_25_49" },
  { name: "Taux chomage 50 a 64 ans",              file: "fin_tx_chom_50_64.geojson",                      property: "fin_tx_chom_50_64" },
  { name: "Taux CPAS 18 a 24 ans",                 file: "tx_CPAS_18_24_2021.geojson",                     property: "tx_CPAS_18_24_2021" },
  { name: "Taux GRAPA 65+",                         file: "GRAPA_65+_2022.geojson",                         property: "GRAPA_65+_2022" },
 
  // ---------------- Sociology ----------------
  { name: "Evolution Population 2012-2022 en %",   file: "pop_evo_2012_2022.geojson",                      property: "pop_tx_aug_2012_2022" },
  { name: "Total_Population_2014",                  file: "merged_statsector_population_BX_only_2014_partialmatch.geojson", property: "Total_Population_2014" },
  { name: "Total_Population_2025",                  file: "merged_statsector_population_BX_only_2025_partialmatch.geojson", property: "Total_Population_2025" },
  { name: "Population en 2022",                     file: "pop_2022_ok.geojson",                            property: "pop_nb_2022" },
  { name: "Solde migratoire interne",               file: "pop_soldmig_intern.geojson",                     property: "pop_soldmig_intern" },
  { name: "Solde migratoire international",         file: "pop_soldmig_internat.geojson",                   property: "pop_soldmig_internat" },
  { name: "Population Croissance Annuelle",         file: "pop_croissance_an.geojson",                      property: "pop_croissance_an" },
  { name: "Taux natalité",                          file: "pop_tx_natalite.geojson",                        property: "pop_tx_natalite" },
  { name: "Taux retard scolaire",                   file: "ensign_retard_scol.geojson",                     property: "ensign_retard_scol" },
  { name: "Densité de Population",                  file: "hab_km2.geojson",                                property: "hab/km2" },
  { name: "% Population agée de 18 à 64 ans",      file: "pop_tx_agegroup_18_64_2022.geojson",             property: "pop_tx_agegroup_18_64_2022" },
  { name: "% Population immigrée",                  file: "pop_tx_immig_2022.geojson",                      property: "pop_tx_immig_2022" },
  { name: "% Population immigrée UE",               file: "pop_tx_immig_fromEU.geojson",                    property: "pop_tx_immig_fromEU" },
  { name: "% Population immigrée UE14",             file: "pop_tx_immig_fromEU14.geojson",                  property: "pop_tx_immig_fromEU14" },
  { name: "% Population immigrée UE13",             file: "pop_tx_immig_fromEU13.geojson",                  property: "pop_tx_immig_fromEU13" },
  { name: "pop_tx_immig_resteEu+nonEU",             file: "pop_tx_immig_resteEu+nonEU.geojson",             property: "pop_tx_immig_resteEu+nonEU" },
  { name: "% Population immigrée nationalité étrangère naissance", file: "pop_tx_nationalite_etrg_alanaissance.geojson", property: "pop_tx_nationalite_etrg_alanaissance" },
  { name: "% Roumains",  file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_roum_2022" },
  { name: "% Marocains", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_maroc_2022" },
  { name: "% Syrie",     file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_syrie_2022" },
  { name: "% Francais",  file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_fr_2022" },
  { name: "% Inde",      file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_inde_2022" },
  { name: "% Turc",      file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_turc_2022" },
  { name: "% Italie",    file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_it_2022" },
  { name: "% Portugal",  file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_portugal_2022" },
  { name: "% Espagne",   file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_es_2022" },
  { name: "% Pologne",   file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_pl_2022" },
  { name: "% Bresil",    file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_bresil_2022" },
  { name: "% Allemagne", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_al_2022" },
  { name: "% RDC",       file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_rdc_2022" },
  { name: "% Bulgarie",  file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_boulg_2022" },
  { name: "% Japon",     file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_jap_2022" },
  { name: "% Grece",     file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_grece_2022" },
  { name: "% NL",        file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_nl_2022" },
  { name: "% Moldovie",  file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_mold_2022" },
  { name: "% UK",        file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_uk_2022" },
  { name: "% Guinee",    file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_guinee_2022" }
];
 
const THEME_INDEX = {};
ALL_THEMES.forEach(t => { THEME_INDEX[t.name] = t; });
 
// ============================
// CACHE DES THEMES
// ============================
 
const themeCache = {};
 
async function preloadThemes() {
  for (const theme of ALL_THEMES) {
    if (theme.name.startsWith('///')) continue;
    try {
      const res = await fetch(theme.file);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      themeCache[theme.name] = await res.json();
    } catch (err) {
      console.warn(`Impossible de précharger : ${theme.name}`, err);
    }
  }
}
 
// Preload après le login pour ne pas bloquer l'affichage initial
function startPreload() {
  setTimeout(preloadThemes, 1000);
}
 
// ============================
// INITIALISATION CARTE
// ============================
 
var map = L.map('map', { zoomControl: false }).setView([50.85, 4.35], 10);
 
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
 
map.createPane('communesPane');
map.getPane('communesPane').style.zIndex = 650;
 
// ============================
// UTILITAIRES CARTE
// ============================
 
/**
 * FIX : Utilise turf-like point-in-polygon via Leaflet bounds + ray casting
 * Gère les features de type Polygon et MultiPolygon sans planter sur les points
 */
function pointInFeature(lat, lon, feature) {
  if (!feature || !feature.geometry) return false;
  try {
    const layer = L.geoJSON(feature);
    // Vérification rapide par bounding box d'abord
    const bounds = layer.getBounds();
    if (!bounds.isValid()) return false;
    if (!bounds.contains([lat, lon])) return false;
    // Vérification précise : on cherche si le point est dans un polygon Leaflet
    let inside = false;
    layer.eachLayer(l => {
      if (typeof l.contains === 'function' && l.contains([lat, lon])) inside = true;
      else if (l.getLatLngs) {
        // Fallback ray casting pour Polygon / MultiPolygon
        inside = inside || leafletRaycast([lat, lon], l);
      }
    });
    return inside;
  } catch (e) {
    return false;
  }
}
 
function leafletRaycast(point, layer) {
  const latlngs = layer.getLatLngs ? layer.getLatLngs() : [];
  const rings = Array.isArray(latlngs[0]) ? latlngs : [latlngs];
  const [py, px] = point;
  let inside = false;
  for (const ring of rings) {
    const flat = ring.flat ? ring.flat(Infinity) : ring;
    const n = flat.length;
    for (let i = 0, j = n - 1; i < n; j = i++) {
      const xi = flat[i].lng, yi = flat[i].lat;
      const xj = flat[j].lng, yj = flat[j].lat;
      const intersect = ((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
  }
  return inside;
}
 
function getValueFromTheme(theme, lat, lon) {
  const data = themeCache[theme.name];
  if (!data) return "N/A";
  for (const f of data.features) {
    try {
      if (pointInFeature(lat, lon, f)) {
        const v = f.properties[theme.property];
        return v != null ? v : "N/A";
      }
    } catch (e) { /* skip */ }
  }
  return "N/A";
}
 
async function captureMap() {
  const mapElement = document.getElementById("map");
  // FIX : allowTaint + useCORS pour les tuiles CartoDB
  const canvas = await html2canvas(mapElement, {
    useCORS: true,
    allowTaint: false,
    logging: false
  });
  return canvas.toDataURL("image/png");
}
 
function exportToExcel(data) {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Scan Results");
  XLSX.writeFile(workbook, "scan_results.xlsx");
}
 
function generatePDF(results, screenshots) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let y = 10;
 
  doc.setFontSize(14);
  doc.text("Smart-In Report", 10, y);
  y += 10;
  doc.setFontSize(10);
  if (results.length > 0) {
    doc.text(`Address: ${results[0].address}`, 10, y);
    y += 10;
  }
 
  screenshots.forEach((item) => {
    if (y > 250) { doc.addPage(); y = 10; }
    doc.text(`Theme: ${item.theme}`, 10, y); y += 5;
    doc.text(`Value: ${item.value}`, 10, y); y += 5;
    try {
      doc.addImage(item.img, "PNG", 10, y, 180, 80);
    } catch (e) { /* skip if image fails */ }
    y += 90;
  });
 
  doc.save("scan_report.pdf");
}
 
// ============================
// SECTEUR & MARKERS
// ============================
 
function getSectorFromLatlon([lat, lon]) {
  if (!bruxellesLayer) return null;
  let found = null;
  bruxellesLayer.eachLayer(layer => {
    if (found) return;
    if (layer.feature) {
      try {
        if (layer.getBounds().contains([lat, lon])) found = layer;
      } catch (e) { /* skip */ }
    }
  });
  return found;
}
 
function createAddressIcon(id) {
  return L.divIcon({
    className: '',
    html: `
      <div class="address-marker">
        <div class="dot"></div>
        <div class="close" data-id="${id}">✕</div>
      </div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
}
 
async function geocodeAddress(address) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    address + ', Brussels, Belgium'
  )}&limit=1`;
  try {
    const res = await fetch(url, { headers: { 'Accept-Language': 'fr' } });
    const data = await res.json();
    if (!data.length) return null;
    return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
  } catch (err) {
    console.error("Erreur geocoding:", err);
    return null;
  }
}
 
function addAddressMarker(lat, lon, label) {
  if (addressMarkers.length >= MAX_ADDRESS_MARKERS) return;
  const id = Date.now().toString();
 
  const marker = L.marker([lat, lon], {
    icon: createAddressIcon(id),
    pane: 'markerPane'
  }).addTo(map);
 
  const circle500 = L.circle([lat, lon], {
    radius: 500,
    color: '#ff3b30',
    weight: 1,
    fillColor: '#ff3b30',
    fillOpacity: 0.08
  }).addTo(map);
 
  marker.bindTooltip(label);
  addressMarkers.push({ id, marker, circle500 });
  activeAddress = { lat, lon, text: label };
  activeSector = getSectorFromLatlon([lat, lon]);
 
  setTimeout(() => {
    const closeBtn = document.querySelector(`.close[data-id="${id}"]`);
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        map.removeLayer(marker);
        map.removeLayer(circle500);
        addressMarkers = addressMarkers.filter(m => m.id !== id);
        if (addressMarkers.length === 0) {
          activeAddress = null;
          activeSector = null;
        }
      });
    }
  }, 50);
 
  map.setView([lat, lon], Math.max(map.getZoom(), 13));
}
 
// ============================
// LÉGENDE
// ============================
 
function renderLegendAuto(title, breaks) {
  const legendDiv = document.querySelector('.legend');
  if (!legendDiv) return;
  const fmt = n => (typeof n === 'number') ? n.toLocaleString('fr-BE', { maximumFractionDigits: 2 }) : n;
  let html = `<div style="margin-bottom:6px"><b>${title}</b></div>`;
  const levels = [0, ...breaks, "max"];
  for (let i = 0; i < COLORS.length; i++) {
    html += `
      <div style="display:flex;align-items:center;margin-bottom:3px;">
        <span style="display:inline-block;width:18px;height:12px;background:${COLORS[i]};margin-right:8px;border:1px solid #ccc;flex-shrink:0;"></span>
        <span>${fmt(levels[i])} – ${fmt(levels[i + 1])}</span>
      </div>
    `;
  }
  legendDiv.innerHTML = html;
}
 
// ============================
// CHOROPLÈTHE
// ============================
 
function buildChoropleth(data, property, themeName) {
  const values = data.features
    .map(f => parseDecimal(f.properties[property]))
    .filter(v => !isNaN(v));
 
  if (values.length === 0) {
    console.warn(`Aucune valeur numérique pour "${property}"`);
    renderLegendAuto(themeName, []);
    return L.geoJSON(data);
  }
 
  const breaks = computeQuantiles(values, 5);
 
  function getColor(d) {
    if (isNaN(d))      return '#cccccc';
    if (d > breaks[3]) return COLORS[4];
    if (d > breaks[2]) return COLORS[3];
    if (d > breaks[1]) return COLORS[2];
    if (d > breaks[0]) return COLORS[1];
    return COLORS[0];
  }
 
  const layer = L.geoJSON(data, {
    style: (feature) => {
      const v = parseDecimal(feature.properties[property]);
      return { fillColor: getColor(v), weight: 1, color: "#333", fillOpacity: 0.6 };
    },
    onEachFeature: (feature, layer) => {
      const v = feature.properties[property];
      layer.bindTooltip(`<b>${property}</b>: ${v ?? 'N/A'}`);
    }
  });
 
  renderLegendAuto(themeName, breaks);
  return layer;
}
 
// ============================
// APPLIQUER UN THÈME
// ============================
 
function applyTheme(themeName) {
  const theme = THEME_INDEX[themeName];
  if (!theme) {
    console.warn(`Thème inconnu : "${themeName}"`);
    return;
  }
  if (themeName.startsWith('///')) {
    alert(`Ce thème n'est pas encore disponible : ${themeName}`);
    return;
  }
  if (currentThemeLayer) {
    map.removeLayer(currentThemeLayer);
    currentThemeLayer = null;
  }
  activeTheme = themeName;
 
  const loadAndRender = (data) => {
    themeCache[themeName] = data;
    currentThemeLayer = buildChoropleth(data, theme.property, themeName);
    currentThemeLayer.addTo(map);
  };
 
  if (themeCache[themeName]) {
    loadAndRender(themeCache[themeName]);
  } else {
    fetch(theme.file)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status} — fichier introuvable : ${theme.file}`);
        return res.json();
      })
      .then(loadAndRender)
      .catch(err => {
        console.error(`Erreur chargement thème "${themeName}":`, err);
        alert(`Impossible de charger le thème "${themeName}".\nVérifiez que le fichier "${theme.file}" existe.`);
      });
  }
}
 
// ============================
// COUCHE DE BASE
// ============================
 
fetch('shapefile_BX_only_geojson_4326.geojson')
  .then(res => res.json())
  .then(data => {
    bruxellesLayer = L.geoJSON(data, {
      pane: 'communesPane',
      style: () => ({ color: '#000', weight: 2, fillColor: 'none', fillOpacity: 0 }),
      onEachFeature: (feature, layer) => {
        layer.bindTooltip(
          Object.entries(feature.properties).slice(0, 5).map(([k, v]) => `${k}: ${v}`).join('<br>')
        );
      }
    }).addTo(map);
    map.fitBounds(bruxellesLayer.getBounds());
  })
  .catch(err => console.error("Erreur chargement shapefile:", err));
 
// ============================
// FIX LOGIN — UN SEUL DOMContentLoaded
// ============================
 
document.addEventListener('DOMContentLoaded', () => {
 
  // ── Login ──────────────────────────────────────────────
  const PASSWORD = "1";
  const btnLogin       = document.getElementById("btn-login");
  const passwordInput  = document.getElementById("password-input");
  const passwordCont   = document.getElementById("password-container");
  const mainApp        = document.getElementById("main-app");
 
  function doLogin(pwd) {
    if (pwd === PASSWORD || pwd === "premium123") {
      if (passwordCont) passwordCont.style.display = "none";
      if (mainApp)      mainApp.style.display = "flex";
 
      // FIX : révéler la carte et le panneau droit directement
      // sans dépendre de #internalKey qui n'existe plus
      const contentCenter = document.getElementById("protected-content");
      const contentRight  = document.getElementById("protected-content2");
      if (contentCenter) { contentCenter.style.opacity = "1"; contentCenter.style.pointerEvents = "auto"; }
      if (contentRight)  { contentRight.style.opacity  = "1"; contentRight.style.pointerEvents  = "auto"; }
 
      // Invalider la taille de la carte après affichage
      setTimeout(() => map.invalidateSize(), 300);
 
      // Démarrer le préchargement des GeoJSON
      startPreload();
    } else {
      alert("Mot de passe incorrect");
    }
  }
 
  if (btnLogin) {
    btnLogin.addEventListener("click", () => {
      doLogin(passwordInput ? passwordInput.value : "");
    });
  }
 
  if (passwordInput) {
    passwordInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") doLogin(passwordInput.value);
    });
  }
 
  // ── Message depuis l'iframe europe-map ─────────────────
  window.addEventListener("message", (event) => {
    if (!event.data) return;
    // FIX : gérer cityClick ET unlock depuis l'iframe
    if (event.data.type === "unlock") {
      doLogin(event.data.password);
    }
    if (event.data.type === "cityClick") {
      // Optionnel : centrer sur la ville cliquée
      const city = event.data.city;
      if (city === "Brussels") map.setView([50.85, 4.35], 10);
    }
  });
 
  // ── Input adresse ──────────────────────────────────────
  addressInput = document.getElementById('address-input');
  if (addressInput) {
    addressInput.addEventListener('keydown', async (e) => {
      if (e.key !== 'Enter') return;
      const value = addressInput.value.trim();
      if (!value) return;
      if (addressMarkers.length >= MAX_ADDRESS_MARKERS) {
        alert('Maximum 3 marqueurs atteint');
        return;
      }
      const result = await geocodeAddress(value);
      if (!result) { alert('Adresse introuvable à Bruxelles'); return; }
      addAddressMarker(result.lat, result.lon, value);
      addressInput.value = '';
    });
  }
 
  // ── Zoom ───────────────────────────────────────────────
  const btnZoomIn  = document.getElementById('zoom-in');
  const btnZoomOut = document.getElementById('zoom-out');
  if (btnZoomIn)  btnZoomIn.addEventListener('click',  () => map.zoomIn());
  if (btnZoomOut) btnZoomOut.addEventListener('click', () => map.zoomOut());
 
  // ── Centrer ────────────────────────────────────────────
  const btnCenter = document.getElementById('btn-center');
  if (btnCenter) btnCenter.addEventListener('click', () => map.setView([50.85, 4.35], 10));
 
  // ── Toggle polygones ───────────────────────────────────
  const btnToggle = document.getElementById('btn-toggle');
  if (btnToggle) {
    btnToggle.addEventListener('click', function () {
      if (!bruxellesLayer) return;
      if (polygonsOn) {
        map.removeLayer(bruxellesLayer);
        polygonsOn = false;
        this.innerText = 'Polygones OFF';
      } else {
        bruxellesLayer.addTo(map);
        polygonsOn = true;
        this.innerText = 'Polygones ON';
      }
    });
  }
 
  // ── Filters OFF ────────────────────────────────────────
  const btnFiltersOff = document.getElementById('btn-filters-off');
  if (btnFiltersOff) {
    btnFiltersOff.addEventListener('click', () => {
      if (currentThemeLayer) { map.removeLayer(currentThemeLayer); currentThemeLayer = null; }
      activeTheme = null;
      if (bruxellesLayer && !map.hasLayer(bruxellesLayer)) bruxellesLayer.addTo(map);
      const filtersContent = document.getElementById('filters-content');
      if (filtersContent) filtersContent.innerHTML = 'choose a theme';
      polygonsOn = true;
      if (btnToggle) btnToggle.innerText = 'Polygones ON';
      const legendDiv = document.querySelector('.legend');
      if (legendDiv) legendDiv.innerHTML = '';
      document.querySelectorAll('.theme-submenu div').forEach(i => i.classList.remove('selected'));
      map.setView([50.85, 4.35], 10);
    });
  }
 
  // ── Dropdowns ──────────────────────────────────────────
  function toggleDropdown(btnId, dropdownId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', () => {
      const dd = document.getElementById(dropdownId);
      if (!dd) return;
      // Fermer les autres dropdowns ouverts
      ['city-dropdown', 'theme-dropdown', 'filters-dropdown'].forEach(id => {
        if (id !== dropdownId) {
          const other = document.getElementById(id);
          if (other) other.style.display = 'none';
        }
      });
      dd.style.display = dd.style.display === 'flex' ? 'none' : 'flex';
    });
  }
 
  toggleDropdown('btn-city', 'city-dropdown');
  toggleDropdown('btn-theme', 'theme-dropdown');
  toggleDropdown('btn-filters', 'filters-dropdown');
 
  // ── Info panel ─────────────────────────────────────────
  const btnInfo = document.getElementById('btn-info');
  if (btnInfo) {
    btnInfo.addEventListener('click', () => {
      const panel = document.getElementById('info-panel');
      if (panel) panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
    });
  }
 
  // ── Accordéon thèmes ───────────────────────────────────
  document.querySelectorAll('.theme-group-toggle').forEach(toggle => {
    const baseText = toggle.textContent.replace(/\s*[▸▾]/g, '').trim();
    toggle.textContent = baseText + ' ▸';
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const submenu = this.nextElementSibling;
      if (!submenu) return;
      const isOpen = submenu.classList.contains('open');
      if (isOpen) {
        submenu.classList.remove('open');
        this.classList.remove('active');
        this.textContent = baseText + ' ▸';
      } else {
        submenu.classList.add('open');
        this.classList.add('active');
        this.textContent = baseText + ' ▾';
      }
    });
  });
 
  // ── Clic sur un thème ──────────────────────────────────
  document.querySelectorAll('.theme-submenu div[data-theme]').forEach(item => {
    item.addEventListener('click', function (e) {
      e.stopPropagation();
      document.querySelectorAll('.theme-submenu div').forEach(i => i.classList.remove('selected'));
      this.classList.add('selected');
      applyTheme(this.dataset.theme);
      // Fermer le dropdown thème après sélection
      const dd = document.getElementById('theme-dropdown');
      if (dd) dd.style.display = 'none';
    });
  });
 
  // ── City dropdown ──────────────────────────────────────
  document.querySelectorAll('#city-dropdown div[data-city]').forEach(item => {
    item.addEventListener('click', function () {
      document.querySelectorAll('#city-dropdown div').forEach(i => i.classList.remove('selected'));
      this.classList.add('selected');
      const dd = document.getElementById('city-dropdown');
      if (dd) dd.style.display = 'none';
      // Pour l'instant seul Bruxelles est actif
      const city = this.dataset.city;
      if (city !== 'Bruxelles') {
        alert(`${city} — Coming Soon`);
      }
    });
  });
 
  // ── Scan & Save ────────────────────────────────────────
  const btnScanSave = document.getElementById('btn-scan-save');
  if (btnScanSave) {
    btnScanSave.addEventListener('click', async () => {
      try {
        if (!activeAddress) {
          alert("Veuillez saisir une adresse d'abord");
          return;
        }
 
        btnScanSave.textContent = "Scanning...";
        btnScanSave.disabled = true;
 
        const results    = [];
        const screenshots = [];
 
        for (const theme of ALL_THEMES) {
          if (theme.name.startsWith('///')) continue;
 
          // Charger le thème si pas encore en cache
          if (!themeCache[theme.name]) {
            try {
              const res = await fetch(theme.file);
              if (res.ok) themeCache[theme.name] = await res.json();
            } catch (e) { /* skip */ }
          }
 
          const value = getValueFromTheme(theme, activeAddress.lat, activeAddress.lon);
 
          results.push({
            address: activeAddress.text,
            lat:     activeAddress.lat,
            lon:     activeAddress.lon,
            theme:   theme.name,
            value:   value
          });
 
          // Screenshot uniquement si le thème est actif (évite 100 captures)
          if (activeTheme === theme.name) {
            try {
              const screenshot = await captureMap();
              screenshots.push({ theme: theme.name, img: screenshot, value: value });
            } catch (e) { /* skip */ }
          }
        }
 
        exportToExcel(results);
        if (screenshots.length > 0) generatePDF(results, screenshots);
 
        alert("Scan & Save terminé !\nExcel exporté. PDF généré si un thème était actif.");
 
      } catch (err) {
        console.error(err);
        alert("Erreur lors du Scan & Save : " + err.message);
      } finally {
        btnScanSave.textContent = "Scan & Save";
        btnScanSave.disabled = false;
      }
    });
  }
 
  // ── Resize ─────────────────────────────────────────────
  window.addEventListener('resize', () => setTimeout(() => map.invalidateSize(), 200));
 
  window._map = map;
});
