// ============================
// VARIABLES GLOBALES
// ============================

let addressMarkers = [];
let activeAddress = null;
let currentTheme = null;
let activeSector = null;
let addressInput;
const MAX_ADDRESS_MARKERS = 3;

// GeoJSON layers
var bruxellesLayer;
var currentThemeLayer;
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
  { legendType: "auto", name: "Total sales 2013-2024", file: "merge_total_sales_2013_2024_BX_only_with_geofile.geojson", property: "total_sales_2013_2024" },
  { legendType: "auto", name: "2-3 facades houses total sales 2013-2024", file: "merge_sales_2_3_facades_BX_only_with_geofile.geojson", property: "total_sales" },
  { legendType: "auto", name: "4 or plus facades houses total sales 2013-2024", file: "merge_sales_4_or_plus_facades_BX_only_with_geofile.geojson", property: "total_sales" },
  { legendType: "auto", name: "apartments total sales 2013-2024", file: "merge_apartments_BX_only_with_geofile.geojson", property: "total_sales" },
  { legendType: "auto", name: "Appartements vendus 2011", file: "immo_nb_appart_sales_2011.geojson", property: "total_sales" },
  { legendType: "auto", name: "Appartements vendus 2021", file: "immo_nb_appart_sales_2021.geojson", property: "total_sales" },
  { legendType: "auto", name: "Maisons vendus 2011", file: "immo_nb_houses_sales_2011.geojson", property: "total_sales" },
  { legendType: "auto", name: "Maisons vendus 2021", file: "immo_nb_houses_sales_2021.geojson", property: "total_sales" },

  // ---------------- Immobilier - Prices ----------------
  { legendType: "auto", name: "median sale price 2013", file: "merge_sales_median_2013_BX_only_with_geofile.geojson", property: "MS_P50 (MEDIAN_PRICE)" },
  { legendType: "auto", name: "median sale price 2023", file: "merge_sales_median_2023_BX_only_with_geofile.geojson", property: "MS_P50 (MEDIAN_PRICE)" },
  { legendType: "auto", name: "median sale price apartment 2013", file: "merge_sales_median_apartment_2013_BX_only_with_geofile.geojson", property: "MS_P50 (MEDIAN_PRICE)" },
  { legendType: "auto", name: "median sale price apartment 2023", file: "merge_sales_median_apartment_2023_BX_only_with_geofile.geojson", property: "MS_P50 (MEDIAN_PRICE)" },

  { legendType: "auto", name: "MS_P10_2013", file: "merge_sales_ms_p10_2013_BX_only_with_geofile.geojson", property: "MS_P10" },
  { legendType: "auto", name: "MS_P10_2023", file: "merge_sales_ms_p10_2023_BX_only_with_geofile.geojson", property: "MS_P10" },
  { legendType: "auto", name: "MS_P25_2013", file: "merge_sales_ms_p25_2013_BX_only_with_geofile.geojson", property: "MS_P25" },
  { legendType: "auto", name: "MS_P25_2023", file: "merge_sales_ms_p25_2023_BX_only_with_geofile.geojson", property: "MS_P25" },
  { legendType: "auto", name: "MS_P75_2013", file: "merge_sales_ms_p75_2013_BX_only_with_geofile.geojson", property: "MS_P75" },
  { legendType: "auto", name: "MS_P75_2023", file: "merge_sales_ms_p75_2023_BX_only_with_geofile.geojson", property: "MS_P75" },
  { legendType: "auto", name: "MS_P90_2013", file: "merge_sales_ms_p90_2013_BX_only_with_geofile.geojson", property: "MS_P90" },
  { legendType: "auto", name: "MS_P90_2023", file: "merge_sales_ms_p90_2023_BX_only_with_geofile.geojson", property: "MS_P90" },

  { legendType: "auto", name: "MS_P10_2013_all_houses", file: "merge_sales_ms_p10_2013_BX_only_with_geofile_all_houses.geojson", property: "MS_P10" },
  { legendType: "auto", name: "MS_P10_2013_apartments", file: "merge_sales_ms_p10_2013_BX_only_with_geofile_Appartements.geojson", property: "MS_P10" },
  { legendType: "auto", name: "MS_P10_2023_all_houses", file: "merge_sales_ms_p10_2023_BX_only_with_geofile_all_houses.geojson", property: "MS_P10" },
  { legendType: "auto", name: "MS_P10_2023_apartments", file: "merge_sales_ms_p10_2023_BX_only_with_geofile_apartments.geojson", property: "MS_P10" },

  { legendType: "auto", name: "MS_P25_2013_all_houses", file: "merge_sales_ms_p25_2013_BX_only_with_geofile_all_houses.geojson", property: "MS_P25" },
  { legendType: "auto", name: "MS_P25_2013_apartments", file: "merge_sales_ms_p25_2013_BX_only_with_geofile_Appartements.geojson", property: "MS_P25" },
  { legendType: "auto", name: "MS_P25_2023_all_houses", file: "merge_sales_ms_p25_2023_BX_only_with_geofile_all_houses.geojson", property: "MS_P25" },
  { legendType: "auto", name: "MS_P25_2023_apartments", file: "merge_sales_ms_p25_2023_BX_only_with_geofile_apartments.geojson", property: "MS_P25" },

  { legendType: "auto", name: "MS_P75_2013_all_houses", file: "merge_sales_ms_p75_2013_BX_only_with_geofile_all_houses.geojson", property: "MS_P75" },
  { legendType: "auto", name: "MS_P75_2013_apartments", file: "merge_sales_ms_p75_2013_BX_only_with_geofile_apartments.geojson", property: "MS_P75" },
  { legendType: "auto", name: "MS_P75_2023_all_houses", file: "merge_sales_ms_p75_2023_BX_only_with_geofile_all_houses.geojson", property: "MS_P75" },
  { legendType: "auto", name: "MS_P75_2023_apartments", file: "merge_sales_ms_p75_2023_BX_only_with_geofile_apartments.geojson", property: "MS_P75" },

  { legendType: "auto", name: "MS_P90_2013_all_houses", file: "merge_sales_ms_p90_2013_BX_only_with_geofile_all_houses.geojson", property: "MS_P90" },
  { legendType: "auto", name: "MS_P90_2013_apartments", file: "merge_sales_ms_p90_2013_BX_only_with_geofile_apartments.geojson", property: "MS_P90" },
  { legendType: "auto", name: "MS_P90_2023_all_houses", file: "merge_sales_ms_p90_2023_BX_only_with_geofile_all_houses.geojson", property: "MS_P90" },
  { legendType: "auto", name: "MS_P90_2023_apartments", file: "merge_sales_ms_p90_2023_BX_only_with_geofile_apartments.geojson", property: "MS_P90" },

  { legendType: "auto", name: "TotalRentP50LessorLegalPerson2024", file: "merged_StatisticalUnitWideRealEstateRentsAnnual_2024_lessorlegalperson_totalrentp50_BX_only.geojson", property: "TotalRentP50" },
  { legendType: "auto", name: "TotalRentP50LessorNeutralPerson2024", file: "merged_StatisticalUnitWideRealEstateRentsAnnual_2024_lessorneutralperson_totalrentp50_BX_only.geojson", property: "TotalRentP50" },
  { legendType: "auto", name: "TotalRentP50TakerLegalPerson2024", file: "merged_StatisticalUnitWideRealEstateRentsAnnual_2024_takerlegalperson_totalrentp50_BX_only.geojson", property: "TotalRentP50" },

  { legendType: "auto", name: "Prix median appartements 2011", file: "immo_median_saleprice_appart_2011.geojson", property: "immo_median_saleprice_appart_2011" },
  { legendType: "auto", name: "Prix median appartements 2021", file: "immo_median_saleprice_appart_2021.geojson", property: "immo_median_saleprice_appart_2021" },
  { legendType: "auto", name: "Prix median maisons 2011", file: "immo_median_saleprice_house_2011.geojson", property: "immo_median_saleprice_house_2011" },
  { legendType: "auto", name: "Prix median maisons 2021", file: "immo_median_saleprice_house_2021.geojson", property: "immo_median_saleprice_house_2021" },

  // ---------------- Population ----------------
  { legendType: "auto", name: "Total Population 2014", file: "merged_statsector_population_BX_only_2014_partialmatch.geojson", property: "Total_Population_2014" },
  { legendType: "auto", name: "Total Population 2025", file: "merged_statsector_population_BX_only_2025_partialmatch.geojson", property: "Total_Population_2025" },
  { legendType: "auto", name: "Avg Revenue 2023", file: "merged_statsector_revenue_BX_only_2023_partialmatch.geojson", property: "MS_AVG_TOT_NET_TAXABLE_INC" },

  // ---------------- Crimes - Vols ----------------
  { legendType: "auto", name: "Vols 2000", file: "zp_crime_type_vol_2000_bx_geofile.geojson", property: "vol" },
  { legendType: "auto", name: "Vols 2014", file: "zp_crime_type_vol_2014_bx_geofile.geojson", property: "vol" },
  { legendType: "auto", name: "Vols 2024", file: "zp_crime_type_vol_2024_bx_geofile.geojson", property: "vol" },

  // ---------------- Crimes - Coups et blessures ----------------
  { legendType: "auto", name: "Coups et blessures 2000", file: "zp_crime_type_coups_blessures_2000_bx_geofile.geojson", property: "coups_blessures" },
  { legendType: "auto", name: "Coups et blessures 2014", file: "zp_crime_type_coups_blessures_2014_bx_geofile.geojson", property: "coups_blessures" },
  { legendType: "auto", name: "Coups et blessures 2024", file: "zp_crime_type_coups_blessures_2024_bx_geofile.geojson", property: "coups_blessures" },

  // ---------------- Crimes - Drogues ----------------
  { legendType: "auto", name: "Drogues 2000", file: "zp_crime_type_drogues_2000_bx_geofile.geojson", property: "drogues" },
  { legendType: "auto", name: "Drogues 2014", file: "zp_crime_type_drogues_2014_bx_geofile.geojson", property: "drogues" },
  { legendType: "auto", name: "Drogues 2024", file: "zp_crime_type_drogues_2024_bx_geofile.geojson", property: "drogues" },

  // ---------------- Crimes - Alcool ----------------
  { legendType: "auto", name: "Alcool 2000", file: "zp_crime_type_alcool_2000_bx_geofile.geojson", property: "alcool" },
  { legendType: "auto", name: "Alcool 2014", file: "zp_crime_type_alcool_2014_bx_geofile.geojson", property: "alcool" },
  { legendType: "auto", name: "Alcool 2024", file: "zp_crime_type_alcool_2024_bx_geofile.geojson", property: "alcool" },

  // ---------------- Crimes - Armes ----------------
  { legendType: "auto", name: "Armes 2000", file: "zp_crime_type_armes_2000_bx_geofile.geojson", property: "armes" },
  { legendType: "auto", name: "Armes 2014", file: "zp_crime_type_armes_2014_bx_geofile.geojson", property: "armes" },
  { legendType: "auto", name: "Armes 2024", file: "zp_crime_type_armes_2024_bx_geofile.geojson", property: "armes" },

  // ---------------- Sécurité publique ----------------
  { legendType: "auto", name: "Sécurité publique 2000", file: "zp_crime_type_secu_publiq_2000_bx_geofile.geojson", property: "secu_publiq" },
  { legendType: "auto", name: "Sécurité publique 2014", file: "zp_crime_type_secu_publiq_2014_bx_geofile.geojson", property: "secu_publiq" },
  { legendType: "auto", name: "Sécurité publique 2024", file: "zp_crime_type_secu_publiq_2024_bx_geofile.geojson", property: "secu_publiq" },

  // ---------------- Dégradations / Propriété ----------------
  { legendType: "auto", name: "Dégradations propriété 2000", file: "zp_crime_type_degradat_prop_2000_bx_geofile.geojson", property: "degradat_prop" },
  { legendType: "auto", name: "Dégradations propriété 2014", file: "zp_crime_type_degradat_prop_2014_bx_geofile.geojson", property: "degradat_prop" },
  { legendType: "auto", name: "Dégradations propriété 2024", file: "zp_crime_type_degradat_prop_2024_bx_geofile.geojson", property: "degradat_prop" },

  // ---------------- Cambriolages ----------------
  { legendType: "auto", name: "Cambriolages 2000", file: "zp_crime_type_cambriolage_2000_bx_geofile.geojson", property: "cambriolage" },
  { legendType: "auto", name: "Cambriolages 2014", file: "zp_crime_type_cambriolage_2014_bx_geofile.geojson", property: "cambriolage" },
  { legendType: "auto", name: "Cambriolages 2024", file: "zp_crime_type_cambriolage_2024_bx_geofile.geojson", property: "cambriolage" },

  // ---------------- Population / Socio-économique ----------------
  { legendType: "auto", name: "Evolution Population 2012-2022 en %", file: "pop_evo_2012_2022.geojson", property: "pop_tx_aug_2012_2022" },
  { legendType: "auto", name: "Population en 2022", file: "pop_2022_ok.geojson", property: "pop_nb_2022" },
  { legendType: "auto", name: "Densité de Population", file: "hab_km2.geojson", property: "hab/km2" },
  { legendType: "auto", name: "% Population âgée de 18 à 64 ans", file: "pop_tx_agegroup_18_64_2022.geojson", property: "pop_tx_agegroup_18_64_2022" },
  { legendType: "auto", name: "Solde migratoire interne", file: "pop_soldmig_intern.geojson", property: "pop_soldmig_intern" },
  { legendType: "auto", name: "Solde migratoire international", file: "pop_soldmig_internat.geojson", property: "pop_soldmig_internat" },
  { legendType: "auto", name: "% Population étrangère 2022", file: "pop_tx_immig_2022.geojson", property: "pop_tx_immig_2022" },
  { legendType: "auto", name: "Population Croissance Annuelle", file: "pop_croissance_an.geojson", property: "pop_croissance_an" },
  { legendType: "auto", name: "% Population immigrée UE", file: "pop_tx_immig_fromEU.geojson", property: "pop_tx_immig_fromEU" },
  { legendType: "auto", name: "% Population immigrée UE14", file: "pop_tx_immig_fromEU14.geojson", property: "pop_tx_immig_fromEU14" },
  { legendType: "auto", name: "% Population immigrée UE13", file: "pop_tx_immig_fromEU13.geojson", property: "pop_tx_immig_fromEU13" },
  { legendType: "auto", name: "Population immigrée reste UE + non UE", file: "pop_tx_immig_resteEu+nonEU.geojson", property: "pop_tx_immig_resteEu+nonEU" },
  { legendType: "auto", name: "% Population nationalité étrangère à la naissance", file: "pop_tx_nationalite_etrg_alanaissance.geojson", property: "pop_tx_nationalite_etrg_alanaissance" },
  { legendType: "auto", name: "Taux natalité", file: "pop_tx_natalite.geojson", property: "pop_tx_natalite" },
  { legendType: "auto", name: "Revenu Médian", file: "fin_med_rev.geojson", property: "fin_med_rev" },
  { legendType: "auto", name: "Taux emploi", file: "fin_tx_emploi.geojson", property: "fin_tx_emploi" },
  { legendType: "auto", name: "Taux emploi 15 à 24 ans", file: "fin_tx_emploi_15_24.geojson", property: "fin_tx_emploi_15_24" },
  { legendType: "auto", name: "Taux emploi 25 à 49 ans", file: "fin_tx_emploi_25_49.geojson", property: "fin_tx_emploi_25_49" },
  { legendType: "auto", name: "Taux emploi 50 à 64 ans", file: "fin_tx_emploi_50_64.geojson", property: "fin_tx_emploi_50_64" },
  { legendType: "auto", name: "Taux salariés", file: "fin_tx_sal.geojson", property: "fin_tx_sal" },
  { legendType: "auto", name: "Taux indépendants", file: "fin_tx_indep.geojson", property: "fin_tx_indep" },
  { legendType: "auto", name: "Taux ouvriers", file: "fin_tx_ouvr.geojson", property: "fin_tx_ouvr" },
  { legendType: "auto", name: "Taux employés", file: "fin_tx_employee.geojson", property: "fin_tx_employee" },
  { legendType: "auto", name: "Emplois Institutions Internationales", file: "fin_nb_internat_instit_jobs.geojson", property: "fin_nb_internat_instit_jobs" },
  { legendType: "auto", name: "Taux fonctionnaires", file: "fin_tx_fonct.geojson", property: "fin_tx_fonct" },
  { legendType: "auto", name: "Taux chômage", file: "fin_tx_chomg.geojson", property: "fin_tx_chomg" },
  { legendType: "auto", name: "Taux chômage longue durée", file: "fin_tx_chom_longduree.geojson", property: "fin_tx_chom_longduree" },
  { legendType: "auto", name: "Taux chômage 15 à 24 ans", file: "fin_15_24yo_tx_chom.geojson", property: "fin_15_24yo_tx_chom" },
  { legendType: "auto", name: "Taux chômage 25 à 49 ans", file: "fin_tx_chom_25_49.geojson", property: "fin_tx_chom_25_49" },
  { legendType: "auto", name: "Taux chômage 50 à 64 ans", file: "fin_tx_chom_50_64.geojson", property: "fin_tx_chom_50_64" },
  { legendType: "auto", name: "Taux GRAPA 65+", file: "GRAPA_65+_2022.geojson", property: "GRAPA_65+_2022" },
  { legendType: "auto", name: "Taux CPAS 18 à 24 ans", file: "tx_CPAS_18_24_2021.geojson", property: "tx_CPAS_18_24_2021" },
  { legendType: "auto", name: "Taux naissances sans revenu de travail", file: "fin_tx_births_noworkrevenue.geojson", property: "fin_tx_births_noworkrevenue" },
  { legendType: "auto", name: "Taux cadres", file: "fin_tx_cadres.geojson", property: "fin_tx_cadres" },
  { legendType: "auto", name: "Taux naissances mères étrangères", file: "fin_tx_naissances_mere_etrang.geojson", property: "fin_tx_naissances_mere_etrang" },
  { legendType: "auto", name: "Taux retard scolaire", file: "ensign_retard_scol.geojson", property: "ensign_retard_scol" },
  { legendType: "auto", name: "Etablissements", file: "fin_nb_etabls.geojson", property: "fin_nb_etabls" },
  { legendType: "auto", name: "Sièges sociaux", file: "fin_soc_siege.geojson", property: "fin_soc_siege" },
  { legendType: "auto", name: "Solde migration entreprises 2009-2020", file: "fin_soldmig_firms_total_2009_2020.geojson", property: "fin_soldmig_firms_total_2009_2020" },
  { legendType: "auto", name: "Solde migration entreprises 2009-2020 Horeca", file: "fin_soldmig_2009_2020_horeca.geojson", property: "fin_soldmig_2009_2020_horeca" },
  { legendType: "auto", name: "Solde migration entreprises 2009-2020 commerce détail", file: "fin_soldmig_2009_2020_commrcdetail.geojson", property: "fin_soldmig_2009_2020_commrcdetail" },
  { legendType: "auto", name: "Solde migration entreprises 2009-2020 IT", file: "fin_soldmig_2009_2020_IT.geojson", property: "fin_soldmig_2009_2020_IT" },
  { legendType: "auto", name: "Solde migration entreprises 2009-2022 RBC", file: "fin_soldmig_RBC_2009_2022.geojson", property: "fin_soldmig_RBC_2009_2022" },
  { legendType: "auto", name: "Solde migration entreprises 2009-2022 Régions", file: "fin_soldmig_ firms_Wal_Flan_2009_2022.geojson", property: "fin_soldmig_firms_Wal_Flan_2009_2022" },
  { legendType: "auto", name: "Taux végétation", file: "eco_tx_veget.geojson", property: "eco_tx_veget" },
  { legendType: "auto", name: "Taux espaces verts accessibles public", file: "eco_tx_espacevert_accesspublic.geojson", property: "eco_tx_espacevert_accesspublic" },
  { legendType: "auto", name: "Logements sociaux", file: "immo_nb_logsoc.geojson", property: "immo_nb_logsoc" },
  { legendType: "auto", name: "Bâtiments résidentiels", file: "immo_nb_bat_resid.geojson", property: "immo_nb_bat_resid" },
  { legendType: "auto", name: "Loyer moyen", file: "immo_avg_rent.geojson", property: "immo_avg_rent" },
  { legendType: "auto", name: "Parc immobilier 2 à 3 facades", file: "immo_tx_23fac_houses.geojson", property: "immo_tx_23fac_houses" },
  { legendType: "auto", name: "Parc immobilier 4 facades", file: "immo_tx_4f_houses.geojson", property: "immo_tx_4f_houses" },
  { legendType: "auto", name: "Parc immobilier immeuble appartements", file: "immo_tx_immeub_appart.geojson", property: "immo_tx_immeub_appart" },
  { legendType: "auto", name: "Secteurs économiques majeurs", file: "caract_economiq.geojson", property: "caract_economiq" },
  { legendType: "auto", name: "Gentrification", file: "gentrification.geojson", property: "gentrification" },

  // ---------------- Origines ----------------
  { legendType: "auto", name: "% Roumains", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_roum_2022" },
  { legendType: "auto", name: "% Marocains", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_maroc_2022" },
  { legendType: "auto", name: "% Syriens", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_syrie_2022" },
  { legendType: "auto", name: "% Français", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_fr_2022" },
  { legendType: "auto", name: "% Indiens", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_inde_2022" },
  { legendType: "auto", name: "% Turcs", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_turc_2022" },
  { legendType: "auto", name: "% Italiens", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_it_2022" },
  { legendType: "auto", name: "% Portugais", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_portugal_2022" },
  { legendType: "auto", name: "% Espagnols", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_es_2022" },
  { legendType: "auto", name: "% Polonais", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_pl_2022" },
  { legendType: "auto", name: "% Brésiliens", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_bresil_2022" },
  { legendType: "auto", name: "% Allemands", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_al_2022" },
  { legendType: "auto", name: "% RDC", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_rdc_2022" },
  { legendType: "auto", name: "% Bulgares", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_boulg_2022" },
  { legendType: "auto", name: "% Japonais", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_jap_2022" },
  { legendType: "auto", name: "% Grecs", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_grece_2022" },
  { legendType: "auto", name: "% Néerlandais", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_nl_2022" },
  { legendType: "auto", name: "% Moldaves", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_mold_2022" },
  { legendType: "auto", name: "% Britanniques", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_uk_2022" },
  { legendType: "auto", name: "% Guinéens", file: "merged_tx_origins_municipality_BX_only_2022.geojson", property: "tx_guinee_2022" }
];

// ============================
// CACHE DES THEMES
// ============================

const themeCache = {};

async function preloadThemes() {
  for (const theme of ALL_THEMES) {
    try {
      const res = await fetch(theme.file);
      themeCache[theme.name] = await res.json();
    } catch (err) {
      console.warn(`Impossible de précharger le thème : ${theme.name}`, err);
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

// Pane dédié pour les communes (z-index élevé)
map.createPane('communesPane');
map.getPane('communesPane').style.zIndex = 650;

// ============================
// FONCTIONS UTILITAIRES
// ============================

function getValueFromTheme(theme, lat, lon) {
  const data = themeCache[theme.name];
  if (!data) return "ERROR";

  for (const f of data.features) {
    const layer = L.geoJSON(f);
    if (layer.getBounds().contains([lat, lon])) {
      return f.properties[theme.property] ?? "N/A";
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
    return {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon)
    };
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
    fillOpacity: 0.08,
    className: 'address-circle'
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
        // Réinitialiser l'adresse active si on supprime le dernier marqueur
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

  let html = `<div><b>${title}</b></div>`;
  const levels = [0, ...breaks, "+"];

  for (let i = 0; i < COLORS.length; i++) {
    const from = levels[i];
    const to = levels[i + 1];
    html += `
      <div>
        <span style="display:inline-block;width:18px;height:10px;
          background:${COLORS[i]};margin-right:6px;"></span>
        ${from} – ${to}
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

  const breaks = computeQuantiles(values, 5);

  function getColor(d) {
    if (isNaN(d))       return '#cccccc';
    if (d > breaks[3])  return COLORS[4];
    if (d > breaks[2])  return COLORS[3];
    if (d > breaks[1])  return COLORS[2];
    if (d > breaks[0])  return COLORS[1];
    return COLORS[0];
  }

  const layer = L.geoJSON(data, {
    style: (feature) => {
      const v = parseDecimal(feature.properties[property]);
      return {
        fillColor: getColor(v),
        weight: 1,
        color: "#333",
        fillOpacity: 0.5
      };
    }
  });

  renderLegendAuto(themeName, breaks);
  return layer;
}

function loadThemeGeoJSON(filePath, valueProperty, themeName) {
  if (currentThemeLayer) {
    map.removeLayer(currentThemeLayer);
  }

  fetch(filePath)
    .then(res => res.json())
    .then(data => {
      currentThemeLayer = buildChoropleth(data, valueProperty, themeName);
      currentThemeLayer.addTo(map);
      map.fitBounds(currentThemeLayer.getBounds());
    })
    .catch(err => console.error(`Erreur chargement thème ${themeName}:`, err));
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

  console.log("DOM Ready");

  // Référence input
  addressInput = document.getElementById('address-input');

  // Saisie adresse
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

  // Boutons zoom
  const btnZoomIn = document.getElementById('zoom-in');
  const btnZoomOut = document.getElementById('zoom-out');
  if (btnZoomIn) btnZoomIn.addEventListener('click', () => map.zoomIn());
  if (btnZoomOut) btnZoomOut.addEventListener('click', () => map.zoomOut());

  // Bouton centrer
  const btnCenter = document.getElementById('btn-center');
  if (btnCenter) {
    btnCenter.addEventListener('click', () => map.setView([50.85, 4.35], 10));
  }

  // Bouton toggle polygones
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

  // Bouton désactiver filtres
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

      map.setView([50.85, 4.35], 10);
    });
  }

  // Helper dropdown
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

  // Bouton info panel
  const btnInfo = document.getElementById('btn-info');
  if (btnInfo) {
    btnInfo.addEventListener('click', () => {
      const panel = document.getElementById('info-panel');
      if (panel) {
        panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
      }
    });
  }

  // Mapping thème -> filtres
  const themeFilters = {
    'Total sales 2013-2024': ['house', 'appart'],
    '2-3 facades houses total sales 2013-2024': ['house', 'appart'],
    Rents: ['house', 'appart'],
    SocioEconomics: ['quantity', 'work status', 'occupation', 'revenue', 'age group'],
    Commerces: ['boutiques', 'fabrics'],
    Housing: ['houses', 'appartments', 'hlm'],
    Security: ['crimes', 'violence', 'incivilité'],
    Pollution: ['air', 'noise'],
    GreenArea: ['travel time', 'distance']
  };

  // Sélection thème (ancien dropdown)
  document.querySelectorAll('#theme-dropdown div').forEach(el => {
    el.addEventListener('click', function () {
      const theme = this.dataset.theme;
      activeTheme = theme;

      const filtersDiv = document.getElementById('filters-content');
      const filters = themeFilters[theme] || [];
      if (filtersDiv) {
        filtersDiv.textContent = filters.length > 0 ? filters.join(', ') : 'choose a theme';
      }
    });
  });

  // Accordéon groupes de thèmes
  document.querySelectorAll('.theme-group-toggle').forEach(toggle => {
    const baseText = toggle.textContent.replace(" ▸", "").replace(" ▾", "").trim();
    toggle.textContent = baseText + " ▸";

    toggle.addEventListener('click', function () {
      const submenu = this.nextElementSibling;
      if (!submenu) return;

      const isOpen = submenu.classList.contains("open");
      if (isOpen) {
        submenu.classList.remove("open");
        this.classList.remove("active");
        this.textContent = baseText + " ▸";
      } else {
        submenu.classList.add("open");
        this.classList.add("active");
        this.textContent = baseText + " ▾";
      }
    });
  });

  // Sélection item dans sous-menu
  document.querySelectorAll('.theme-submenu div').forEach(item => {
    item.addEventListener('click', function (e) {
      e.stopPropagation();
      document.querySelectorAll('.theme-submenu div').forEach(i => i.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  // Scan & Save
  const btnScanSave = document.getElementById('btn-scan-save');
  if (btnScanSave) {
    btnScanSave.addEventListener('click', async () => {
      try {
        if (!activeAddress) {
          alert("Veuillez saisir une adresse");
          return;
        }

        const results = [];
        const screenshots = [];

        for (const theme of ALL_THEMES) {
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

          screenshots.push({
            theme: theme.name,
            img: screenshot,
            value: value
          });
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

  // Resize carte
  window.addEventListener('resize', () => setTimeout(() => map.invalidateSize(), 200));

  // Expose map globalement
  window._map = map;

  // Déplacer les contrôles Leaflet dans le wrapper
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
  const contentCenter = document.getElementById("protected-content");
  const contentRight = document.getElementById("protected-content2");
  const message = document.getElementById("internal-message");

  const granted = keyInput.value === PASSWORD;

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
