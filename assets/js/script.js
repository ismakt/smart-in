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

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// ============================
// THEMES
// ============================

const ALL_THEMES = [
  // ---------------- Immobilier - Transactions ----------------
  { name: "Total sales 2013-2024",                          file: "merge_total_sales_2013_2024_BX_only_with_geofile.geojson",                                              property: "total_sales_2013_2024" },
  { name: "2-3 facades houses total sales 2013-2024",       file: "merge_sales_2_3_facades_BX_only_with_geofile.geojson",                                                 property: "total_sales" },
  { name: "4 or plus facades houses total sales 2013-2024", file: "merge_sales_4_or_plus_facades_BX_only_with_geofile.geojson",                                           property: "total_sales" },
  { name: "apartments total sales 2013-2024",               file: "merge_apartments_BX_only_with_geofile.geojson",                                                        property: "total_sales" },
  { name: "Appartements vendus 2011",                       file: "immo_nb_appart_sales_2011.geojson",                                                                    property: "total_sales" },
  { name: "Appartements vendus 2021",                       file: "immo_nb_appart_sales_2021.geojson",                                                                    property: "total_sales" },
  { name: "Maisons vendus 2011",                            file: "immo_nb_houses_sales_2011.geojson",                                                                    property: "total_sales" },
  { name: "Maisons vendus 2021",                            file: "immo_nb_houses_sales_2021.geojson",                                                                    property: "total_sales" },

  // ---------------- Immobilier - Prix ----------------
  { name: "median sale price 2013",                         file: "merge_sales_median_2013_BX_only_with_geofile.geojson",                                                 property: "MS_P50 (MEDIAN_PRICE)" },
  { name: "median sale price 2023",                         file: "merge_sales_median_2023_BX_only_with_geofile.geojson",                                                 property: "MS_P50 (MEDIAN_PRICE)" },
  { name: "median sale price apartment 2013",               file: "merge_sales_median_apartment_2013_BX_only_with_geofile.geojson",                                       property: "MS_P50 (MEDIAN_PRICE)" },
  { name: "median sale price apartment 2023",               file: "merge_sales_median_apartment_2023_BX_only_with_geofile.geojson",                                       property: "MS_P50 (MEDIAN_PRICE)" },
  { name: "MS_P10_2013",                                    file: "merge_sales_ms_p10_2013_BX_only_with_geofile.geojson",                                                 property: "MS_P10" },
  { name: "MS_P10_2023",                                    file: "merge_sales_ms_p10_2023_BX_only_with_geofile.geojson",                                                 property: "MS_P10" },
  { name: "MS_P25_2013",                                    file: "merge_sales_ms_p25_2013_BX_only_with_geofile.geojson",                                                 property: "MS_P25" },
  { name: "MS_P25_2023",                                    file: "merge_sales_ms_p25_2023_BX_only_with_geofile.geojson",                                                 property: "MS_P25" },
  { name: "MS_P75_2013",                                    file: "merge_sales_ms_p75_2013_BX_only_with_geofile.geojson",                                                 property: "MS_P75" },
  { name: "MS_P75_2023",                                    file: "merge_sales_ms_p75_2023_BX_only_with_geofile.geojson",                                                 property: "MS_P75" },
  { name: "MS_P90_2013",                                    file: "merge_sales_ms_p90_2013_BX_only_with_geofile.geojson",                                                 property: "MS_P90" },
  { name: "MS_P90_2023",                                    file: "merge_sales_ms_p90_2023_BX_only_with_geofile.geojson",                                                 property: "MS_P90" },
  { name: "MS_P10_2013_all_houses",                         file: "merge_sales_ms_p10_2013_BX_only_with_geofile_all_houses.geojson",                                      property: "MS_P10" },
  { name: "MS_P10_2013_apartments",                         file: "merge_sales_ms_p10_2013_BX_only_with_geofile_Appartements.geojson",                                    property: "MS_P10" },
  { name: "MS_P10_2023_all_houses",                         file: "merge_sales_ms_p10_2023_BX_only_with_geofile_all_houses.geojson",                                      property: "MS_P10" },
  { name: "MS_P10_2023_apartments",                         file: "merge_sales_ms_p10_2023_BX_only_with_geofile_apartments.geojson",                                      property: "MS_P10" },
  { name: "MS_P25_2013_all_houses",                         file: "merge_sales_ms_p25_2013_BX_only_with_geofile_all_houses.geojson",                                      property: "MS_P25" },
  { name: "MS_P25_2013_apartments",                         file: "merge_sales_ms_p25_2013_BX_only_with_geofile_Appartements.geojson",                                    property: "MS_P25" },
  { name: "MS_P25_2023_all_houses",                         file: "merge_sales_ms_p25_2023_BX_only_with_geofile_all_houses.geojson",                                      property: "MS_P25" },
  { name: "MS_P25_2023_apartments",                         file: "merge_sales_ms_p25_2023_BX_only_with_geofile_apartments.geojson",                                      property: "MS_P25" },
  { name: "MS_P75_2013_all_houses",                         file: "merge_sales_ms_p75_2013_BX_only_with_geofile_all_houses.geojson",                                      property: "MS_P75" },
  { name: "MS_P75_2013_apartments",                         file: "merge_sales_ms_p75_2013_BX_only_with_geofile_apartments.geojson",                                      property: "MS_P75" },
  { name: "MS_P75_2023_all_houses",                         file: "merge_sales_ms_p75_2023_BX_only_with_geofile_all_houses.geojson",                                      property: "MS_P75" },
  { name: "MS_P75_2023_apartments",                         file: "merge_sales_ms_p75_2023_BX_only_with_geofile_apartments.geojson",                                      property: "MS_P75" },
  { name: "MS_P90_2013_all_houses",                         file: "merge_sales_ms_p90_2013_BX_only_with_geofile_all_houses.geojson",                                      property: "MS_P90" },
  { name: "MS_P90_2013_apartments",                         file: "merge_sales_ms_p90_2013_BX_only_with_geofile_apartments.geojson",                                      property: "MS_P90" },
  { name: "MS_P90_2023_all_houses",                         file: "merge_sales_ms_p90_2023_BX_only_with_geofile_all_houses.geojson",                                      property: "MS_P90" },
  { name: "MS_P90_2023_apartments",                         file: "merge_sales_ms_p90_2023_BX_only_with_geofile_apartments.geojson",                                      property: "MS_P90" },
  { name: "TotalRentP50LessorLegalPerson2024",              file: "merged_StatisticalUnitWideRealEstateRentsAnnual_2024_lessorlegalperson_totalrentp50_BX_only.geojson",   property: "TotalRentP50" },
  { name: "TotalRentP50LessorNeutralPerson2024",            file: "merged_StatisticalUnitWideRealEstateRentsAnnual_2024_lessorneutralperson_totalrentp50_BX_only.geojson", property: "TotalRentP50" },
  { name: "TotalRentP50TakerLegalPerson2024",               file: "merged_StatisticalUnitWideRealEstateRentsAnnual_2024_takerlegalperson_totalrentp50_BX_only.geojson",    property: "TotalRentP50" },
  { name: "Loyer moyen",                                    file: "immo_avg_rent.geojson",                                                                                property: "immo_avg_rent" },
  { name: "Prix median appartements 2011",                  file: "immo_median_saleprice_appart_2011.geojson",                                                            property: "immo_median_saleprice_appart_2011" },
  { name: "Prix median appartements 2021",                  file: "immo_median_saleprice_appart_2021.geojson",                                                            property: "immo_median_saleprice_appart_2021" },
  { name: "Prix median maisons 2011",                       file: "immo_median_saleprice_house_2011.geojson",                                                             property: "immo_median_saleprice_house_2011" },
  { name: "Prix median maisons 2021",                       file: "immo_median_saleprice_house_2021.geojson",                                                             property: "immo_median_saleprice_house_2021" },

  // ---------------- Immobilier - Parc ----------------
  { name: "Logements sociaux",                              file: "immo_nb_logsoc.geojson",                                                                               property: "immo_nb_logsoc" },
  { name: "Batiments residentiels",                         file: "immo_nb_bat_resid.geojson",                                                                            property: "immo_nb_bat_resid" },
  { name: "Parc immobilier 2 a 3 facades",                  file: "immo_tx_23fac_houses.geojson",                                                                         property: "immo_tx_23fac_houses" },
  { name: "Parc immobilier 4 facades",                      file: "immo_tx_4f_houses.geojson",                                                                            property: "immo_tx_4f_houses" },
  { name: "Parc immobilier immeuble appartements",           file: "immo_tx_immeub_appart.geojson",                                                                        property: "immo_tx_immeub_appart" },

  // ---------------- Tendances ----------------
  { name: "Gentrification",                                 file: "gentrification.geojson",                                                                               property: "gentrification" },

  // ---------------- Sécurité ----------------
  { name: "Vols_2024",            file: "zp_crime_type_vol_2024_bx_geofile.geojson",              property: "vol" },
  { name: "Vols_2014",            file: "zp_crime_type_vol_2014_bx_geofile.geojson",              property: "vol" },
  { name: "Vols_2000",            file: "zp_crime_type_vol_2000_bx_geofile.geojson",              property: "vol" },
  { name: "coups_blessures_2024", file: "zp_crime_type_coups_blessures_2024_bx_geofile.geojson",  property: "coups_blessures" },
  { name: "coups_blessures_2014", file: "zp_crime_type_coups_blessures_2014_bx_geofile.geojson",  property: "coups_blessures" },
  { name: "coups_blessures_2000", file: "zp_crime_type_coups_blessures_2000_bx_geofile.geojson",  property: "coups_blessures" },
  { name: "drogues_2024",         file: "zp_crime_type_drogues_2024_bx_geofile.geojson",          property: "drogues" },
  { name: "drogues_2014",         file: "zp_crime_type_drogues_2014_bx_geofile.geojson",          property: "drogues" },
  { name: "drogues_2000",         file: "zp_crime_type_drogues_2000_bx_geofile.geojson",          property: "drogues" },
  { name: "alcool_2024",          file: "zp_crime_type_alcool_2024_bx_geofile.geojson",           property: "alcool" },
  { name: "alcool_2014",          file: "zp_crime_type_alcool_2014_bx_geofile.geojson",           property: "alcool" },
  { name: "alcool_2000",          file: "zp_crime_type_alcool_2000_bx_geofile.geojson",           property: "alcool" },
  { name: "armes_2024",           file: "zp_crime_type_armes_2024_bx_geofile.geojson",            property: "armes" },
  { name: "armes_2014",           file: "zp_crime_type_armes_2014_bx_geofile.geojson",            property: "armes" },
  { name: "armes_2000",           file: "zp_crime_type_armes_2000_bx_geofile.geojson",            property: "armes" },
  { name: "secu_publiq_2024",     file: "zp_crime_type_secu_publiq_2024_bx_geofile.geojson",      property: "secu_publiq" },
  { name: "secu_publiq_2014",     file: "zp_crime_type_secu_publiq_2014_bx_geofile.geojson",      property: "secu_publiq" },
  { name: "secu_publiq_2000",     file: "zp_crime_type_secu_publiq_2000_bx_geofile.geojson",      property: "secu_publiq" },
  { name: "degradat_prop_2024",   file: "zp_crime_type_degradat_prop_2024_bx_geofile.geojson",    property: "degradat_prop" },
  { name: "degradat_prop_2014",   file: "zp_crime_type_degradat_prop_2014_bx_geofile.geojson",    property: "degradat_prop" },
  { name: "degradat_prop_2000",   file: "zp_crime_type_degradat_prop_2000_bx_geofile.geojson",    property: "degradat_prop" },
  { name: "Cambriolages_2024",    file: "zp_crime_type_cambriolage_2024_bx_geofile.geojson",      property: "cambriolage" },
  { name: "Cambriolages_2014",    file: "zp_crime_type_cambriolage_2014_bx_geofile.geojson",      property: "cambriolage" },
  { name: "Cambriolages_2000",    file: "zp_crime_type_cambriolage_2000_bx_geofile.geojson",      property: "cambriolage" },

  // ---------------- Espaces verts ----------------
  { name: "Taux vegetation",                       file: "eco_tx_veget.geojson",                                                          property: "eco_tx_veget" },
  { name: "Taux espaces verts accessibles public", file: "eco_tx_espacevert_accesspublic.geojson",                                        property: "eco_tx_espacevert_accesspublic" },

  // ---------------- Economics ----------------
  { name: "Avg_Revenue_2023",                                     file: "merged_statsector_revenue_BX_only_2023_partialmatch.geojson",       property: "MS_AVG_TOT_NET_TAXABLE_INC" },
  { name: "Revenu Médian",                                        file: "fin_med_rev.geojson",                                              property: "fin_med_rev" },
  { name: "Taux naissances sans revenu de travail",               file: "fin_tx_births_noworkrevenue.geojson",                              property: "fin_tx_births_noworkrevenue" },
  { name: "Taux naissances meres etrangeres",                     file: "fin_tx_naissances_mere_etrang.geojson",                            property: "fin_tx_naissances_mere_etrang" },
  { name: "Taux emploi",                                          file: "fin_tx_emploi.geojson",                                           property: "fin_tx_emploi" },
  { name: "Taux emploi 15 à 24 ans",                              file: "fin_tx_emploi_15_24.geojson",                                     property: "fin_tx_emploi_15_24" },
  { name: "Taux emploi 25 à 49 ans",                              file: "fin_tx_emploi_25_49.geojson",                                     property: "fin_tx_emploi_25_49" },
  { name: "Taux emploi 50 à 64 ans",                              file: "fin_tx_emploi_50_64.geojson",                                     property: "fin_tx_emploi_50_64" },
  { name: "Taux salariés",                                        file: "fin_tx_sal.geojson",                                              property: "fin_tx_sal" },
  { name: "Taux indépendants",                                    file: "fin_tx_indep.geojson",                                            property: "fin_tx_indep" },
  { name: "Taux ouvriers",                                        file: "fin_tx_ouvr.geojson",                                             property: "fin_tx_ouvr" },
  { name: "Taux employés",                                        file: "fin_tx_employee.geojson",                                         property: "fin_tx_employee" },
  { name: "Emplois Institutions Internationales",                  file: "fin_nb_internat_instit_jobs.geojson",                             property: "fin_nb_internat_instit_jobs" },
  { name: "Taux fonctionnaires",                                  file: "fin_tx_fonct.geojson",                                            property: "fin_tx_fonct" },
  { name: "Secteurs economiques majeures",                        file: "caract_economiq.geojson",                                         property: "caract_economiq" },
  { name: "Sieges sociaux",                                       file: "fin_soc_siege.geojson",                                           property: "fin_soc_siege" },
  { name: "Etablissements",                                       file: "fin_nb_etabls.geojson",                                           property: "fin_nb_etabls" },
  { name: "Solde migration entreprises 2009 a 2020",              file: "fin_soldmig_firms_total_2009_2020.geojson",                       property: "fin_soldmig_firms_total_2009_2020" },
  { name: "Solde migration entreprises 2009 a 2020 Horeca",       file: "fin_soldmig_2009_2020_horeca.geojson",                            property: "fin_soldmig_2009_2020_horeca" },
  { name: "Solde migration entreprises 2009 a 2020 commerce detail", file: "fin_soldmig_2009_2020_commrcdetail.geojson",                  property: "fin_soldmig_2009_2020_commrcdetail" },
  { name: "Solde migration entreprises 2009 a 2020 IT",           file: "fin_soldmig_2009_2020_IT.geojson",                               property: "fin_soldmig_2009_2020_IT" },
  { name: "Solde migration entreprises 2009 a 2020 RBC",          file: "fin_soldmig_RBC_2009_2022.geojson",                              property: "fin_soldmig_RBC_2009_2022" },
  { name: "Solde migration entreprises 2009 a 2020 Régions",      file: "fin_soldmig_ firms_Wal_Flan_2009_2022.geojson",                  property: "fin_soldmig_firms_Wal_Flan_2009_2022" },
  { name: "Taux chomage",                                         file: "fin_tx_chomg.geojson",                                           property: "fin_tx_chomg" },
  { name: "Taux chomage LD",                                      file: "fin_tx_chom_longduree.geojson",                                  property: "fin_tx_chom_longduree" },
  { name: "Taux chomage 15 a 24 ans",                             file: "fin_15_24yo_tx_chom.geojson",                                    property: "fin_15_24yo_tx_chom" },
  { name: "Taux chomage 25 a 49 ans",                             file: "fin_tx_chom_25_49.geojson",                                      property: "fin_tx_chom_25_49" },
  { name: "Taux chomage 50 a 64 ans",                             file: "fin_tx_chom_50_64.geojson",                                      property: "fin_tx_chom_50_64" },
  { name: "Taux CPAS 18 a 24 ans",                                file: "tx_CPAS_18_24_2021.geojson",                                     property: "tx_CPAS_18_24_2021" },
  { name: "Taux GRAPA 65+",                                       file: "GRAPA_65+_2022.geojson",                                         property: "GRAPA_65+_2022" },

  // ---------------- Sociology ----------------
  { name: "Evolution Population 2012-2022 en %",                  file: "pop_evo_2012_2022.geojson",                                      property: "pop_tx_aug_2012_2022" },
  { name: "Total_Population_2014",                                 file: "merged_statsector_population_BX_only_2014_partialmatch.geojson", property: "Total_Population_2014" },
  { name: "Total_Population_2025",                                 file: "merged_statsector_population_BX_only_2025_partialmatch.geojson", property: "Total_Population_2025" },
  { name: "Population en 2022",                                    file: "pop_2022_ok.geojson",                                            property: "pop_nb_2022" },
  { name: "Solde migratoire interne",                              file: "pop_soldmig_intern.geojson",                                     property: "pop_soldmig_intern" },
  { name: "Solde migratoire international",                        file: "pop_soldmig_internat.geojson",                                   property: "pop_soldmig_internat" },
  { name: "Population Croissance Annuelle",                        file: "pop_croissance_an.geojson",                                      property: "pop_croissance_an" },
  { name: "Taux natalité",                                         file: "pop_tx_natalite.geojson",                                        property: "pop_tx_natalite" },
  { name: "Taux retard scolaire",                                  file: "ensign_retard_scol.geojson",                                     property: "ensign_retard_scol" },
  { name: "Densité de Population",                                 file: "hab_km2.geojson",                                                property: "hab/km2" },
  { name: "% Population agée de 18 à 64 ans",                     file: "pop_tx_agegroup_18_64_2022.geojson",                             property: "pop_tx_agegroup_18_64_2022" },
  { name: "% Population immigrée",                                 file: "pop_tx_immig_2022.geojson",                                      property: "pop_tx_immig_2022" },
  { name: "% Population immigrée UE",                              file: "pop_tx_immig_fromEU.geojson",                                    property: "pop_tx_immig_fromEU" },
  { name: "% Population immigrée UE14",                            file: "pop_tx_immig_fromEU14.geojson",                                  property: "pop_tx_immig_fromEU14" },
  { name: "% Population immigrée UE13",                            file: "pop_tx_immig_fromEU13.geojson",                                  property: "pop_tx_immig_fromEU13" },
  { name: "pop_tx_immig_resteEu+nonEU",                            file: "pop_tx_immig_resteEu+nonEU.geojson",                             property: "pop_tx_immig_resteEu+nonEU" },
  { name: "% Population immigrée nationalité étrangère naissance", file: "pop_tx_nationalite_etrg_alanaissance.geojson",                   property: "pop_tx_nationalite_etrg_alanaissance" },
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

function startPreload() {
  setTimeout(preloadThemes, 1000);
}

// ============================
// INITIALISATION CARTE
// ============================

var map = null;


function initMap() {
  if (map) return;
  map = L.map('map', { zoomControl: false }).setView([50.85, 4.35], 10);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    crossOrigin: true
  }).addTo(map);

  map.createPane('communesPane');
  map.getPane('communesPane').style.zIndex = 650;

  loadBaseLayer();

  setTimeout(() => map.invalidateSize(), 100);
  setTimeout(() => map.invalidateSize(), 500);
}


// ============================
// UTILITAIRES CARTE
// ============================

function pointInFeature(lat, lon, feature) {
  if (!feature || !feature.geometry) return false;
  try {
    const layer = L.geoJSON(feature);
    const bounds = layer.getBounds();
    if (!bounds.isValid()) return false;
    if (!bounds.contains([lat, lon])) return false;
    let inside = false;
    layer.eachLayer(l => {
      if (typeof l.contains === 'function' && l.contains([lat, lon])) inside = true;
      else if (l.getLatLngs) inside = inside || leafletRaycast([lat, lon], l);
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
  if (!data) return 'N/A';
  for (const f of data.features) {
    try {
      if (pointInFeature(lat, lon, f)) {
        const v = f.properties[theme.property];
        return v != null ? v : 'N/A';
      }
    } catch (e) { /* skip */ }
  }
  return 'N/A';
}

// ============================
// SCAN & SAVE — helpers
// ============================

// ── Overlay de progression ────────────────────────────────────
function showProgress(current, total, label) {
  let overlay = document.getElementById('scan-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'scan-overlay';
    overlay.innerHTML = `
      <div id="scan-box">
        <div id="scan-title">Scan & Save en cours…</div>
        <div id="scan-label"></div>
        <div id="scan-bar-wrap"><div id="scan-bar"></div></div>
        <div id="scan-counter"></div>
      </div>`;
    Object.assign(overlay.style, {
      position: 'fixed', inset: '0', background: 'rgba(0,0,0,.65)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: '99999', backdropFilter: 'blur(4px)'
    });
    const box = overlay.querySelector('#scan-box');
    Object.assign(box.style, {
      background: '#1a1a2e', border: '1px solid rgba(255,255,255,.12)',
      borderRadius: '16px', padding: '2rem 2.5rem', minWidth: '340px',
      color: '#fff', fontFamily: 'Inter,sans-serif', textAlign: 'center',
      boxShadow: '0 24px 60px rgba(0,0,0,.6)'
    });
    overlay.querySelector('#scan-title').style.cssText  = 'font-size:1rem;font-weight:600;margin-bottom:.8rem;';
    overlay.querySelector('#scan-label').style.cssText  = 'font-size:.78rem;color:rgba(255,255,255,.55);margin-bottom:1rem;min-height:1.2em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:300px;';
    const wrap = overlay.querySelector('#scan-bar-wrap');
    Object.assign(wrap.style, {
      height: '4px', background: 'rgba(255,255,255,.1)',
      borderRadius: '2px', overflow: 'hidden', marginBottom: '.7rem'
    });
    overlay.querySelector('#scan-bar').style.cssText    = 'height:100%;width:0%;background:#c8ff00;transition:width .25s;border-radius:2px;';
    overlay.querySelector('#scan-counter').style.cssText = 'font-size:.72rem;color:rgba(255,255,255,.35);';
    document.body.appendChild(overlay);
  }
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  overlay.querySelector('#scan-bar').style.width       = pct + '%';
  overlay.querySelector('#scan-label').textContent     = label || '';
  overlay.querySelector('#scan-counter').textContent   = `${current} / ${total} thèmes`;
}

function hideProgress() {
  const overlay = document.getElementById('scan-overlay');
  if (overlay) overlay.remove();
}

function waitForTiles(timeoutMs = 4000) {
  return new Promise(resolve => {
    const deadline = Date.now() + timeoutMs;
    const check = () => {
      const loading = document.querySelectorAll('.leaflet-tile-loading');
      if (loading.length === 0 || Date.now() >= deadline) {
        setTimeout(resolve, 300); // petit délai post-rendu
      } else {
        requestAnimationFrame(check);
      }
    };
    setTimeout(check, 200);
  });
}

// ── Appliquer un thème et attendre son rendu complet ─────────
function applyThemeAndWait(themeName) {
  return new Promise((resolve, reject) => {
    const theme = THEME_INDEX[themeName];
    if (!theme) return reject(new Error(`Thème inconnu : ${themeName}`));

    if (currentThemeLayer) {
      try { map.removeLayer(currentThemeLayer); } catch(e) {}
      currentThemeLayer = null;
    }
    activeTheme = themeName;

    const render = (data) => {
      themeCache[themeName] = data;
      try {
        currentThemeLayer = buildChoropleth(data, theme.property, themeName);
        currentThemeLayer.addTo(map);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTimeout(resolve, 800);
          });
        });
      } catch (e) { reject(e); }
    };

    if (themeCache[themeName]) {
      render(themeCache[themeName]);
    } else {
      fetch(theme.file)
        .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
        .then(render)
        .catch(err => {
          console.warn(`Chargement échoué : ${themeName}`, err);
          resolve();
        });
    }
  });
}

// ── Capture de la carte 

function captureMapClean() {
  return new Promise((resolve, reject) => {
    const markerPaneEl = map.getPane('markerPane');
    const shadowPaneEl = map.getPane('shadowPane');
    const prevMarker   = markerPaneEl ? markerPaneEl.style.display : '';
    const prevShadow   = shadowPaneEl ? shadowPaneEl.style.display : '';
    if (markerPaneEl) markerPaneEl.style.display = 'none';
    if (shadowPaneEl) shadowPaneEl.style.display = 'none';

    map.invalidateSize();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        leafletImage(map, (err, canvas) => {
          if (markerPaneEl) markerPaneEl.style.display = prevMarker;
          if (shadowPaneEl) shadowPaneEl.style.display = prevShadow;
          if (err) { reject(err); return; }
          resolve(canvas.toDataURL('image/png'));
        });
      });
    });
  });
}

// ── Export Excel ──────────────────────────────────────────────
function exportToExcel(rows) {
  const ws = XLSX.utils.json_to_sheet(rows);
  ws['!cols'] = [
    { wch: 55 }, // Theme
    { wch: 22 }, // Valeur
    { wch: 45 }, // Adresse
    { wch: 14 }, // Ville
    { wch: 22 }, // Timestamp
  ];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Scan Results');
  XLSX.writeFile(wb, 'scan-results.xlsx');
}

// ── Génération PDF — une page par thème ──────────────────────
function generatePDF(rows, screenshots) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const W   = doc.internal.pageSize.getWidth();   // 210
  const H   = doc.internal.pageSize.getHeight();  // 297
  const M   = 14;
  const ts  = rows[0]?.Timestamp || new Date().toLocaleString('fr-BE');
  const addr = rows[0]?.Adresse  || '—';

  // ── Page de couverture ──────────────────────────────────────
  doc.setFillColor(15, 15, 25);
  doc.rect(0, 0, W, H, 'F');

  // Bande accent
  doc.setFillColor(200, 255, 0);
  doc.rect(0, 0, 4, H, 'F');

  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(200, 255, 0);
  doc.text('Smart-In', M, 36);

  doc.setFontSize(13);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(220, 220, 220);
  doc.text('Rapport d\'analyse — Bruxelles', M, 45);

  doc.setDrawColor(200, 255, 0);
  doc.setLineWidth(0.4);
  doc.line(M, 50, W - M, 50);

  doc.setFontSize(9);
  doc.setTextColor(160, 160, 180);
  doc.text(`Adresse analysée :`, M, 60);
  doc.setTextColor(230, 230, 230);
  doc.setFont('helvetica', 'bold');
  doc.text(addr, M, 66);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(160, 160, 180);
  doc.text(`Date du scan :`, M, 76);
  doc.setTextColor(230, 230, 230);
  doc.text(ts, M, 82);

  doc.setTextColor(160, 160, 180);
  doc.text(`Nombre de thèmes scannés :`, M, 92);
  doc.setTextColor(200, 255, 0);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(String(rows.length), M, 100);

  // ── Une page par thème ──────────────────────────────────────
  rows.forEach((row, idx) => {
    doc.addPage();

    // Fond
    doc.setFillColor(18, 18, 28);
    doc.rect(0, 0, W, H, 'F');

    // Barre latérale accent
    doc.setFillColor(200, 255, 0);
    doc.rect(0, 0, 3, H, 'F');

    // En-tête
    doc.setFillColor(25, 25, 40);
    doc.rect(3, 0, W - 3, 24, 'F');

    // Numéro
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(120, 120, 140);
    doc.text(`${idx + 1} / ${rows.length}`, W - M, 8, { align: 'right' });

    // Nom du thème (avec troncature)
    const maxChars = 70;
    const themeLabel = String(row.Theme).length > maxChars
      ? String(row.Theme).slice(0, maxChars - 1) + '…'
      : String(row.Theme);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(200, 255, 0);
    doc.text(themeLabel, M, 10);

    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 120);
    doc.text(ts, M, 17);

    // Bloc valeur
    let y = 30;
    doc.setFillColor(30, 30, 50);
    doc.roundedRect(M, y, W - M * 2, 22, 3, 3, 'F');
    doc.setFillColor(200, 255, 0);
    doc.roundedRect(M, y, 3, 22, 1, 1, 'F');

    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(140, 140, 160);
    doc.text('VALEUR', M + 6, y + 7);

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(230, 230, 255);
    doc.text(String(row.Valeur ?? '—'), M + 6, y + 17);
    y += 28;

    // Bloc adresse
    doc.setFillColor(25, 25, 40);
    doc.roundedRect(M, y, W - M * 2, 18, 3, 3, 'F');

    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 120);
    doc.text('ADRESSE', M + 4, y + 6);
    doc.text('VILLE', M + (W - M * 2) / 2, y + 6);

    doc.setFontSize(8.5);
    doc.setTextColor(200, 200, 220);
    const addrDisplay = String(row.Adresse || '—');
    doc.text(addrDisplay.length > 40 ? addrDisplay.slice(0, 37) + '…' : addrDisplay, M + 4, y + 13);
    doc.text(String(row.Ville || 'Bruxelles'), M + (W - M * 2) / 2, y + 13);
    y += 24;

    // Screenshot
    const shot = screenshots[idx];
    if (shot) {
      try {
        const imgW  = W - M * 2;
        const imgH  = imgW * (9 / 16);
        // Cadre
        doc.setDrawColor(40, 40, 65);
        doc.setLineWidth(0.4);
        doc.roundedRect(M, y, imgW, imgH, 2, 2, 'S');
        doc.addImage(shot, 'PNG', M, y, imgW, imgH);
        y += imgH + 4;
      } catch (e) {
        doc.setFontSize(7.5);
        doc.setTextColor(100, 100, 120);
        doc.text('(capture carte non disponible)', M, y + 5);
        y += 10;
      }
    } else {
      doc.setFontSize(7.5);
      doc.setTextColor(100, 100, 120);
      doc.text('(capture carte non disponible)', M, y + 5);
      y += 10;
    }

    // Pied de page
    doc.setDrawColor(40, 40, 65);
    doc.setLineWidth(0.3);
    doc.line(M, H - 10, W - M, H - 10);
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(80, 80, 100);
    doc.text('Smart-In · scan-report.pdf', M, H - 5);
    doc.text(`Page ${idx + 2}`, W - M, H - 5, { align: 'right' });
  });

  doc.save('scan-report.pdf');
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
      try { if (layer.getBounds().contains([lat, lon])) found = layer; } catch (e) { /* skip */ }
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
      </div>`,
    iconSize:   [20, 20],
    iconAnchor: [10, 10]
  });
}

async function geocodeAddress(address) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    address + ', Brussels, Belgium'
  )}&limit=1`;
  try {
    const res  = await fetch(url, { headers: { 'Accept-Language': 'fr' } });
    const data = await res.json();
    if (!data.length) return null;
    return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
  } catch (err) {
    console.error('Erreur geocoding:', err);
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
    radius: 500, color: '#ff3b30', weight: 1,
    fillColor: '#ff3b30', fillOpacity: 0.08
  }).addTo(map);

  marker.bindTooltip(label);
  addressMarkers.push({ id, marker, circle500 });
  activeAddress = { lat, lon, text: label };
  activeSector  = getSectorFromLatlon([lat, lon]);

  setTimeout(() => {
    const closeBtn = document.querySelector(`.close[data-id="${id}"]`);
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        map.removeLayer(marker);
        map.removeLayer(circle500);
        addressMarkers = addressMarkers.filter(m => m.id !== id);
        if (addressMarkers.length === 0) { activeAddress = null; activeSector = null; }
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
  const levels = [0, ...breaks, 'max'];
  for (let i = 0; i < COLORS.length; i++) {
    html += `
      <div style="display:flex;align-items:center;margin-bottom:3px;">
        <span style="display:inline-block;width:18px;height:12px;background:${COLORS[i]};margin-right:8px;border:1px solid #ccc;flex-shrink:0;"></span>
        <span>${fmt(levels[i])} – ${fmt(levels[i + 1])}</span>
      </div>`;
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
      return { fillColor: getColor(v), weight: 1, color: '#333', fillOpacity: 0.6 };
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
// APPLIQUER UN THÈME (manuel)
// ============================

function applyTheme(themeName) {
  const theme = THEME_INDEX[themeName];
  if (!theme) { console.warn(`Thème inconnu : "${themeName}"`); return; }
  if (themeName.startsWith('///')) { alert(`Thème non disponible : ${themeName}`); return; }

  if (currentThemeLayer) { map.removeLayer(currentThemeLayer); currentThemeLayer = null; }
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
        alert(`Impossible de charger le thème "${themeName}".\nFichier : "${theme.file}"`);
      });
  }
}

// ============================
// COUCHE DE BASE
// ============================

function loadBaseLayer() {
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
    .catch(err => console.error('Erreur chargement shapefile:', err));
}

// ============================
// DOMContentLoaded
// ============================

document.addEventListener('DOMContentLoaded', () => {

  // ── Login ───────────────────────────────────────────────────
  const PASSWORD      = '1';
  const btnLogin      = document.getElementById('btn-login');
  const passwordInput = document.getElementById('password-input');
  const passwordCont  = document.getElementById('password-container');
  const mainApp       = document.getElementById('main-app');

  function doLogin(pwd) {
    if (pwd === PASSWORD || pwd === 'premium123') {
      if (passwordCont) passwordCont.style.display = 'none';
      if (mainApp)      mainApp.style.display       = 'flex';

      const contentCenter = document.getElementById('protected-content');
      const contentRight  = document.getElementById('protected-content2');
      if (contentCenter) { contentCenter.style.opacity = '1'; contentCenter.style.pointerEvents = 'auto'; }
      if (contentRight)  { contentRight.style.opacity  = '1'; contentRight.style.pointerEvents  = 'auto'; }

      requestAnimationFrame(() => {
        initMap();
        setTimeout(() => { if (map) map.invalidateSize(); }, 200);
        setTimeout(() => { if (map) map.invalidateSize(); }, 700);
      });

      startPreload();
    } else {
      alert('Mot de passe incorrect');
    }
  }

  if (btnLogin) btnLogin.addEventListener('click', () => doLogin(passwordInput ? passwordInput.value : ''));
  if (passwordInput) passwordInput.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(passwordInput.value); });

  // ── Message iframe ──────────────────────────────────────────
  window.addEventListener('message', (event) => {
    if (!event.data) return;
    if (event.data.type === 'unlock') doLogin(event.data.password);
    if (event.data.type === 'cityClick' && event.data.city === 'Brussels') map.setView([50.85, 4.35], 10);
  });

  // ── Adresse ─────────────────────────────────────────────────
  addressInput = document.getElementById('address-input');
  if (addressInput) {
    addressInput.addEventListener('keydown', async (e) => {
      if (e.key !== 'Enter') return;
      const value = addressInput.value.trim();
      if (!value) return;
      if (addressMarkers.length >= MAX_ADDRESS_MARKERS) { alert('Maximum 3 marqueurs atteint'); return; }
      const result = await geocodeAddress(value);
      if (!result) { alert('Adresse introuvable à Bruxelles'); return; }
      addAddressMarker(result.lat, result.lon, value);
      addressInput.value = '';
    });
  }

  // ── Zoom / Centre ───────────────────────────────────────────
  const btnZoomIn  = document.getElementById('zoom-in');
  const btnZoomOut = document.getElementById('zoom-out');
  const btnCenter  = document.getElementById('btn-center');
  if (btnZoomIn)  btnZoomIn.addEventListener('click',  () => map.zoomIn());
  if (btnZoomOut) btnZoomOut.addEventListener('click', () => map.zoomOut());
  if (btnCenter)  btnCenter.addEventListener('click',  () => map.setView([50.85, 4.35], 10));

  // ── Toggle polygones ────────────────────────────────────────
  const btnToggle = document.getElementById('btn-toggle');
  if (btnToggle) {
    btnToggle.addEventListener('click', function () {
      if (!bruxellesLayer) return;
      if (polygonsOn) { map.removeLayer(bruxellesLayer); polygonsOn = false; this.innerText = 'Polygones OFF'; }
      else            { bruxellesLayer.addTo(map);        polygonsOn = true;  this.innerText = 'Polygones ON'; }
    });
  }

  // ── Filters OFF ─────────────────────────────────────────────
  const btnFiltersOff = document.getElementById('btn-filters-off');
  if (btnFiltersOff) {
    btnFiltersOff.addEventListener('click', () => {
      if (currentThemeLayer) { map.removeLayer(currentThemeLayer); currentThemeLayer = null; }
      activeTheme = null;
      if (bruxellesLayer && !map.hasLayer(bruxellesLayer)) bruxellesLayer.addTo(map);
      const fc = document.getElementById('filters-content');
      if (fc) fc.innerHTML = 'choose a theme';
      polygonsOn = true;
      if (btnToggle) btnToggle.innerText = 'Polygones ON';
      const legendDiv = document.querySelector('.legend');
      if (legendDiv) legendDiv.innerHTML = '';
      document.querySelectorAll('.theme-submenu div').forEach(i => i.classList.remove('selected'));
      map.setView([50.85, 4.35], 10);
    });
  }

  // ── Dropdowns ───────────────────────────────────────────────
  function toggleDropdown(btnId, dropdownId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', () => {
      const dd = document.getElementById(dropdownId);
      if (!dd) return;
      ['city-dropdown', 'theme-dropdown', 'filters-dropdown'].forEach(id => {
        if (id !== dropdownId) { const o = document.getElementById(id); if (o) o.style.display = 'none'; }
      });
      dd.style.display = dd.style.display === 'flex' ? 'none' : 'flex';
    });
  }
  toggleDropdown('btn-city',    'city-dropdown');
  toggleDropdown('btn-theme',   'theme-dropdown');
  toggleDropdown('btn-filters', 'filters-dropdown');

  // ── Info panel ──────────────────────────────────────────────
  const btnInfo = document.getElementById('btn-info');
  if (btnInfo) {
    btnInfo.addEventListener('click', () => {
      const panel = document.getElementById('info-panel');
      if (panel) panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // ── Accordéon thèmes ────────────────────────────────────────
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

  // ── Clic sur un thème ───────────────────────────────────────
  document.querySelectorAll('.theme-submenu div[data-theme]').forEach(item => {
    item.addEventListener('click', function (e) {
      e.stopPropagation();
      document.querySelectorAll('.theme-submenu div').forEach(i => i.classList.remove('selected'));
      this.classList.add('selected');
      applyTheme(this.dataset.theme);
      const dd = document.getElementById('theme-dropdown');
      if (dd) dd.style.display = 'none';
    });
  });

  // ── City dropdown ───────────────────────────────────────────
  document.querySelectorAll('#city-dropdown div[data-city]').forEach(item => {
    item.addEventListener('click', function () {
      document.querySelectorAll('#city-dropdown div').forEach(i => i.classList.remove('selected'));
      this.classList.add('selected');
      const dd = document.getElementById('city-dropdown');
      if (dd) dd.style.display = 'none';
      if (this.dataset.city !== 'Bruxelles') alert(`${this.dataset.city} — Coming Soon`);
    });
  });

  // ── SCAN & SAVE ─────────────────────────────────────────────
  const btnScanSave = document.getElementById('btn-scan-save');
  if (btnScanSave) {
    btnScanSave.addEventListener('click', async () => {

      const themes    = ALL_THEMES.filter(t => !t.name.startsWith('///'));
      const total     = themes.length;
      const timestamp = new Date().toLocaleString('fr-BE');
      const hasAddr   = !!activeAddress;
      const addrText  = activeAddress?.text || '';
      const lat       = activeAddress?.lat  ?? null;
      const lon       = activeAddress?.lon  ?? null;

      // Désactiver tous les boutons pendant le scan
      document.querySelectorAll('button').forEach(b => { b.disabled = true; });
      showProgress(0, total, 'Initialisation…');

      const excelRows   = [];
      const screenshots = [];

      try {
for (let i = 0; i < themes.length; i++) {
          const theme = themes[i];
          showProgress(i, total, theme.name);

          // 1. Charger et afficher le thème (attend rendu complet)
          try {
            await applyThemeAndWait(theme.name);
          } catch (e) {
            console.warn(`Thème ignoré (erreur) : ${theme.name}`, e);
            if (currentThemeLayer) {
              try { map.removeLayer(currentThemeLayer); } catch(_) {}
              currentThemeLayer = null;
            }
          }

          // 2. Délai supplémentaire tuiles + SVG
          await sleep(600);

          // 3. Valeur pour l'adresse
          let value = 'N/A';
          if (hasAddr && lat !== null && lon !== null) {
            value = getValueFromTheme(theme, lat, lon);
          } else if (themeCache[theme.name]) {
            value = '(global — aucune adresse sélectionnée)';
          }

          // 4. Capture
          let shot = null;
          try {
            shot = await captureMapClean();
          } catch (e) {
            console.warn(`Screenshot échoué : ${theme.name}`, e);
          }

          excelRows.push({
            Theme:     theme.name,
            Valeur:    value,
            Adresse:   addrText,
            Ville:     'Bruxelles',
            Timestamp: timestamp
          });
          screenshots.push(shot);

          showProgress(i + 1, total, theme.name);
        }

        // 5. Export Excel
        showProgress(total, total, 'Export Excel…');
        await sleep(80);
        exportToExcel(excelRows);

        // 6. Export PDF
        showProgress(total, total, 'Génération PDF…');
        await sleep(80);
        generatePDF(excelRows, screenshots);

        hideProgress();
        alert(`✅ Scan terminé — ${total} thèmes analysés.\nscan-results.xlsx et scan-report.pdf téléchargés.`);

      } catch (err) {
        hideProgress();
        console.error('Scan & Save — erreur fatale :', err);
        alert('Erreur inattendue : ' + err.message);
      } finally {
        document.querySelectorAll('button').forEach(b => { b.disabled = false; });
      }
    });
  }

  // ── Resize ──────────────────────────────────────────────────
  window.addEventListener('resize', () => setTimeout(() => map.invalidateSize(), 200));

  window._map = map;
});
