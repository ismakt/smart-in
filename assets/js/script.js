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
// Les clés "name" correspondent EXACTEMENT aux data-theme du HTML
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
  { name: "Vols_2024",                                    file: "zp_crime_type_vol_2024_bx_geofile.geojson",                                property: "vol" },
  { name: "Vols_2014",                                    file: "zp_crime_type_vol_2014_bx_geofile.geojson",                                property: "vol" },
  { name: "Vols_2000",                                    file: "zp_crime_type_vol_2000_bx_geofile.geojson",                                property: "vol" },
  { name: "coups_blessures_2024",                         file: "zp_crime_type_coups_blessures_2024_bx_geofile.geojson",                    property: "coups_blessures" },
  { name: "coups_blessures_2014",                         file: "zp_crime_type_coups_blessures_2014_bx_geofile.geojson",                    property: "coups_blessures" },
  { name: "coups_blessures_2000",                         file: "zp_crime_type_coups_blessures_2000_bx_geofile.geojson",                    property: "coups_blessures" },
  { name: "drogues_2024",                                 file: "zp_crime_type_drogues_2024_bx_geofile.geojson",                            property: "drogues" },
  { name: "drogues_2014",                                 file: "zp_crime_type_drogues_2014_bx_geofile.geojson",                            property: "drogues" },
  { name: "drogues_2000",                                 file: "zp_crime_type_drogues_2000_bx_geofile.geojson",                            property: "drogues" },
  { name: "alcool_2024",                                  file: "zp_crime_type_alcool_2024_bx_geofile.geojson",                             property: "alcool" },
  { name: "alcool_2014",                                  file: "zp_crime_type_alcool_2014_bx_geofile.geojson",                             property: "alcool" },
  { name: "alcool_2000",                                  file: "zp_crime_type_alcool_2000_bx_geofile.geojson",                             property: "alcool" },
  { name: "armes_2024",                                   file: "zp_crime_type_armes_2024_bx_geofile.geojson",                              property: "armes" },
  { name: "armes_2014",                                   file: "zp_crime_type_armes_2014_bx_geofile.geojson",                              property: "armes" },
  { name: "armes_2000",                                   file: "zp_crime_type_armes_2000_bx_geofile.geojson",                              property: "armes" },
  { name: "secu_publiq_2024",                             file: "zp_crime_type_secu_publiq_2024_bx_geofile.geojson",                        property: "secu_publiq" },
  { name: "secu_publiq_2014",                             file: "zp_crime_type_secu_publiq_2014_bx_geofile.geojson",                        property: "secu_publiq" },
  { name: "secu_publiq_2000",                             file: "zp_crime_type_secu_publiq_2000_bx_geofile.geojson",                        property: "secu_publiq" },
  { name: "degradat_prop_2024",                           file: "zp_crime_type_degradat_prop_2024_bx_geofile.geojson",                      property: "degradat_prop" },
  { name: "degradat_prop_2014",                           file: "zp_crime_type_degradat_prop_2014_bx_geofile.geojson",                      property: "degradat_prop" },
  { name: "degradat_prop_2000",                           file: "zp_crime_type_degradat_prop_2000_bx_geofile.geojson",                      property: "degradat_prop" },
  { name: "Cambriolages_2024",                            file: "zp_crime_type_cambriolage_2024_bx_geofile.geojson",                        property: "cambriolage" },
  { name: "Cambriolages_2014",                            file: "zp_crime_type_cambriolage_2014_bx_geofile.geojson",                        property: "cambriolage" },
  { name: "Cambriolages_2000",                            file: "zp_crime_type_cambriolage_2000_bx_geofile.geojson",                        property: "cambriolage" },

  // ---------------- Espaces verts ----------------
  { name: "Taux vegetation",                              file: "eco_tx_veget.geojson",                                                     property: "eco_tx_veget" },
  { name: "Taux espaces verts accessibles public",        file: "eco_tx_espacevert_accesspublic.geojson",                                   property: "eco_tx_espacevert_accesspublic" },

  // ---------------- Economics - Niveau de vie ----------------
  { name: "Avg_Revenue_2023",                             file: "merged_statsector_revenue_BX_only_2023_partialmatch.geojson",              property: "MS_AVG_TOT_NET_TAXABLE_INC" },
  { name: "Revenu Médian",                                file: "fin_med_rev.geojson",                                                      property: "fin_med_rev" },
  { name: "Taux naissances sans revenu de travail",       file: "fin_tx_births_noworkrevenue.geojson",                                      property: "fin_tx_births_noworkrevenue" },
  { name: "Taux naissances meres etrangeres",             file: "fin_tx_naissances_mere_etrang.geojson",                                    property: "fin_tx_naissances_mere_etrang" },

  // ---------------- Economics - Emploi ----------------
  { name: "Taux emploi",                                  file: "fin_tx_emploi.geojson",                                                    property: "fin_tx_emploi" },
  { name: "Taux emploi 15 à 24 ans",                      file: "fin_tx_emploi_15_24.geojson",                                              property: "fin_tx_emploi_15_24" },
  { name: "Taux emploi 25 à 49 ans",                      file: "fin_tx_emploi_25_49.geojson",                                              property: "fin_tx_emploi_25_49" },
  { name: "Taux emploi 50 à 64 ans",                      file: "fin_tx_emploi_50_64.geojson",                                              property: "fin_tx_emploi_50_64" },
  { name: "Taux salariés",                                file: "fin_tx_sal.geojson",                                                       property: "fin_tx_sal" },
  { name: "Taux indépendants",                            file: "fin_tx_indep.geojson",                                                     property: "fin_tx_indep" },
  { name: "Taux ouvriers",                                file: "fin_tx_ouvr.geojson",                                                      property: "fin_tx_ouvr" },
  { name: "Taux employés",                                file: "fin_tx_employee.geojson",                                                  property: "fin_tx_employee" },
  { name: "Emplois Institutions Internationales",         file: "fin_nb_internat_instit_jobs.geojson",                                      property: "fin_nb_internat_instit_jobs" },
  { name: "Taux fonctionnaires",                          file: "fin_tx_fonct.geojson",                                                     property: "fin_tx_fonct" },

  // ---------------- Economics - Entreprises ----------------
  { name: "Secteurs economiques majeures",                file: "caract_economiq.geojson",                                                  property: "caract_economiq" },
  { name: "Sieges sociaux",                               file: "fin_soc_siege.geojson",                                                    property: "fin_soc_siege" },
  { name: "Etablissements",                               file: "fin_nb_etabls.geojson",                                                    property: "fin_nb_etabls" },
  { name: "Solde migration entreprises 2009 a 2020",      file: "fin_soldmig_firms_total_2009_2020.geojson",                                property: "fin_soldmig_firms_total_2009_2020" },
  { name: "Solde migration entreprises 2009 a 2020 Horeca",         file: "fin_soldmig_2009_2020_horeca.geojson",                          property: "fin_soldmig_2009_2020_horeca" },
  { name: "Solde migration entreprises 2009 a 2020 commerce detail", file: "fin_soldmig_2009_2020_commrcdetail.geojson",                   property: "fin_soldmig_2009_2020_commrcdetail" },
  { name: "Solde migration entreprises 2009 a 2020 IT",             file: "fin_soldmig_2009_2020_IT.geojson",                              property: "fin_soldmig_2009_2020_IT" },
  { name: "Solde migration entreprises 2009 a 2020 RBC",            file: "fin_soldmig_RBC_2009_2022.geojson",                             property: "fin_soldmig_RBC_2009_2022" },
  { name: "Solde migration entreprises 2009 a 2020 Régions",        file: "fin_soldmig_ firms_Wal_Flan_2009_2022.geojson",                 property: "fin_soldmig_firms_Wal_Flan_2009_2022" },

  // ---------------- Economics - Difficultés sociales ----------------
  { name: "Taux chomage",                                 file: "fin_tx_chomg.geojson",                                                     property: "fin_tx_chomg" },
  { name: "Taux chomage LD",                              file: "fin_tx_chom_longduree.geojson",                                            property: "fin_tx_chom_longduree" },
  { name: "Taux chomage 15 a 24 ans",                     file: "fin_15_24yo_tx_chom.geojson",                                              property: "fin_15_24yo_tx_chom" },
  { name: "Taux chomage 25 a 49 ans",                     file: "fin_tx_chom_25_49.geojson",                                                property: "fin_tx_chom_25_49" },
  { name: "Taux chomage 50 a 64 ans",                     file: "fin_tx_chom_50_64.geojson",                                                property: "fin_tx_chom_50_64" },
  { name: "Taux CPAS 18 a 24 ans",                        file: "tx_CPAS_18_24_2021.geojson",                                               property: "tx_CPAS_18_24_2021" },
  { name: "Taux GRAPA 65+",                               file: "GRAPA_65+_2022.geojson",                                                   property: "GRAPA_65+_2022" },

  // ---------------- Sociology - Evolutions ----------------
  { name: "Evolution Population 2012-2022 en %",          file: "pop_evo_2012_2022.geojson",                                                property: "pop_tx_aug_2012_2022" },
  { name: "Total_Population_2014",                        file: "merged_statsector_population_BX_only_2014_partialmatch.geojson",           property: "Total_Population_2014" },
  { name: "Total_Population_2025",                        file: "merged_statsector_population_BX_only_2025_partialmatch.geojson",           property: "Total_Population_2025" },
  { name: "Population en 2022",                           file: "pop_2022_ok.geojson",                                                      property: "pop_nb_2022" },
  { name: "Solde migratoire interne",                     file: "pop_soldmig_intern.geojson",                                               property: "pop_soldmig_intern" },
  { name: "Solde migratoire international",               file: "pop_soldmig_internat.geojson",                                             property: "pop_soldmig_internat" },
  { name: "Population Croissance Annuelle",               file: "pop_croissance_an.geojson",                                                property: "pop_croissance_an" },
  { name: "Taux natalité",                                file: "pop_tx_natalite.geojson",                                                  property: "pop_tx_natalite" },
  { name: "Taux retard scolaire",                         file: "ensign_retard_scol.geojson",                                               property: "ensign_retard_scol" },
  { name: "Densité de Population",                        file: "hab_km2.geojson",                                                          property: "hab/km2" },

  // ---------------- Sociology - Composition sociale ----------------
  { name: "% Population agée de 18 à 64 ans",             file: "pop_tx_agegroup_18_64_2022.geojson",                                       property: "pop_tx_agegroup_18_64_2022" },
  { name: "% Population immigrée",                        file: "pop_tx_immig_2022.geojson",                                                property: "pop_tx_immig_2022" },
  { name: "% Population immigrée UE",                     file: "pop_tx_immig_fromEU.geojson",                                              property: "pop_tx_immig_fromEU" },
  { name: "% Population immigrée UE14",                   file: "pop_tx_immig_fromEU14.geojson",                                            property: "pop_tx_immig_fromEU14" },
  { name: "% Population immigrée UE13",                   file: "pop_tx_immig_fromEU13.geojson",                                            property: "pop_tx_immig_fromEU13" },
  { name: "pop_tx_immig_resteEu+nonEU",                   file: "pop_tx_immig_resteEu+nonEU.geojson",                                       property: "pop_tx_immig_resteEu+nonEU" },
  { name: "% Population immigrée nationalité étrangère naissance", file: "pop_tx_nationalite_etrg_alanaissance.geojson",                   property: "pop_tx_nationalite_etrg_alanaissance" },

  // ---------------- Sociology - Origines ----------------
  { name: "% Roumains",    file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_roum_2022" },
  { name: "% Marocains",   file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_maroc_2022" },
  { name: "% Syrie",       file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_syrie_2022" },
  { name: "% Francais",    file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_fr_2022" },
  { name: "% Inde",        file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_inde_2022" },
  { name: "% Turc",        file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_turc_2022" },
  { name: "% Italie",      file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_it_2022" },
  { name: "% Portugal",    file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_portugal_2022" },
  { name: "% Espagne",     file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_es_2022" },
  { name: "% Pologne",     file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_pl_2022" },
  { name: "% Bresil",      file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_bresil_2022" },
  { name: "% Allemagne",   file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_al_2022" },
  { name: "% RDC",         file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_rdc_2022" },
  { name: "% Bulgarie",    file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_boulg_2022" },
  { name: "% Japon",       file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_jap_2022" },
  { name: "% Grece",       file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_grece_2022" },
  { name: "% NL",          file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_nl_2022" },
  { name: "% Moldovie",    file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_mold_2022" },
  { name: "% UK",          file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_uk_2022" },
  { name: "% Guinee",      file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_guinee_2022" }
];

// Index rapide name → theme object
const THEME_INDEX = {};
ALL_THEMES.forEach(t => { THEME_INDEX[t.name] = t; });

// ============================
// CACHE DES THEMES
// ============================

const themeCache = {};

async function preloadThemes() {
  for (const theme of ALL_THEMES) {
    // Ne pas précharger les thèmes placeholder (///)
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

preloadThemes();

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
// FONCTIONS UTILITAIRES
// ============================

function getValueFromTheme(theme, lat, lon) {
  const data = themeCache[theme.name];
  if (!data) return "N/A";

  for (const f of data.features) {
    try {
      const layer = L.geoJSON(f);
      if (layer.getBounds().contains([lat, lon])) {
        return f.properties[theme.property] ?? "N/A";
      }
    } catch (e) {
      // feature sans bounds valides (ex: point)
    }
  }
  return "N/A";
}

async function captureMap() {
  const mapElement = document.getElementById("map");
  const canvas = await html2canvas(mapElement, { useCORS: true });
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
  doc.text(`Address: ${results[0].address}`, 10, y);
  y += 10;

  screenshots.forEach((item) => {
    if (y > 250) { doc.addPage(); y = 10; }
    doc.text(`Theme: ${item.theme}`, 10, y); y += 5;
    doc.text(`Value: ${item.value}`, 10, y); y += 5;
    doc.addImage(item.img, "PNG", 10, y, 180, 100); y += 110;
  });

  doc.save("scan_report.pdf");
}

// ============================
// FONCTIONS CARTE
// ============================

function getSectorFromLatlon([lat, lon]) {
  if (!bruxellesLayer) return null;
  let found = null;
  bruxellesLayer.eachLayer(layer => {
    if (layer.feature && layer.getBounds().contains([lat, lon])) {
      found = layer;
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

  // Formater les nombres
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
    console.warn(`Aucune valeur numérique trouvée pour la propriété "${property}"`);
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
      return {
        fillColor: getColor(v),
        weight: 1,
        color: "#333",
        fillOpacity: 0.6
      };
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
// CHARGER UN THÈME SUR LA CARTE
// ============================

function applyTheme(themeName) {
  const theme = THEME_INDEX[themeName];
  if (!theme) {
    console.warn(`Thème inconnu : "${themeName}"`);
    return;
  }

  // Thèmes placeholder (données pas encore disponibles)
  if (themeName.startsWith('///')) {
    alert(`Ce thème n'est pas encore disponible : ${themeName}`);
    return;
  }

  // Supprimer le thème précédent
  if (currentThemeLayer) {
    map.removeLayer(currentThemeLayer);
    currentThemeLayer = null;
  }

  activeTheme = themeName;

  // Utiliser le cache si disponible, sinon fetch
  if (themeCache[themeName]) {
    currentThemeLayer = buildChoropleth(themeCache[themeName], theme.property, themeName);
    currentThemeLayer.addTo(map);
  } else {
    fetch(theme.file)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status} — fichier introuvable : ${theme.file}`);
        return res.json();
      })
      .then(data => {
        themeCache[themeName] = data;
        currentThemeLayer = buildChoropleth(data, theme.property, themeName);
        currentThemeLayer.addTo(map);
      })
      .catch(err => {
        console.error(`Erreur chargement thème "${themeName}":`, err);
        alert(`Impossible de charger le thème "${themeName}".\nVérifiez que le fichier "${theme.file}" existe.`);
      });
  }
}

// ============================
// CHARGEMENT COUCHE DE BASE
// ============================

fetch('shapefile_BX_only_geojson_4326.geojson')
  .then(res => res.json())
  .then(data => {
    bruxellesLayer = L.geoJSON(data, {
      pane: 'communesPane',
      style: () => ({
        color: '#000',
        weight: 2,
        fillColor: 'none',
        fillOpacity: 0
      }),
      onEachFeature: (feature, layer) => {
        layer.bindTooltip(
          Object.entries(feature.properties)
            .slice(0, 5)
            .map(([k, v]) => `${k}: ${v}`)
            .join('<br>')
        );
      }
    }).addTo(map);

    map.fitBounds(bruxellesLayer.getBounds());
  })
  .catch(err => console.error("Erreur chargement shapefile:", err));

// ============================
// DOM CONTENT LOADED
// ============================

document.addEventListener('DOMContentLoaded', () => {

  // --- Input adresse ---
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
      if (!result) {
        alert('Adresse introuvable à Bruxelles');
        return;
      }

      addAddressMarker(result.lat, result.lon, value);
      addressInput.value = '';
    });
  }

  // --- Zoom ---
  const btnZoomIn = document.getElementById('zoom-in');
  const btnZoomOut = document.getElementById('zoom-out');
  if (btnZoomIn) btnZoomIn.addEventListener('click', () => map.zoomIn());
  if (btnZoomOut) btnZoomOut.addEventListener('click', () => map.zoomOut());

  // --- Centrer ---
  const btnCenter = document.getElementById('btn-center');
  if (btnCenter) btnCenter.addEventListener('click', () => map.setView([50.85, 4.35], 10));

  // --- Toggle polygones ---
  const btnToggle = document.getElementById('btn-toggle');
  if (btnToggle) {
    btnToggle.addEventListener('click', function () {
      if (!bruxellesLayer) return;
      if (polygonsOn) {
        map.removeLayer(bruxellesLayer);
        polygonsOn = false;
        this.classList.add('secondary');
        this.innerText = 'Polygones OFF';
      } else {
        bruxellesLayer.addTo(map);
        polygonsOn = true;
        this.classList.remove('secondary');
        this.innerText = 'Polygones ON';
      }
    });
  }

  // --- Filters OFF ---
  const btnFiltersOff = document.getElementById('btn-filters-off');
  if (btnFiltersOff) {
    btnFiltersOff.addEventListener('click', () => {
      if (currentThemeLayer) {
        map.removeLayer(currentThemeLayer);
        currentThemeLayer = null;
      }
      activeTheme = null;

      if (bruxellesLayer && !map.hasLayer(bruxellesLayer)) {
        bruxellesLayer.addTo(map);
      }

      const filtersContent = document.getElementById('filters-content');
      if (filtersContent) filtersContent.innerHTML = 'choose a theme';

      polygonsOn = true;
      if (btnToggle) {
        btnToggle.classList.remove('secondary');
        btnToggle.innerText = 'Polygones ON';
      }

      const legendDiv = document.querySelector('.legend');
      if (legendDiv) legendDiv.innerHTML = '';

      // Désélectionner tous les items
      document.querySelectorAll('.theme-submenu div').forEach(i => i.classList.remove('selected'));

      map.setView([50.85, 4.35], 10);
    });
  }

  // --- Dropdowns toggles ---
  function toggleDropdown(btnId, dropdownId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', () => {
      const dd = document.getElementById(dropdownId);
      if (!dd) return;
      dd.style.display = dd.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  toggleDropdown('btn-city', 'city-dropdown');
  toggleDropdown('btn-theme', 'theme-dropdown');
  toggleDropdown('btn-filters', 'filters-dropdown');

  // --- Info panel ---
  const btnInfo = document.getElementById('btn-info');
  if (btnInfo) {
    btnInfo.addEventListener('click', () => {
      const panel = document.getElementById('info-panel');
      if (panel) {
        panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
      }
    });
  }

  // --- Accordéon groupes de thèmes ---
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

  // --- Sélection et chargement d'un thème ---
  // C'est ici que le clic sur un item du submenu charge effectivement le GeoJSON sur la carte
  document.querySelectorAll('.theme-submenu div[data-theme]').forEach(item => {
    item.addEventListener('click', function (e) {
      e.stopPropagation();

      // Highlight sélection
      document.querySelectorAll('.theme-submenu div').forEach(i => i.classList.remove('selected'));
      this.classList.add('selected');

      const themeName = this.dataset.theme;

      // Charger le thème sur la carte
      applyTheme(themeName);
    });
  });

  // --- Scan & Save ---
  const btnScanSave = document.getElementById('btn-scan-save');
  if (btnScanSave) {
    btnScanSave.addEventListener('click', async () => {
      try {
        if (!activeAddress) {
          alert("Veuillez saisir une adresse d'abord");
          return;
        }

        const results = [];
        const screenshots = [];

        for (const theme of ALL_THEMES) {
          if (theme.name.startsWith('///')) continue;

          await new Promise(r => setTimeout(r, 500));

          const value = getValueFromTheme(theme, activeAddress.lat, activeAddress.lon);
          const screenshot = await captureMap();

          results.push({
            address: activeAddress.text,
            lat: activeAddress.lat,
            lon: activeAddress.lon,
            theme: theme.name,
            value: value
          });

          screenshots.push({ theme: theme.name, img: screenshot, value: value });
        }

        exportToExcel(results);
        generatePDF(results, screenshots);

        alert("Scan & Save terminé avec succès");

      } catch (err) {
        console.error(err);
        alert("Erreur lors du Scan & Save");
      }
    });
  }

  // --- Resize ---
  window.addEventListener('resize', () => setTimeout(() => map.invalidateSize(), 200));

  window._map = map;

  map.whenReady(() => {
    const controls = document.querySelector('.leaflet-control-container');
    const wrapper = document.querySelector('.map-wrapper');
    if (controls && wrapper) wrapper.appendChild(controls);
  });

});

// ============================
// UNLOCK INTERNE (global)
// ============================

window.unlockInternal = function () {
  const keyInput = document.getElementById("internalKey");
  if (!keyInput) return;

  const PASSWORD = "1";
  const granted = keyInput.value === PASSWORD;

  const contentCenter = document.getElementById("protected-content");
  const contentRight = document.getElementById("protected-content2");
  const message = document.getElementById("internal-message");

  if (contentCenter) {
    contentCenter.style.opacity = granted ? "1" : "0";
    contentCenter.style.pointerEvents = granted ? "auto" : "none";
  }
  if (contentRight) {
    contentRight.style.opacity = granted ? "1" : "0";
    contentRight.style.pointerEvents = granted ? "auto" : "none";
  }
  if (message) {
    message.textContent = granted ? "Access granted" : "Invalid key";
    message.style.color = granted ? "green" : "red";
  }
};
