


// ============================
// VARIABLES GLOBALES
// ============================

let addressMarkers = [];
let activeAddress = null;
let currentTheme = null;
let activeSector = null;
let addressInput;
const MAX_ADDRESS_MARKERS = 3;

// GeoJSON
var bruxellesLayer;
var currentThemeLayer;
var activeTheme = null;
var polygonsOn = true;

// Themes
const ALL_THEMES = [

  // ---------------- Immobilier - Transactions ----------------
  { name: "Total sales 2013-2024", file: "merge_total_sales_2013_2024_BX_only_with_geofile.geojson", property: "total_sales_2013_2024" },
  { name: "2-3 facades houses total sales 2013-2024", file: "merge_sales_2_3_facades_BX_only_with_geofile.geojson", property: "total_sales" },
  { name: "4 or plus facades houses total sales 2013-2024", file: "merge_sales_4_or_plus_facades_BX_only_with_geofile.geojson", property: "total_sales" },
  { name: "apartments total sales 2013-2024", file: "merge_apartments_BX_only_with_geofile.geojson", property: "total_sales" },
  { name: "Appartements vendus 2011", file: "immo_nb_appart_sales_2011.geojson", property: "total_sales" },
  { name: "Appartements vendus 2021", file: "immo_nb_appart_sales_2021.geojson", property: "total_sales" },
  { name: "Maisons vendus 2011", file: "immo_nb_houses_sales_2011.geojson", property: "total_sales" },
  { name: "Maisons vendus 2021", file: "immo_nb_houses_sales_2021.geojson", property: "total_sales" },

  // ---------------- Immobilier - Prices ----------------
  { name: "median sale price 2013", file: "merge_sales_median_2013_BX_only_with_geofile.geojson", property: "MS_P50 (MEDIAN_PRICE)" },
  { name: "median sale price 2023", file: "merge_sales_median_2023_BX_only_with_geofile.geojson", property: "MS_P50 (MEDIAN_PRICE)" },
  { name: "median sale price apartment 2013", file: "merge_sales_median_apartment_2013_BX_only_with_geofile.geojson", property: "MS_P50 (MEDIAN_PRICE)" },
  { name: "median sale price apartment 2023", file: "merge_sales_median_apartment_2023_BX_only_with_geofile.geojson", property: "MS_P50 (MEDIAN_PRICE)" },

  { name: "MS_P10_2013", file: "merge_sales_ms_p10_2013_BX_only_with_geofile.geojson", property: "MS_P10" },
  { name: "MS_P10_2023", file: "merge_sales_ms_p10_2023_BX_only_with_geofile.geojson", property: "MS_P10" },
  { name: "MS_P25_2013", file: "merge_sales_ms_p25_2013_BX_only_with_geofile.geojson", property: "MS_P25" },
  { name: "MS_P25_2023", file: "merge_sales_ms_p25_2023_BX_only_with_geofile.geojson", property: "MS_P25" },
  { name: "MS_P75_2013", file: "merge_sales_ms_p75_2013_BX_only_with_geofile.geojson", property: "MS_P75" },
  { name: "MS_P75_2023", file: "merge_sales_ms_p75_2023_BX_only_with_geofile.geojson", property: "MS_P75" },
  { name: "MS_P90_2013", file: "merge_sales_ms_p90_2013_BX_only_with_geofile.geojson", property: "MS_P90" },
  { name: "MS_P90_2023", file: "merge_sales_ms_p90_2023_BX_only_with_geofile.geojson", property: "MS_P90" },

  { name: "MS_P10_2013_all_houses", file: "merge_sales_ms_p10_2013_BX_only_with_geofile_all_houses.geojson", property: "MS_P10" },
  { name: "MS_P10_2013_apartments", file: "merge_sales_ms_p10_2013_BX_only_with_geofile_Appartements.geojson", property: "MS_P10" },
  { name: "MS_P10_2023_all_houses", file: "merge_sales_ms_p10_2023_BX_only_with_geofile_all_houses.geojson", property: "MS_P10" },
  { name: "MS_P10_2023_apartments", file: "merge_sales_ms_p10_2023_BX_only_with_geofile_apartments.geojson", property: "MS_P10" },

  { name: "MS_P25_2013_all_houses", file: "merge_sales_ms_p25_2013_BX_only_with_geofile_all_houses.geojson", property: "MS_P25" },
  { name: "MS_P25_2013_apartments", file: "merge_sales_ms_p25_2013_BX_only_with_geofile_Appartements.geojson", property: "MS_P25" },
  { name: "MS_P25_2023_all_houses", file: "merge_sales_ms_p25_2023_BX_only_with_geofile_all_houses.geojson", property: "MS_P25" },
  { name: "MS_P25_2023_apartments", file: "merge_sales_ms_p25_2023_BX_only_with_geofile_apartments.geojson", property: "MS_P25" },

  { name: "MS_P75_2013_all_houses", file: "merge_sales_ms_p75_2013_BX_only_with_geofile_all_houses.geojson", property: "MS_P75" },
  { name: "MS_P75_2013_apartments", file: "merge_sales_ms_p75_2013_BX_only_with_geofile_apartments.geojson", property: "MS_P75" },
  { name: "MS_P75_2023_all_houses", file: "merge_sales_ms_p75_2023_BX_only_with_geofile_all_houses.geojson", property: "MS_P75" },
  { name: "MS_P75_2023_apartments", file: "merge_sales_ms_p75_2023_BX_only_with_geofile_apartments.geojson", property: "MS_P75" },

  { name: "MS_P90_2013_all_houses", file: "merge_sales_ms_p90_2013_BX_only_with_geofile_all_houses.geojson", property: "MS_P90" },
  { name: "MS_P90_2013_apartments", file: "merge_sales_ms_p90_2013_BX_only_with_geofile_apartments.geojson", property: "MS_P90" },
  { name: "MS_P90_2023_all_houses", file: "merge_sales_ms_p90_2023_BX_only_with_geofile_all_houses.geojson", property: "MS_P90" },
  { name: "MS_P90_2023_apartments", file: "merge_sales_ms_p90_2023_BX_only_with_geofile_apartments.geojson", property: "MS_P90" },

  { name: "TotalRentP50LessorLegalPerson2024", file: "merged_StatisticalUnitWideRealEstateRentsAnnual_2024_lessorlegalperson_totalrentp50_BX_only.geojson", property: "TotalRentP50" },
  { name: "TotalRentP50LessorNeutralPerson2024", file: "merged_StatisticalUnitWideRealEstateRentsAnnual_2024_lessorneutralperson_totalrentp50_BX_only.geojson", property: "TotalRentP50" },
  { name: "TotalRentP50TakerLegalPerson2024", file: "merged_StatisticalUnitWideRealEstateRentsAnnual_2024_takerlegalperson_totalrentp50_BX_only.geojson", property: "TotalRentP50" },

  { name: "Prix median appartements 2011", file: "immo_median_saleprice_appart_2011.geojson", property: "immo_median_saleprice_appart_2011" },
  { name: "Prix median appartements 2021", file: "immo_median_saleprice_appart_2021.geojson", property: "immo_median_saleprice_appart_2021" },
  { name: "Prix median maisons 2011", file: "immo_median_saleprice_house_2011.geojson", property: "immo_median_saleprice_house_2011" },
  { name: "Prix median maisons 2021", file: "immo_median_saleprice_house_2021.geojson", property: "immo_median_saleprice_house_2021" },



// ---------------- Population ----------------
  { name: "Total Population 2014", file: "merged_statsector_population_BX_only_2014_partialmatch.geojson", property: "Total_Population_2014" },
  { name: "Total Population 2025", file: "merged_statsector_population_BX_only_2025_partialmatch.geojson", property: "Total_Population_2025" },
  { name: "Avg Revenue 2023", file: "merged_statsector_revenue_BX_only_2023_partialmatch.geojson", property: "MS_AVG_TOT_NET_TAXABLE_INC" },

  // ---------------- Crimes - Vols ----------------
  { name: "Vols 2000", file: "zp_crime_type_vol_2000_bx_geofile.geojson", property: "vol" },
  { name: "Vols 2014", file: "zp_crime_type_vol_2014_bx_geofile.geojson", property: "vol" },
  { name: "Vols 2024", file: "zp_crime_type_vol_2024_bx_geofile.geojson", property: "vol" },

  // ---------------- Crimes - Coups et blessures ----------------
  { name: "Coups et blessures 2000", file: "zp_crime_type_coups_blessures_2000_bx_geofile.geojson", property: "coups_blessures" },
  { name: "Coups et blessures 2014", file: "zp_crime_type_coups_blessures_2014_bx_geofile.geojson", property: "coups_blessures" },
  { name: "Coups et blessures 2024", file: "zp_crime_type_coups_blessures_2024_bx_geofile.geojson", property: "coups_blessures" },

  // ---------------- Crimes - Drogues ----------------
  { name: "Drogues 2000", file: "zp_crime_type_drogues_2000_bx_geofile.geojson", property: "drogues" },
  { name: "Drogues 2014", file: "zp_crime_type_drogues_2014_bx_geofile.geojson", property: "drogues" },
  { name: "Drogues 2024", file: "zp_crime_type_drogues_2024_bx_geofile.geojson", property: "drogues" },

  // ---------------- Crimes - Alcool ----------------
  { name: "Alcool 2000", file: "zp_crime_type_alcool_2000_bx_geofile.geojson", property: "alcool" },
  { name: "Alcool 2014", file: "zp_crime_type_alcool_2014_bx_geofile.geojson", property: "alcool" },
  { name: "Alcool 2024", file: "zp_crime_type_alcool_2024_bx_geofile.geojson", property: "alcool" },

  // ---------------- Crimes - Armes ----------------
  { name: "Armes 2024", file: "zp_crime_type_armes_2024_bx_geofile.geojson", property: "armes" },
   // ---------------- Criminalité - Armes ----------------
  { name: "Armes 2014", file: "zp_crime_type_armes_2014_bx_geofile.geojson", property: "armes" },
  { name: "Armes 2000", file: "zp_crime_type_armes_2000_bx_geofile.geojson", property: "armes" },

  // ---------------- Sécurité publique ----------------
  { name: "Sécurité publique 2024", file: "zp_crime_type_secu_publiq_2024_bx_geofile.geojson", property: "secu_publiq" },
  { name: "Sécurité publique 2014", file: "zp_crime_type_secu_publiq_2014_bx_geofile.geojson", property: "secu_publiq" },
  { name: "Sécurité publique 2000", file: "zp_crime_type_secu_publiq_2000_bx_geofile.geojson", property: "secu_publiq" },

  // ---------------- Dégradations / Propriété ----------------
  { name: "Dégradations propriété 2024", file: "zp_crime_type_degradat_prop_2024_bx_geofile.geojson", property: "degradat_prop" },
  { name: "Dégradations propriété 2014", file: "zp_crime_type_degradat_prop_2014_bx_geofile.geojson", property: "degradat_prop" },
  { name: "Dégradations propriété 2000", file: "zp_crime_type_degradat_prop_2000_bx_geofile.geojson", property: "degradat_prop" },

  // ---------------- Cambriolages ----------------
  { name: "Cambriolages 2024", file: "zp_crime_type_cambriolage_2024_bx_geofile.geojson", property: "cambriolage" },
  { name: "Cambriolages 2014", file: "zp_crime_type_cambriolage_2014_bx_geofile.geojson", property: "cambriolage" },
  { name: "Cambriolages 2000", file: "zp_crime_type_cambriolage_2000_bx_geofile.geojson", property: "cambriolage" },

  // ---------------- Population ----------------
  { name: "Evolution Population 2012-2022 en %", file: "pop_evo_2012_2022.geojson", property: "pop_tx_aug_2012_2022" },
  { name: "Population en 2022", file: "pop_2022_ok.geojson", property: "pop_nb_2022" },
  { name: "Densité de Population", file: "hab_km2.geojson", property: "hab/km2" },
  { name: "% Population âgée de 18 à 64 ans", file: "pop_tx_agegroup_18_64_2022.geojson", property: "pop_tx_agegroup_18_64_2022" },
  { name: "Solde migratoire interne", file: "pop_soldmig_intern.geojson", property: "pop_soldmig_intern" },
  { name: "Solde migratoire international", file: "pop_soldmig_internat.geojson", property: "pop_soldmig_internat" },
{ name: "% Population étrangère 2022", file: "pop_tx_immig_2022.geojson", property: "pop_tx_immig_2022" },
    { name: "Population Croissance Annuelle", file: "pop_croissance_an.geojson", property: "pop_croissance_an" },
    { name: "% Population immigrée", file: "pop_tx_immig_2022.geojson", property: "pop_tx_immig_2022" },
    { name: "% Population immigrée UE", file: "pop_tx_immig_fromEU.geojson", property: "pop_tx_immig_fromEU" },
    { name: "% Population immigrée UE14", file: "pop_tx_immig_fromEU14.geojson", property: "pop_tx_immig_fromEU14" },
    { name: "% Population immigrée UE13", file: "pop_tx_immig_fromEU13.geojson", property: "pop_tx_immig_fromEU13" },
    { name: "Population immigrée reste UE + non UE", file: "pop_tx_immig_resteEu+nonEU.geojson", property: "pop_tx_immig_resteEu+nonEU" },
    { name: "% Population immigrée nationalité étrangère à la naissance", file: "pop_tx_nationalite_etrg_alanaissance.geojson", property: "pop_tx_nationalite_etrg_alanaissance" },
    { name: "Taux natalité", file: "pop_tx_natalite.geojson", property: "pop_tx_natalite" },
    { name: "Revenu Médian", file: "fin_med_rev.geojson", property: "fin_med_rev" },
    { name: "Taux emploi", file: "fin_tx_emploi.geojson", property: "fin_tx_emploi" },
    { name: "Taux emploi 15 à 24 ans", file: "fin_tx_emploi_15_24.geojson", property: "fin_tx_emploi_15_24" },
    { name: "Taux emploi 25 à 49 ans", file: "fin_tx_emploi_25_49.geojson", property: "fin_tx_emploi_25_49" },
    { name: "Taux emploi 50 à 64 ans", file: "fin_tx_emploi_50_64.geojson", property: "fin_tx_emploi_50_64" },
    { name: "Taux salariés", file: "fin_tx_sal.geojson", property: "fin_tx_sal" },
    { name: "Taux indépendants", file: "fin_tx_indep.geojson", property: "fin_tx_indep" },
{ name: "Taux ouvriers", file: "fin_tx_ouvr.geojson", property: "fin_tx_ouvr" },
    { name: "Taux employés", file: "fin_tx_employee.geojson", property: "fin_tx_employee" },
    { name: "Emplois Institutions Internationales", file: "fin_nb_internat_instit_jobs.geojson", property: "fin_nb_internat_instit_jobs" },
    { name: "Taux fonctionnaires", file: "fin_tx_fonct.geojson", property: "fin_tx_fonct" },
    { name: "Taux chomage", file: "fin_tx_chomg.geojson", property: "fin_tx_chomg" },
    { name: "Taux chomage LD", file: "fin_tx_chom_longduree.geojson", property: "fin_tx_chom_longduree" },
    { name: "Taux chomage 15 a 24 ans", file: "fin_15_24yo_tx_chom.geojson", property: "fin_15_24yo_tx_chom" },
    { name: "Taux chomage 25 a 49 ans", file: "fin_tx_chom_25_49.geojson", property: "fin_tx_chom_25_49" },
    { name: "Taux chomage 50 a 64 ans", file: "fin_tx_chom_50_64.geojson", property: "fin_tx_chom_50_64" },
    { name: "Taux GRAPA 65+", file: "GRAPA_65+_2022.geojson", property: "GRAPA_65+_2022" },
    { name: "Taux CPAS 18 a 24 ans", file: "tx_CPAS_18_24_2021.geojson", property: "tx_CPAS_18_24_2021" },
    { name: "Taux naissances sans revenu de travail", file: "fin_tx_births_noworkrevenue.geojson", property: "fin_tx_births_noworkrevenue" },
    { name: "Taux cadres", file: "pop_tx_immig_2022.geojson", property: "fin_tx_cadres" },
    /*{ name: "Taux employés", file: "fin_tx_employees.geojson", property: "fin_tx_employees" },*/
    { name: "Taux naissances mères étrangères", file: "fin_tx_naissances_mere_etrang.geojson", property: "fin_tx_naissances_mere_etrang" },
    { name: "Taux retard scolaire", file: "ensign_retard_scol.geojson", property: "ensign_retard_scol" },
    { name: "Etablissements", file: "fin_nb_etabls.geojson", property: "fin_nb_etabls" },
    { name: "Sieges sociaux", file: "fin_soc_siege.geojson", property: "fin_soc_siege" },
    { name: "Solde migration entreprises 2009 a 2020", file: "fin_soldmig_firms_total_2009_2020.geojson", property: "fin_soldmig_firms_total_2009_2020" },
    { name: "Solde migration entreprises 2009 a 2020 Horeca", file: "fin_soldmig_2009_2020_horeca.geojson", property: "fin_soldmig_2009_2020_horeca" },
    { name: "Solde migration entreprises 2009 a 2020 commerce detail", file: "fin_soldmig_2009_2020_commrcdetail.geojson", property: "fin_soldmig_2009_2020_commrcdetail" },
    { name: "Solde migration entreprises 2009 a 2020 IT", file: "fin_soldmig_2009_2020_IT.geojson", property: "fin_soldmig_2009_2020_IT" },
    { name: "Solde migration entreprises 2009 a 2020 RBC", file: "fin_soldmig_RBC_2009_2022.geojson", property: "fin_soldmig_RBC_2009_2022" },
    { name: "Solde migration entreprises 2009 a 2020 Régions", file: "fin_soldmig_ firms_Wal_Flan_2009_2022.geojson", property: "fin_soldmig_firms_Wal_Flan_2009_2022" },
    { name: "Taux vegetation", file: "eco_tx_veget.geojson", property: "eco_tx_veget" },
    { name: "Taux espaces verts accessibles public", file: "eco_tx_espacevert_accesspublic.geojson", property: "eco_tx_espacevert_accesspublic" },
    { name: "Logements sociaux", file: "immo_nb_logsoc.geojson", property: "immo_nb_logsoc" },
    { name: "Batiments residentiels", file: "immo_nb_bat_resid.geojson", property: "immo_nb_bat_resid" },
    { name: "Loyer moyen", file: "immo_avg_rent.geojson", property: "immo_avg_rent" },

    { name: 'Parc immobilier 2 a 3 facades', file: 'immo_tx_23fac_houses.geojson', property: 'immo_tx_23fac_houses' },
    { name: 'Parc immobilier 4 facades', file: 'immo_tx_4f_houses.geojson', property: 'immo_tx_4f_houses' },
    { name: 'Parc immobilier immeuble appartements', file: 'immo_tx_immeub_appart.geojson', property: 'immo_tx_immeub_appart' },
    { name: 'Secteurs economiques majeures', file: 'caract_economiq.geojson', property: 'caract_economiq' },
    { name: 'Gentrification', file: 'gentrification.geojson', property: 'gentrification' },

    { name: '% Roumains', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_roum_2022' },
    { name: '% Marocains', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_maroc_2022' },
    { name: '% Syrie', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_syrie_2022' },
    { name: '% Francais', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_fr_2022' },
    { name: '% Inde', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_inde_2022' },
    { name: '% Turc', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_turc_2022' },
    { name: '% Italie', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_it_2022' },
    { name: '% Portugal', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_portugal_2022' },
    { name: '% Espagne', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_es_2022' },
    { name: '% Pologne', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_pl_2022' },
    { name: '% Bresil', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_bresil_2022' },
    { name: '% Allemagne', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_al_2022' },
    { name: '% RDC', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_rdc_2022' },
    { name: '% Bulgarie', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_boulg_2022' },
    { name: '% Japon', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_jap_2022' },
    { name: '% Grece', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_grece_2022' },
    { name: '% NL', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_nl_2022' },
    { name: '% Moldovie', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_mold_2022' },
    { name: '% UK', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_uk_2022' },
    { name: '% Guinee', file: 'merged_tx_origins_municipality_BX_only_2022.geojson', property: 'tx_guinee_2022' }

];

const themeCache = {};

// Préchargement
async function preloadThemes() {
  for (let theme of ALL_THEMES) {
    const res = await fetch(theme.file);
    themeCache[theme.name] = await res.json();
  }
}
preloadThemes();

// ============================
// FONCTIONS UTILES
// ============================

function parseDecimal(val) {
  if (val == null) return NaN;
  let str = String(val).replace(',', '.').replace(/\s/g, '').replace('%','');
  return parseFloat(str);
}

// --- initialize map ---
var map = L.map('map', { zoomControl: false }).setView([50.85, 4.35], 10);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// --- Custom Zoom Buttons ---
document.getElementById('zoom-in').addEventListener('click', () => map.zoomIn());
document.getElementById('zoom-out').addEventListener('click', () => map.zoomOut());

function getValueFromTheme(theme, lat, lon) {
  const data = themeCache[theme.name];
  if (!data) return "ERROR";

  let value = null;
  L.geoJSON(data).eachLayer(layer => {
    if (layer.getBounds().contains([lat, lon])) {
      value = layer.feature.properties[theme.property];
    }
  });
  return value ?? "N/A";
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
// DOM CONTENT LOADED
// ============================

document.addEventListener('DOMContentLoaded', () => {

  console.log("DOM Ready - variables globales accessibles");

  // --------------------------
  // RÉFÉRENCES DOM
  // --------------------------
  addressInput = document.getElementById('address-input');

  // --------------------------
  // INPUT ADRESSE
  // --------------------------
  if (addressInput) {
    addressInput.addEventListener('keydown', async (e) => {
      if (e.key !== 'Enter') return;
      const value = addressInput.value.trim();
      if (!value) return;
      if (addressMarkers.length >= MAX_ADDRESS_MARKERS) { alert('Maximum 3 markers reached'); return; }

      const result = await geocodeAddress(value);
      if (!result) { alert('Adresse introuvable à Bruxelles'); return; }

      addAddressMarker(result.lat, result.lon, value);
      addressInput.value = '';
    });
  }

  // --------------------------
  // BOUTONS THEME
  // --------------------------
  const themeButtons = document.querySelectorAll('#theme-dropdown div');
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentTheme = btn.dataset.theme;
      console.log('Theme selected:', currentTheme);
    });
  });

});

// ===============================
// FONCTION : GET SECTOR FROM LAT/lon
// ===============================
function getSectorFromLatlon([lat, lon]) {
  let found = null;
  if (!bruxellesLayer) return null;

  bruxellesLayer.eachLayer(layer => {
    if (layer.feature && layer.getBounds().contains([lat, lon])) {
      found = layer;
    }
  });

  return found;
}

/* ===============================
   FONCTION : CREER ICON MARKER
=============================== */
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

/* ===============================
   FONCTION : GEOCODING
=============================== */
async function geocodeAddress(address) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    address + ', Brussels, Belgium'
  )}&limit=1`;

  const res = await fetch(url, {
    headers: { 'Accept-Language': 'fr' }
  });
  const data = await res.json();
  if (!data.length) return null;

  return {
    lat: parseFloat(data[0].lat),
    lon: parseFloat(data[0].lon)
  };
}

/* ===============================
   FONCTION : AJOUTER MARKER ADRESSE
=============================== */
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

  // Adresse & secteur actifs
  activeAddress = { lat, lon, text: label };
  activeSector = getSectorFromLatlon([lat, lon]);

  // Supprimer marker au clic sur le X
  setTimeout(() => {
    const closeBtn = document.querySelector(`.close[data-id="${id}"]`);
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        map.removeLayer(marker);
        map.removeLayer(circle500);
        addressMarkers = addressMarkers.filter(m => m.id !== id);
      });
    }
  }, 50);

  map.setView([lat, lon], Math.max(map.getZoom(), 13));
}

// --- Créer un pane pour les communes avec un zIndex élevé ---
map.createPane('communesPane');
map.getPane('communesPane').style.zIndex = 650;  // plus haut que le pane par défaut

// --- Charger la couche de base des communes ---
fetch('shapefile_BX_only_geojson_4326.geojson')
  .then(res => res.json())
  .then(data => {
    bruxellesLayer = L.geoJSON(data, {
      pane: 'communesPane',
      style: function () {
        return {
          color: '#000',
          weight: 2,
          fillColor: 'none',
          fillOpacity: 0
        };
      },
      onEachFeature: function (feature, layer) {
        layer.bindTooltip(
          Object.entries(feature.properties)
            .slice(0, 5)
            .map(([k, v]) => k + ': ' + v)
            .join('<br>')
        );
      }
    }).addTo(map);

    map.fitBounds(bruxellesLayer.getBounds());
  });












// --- Legend functions ---

function showLegendTotalImmoSales() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Total sales 2013-2024</b></div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ffffcc;margin-right:6px;"></span>1–10</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ffeda0;margin-right:6px;"></span>11–100</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#feb24c;margin-right:6px;"></span>101–300</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#fd8d3c;margin-right:6px;"></span>301–500</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#fc4e2a;margin-right:6px;"></span>501–750</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#e31a1c;margin-right:6px;"></span>751–1000</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#b10026;margin-right:6px;"></span>> 1000</div>
  `;
}



function showLegend2_3FacadesHouses() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>2–3 facades houses total sales 2013–2024</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>151–200</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>101–150</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#ccff00;margin-right:6px;"></span>11–100</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#66ff66;margin-right:6px;"></span>1–10</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#2b2b2b;margin-right:6px;"></span>0</div>
  `;
}


function showLegend4orplusFacades() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>4 or plus facades houses total sales 2013–2024</b></div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ccffcc;margin-right:6px;"></span>0–10</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#33ff33;margin-right:6px;"></span>11–30</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>31+</div>
  `;
}



function showLegendApartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Apartments total sales 2013–2024</b></div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ccffcc;margin-right:6px;"></span>0–10</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#33ff33;margin-right:6px;"></span>11–50</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ffeb3b;margin-right:6px;"></span>51–100</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#3d71eb;margin-right:6px;"></span>101–300</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#8f6bdb;margin-right:6px;"></span>301–800</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>801–1000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>1000+</div>
  `;
}


function showLegendApartments2011() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Apartments sold 2011</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#290101;margin-right:6px;"></span>1000+</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#d7191c;margin-right:6px;"></span>701–1000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#f04e23;margin-right:6px;"></span>501–700</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fd8d3c;margin-right:6px;"></span>201–500</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fed976;margin-right:6px;"></span>101–200</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ffffcc;margin-right:6px;"></span>1–100</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span>0</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#2b2b2b;margin-right:6px;"></span>No data</div>
  `;
}


function showLegendApartments2021() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Apartments sold 2021</b></div>

  <div><span style="display:inline-block;width:20px;height:12px;background:#0a0a0a;margin-right:6px;"></span>≥ 5000</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#120101;margin-right:6px;"></span>1000 – 4999</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#d7191c;margin-right:6px;"></span>700 – 999</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#f04e23;margin-right:6px;"></span>500 – 699</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#fd8d3c;margin-right:6px;"></span>200 – 499</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#fed976;margin-right:6px;"></span>100 – 199</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ffffcc;margin-right:6px;"></span>1 – 99</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span>0</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#2b2b2b;margin-right:6px;"></span>No data</div>
  `;
}


function showLegendHouses2011() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Houses sold 2011</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#bf0d0d;margin-right:6px;"></span>≥ 200</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#e08f48;margin-right:6px;"></span>100 – 199</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#ffffcc;margin-right:6px;"></span>1 – 99</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span>0</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#000000;margin-right:6px;"></span>No data</div>
  `;
}




function showLegendHouses2021() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Houses sold 2021</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#bf0d0d;margin-right:6px;"></span>≥ 200</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#e08f48;margin-right:6px;"></span>100 – 199</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#ffffcc;margin-right:6px;"></span>1 – 99</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span>0</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#000000;margin-right:6px;"></span>No data</div>
  `;
}



function showLegendSalesMedian2013() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Sales Median Price 2013</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#7f0000;margin-right:6px;"></span>≥ 350,001</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#b30000;margin-right:6px;"></span>300,001 – 350,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#d7301f;margin-right:6px;"></span>250,001 – 300,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#ef6548;margin-right:6px;"></span>200,001 – 250,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fc8d59;margin-right:6px;"></span>180,001 – 200,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fdbb84;margin-right:6px;"></span>150,001 – 180,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fdd49e;margin-right:6px;"></span>120,001 – 150,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fee8c8;margin-right:6px;"></span>100,001 – 120,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fff7ec;margin-right:6px;"></span>1 – 100,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span>0</div>
  `;
}




function showLegendSalesMedian2023() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Sales Median Price 2023</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#7f0000;margin-right:6px;"></span>≥ 350,001</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#b30000;margin-right:6px;"></span>300,001 – 350,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#d7301f;margin-right:6px;"></span>250,001 – 300,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#ef6548;margin-right:6px;"></span>200,001 – 250,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fc8d59;margin-right:6px;"></span>180,001 – 200,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fdbb84;margin-right:6px;"></span>150,001 – 180,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fdd49e;margin-right:6px;"></span>120,001 – 150,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fee8c8;margin-right:6px;"></span>100,001 – 120,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fff7ec;margin-right:6px;"></span>1 – 100,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span>0</div>
  `;
}




function showLegendSalesMedianApartment2013() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Sales Median Price Apartment 2013</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#7f0000;margin-right:6px;"></span>350,001+</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#b30000;margin-right:6px;"></span>300,001–350,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#d7301f;margin-right:6px;"></span>250,001–300,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ef6548;margin-right:6px;"></span>200,001–250,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fc8d59;margin-right:6px;"></span>180,001–200,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fdbb84;margin-right:6px;"></span>150,001–180,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fdd49e;margin-right:6px;"></span>120,001–150,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fee8c8;margin-right:6px;"></span>100,001–120,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fff7ec;margin-right:6px;"></span>1–100,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#2b2b2b;margin-right:6px;"></span>0 / No data</div>
  `;
}


function showLegendSalesMedianApartment2023() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Sales Median Price Apartment 2023</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#7f0000;margin-right:6px;"></span>350,001+</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#b30000;margin-right:6px;"></span>300,001–350,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#d7301f;margin-right:6px;"></span>250,001–300,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ef6548;margin-right:6px;"></span>200,001–250,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fc8d59;margin-right:6px;"></span>180,001–200,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fdbb84;margin-right:6px;"></span>150,001–180,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fdd49e;margin-right:6px;"></span>120,001–150,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fee8c8;margin-right:6px;"></span>100,001–120,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fff7ec;margin-right:6px;"></span>1–100,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#2b2b2b;margin-right:6px;"></span>0 / No data</div>
  `;
}



function showLegendMS_P10_2013() {
    const legendDiv = document.querySelector('.legend');
    legendDiv.innerHTML = `
        <div><b>MS_P10_2013</b></div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#800026;margin-right:6px;"></span> > 350000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#BD0026;margin-right:6px;"></span> 300001 – 350000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#E31A1C;margin-right:6px;"></span> 250001 – 300000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FC4E2A;margin-right:6px;"></span> 200001 – 250000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FD8D3C;margin-right:6px;"></span> 180001 – 200000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FEB24C;margin-right:6px;"></span> 150001 – 180000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FED976;margin-right:6px;"></span> 120001 – 150000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FFEDA0;margin-right:6px;"></span> 100001 – 120000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FFFFCC;margin-right:6px;"></span> 1 – 100000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span> 0</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span> No data</div>
    `;
}

function showLegendMS_P10_2023() {
    const legendDiv = document.querySelector('.legend');
    legendDiv.innerHTML = `
        <div><b>MS_P10_2023</b></div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#800026;margin-right:6px;"></span> > 350000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#BD0026;margin-right:6px;"></span> 300001 – 350000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#E31A1C;margin-right:6px;"></span> 250001 – 300000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FC4E2A;margin-right:6px;"></span> 200001 – 250000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FD8D3C;margin-right:6px;"></span> 180001 – 200000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FEB24C;margin-right:6px;"></span> 150001 – 180000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FED976;margin-right:6px;"></span> 120001 – 150000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FFEDA0;margin-right:6px;"></span> 100001 – 120000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FFFFCC;margin-right:6px;"></span> 1 – 100000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span> 0</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span> No data</div>
    `;
}





function showLegendMS_P25_2013() {
    const legendDiv = document.querySelector('.legend');
    legendDiv.innerHTML = `
        <div><b>MS_P25_2013</b></div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#800026;margin-right:6px;"></span> > 350000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#BD0026;margin-right:6px;"></span> 300001 – 350000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#E31A1C;margin-right:6px;"></span> 250001 – 300000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FC4E2A;margin-right:6px;"></span> 200001 – 250000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FD8D3C;margin-right:6px;"></span> 180001 – 200000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FEB24C;margin-right:6px;"></span> 150001 – 180000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FED976;margin-right:6px;"></span> 120001 – 150000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FFEDA0;margin-right:6px;"></span> 100001 – 120000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FFFFCC;margin-right:6px;"></span> 1 – 100000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span> 0</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span> No data</div>
    `;
}


function showLegendMS_P25_2023() {
    const legendDiv = document.querySelector('.legend');
    legendDiv.innerHTML = `
        <div><b>MS_P25_2023</b></div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#800026;margin-right:6px;"></span> > 350000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#BD0026;margin-right:6px;"></span> 300001 – 350000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#E31A1C;margin-right:6px;"></span> 250001 – 300000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FC4E2A;margin-right:6px;"></span> 200001 – 250000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FD8D3C;margin-right:6px;"></span> 180001 – 200000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FEB24C;margin-right:6px;"></span> 150001 – 180000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FED976;margin-right:6px;"></span> 120001 – 150000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FFEDA0;margin-right:6px;"></span> 100001 – 120000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FFFFCC;margin-right:6px;"></span> 1 – 100000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span> 0</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span> No data</div>
    `;
}



function showLegendMS_P75_2013() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P75_2013</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#800026;margin-right:6px;"></span> > 350000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#BD0026;margin-right:6px;"></span> 300001 – 350000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#E31A1C;margin-right:6px;"></span> 250001 – 300000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FC4E2A;margin-right:6px;"></span> 200001 – 250000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FD8D3C;margin-right:6px;"></span> 180001 – 200000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FEB24C;margin-right:6px;"></span> 150001 – 180000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FED976;margin-right:6px;"></span> 120001 – 150000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FFEDA0;margin-right:6px;"></span> 100001 – 120000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FFFFCC;margin-right:6px;"></span> 1 – 100000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span> 0</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span> No data</div>
  `;
}


function showLegendMS_P75_2023() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P75_2023</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#800026;margin-right:6px;"></span> > 350000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#BD0026;margin-right:6px;"></span> 300001 – 350000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#E31A1C;margin-right:6px;"></span> 250001 – 300000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FC4E2A;margin-right:6px;"></span> 200001 – 250000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FD8D3C;margin-right:6px;"></span> 180001 – 200000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FEB24C;margin-right:6px;"></span> 150001 – 180000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FED976;margin-right:6px;"></span> 120001 – 150000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FFEDA0;margin-right:6px;"></span> 100001 – 120000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FFFFCC;margin-right:6px;"></span> 1 – 100000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span> 0</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span> No data</div>
  `;
}



function showLegendMS_P90_2013() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P90_2013</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#800026;margin-right:6px;"></span> > 1,000,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#BD0026;margin-right:6px;"></span> 700,001 – 1,000,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#E31A1C;margin-right:6px;"></span> 500,001 – 700,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FC4E2A;margin-right:6px;"></span> 300,001 – 500,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FD8D3C;margin-right:6px;"></span> 200,001 – 300,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FEB24C;margin-right:6px;"></span> 100,001 – 200,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FFFFCC;margin-right:6px;"></span> 1 – 100,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span> 0</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span> No data</div>
  `;
}


function showLegendMS_P90_2023() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P90_2023</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#800026;margin-right:6px;"></span> > 1,000,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#BD0026;margin-right:6px;"></span> 700,001 – 1,000,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#E31A1C;margin-right:6px;"></span> 500,001 – 700,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FC4E2A;margin-right:6px;"></span> 300,001 – 500,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FD8D3C;margin-right:6px;"></span> 200,001 – 300,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FEB24C;margin-right:6px;"></span> 100,001 – 200,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FFFFCC;margin-right:6px;"></span> 1 – 100,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span> 0</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span> No data</div>
  `;
}


function showLegendMS_P10_2013_all_houses() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P10_2013_all_houses</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#800026;margin-right:6px;"></span> > 550,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#BD0026;margin-right:6px;"></span> 450,001 – 550,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#E31A1C;margin-right:6px;"></span> 300,001 – 450,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FC4E2A;margin-right:6px;"></span> 200,001 – 300,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FD8D3C;margin-right:6px;"></span> 150,001 – 200,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FEB24C;margin-right:6px;"></span> 100,001 – 150,000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#FFFFCC;margin-right:6px;"></span> 1 – 100,000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#f0f0f0;margin-right:6px;"></span> 0</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span> No data</div>
  `;
}



function showLegendMS_P10_2013_apartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P10_2013_apartments</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>0 – 100000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1cf500;margin-right:6px;"></span>100001 – 150000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#3d71eb;margin-right:6px;"></span>150001 – 180000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#020f4a;margin-right:6px;"></span>180001 – 200000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#9d91e6;margin-right:6px;"></span>200001 – 250000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#3404b0;margin-right:6px;"></span>250001 et plus</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>No data</div>
  `;
}


function showLegendMS_P10_2023_all_houses() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P10_2023_all_houses</b></div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1cf500;margin-right:6px;"></span>150001 – 200000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#3d71eb;margin-right:6px;"></span>200001 – 300000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#3404b0;margin-right:6px;"></span>300001 – 400000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fc001d;margin-right:6px;"></span>400001 – 500000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#800026;margin-right:6px;"></span>500001 et plus</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>0 – 150000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>No data</div>
  `;
}


function showLegendMS_P10_2023_apartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P10_2023_apartments</b></div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fc001d;margin-right:6px;"></span>350001 et plus</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#5e0303;margin-right:6px;"></span>300001-350000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#3404b0;margin-right:6px;"></span>250001-300000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#9d91e6;margin-right:6px;"></span>200001-250000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#020f4a;margin-right:6px;"></span>180001-200000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#3d71eb;margin-right:6px;"></span>150001-180000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#043d1f;margin-right:6px;"></span>120001-150000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1cf500;margin-right:6px;"></span>100001-120000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>1–100000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>0</div>
        `;
        }


function showLegendMS_P25_2013_all_houses() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P25_2013_all_houses</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fff7bc;margin-right:6px;"></span>0 – 179000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fdd49e;margin-right:6px;"></span>180000 – 200000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fdbb84;margin-right:6px;"></span>200001 – 250000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fc8d59;margin-right:6px;"></span>250001 – 300000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#e34a33;margin-right:6px;"></span>300001 – 350000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#b30000;margin-right:6px;"></span>350001 – 400000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#775ced;margin-right:6px;"></span>400001 – 500000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>No data</div>
  `;
}





function showLegendMS_P25_2013_apartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P25_2013_apartments</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fff7bc;margin-right:6px;"></span>0 – 100000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fdd49e;margin-right:6px;"></span>100001 – 150000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fdbb84;margin-right:6px;"></span>150001 – 200000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#9a8cff;margin-right:6px;"></span>200001 – 250000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#775ced;margin-right:6px;"></span>250001+ </div>


    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>No data</div>
  `;
}


function showLegendMS_P25_2023_all_houses() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P25_2023_all_houses</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fff7bc;margin-right:6px;"></span>0 – 250000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fdd49e;margin-right:6px;"></span>250001 – 300000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fdbb84;margin-right:6px;"></span>300001 – 350000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fc8d59;margin-right:6px;"></span>350001 – 400000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#e34a33;margin-right:6px;"></span>400001 – 500000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#b30000;margin-right:6px;"></span>500001 – 700000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#775ced;margin-right:6px;"></span>700001 – 800000+</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>No data</div>
  `;
}




function showLegendMS_P25_2023_apartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P25_2023_apartments</b></div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fff7bc;margin-right:6px;"></span>0 – 150000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fdd49e;margin-right:6px;"></span>150001 – 180000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fdbb84;margin-right:6px;"></span>180001 – 200000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fc8d59;margin-right:6px;"></span>200001 – 250000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#b30000;margin-right:6px;"></span>250001 – 300000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#9c27b0;margin-right:6px;"></span>300001 – 350000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#775ced;margin-right:6px;"></span>350001 – 400000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#4b00a0;margin-right:6px;"></span>400001 et plus</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>No data</div>
  `;
}

function showLegendMS_P75_2013_all_houses() {
    const legendDiv = document.querySelector('.legend');
    legendDiv.innerHTML = `
        <div><b>MS_P75_2013_all_houses</b></div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#fdbb84;margin-right:6px;"></span>300.000 – 350.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#e31a1c;margin-right:6px;"></span>450.000 – 500.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#775ced;margin-right:6px;"></span>1.500.000 – 1.800.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#fff7bc;margin-right:6px;"></span>Autres valeurs</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>No data</div>
    `;
}

function showLegendMS_P75_2013_apartments() {
    const legendDiv = document.querySelector('.legend');
    legendDiv.innerHTML = `
        <div><b>MS_P75_2013_apartments</b></div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#ffffff;margin-right:6px;"></span>1 – 100000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#fefef0;margin-right:6px;"></span>100001 – 120000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#fdfde6;margin-right:6px;"></span>120001 – 150000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#ffffe0;margin-right:6px;"></span>150001 – 180000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#f7fcb9;margin-right:6px;"></span>180001 – 200000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#fed976;margin-right:6px;"></span>200001 – 250000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>250001 – 300000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#feb24c;margin-right:6px;"></span>300001 – 350000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#fd5f3c;margin-right:6px;"></span>350001 – 400000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#fc001d;margin-right:6px;"></span>400001 – 450000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#775ced;margin-right:6px;"></span>450001 – 500000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>No data</div>
    `;
}



function showLegendMS_P75_2023_all_houses() {
    const legendDiv = document.querySelector('.legend');
    legendDiv.innerHTML = `
        <div><b>MS_P75_2023_all_houses</b></div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FFD966;margin-right:6px;"></span>400.000 – 450.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#FF8000;margin-right:6px;"></span>500.000 – 550.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#4B00B5;margin-right:6px;"></span>1.500.000 – 1.800.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#1A1A1A;margin-right:6px;"></span>No data</div>
    `;
}


function showLegendMS_P75_2023_apartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P75_2023_apartments</b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffffe6;margin-right:6px;"></span>0–150.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>150.001–200.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd699;margin-right:6px;"></span>200.001–250.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9933;margin-right:6px;"></span>250.001–350.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#f77e2d;margin-right:6px;"></span>350.001–450.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#823603;margin-right:6px;"></span>450.001–550.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#bd86f7;margin-right:6px;"></span>550.001–650.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#6c04d9;margin-right:6px;"></span>650.001–750.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1f023d;margin-right:6px;"></span>750.001–850.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>0</div>
        `;
        }



function showLegendMS_P90_2013_all_houses() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P90_2013_all_houses</b></div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ff8000;margin-right:6px;"></span>350.000–400.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ff3300;margin-right:6px;"></span>400.000–450.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#6c04d9;margin-right:6px;"></span>700.000–750.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1f023d;margin-right:6px;"></span>2.000.000–2.100.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>0</div>
  `;
}


function showLegendMS_P90_2013_apartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
 <div><b>MS_P90_2013_apartments</b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffffe6;margin-right:6px;"></span>1–100.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffffcc;margin-right:6px;"></span>100.001–150.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>150.001–200.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd699;margin-right:6px;"></span>200.001–250.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9933;margin-right:6px;"></span>250.001–350.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff8000;margin-right:6px;"></span>350.001–450.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>450.001–550.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#bd86f7;margin-right:6px;"></span>550.001–650.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#6c04d9;margin-right:6px;"></span>650.001–750.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1f023d;margin-right:6px;"></span>750.001 et plus</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>0</div>
        `;
        }


function showLegendMS_P90_2023_all_houses() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P90_2023_all_houses</b></div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>550.000–600.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#bd86f7;margin-right:6px;"></span>600.000–650.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1f023d;margin-right:6px;"></span>2.000.000–2.500.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>0</div>
  `;
}

function showLegendMS_P90_2023_apartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
<div><b>MS_P90_2023_apartments</b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>200.000–250.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd699;margin-right:6px;"></span>250.001–350.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9933;margin-right:6px;"></span>350.001–450.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff8000;margin-right:6px;"></span>450.001–550.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>550.001–650.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#bd86f7;margin-right:6px;"></span>650.001–750.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#6c04d9;margin-right:6px;"></span>750.001–1.000.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1f023d;margin-right:6px;"></span>1.000.001–2.000.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>0–199.999</div>
  `;
}

function showLegendTotalRentP50LessorLegalPerson2024() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>TotalRentP50LessorLegalPerson2024</b></div>

<div><span style="display:inline-block;width:20px;height:12px;background:#fff199;margin-right:6px;"></span>0–550</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#b59514;margin-right:6px;"></span>550–750</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#bd9904;margin-right:6px;"></span>750–950</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#bf873d;margin-right:6px;"></span>950–1.300</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#bd7313;margin-right:6px;"></span>1.300–1.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#8f5304;margin-right:6px;"></span>1.500–2.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#e64c4c;margin-right:6px;"></span>2.000–2.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#b50000;margin-right:6px;"></span>2.500–3.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#5291e3;margin-right:6px;"></span>3.000–3.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#0f72f5;margin-right:6px;"></span>3.500–4.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#02459e;margin-right:6px;"></span>4.500–5.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#bd86f7;margin-right:6px;"></span>5.500–6.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#6c04d9;margin-right:6px;"></span>6.500–7.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1f023d;margin-right:6px;"></span>7.500–8.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>0 exact</div>
        `;
        }

function showLegendTotalRentP50LessorNeutralPerson2024() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>TotalRentP50LessorNeutralPerson2024</b></div>
   <div><span style="display:inline-block;width:20px;height:12px;background:#fff199;margin-right:6px;"></span>0–550</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#b59514;margin-right:6px;"></span>550–750</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#bd9904;margin-right:6px;"></span>750–950</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#bf873d;margin-right:6px;"></span>950–1.300</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#bd7313;margin-right:6px;"></span>1.300–1.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#8f5304;margin-right:6px;"></span>1.500–2.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#e64c4c;margin-right:6px;"></span>2.000–2.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#b50000;margin-right:6px;"></span>2.500–3.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#bd86f7;margin-right:6px;"></span>3.000–3.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#6c04d9;margin-right:6px;"></span>3.500–4.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1f023d;margin-right:6px;"></span>4.500–5.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>0 exact</div>
        `;
        }


function showLegendTotalRentP50TakerLegalPerson2024() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>TotalRentP50TakerLegalPerson2024</b></div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fc001d;margin-right:6px;"></span>350001 et plus</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#5e0303;margin-right:6px;"></span>300001-350000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#3404b0;margin-right:6px;"></span>250001-300000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#9d91e6;margin-right:6px;"></span>200001-250000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#020f4a;margin-right:6px;"></span>180001-200000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#3d71eb;margin-right:6px;"></span>150001-180000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#043d1f;margin-right:6px;"></span>120001-150000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1cf500;margin-right:6px;"></span>100001-120000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>1–100000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>0</div>
        `;
        }



// --- Loyer Moyen ---

function showLegendAvgRent() {
    const legendDiv = document.querySelector('.legend');  // cible le div existant
    legendDiv.innerHTML = `
        <b>Loyer moyen</b><br>
        <div><span style="display:inline-block;width:20px;height:12px;background:#6a0dad;margin-right:6px;"></span>900 et plus</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>800–899</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>700–799</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>600–699</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#fff199;margin-right:6px;"></span>0–599</div>
    `;
}



// --- Median Price Apartment 2011 ---

function showLegendMedianPriceApartment2011() {
    const legendDiv = document.querySelector('.legend');  // cible le div existant
    legendDiv.innerHTML = `
        <b>Median Price Apartment 2011</b><br>
        <div><span style="display:inline-block;width:20px;height:12px;background:#6a0dad;margin-right:6px;"></span>250.000-300.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>200.000-250.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>150.000-200.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>100.000-150.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#fff199;margin-right:6px;"></span>0–100.000</div>
    `;
}

// --- Median Price Apartment 2021 ---

function showLegendMedianPriceApartment2021() {
    const legendDiv = document.querySelector('.legend');  // cible le div existant
    legendDiv.innerHTML = `
        <b>Median Price Apartment 2021</b><br>
                <div><span style="display:inline-block;width:20px;height:12px;background:#320269;margin-right:6px;"></span>300.000-350.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#ff0015;margin-right:6px;"></span>250.000-300.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>200.000-250.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>150.000-200.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>100.000-150.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#fff199;margin-right:6px;"></span>0–100.000</div>
    `;
}



// --- Median Price Houses 2011 ---

function showLegendMedianPriceHouses2011() {
    const legendDiv = document.querySelector('.legend');  // cible le div existant
    legendDiv.innerHTML = `
        <b>Median Price Houses 2011</b><br>
<div><span style="display:inline-block;width:20px;height:12px;background:#020005;margin-right:6px;"></span>750.000–850.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#1b0138;margin-right:6px;"></span>650.000–750.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#9f59f0;margin-right:6px;"></span>550.000–650.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#6a0dad;margin-right:6px;"></span>500.000–550.000</div>

        <div><span style="display:inline-block;width:20px;height:12px;background:#ff0015;margin-right:6px;"></span>450.000–500.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#ff3300;margin-right:6px;"></span>400.000–450.000</div>

        <div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>350.000–400.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#f59207;margin-right:6px;"></span>300.000–350.000</div>

        <div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>200.000–300.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#fff199;margin-right:6px;"></span>0–200.000</div>
    `;
}

// --- Median Price Houses 2021 ---

function showLegendMedianPriceHouses2021() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Median Price Houses 2021</b><br>

        <div><span style="display:inline-block;width:20px;height:12px;background:#020005;margin-right:6px;"></span>750.000–850.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#1b0138;margin-right:6px;"></span>650.000–750.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#9f59f0;margin-right:6px;"></span>550.000–650.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#6a0dad;margin-right:6px;"></span>500.000–550.000</div>

        <div><span style="display:inline-block;width:20px;height:12px;background:#ff0015;margin-right:6px;"></span>450.000–500.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#ff3300;margin-right:6px;"></span>400.000–450.000</div>

        <div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>350.000–400.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#f7ee40;margin-right:6px;"></span>300.000–350.000</div>

        <div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>200.000–300.000</div>
        <div><span style="display:inline-block;width:20px;height:12px;background:#fff199;margin-right:6px;"></span>0–200.000</div>
    `;
}




// --- NbLogSoc ---

function showLegendNbLogSoc() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Nb Log Soc</b><br>

        <div><span style="display:inline-block;width:20px;height:12px;background:#020005;margin-right:6px;"></span>8.000–10.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b0138;margin-right:6px;"></span>6.000–8.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#9f59f0;margin-right:6px;"></span>5.000–6.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#6a0dad;margin-right:6px;"></span>3.000–5.000</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ff0015;margin-right:6px;"></span>2.500–3.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff3300;margin-right:6px;"></span>2.000–2.500</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>1.500–2.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#f7ee40;margin-right:6px;"></span>1.000–1.500</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>500–1.000</div>
    `;
}


// --- NbBatResid ---

function showLegendNbLogSoc() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Nb Bat Resid</b><br>

    <div><span style="display:inline-block;width:20px;height:12px;background:#6a00cc;margin-right:6px;"></span>30.000 – 60.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#9b00ff;margin-right:6px;"></span>15.000 – 30.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#b366f7;margin-right:6px;"></span>10.000 – 15.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ff3300;margin-right:6px;"></span>8.000 – 10.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>5.000 – 8.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ffcc00;margin-right:6px;"></span>3.000 – 5.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fff199;margin-right:6px;"></span>0 – 3.000</div>
    `;
}


// --- Tx2_3_Facades ---

function showLegendTx2_3_Facades() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Taux Bâtiments à 2-3 façades</b><br>

    <div><span style="display:inline-block;width:20px;height:12px;background:#6a0dad;margin-right:6px;"></span>80–85</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>70–79</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>60–69</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#e6e6e6;margin-right:6px;"></span>0–59</div>
    `;
}



// --- Taux 4 Facades ---

function showLegendTx4_Facades() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Taux Bâtiments à 4 façades</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#6a0dad;margin-right:6px;"></span>10-15</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>5–9</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#faaf2d;margin-right:6px;"></span>1–4</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffffff;margin-right:6px;"></span>0</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>
    `;
}


// --- Taux Immeubles Appartements ---

function showLegendImmeubleAppart() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Taux Immeubles Appartements</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#6a0dad;margin-right:6px;"></span>35 et plus</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0015;margin-right:6px;"></span>30–34</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#f58840;margin-right:6px;"></span>20–29</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>10–19</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#faaf2d;margin-right:6px;"></span>0–9</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>
    `;
}


// --- Gentrification ---

function showLegendGentrification() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Gentrification</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#07eb2d;margin-right:6px;"></span>En cours</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffffff;margin-right:6px;"></span>Non observée</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>
    `;
}


// --- Vols 2000 ---

function showLegendVols2000() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Vols 2000</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>30.000–40.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>13.000–16.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>10.000–13.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>7.000–10.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff99;margin-right:6px;"></span>0–7.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>
    `;
}

// --- Vols 2014 ---

function showLegendVols2014() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Vols 2014</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>30.000–40.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>13.000–16.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>10.000–13.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>7.000–10.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff99;margin-right:6px;"></span>0–7.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>
    `;
}

// --- Vols 2024 ---

function showLegendVols2024() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Vols 2024</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>30.000–40.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>13.000–16.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>10.000–13.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>7.000–10.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff99;margin-right:6px;"></span>0–7.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>
    `;
}


// --- Coups et Blessures 2000 ---

function showLegendCoupsBlessures2000() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Coups et Blessures 2000</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>4.000 et plus</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>2.000–3.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>1.000–1.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>0–999</div>
    `;
}

// --- Coups et Blessures 2014 ---

function showLegendCoupsBlessures2014() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Coups et Blessures 2014</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>4.000 et plus</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>2.000–3.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>1.000–1.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>0–999</div>
    `;
}

// --- Coups et Blessures 2024 ---

function showLegendCoupsBlessures2024() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Coups et Blessures 2024</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>4.000 et plus</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>2.000–3.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>1.000–1.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>0–999</div>


    `;
}







// --- Drogues 2024 ---

function showLegendDrogues2024() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Drogues 2024</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>4.000 et plus</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>2.000–3.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>1.000–1.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>0–999</div>

    `;
}





// --- Drogues 2014 ---

function showLegendDrogues2014() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Drogues 2014</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>4.000 et plus</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>2.000–3.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>1.000–1.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>0–999</div>


    `;
}



// --- Drogues 2000 ---

function showLegendDrogues2000() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Drogues 2000</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>4.000 et plus</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>2.000–3.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>1.000–1.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>0–999</div>


    `;
}





// --- Alcool 2000 ---

function showLegendAlcool2000() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Alcool 2000</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#2c136b;margin-right:6px;"></span>1.000–1.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#6a0dad;margin-right:6px;"></span>700–999</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ff1a1a;margin-right:6px;"></span>500–699</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>150–499</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>100–149</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>50–99</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#fff199;margin-right:6px;"></span>0–49</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>


    `;
}


// --- Alcool 2014 ---

function showLegendAlcool2014() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Alcool 2014</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#2c136b;margin-right:6px;"></span>1.000–1.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#6a0dad;margin-right:6px;"></span>700–999</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ff1a1a;margin-right:6px;"></span>500–699</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>150–499</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>100–149</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>50–99</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#fff199;margin-right:6px;"></span>0–49</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>


    `;
}



// --- Alcool 2024 ---

function showLegendAlcool2024() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Alcool 2024</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#2c136b;margin-right:6px;"></span>1.000–1.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#6a0dad;margin-right:6px;"></span>700–999</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ff1a1a;margin-right:6px;"></span>500–699</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>150–499</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>100–149</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>50–99</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#fff199;margin-right:6px;"></span>0–49</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>


    `;
}









// --- Armes 2024 ---

function showLegendArmes2024() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Armes 2024</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>800 et plus</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>300–799</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>180–299</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>0–179</div>


    `;
}


// --- Armes 2014 ---

function showLegendArmes2014() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Armes 2014</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>800 et plus</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>300–799</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>180–299</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>0–179</div>


    `;
}




// --- Armes 2000 ---

function showLegendArmes2000() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Armes 2000</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>800 et plus</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>300–799</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>180–299</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>0–179</div>


    `;
}














// --- Secu Publiq 2000 ---

function showLegendSecuPubliq2000() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Atteintes à la sécurité publique 2000</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#4b0082;margin-right:6px;"></span>1.000–1.750</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>700–999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>500–699</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>300–499</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>0–299</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>


    `;
}


// --- Secu Publiq 2014 ---

function showLegendSecuPubliq2014() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Atteintes à la sécurité publique 2014</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#4b0082;margin-right:6px;"></span>1.000–1.750</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>700–999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>500–699</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>300–499</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>0–299</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>


    `;
}


// --- Secu Publiq 2024 ---

function showLegendSecuPubliq2024() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Atteintes à la sécurité publique 2024</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#4b0082;margin-right:6px;"></span>1.000–1.750</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>700–999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>500–699</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>300–499</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>0–299</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>


    `;
}



// --- Dégradation de la propriété 2024 ---

function showLegendDegProp2024() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Dégradation de la propriété 2024</b><br>

    <div><b></b></div>
<<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>4.000–5.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>3.000–4.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>2.000–3.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>1.500–2.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>1.000–1.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>500–1.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#e6e6e6;margin-right:6px;"></span>&lt;500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>


    `;
}


// --- Dégradation de la propriété 2014 ---

function showLegendDegProp2014() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Dégradation de la propriété 2014</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>4.000–5.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>3.000–4.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>2.000–3.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>1.500–2.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>1.000–1.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>500–1.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#e6e6e6;margin-right:6px;"></span>&lt;500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>


    `;
}


// --- Dégradation de la propriété 2000 ---

function showLegendDegProp2000() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Dégradation de la propriété 2000</b><br>

    <div><b></b></div>
<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>4.000–5.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff0000;margin-right:6px;"></span>3.000–4.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>2.000–3.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>1.500–2.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>1.000–1.500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>500–1.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#e6e6e6;margin-right:6px;"></span>&lt;500</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>

<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>


    `;
}







// --- Cambriolages 2000 ---

function showLegendCambriolages2000() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Cambriolages 2000</b><br>

<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>2.000 et plus</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#f2340a;margin-right:6px;"></span>1.500–1.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>1.000–1.499</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>500–999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>&lt;500</div>


    `;
}


// --- Cambriolages 2014 ---

function showLegendCambriolages2014() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Cambriolages 2014</b><br>

 <div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>2.000 et plus</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#f2340a;margin-right:6px;"></span>1.500–1.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>1.000–1.499</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>500–999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>&lt;500</div>


    `;
}



// --- Cambriolages 2024 ---

function showLegendCambriolages2024() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Cambriolages 2024</b><br>

<div><span style="display:inline-block;width:20px;height:12px;background:#1b032b;margin-right:6px;"></span>2.000 et plus</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#f2340a;margin-right:6px;"></span>1.500–1.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>1.000–1.499</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>500–999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffff66;margin-right:6px;"></span>&lt;500</div>


    `;
}





// --- Taux Végétation ---

function showLegendTxVeget() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Taux Végétation</b><br>

<div><span style="display:inline-block;width:20px;height:12px;background:#ff9933;margin-right:6px;"></span>15–19</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffb366;margin-right:6px;"></span>20–29</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd699;margin-right:6px;"></span>30–39</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffead1;margin-right:6px;"></span>40–49</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#33cc33;margin-right:6px;"></span>50–59</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#66cc33;margin-right:6px;"></span>60–69</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#009900;margin-right:6px;"></span>70–79</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#006600;margin-right:6px;"></span>80–89</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#003300;margin-right:6px;"></span>90–100</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#454342;margin-right:6px;"></span>Valeur non valide</div>


    `;
}


// --- Taux Végétation Accèssible au Public ---

function showLegendTxVegetPubliq() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Taux Végétation Accèssible au Public</b><br>



<!-- Tranches basses : rouge → orange → jaune -->
<div><span style="display:inline-block;width:20px;height:12px;background:#ff3300;margin-right:6px;"></span>0–9</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>10–14</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffb366;margin-right:6px;"></span>15–19</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>20–29</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#fff199;margin-right:6px;"></span>30–39</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#fff5b1;margin-right:6px;"></span>40–49</div>

<!-- Tranches supérieures : vert clair → vert foncé -->
<div><span style="display:inline-block;width:20px;height:12px;background:#ccff99;margin-right:6px;"></span>50–59</div>

    `;
}



// --- Revenue Median ---

function showLegendRevenuMedian() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Revenue Median</b><br>
<div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>&lt; 13</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>13–15</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>16–18</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#4b0082;margin-right:6px;"></span>19–21</div>


    `;
}


// --- Taux Naissances Sans Revenue Travail ---

function showLegendTxNaissSansRevenue() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Taux Naissances Sans Revenue Travail</b><br>
<div><span style="display:inline-block;width:20px;height:12px;background:#290457;margin-right:6px;"></span>≥ 30</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ed0707;margin-right:6px;"></span>20–29</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#e0a80b;margin-right:6px;"></span>10–19</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#edc707;margin-right:6px;"></span>5–9</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>&lt; 5</div>

    `;
}

// --- Taux Naissances Meres Etrangeres ---

function showLegendTxNaissMeresEtrangeres() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Taux Naissances Meres Etrangeres</b><br>
<div><span style="display:inline-block;width:20px;height:12px;background:#290457;margin-right:6px;"></span>≥ 60</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ed0707;margin-right:6px;"></span>50–59</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#e0a80b;margin-right:6px;"></span>40–49</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#edc707;margin-right:6px;"></span>30–39</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>&lt; 30</div>

    `;
}




// --- Nb Sieges Sociaux ---

function showLegendSiegesSoc() {
    const legendDiv = document.querySelector('.legend');

    legendDiv.innerHTML = `
        <b>Nb Sieges Sociaux</b><br>
<div><span style="display:inline-block;width:20px;height:12px;background:#4b0082;margin-right:6px;"></span>≥ 10.000</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#30030e;margin-right:6px;"></span>5.000–9.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#cc0000;margin-right:6px;"></span>3.000–4.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>2.000–2.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>1.500–1.999</div>
<div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>&lt; 1.500</div>

    `;
}





















function showLegendTotal_Population_2014() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Total_Population_2014</b></div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fc001d;margin-right:6px;"></span>350001 et plus</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#5e0303;margin-right:6px;"></span>300001-350000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#3404b0;margin-right:6px;"></span>250001-300000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#9d91e6;margin-right:6px;"></span>200001-250000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#020f4a;margin-right:6px;"></span>180001-200000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#3d71eb;margin-right:6px;"></span>150001-180000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#043d1f;margin-right:6px;"></span>120001-150000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1cf500;margin-right:6px;"></span>100001-120000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>1–100000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>0</div>
        `;
        }



function showLegendTotal_Population_2025() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Total_Population_2025</b></div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#34A853;margin-right:6px;"></span>1–100000000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>0</div>
        `;
        }





function showLegendAvg_Revenue_2023() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Avg_Revenue_2023</b></div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>0–12.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>12.000–20.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ffb366;margin-right:6px;"></span>20.000–30.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>30.000–40.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>40.000–50.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ff3300;margin-right:6px;"></span>50.000–60.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#cc0000;margin-right:6px;"></span>60.000–70.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#990000;margin-right:6px;"></span>70.000–80.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#6a0dad;margin-right:6px;"></span>80.000–90.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#320269;margin-right:6px;"></span>90.000–100.000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>Valeur non valide</div>
        `;
        }

function showLegendAvg_Revenue_2013() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Avg_Revenue_2013</b></div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>0–12.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ffd700;margin-right:6px;"></span>12.000–20.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ffb366;margin-right:6px;"></span>20.000–30.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ff9900;margin-right:6px;"></span>30.000–40.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ff6600;margin-right:6px;"></span>40.000–50.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#ff3300;margin-right:6px;"></span>50.000–60.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#cc0000;margin-right:6px;"></span>60.000–70.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#990000;margin-right:6px;"></span>70.000–80.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#6a0dad;margin-right:6px;"></span>80.000–90.000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#320269;margin-right:6px;"></span>90.000–100.000</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>Valeur non valide</div>
        `;
        }








// --- COLOR FUNCTIONS ---

function getColorTotalImmoSales(d){
    if(d > 1000) return '#ff0000';   // rouge pur (max impact)
    if(d > 750)  return '#ff4d00';   // rouge-orange
    if(d > 500)  return '#ff9900';   // orange fort
    if(d > 300)  return '#ffcc00';   // jaune-orange
    if(d > 100)  return '#ccff00';   // jaune-vert flashy
    if(d > 10)   return '#66ff00';   // vert vif
    if(d > 0)    return '#ccff99';   // vert très clair
    return '#2b2b2b';                // no data
}


function getColor2_3FacadesHouses(d){
    if(d > 150) return '#ff0000';   // rouge (très élevé)
    if(d > 100) return '#ff9900';   // orange (élevé)
    if(d > 10)  return '#ccff00';   // jaune-vert (moyen)
    if(d > 0)   return '#66ff66';   // vert clair (faible)
    return '#2b2b2b';               // 0 / no data
}

function getColor4orplusFacades(d){
    if(d > 30) return '#ff6600';   // orange = élevé
    if(d > 10) return '#33ff33';   // vert clair = moyen
    if(d >= 0) return '#ccffcc';   // vert très clair = faible
    return '#2b2b2b';              // valeur manquante ou 0
}

function getColorApartments(d){
    if(d > 1000) return '#ff0000';   // rouge vif = très élevé
    if(d > 800)  return '#ff6600';   // orange foncé = élevé
    if(d > 300)  return '#8f6bdb';   // violet = moyen-élevé
    if(d > 100)  return '#3d71eb';   // bleu = moyen
    if(d > 50)   return '#ffeb3b';   // jaune = faible-moyen (51-100)
    if(d > 10)   return '#33ff33';   // vert clair = faible (11-50)
    if(d >= 0)   return '#ccffcc';   // vert très clair = très faible (0-10)
    return '#1a1a1a';                // 0 ou valeur manquante
}


function getColorMedianSalesPrice2013(d){
    if(d > 350000) return '#7f0000';   // très haut → bordeaux profond
    if(d > 300000) return '#b30000';   // rouge foncé
    if(d > 250000) return '#d7301f';   // rouge
    if(d > 200000) return '#ef6548';   // orange-rouge
    if(d > 180000) return '#fc8d59';   // orange
    if(d > 150000) return '#fdbb84';   // orange clair
    if(d > 120000) return '#fdd49e';   // beige/orange
    if(d > 100000) return '#fee8c8';   // très clair
    if(d > 0)      return '#fff7ec';   // quasi blanc
    return '#2b2b2b';                 // 0 / no data
}


function getColorMedianSalesPrice2023(d){
    if(d > 350000) return '#7f0000';   // très haut → bordeaux profond
    if(d > 300000) return '#b30000';   // rouge foncé
    if(d > 250000) return '#d7301f';   // rouge
    if(d > 200000) return '#ef6548';   // orange-rouge
    if(d > 180000) return '#fc8d59';   // orange
    if(d > 150000) return '#fdbb84';   // orange clair
    if(d > 120000) return '#fdd49e';   // beige/orange
    if(d > 100000) return '#fee8c8';   // très clair
    if(d > 0)      return '#fff7ec';   // quasi blanc
    return '#2b2b2b';                 // 0 / no data
}



function getColorMedianSalesPriceApartment2013(d){
    if(d > 350000) return '#7f0000';   // très haut
    if(d > 300000) return '#b30000';
    if(d > 250000) return '#d7301f';
    if(d > 200000) return '#ef6548';
    if(d > 180000) return '#fc8d59';
    if(d > 150000) return '#fdbb84';
    if(d > 120000) return '#fdd49e';
    if(d > 100000) return '#fee8c8';
    if(d > 0)      return '#fff7ec';
    return '#2b2b2b'; // 0 / no data
}



function getColorMedianSalesPriceApartment2023(d){
    if(d > 350000) return '#7f0000';   // très haut
    if(d > 300000) return '#b30000';
    if(d > 250000) return '#d7301f';
    if(d > 200000) return '#ef6548';
    if(d > 180000) return '#fc8d59';
    if(d > 150000) return '#fdbb84';
    if(d > 120000) return '#fdd49e';
    if(d > 100000) return '#fee8c8';
    if(d > 0)      return '#fff7ec';
    return '#2b2b2b'; // 0 / no data
}

function getColorMS_P10_2013(d){
    if (isNaN(d)) return '#1a1a1a';       // pas de données (gris très foncé)
    if (d > 350000) return '#800026';     // rouge foncé
    if (d > 300000) return '#BD0026';     // rouge vif
    if (d > 250000) return '#E31A1C';     // rouge orangé
    if (d > 200000) return '#FC4E2A';     // orange
    if (d > 180000) return '#FD8D3C';     // orange clair
    if (d > 150000) return '#FEB24C';     // jaune-orangée
    if (d > 120000) return '#FED976';     // jaune clair
    if (d > 100000) return '#FFEDA0';     // jaune très clair
    if (d > 0)      return '#FFFFCC';     // jaune très pâle
    return '#f0f0f0';                     // 0
}


function getColorMS_P10_2023(d){
    if (isNaN(d)) return '#1a1a1a';       // pas de données (gris très foncé)
    if (d > 350000) return '#800026';     // rouge foncé
    if (d > 300000) return '#BD0026';     // rouge vif
    if (d > 250000) return '#E31A1C';     // rouge orangé
    if (d > 200000) return '#FC4E2A';     // orange
    if (d > 180000) return '#FD8D3C';     // orange clair
    if (d > 150000) return '#FEB24C';     // jaune-orangée
    if (d > 120000) return '#FED976';     // jaune clair
    if (d > 100000) return '#FFEDA0';     // jaune très clair
    if (d > 0)      return '#FFFFCC';     // jaune très pâle
    return '#f0f0f0';                     // 0
}


function getColorMS_P25_2013(d){
    if (isNaN(d)) return '#1a1a1a';       // pas de données (gris très foncé)
    if (d > 350000) return '#800026';     // rouge foncé
    if (d > 300000) return '#BD0026';     // rouge vif
    if (d > 250000) return '#E31A1C';     // rouge orangé
    if (d > 200000) return '#FC4E2A';     // orange
    if (d > 180000) return '#FD8D3C';     // orange clair
    if (d > 150000) return '#FEB24C';     // jaune-orangée
    if (d > 120000) return '#FED976';     // jaune clair
    if (d > 100000) return '#FFEDA0';     // jaune très clair
    if (d > 0)      return '#FFFFCC';     // jaune très pâle
    return '#f0f0f0';                     // 0
}


function getColorMS_P25_2023(d){
    if (isNaN(d)) return '#1a1a1a';       // pas de données (gris très foncé)
    if (d > 350000) return '#800026';     // rouge foncé
    if (d > 300000) return '#BD0026';     // rouge vif
    if (d > 250000) return '#E31A1C';     // rouge orangé
    if (d > 200000) return '#FC4E2A';     // orange
    if (d > 180000) return '#FD8D3C';     // orange clair
    if (d > 150000) return '#FEB24C';     // jaune-orangée
    if (d > 120000) return '#FED976';     // jaune clair
    if (d > 100000) return '#FFEDA0';     // jaune très clair
    if (d > 0)      return '#FFFFCC';     // jaune très pâle
    return '#f0f0f0';                     // 0
}





function getColorMS_P75_2013(d){
    if (isNaN(d)) return '#1a1a1a';   // no data

    if (d > 350000) return '#800026'; // rouge très foncé
    if (d > 300000) return '#BD0026'; // rouge
    if (d > 250000) return '#E31A1C'; // rouge clair
    if (d > 200000) return '#FC4E2A'; // orange-rouge
    if (d > 180000) return '#FD8D3C'; // orange
    if (d > 150000) return '#FEB24C'; // orange clair
    if (d > 120000) return '#FED976'; // jaune
    if (d > 100000) return '#FFEDA0'; // jaune clair
    if (d > 0)      return '#FFFFCC'; // très clair

    return '#f0f0f0'; // 0
}


function getColorMS_P75_2023(d){
    if (isNaN(d)) return '#1a1a1a';   // no data

    if (d > 350000) return '#800026'; // rouge très foncé
    if (d > 300000) return '#BD0026'; // rouge
    if (d > 250000) return '#E31A1C'; // rouge clair
    if (d > 200000) return '#FC4E2A'; // orange-rouge
    if (d > 180000) return '#FD8D3C'; // orange
    if (d > 150000) return '#FEB24C'; // orange clair
    if (d > 120000) return '#FED976'; // jaune
    if (d > 100000) return '#FFEDA0'; // jaune clair
    if (d > 0)      return '#FFFFCC'; // très clair

    return '#f0f0f0'; // 0
}

function getColorMS_P90_2013(d){
    if (isNaN(d)) return '#1a1a1a';   // no data

    if (d > 1000000) return '#800026'; // très élevé (rouge foncé)
    if (d > 700000)  return '#BD0026'; // rouge
    if (d > 500000)  return '#E31A1C'; // rouge clair
    if (d > 300000)  return '#FC4E2A'; // orange-rouge
    if (d > 200000)  return '#FD8D3C'; // orange
    if (d > 100000)  return '#FEB24C'; // orange clair
    if (d > 0)       return '#FFFFCC'; // très clair (faible)

    return '#f0f0f0'; // 0
}

function getColorMS_P90_2023(d){
    if (isNaN(d)) return '#1a1a1a';   // no data

    if (d > 1000000) return '#800026'; // très élevé (rouge foncé)
    if (d > 700000)  return '#BD0026'; // rouge
    if (d > 500000)  return '#E31A1C'; // rouge clair
    if (d > 300000)  return '#FC4E2A'; // orange-rouge
    if (d > 200000)  return '#FD8D3C'; // orange
    if (d > 100000)  return '#FEB24C'; // orange clair
    if (d > 0)       return '#FFFFCC'; // très clair (faible)

    return '#f0f0f0'; // 0
}


function getColorMS_P10_2013_all_houses(d){
    if (isNaN(d)) return '#2b2b2b';   // no data

    if (d > 550000) return '#7a0177'; // violet foncé (max)
    if (d > 450000) return '#c51b8a'; // violet
    if (d > 300000) return '#f768a1'; // rose
    if (d > 200000) return '#2b8cbe'; // bleu
    if (d > 150000) return '#41b6c4'; // bleu clair
    if (d > 100000) return '#7fcdbb'; // turquoise
    if (d > 0)      return '#ffffb2'; // jaune clair

    return '#f0f0f0'; // 0
}


function getColorMS_P10_2013_apartments(d){
    if (isNaN(d)) return '#1a1a1a';       // No data
    if (d > 250000) return '#3404b0';     // violet foncé
    if (d > 200000) return '#9d91e6';     // violet clair
    if (d > 180000) return '#020f4a';     // bleu foncé
    if (d > 150000) return '#3d71eb';     // bleu
    if (d > 100000) return '#1cf500';     // vert vif
    if (d > 0)      return '#fff4b8';     // très clair
    return '#f0f0f0';                     // 0
}

function getColorMS_P10_2023_all_houses(d){
if(d > 350000) return '#df71f0';
    if(d > 300000) return '#fc001d';
    if(d > 250000) return '#3404b0';
    if(d > 200000) return '#9d91e6';
    if(d > 180000) return '#020f4a';
    if(d > 150000) return '#3d71eb';
    if(d > 120000) return '#043d1f';
    if(d > 100000) return '#1cf500';
    if(d > 0) return '#fff4b8';
    return '#1a1a1a';
}

function getColorMS_P10_2023_apartments(d){
    if (isNaN(d)) return '#1a1a1a';       // No data
    if (d > 350000) return '#fc001d';     // ≥ 350001
    if (d > 300000) return '#5e0303';     // 300001 – 350000
    if (d > 250000) return '#3404b0';     // 250001 – 300000
    if (d > 200000) return '#9d91e6';     // 200001 – 250000
    if (d > 180000) return '#020f4a';     // 180001 – 200000
    if (d > 150000) return '#3d71eb';     // 150001 – 180000
    if (d > 120000) return '#043d1f';     // 120001 – 150000
    if (d > 100000) return '#1cf500';     // 100001 – 120000
    if (d > 0)      return '#fff4b8';     // 1 – 100000
    return '#f0f0f0';                     // 0
}


function getColorMS_P25_2013_all_houses(d){
    if (isNaN(d)) return '#1a1a1a'; // No data

    if (d > 400000) return '#775ced'; // 🔥 rouge pur (TRÈS visible)
    if (d > 350000) return '#b30000'; // rouge foncé
    if (d > 300000) return '#e34a33'; // rouge
    if (d > 250000) return '#fc8d59'; // orange foncé
    if (d > 200000) return '#fdbb84'; // orange
    if (d > 180000) return '#fdd49e'; // jaune-orange
    if (d > 0)      return '#fff7bc'; // jaune clair

    return '#f0f0f0'; // 0
}

function getColorMS_P25_2013_apartments(d){
    if (isNaN(d)) return '#1a1a1a';

    if (d > 250000) return '#775ced'; // violet clair
    if (d > 200000) return '#9a8cff'; // orange foncé
    if (d > 150000) return '#fdbb84'; // orange
    if (d > 100000) return '#fdd49e'; // jaune-orange
    if (d > 0)      return '#fff7bc'; // jaune clair

    return '#f0f0f0';
}

function getColorMS_P25_2023_all_houses(d){
    if (isNaN(d)) return '#1a1a1a';       // No data

    if (d > 700000) return '#775ced';     // violet (max très visible)
    if (d > 500000) return '#b30000';     // rouge très foncé
    if (d > 400000) return '#e34a33';     // rouge
    if (d > 350000) return '#fc8d59';     // orange-rouge
    if (d > 300000) return '#fdbb84';     // orange
    if (d > 250000) return '#fdd49e';     // jaune-orange
    if (d > 0)      return '#fff7bc';     // jaune clair

    return '#f0f0f0';                     // 0
}

function getColorMS_P25_2023_apartments(d){
    if (isNaN(d)) return '#1a1a1a';       // No data

    if (d > 400000) return '#4b00a0';     // violet foncé max
    if (d > 350000) return '#775ced';     // violet
    if (d > 300000) return '#9c27b0';     // violet clair
    if (d > 250000) return '#b30000';     // rouge foncé
    if (d > 200000) return '#fc8d59';     // rouge-orange
    if (d > 180000) return '#fdbb84';     // orange
    if (d > 150000) return '#fdd49e';     // jaune-orange
    if (d > 0)      return '#fff7bc';     // jaune clair

    return '#f0f0f0';                     // 0
}

function getColorMS_P75_2013_all_houses(d) {
    if (isNaN(d) || d === 0) return '#1a1a1a'; // No data ou 0

    if (d >= 1500000 && d <= 1800000) return '#775ced'; // violet pour la tranche supérieure
    if (d >= 450000 && d <= 500000) return '#e31a1c';   // rouge pour tranche moyenne
    if (d >= 300000 && d <= 350000) return '#fdbb84';   // orange clair pour tranche inférieure

    return '#fff7bc'; // valeurs en dehors de ces tranches
}



function getColorMS_P75_2013_apartments(d) {
    if (isNaN(d)) return '#1a1a1a'; // pas de données

    if (d > 450000) return '#1f023d'; // violet très intense, sommet
    if (d > 400000) return '#6600d1'; // violet foncé
    if (d > 350000) return '#b67ff0'; // violet clair

    if (d > 300000) return '#fc001d'; // rouge vif
    if (d > 250000) return '#fd5f3c'; // rouge orangé
    if (d > 200000) return '#feb24c'; // orange
    if (d > 180000) return '#fed976'; // jaune-orange
    if (d > 150000) return '#fff4b8'; // jaune clair
    if (d > 120000) return '#fff7bc'; // très clair
    if (d > 100000) return '#f7fcb9'; // très très clair
    if (d > 0)      return '#ffffe0'; // presque blanc

    return '#f0f0f0'; // zéro
}


function getColorMS_P75_2023_all_houses(d) {
    if (isNaN(d)) return '#1a1a1a'; // pas de données

    if (d > 1500000) return '#4B00B5'; // violet intense pour 1.500.000 – 1.800.000
    if (d > 500000)  return '#FF8000'; // violet marqué pour 500.000 – 550.000
    if (d > 400000)  return '#FFD966'; // jaune/orange pour 400.000 – 450.000



    return '#F0F0F0'; // toutes les autres valeurs restent grisées
}


function getColorMS_P75_2023_apartments(d) {
    if(d >= 750001) return '#1f023d';       // 750.001–850.000 → violet foncé
    if(d >= 650001) return '#6c04d9';       // 650.001–750.000 → violet moyen
    if(d >= 550001) return '#bd86f7';       // 550.001–650.000 → violet clair

    if(d >= 450001) return '#823603';       // 450.001–550.000 → orange foncé
    if(d >= 350001) return '#f77e2d';       // 350.001–450.000 → orange
    if(d >= 250001) return '#ff9933';       // 250.001–350.000 → orange clair
    if(d >= 200001) return '#ffd699';       // 200.001–250.000 → jaune clair
    if(d >= 150001) return '#fff4b8';       // 150.001–200.000 → jaune très clair
    if(d >= 1)      return '#ffffe6';       // 0–150.000 → jaune pâle
    return '#1a1a1a';                        // 0 → noir
}



function getColorMS_P90_2013_all_houses(d) {
    if(d >= 2000000 && d <= 2100000) return '#1f023d';   // 2.000.000–2.100.000 → violet foncé
    if(d >= 700000 && d <= 750000) return '#6c04d9';     // 700.000–750.000 → violet moyen
    if(d >= 400000 && d <= 450000) return '#ff3300';     // 400.000–450.000 → orange foncé
    if(d >= 350000 && d <= 400000) return '#ff8000';     // 350.000–400.000 → orange
    if(d > 0) return '#1a1a1a';                          // Tout le reste positif → noir
    return '#1a1a1a';                                     // 0 → noir
}


function getColorMS_P90_2013_apartments(d) {
    if(d >= 750001) return '#1f023d';       // 750.001 et plus → violet foncé
    if(d >= 650001) return '#6c04d9';       // 650.001–750.000 → violet moyen
    if(d >= 550001) return '#bd86f7';       // 550.001–650.000 → violet clair

    if(d >= 450001) return '#ff6600';       // 450.001–550.000 → orange foncé
    if(d >= 350001) return '#ff8000';       // 350.001–450.000 → orange
    if(d >= 250001) return '#ff9933';       // 250.001–350.000 → orange clair
    if(d >= 200001) return '#ffd699';       // 200.001–250.000 → jaune clair
    if(d >= 150001) return '#fff4b8';       // 150.001–200.000 → jaune très clair
    if(d >= 100001) return '#ffffcc';       // 100.001–150.000 → jaune pâle
    if(d >= 1)      return '#ffffe6';       // 1–100.000 → jaune très très clair
    return '#1a1a1a';                        // 0 → noir
}


function getColorMS_P90_2023_all_houses(d) {
    if(d >= 2000000 && d <= 2500000) return '#1f023d';  // 2.000.000–2.500.000 → violet foncé
    if(d >= 600000 && d <= 650000) return '#bd86f7';    // 600.000–650.000 → violet clair
    if(d >= 550000 && d <= 600000) return '#ff6600';    // 550.000–600.000 → orange foncé
    if(d > 0) return '#1a1a1a';                          // Tout le reste positif → noir
    return '#1a1a1a';                                     // 0 → noir
}

function getColorMS_P90_2023_apartments(d) {
    if(d >= 1000000 && d <= 2000000) return '#1f023d';   // 1.000.000–2.000.000 → violet foncé
    if(d >= 750000 && d < 1000000) return '#6c04d9';     // 750.000–1.000.000 → violet moyen
    if(d >= 650000 && d < 750000) return '#bd86f7';      // 650.000–750.000 → violet clair
    if(d >= 550000 && d < 650000) return '#ff6600';      // 550.000–650.000 → orange foncé
    if(d >= 450000 && d < 550000) return '#ff8000';      // 450.000–550.000 → orange
    if(d >= 350000 && d < 450000) return '#ff9933';      // 350.000–450.000 → orange clair
    if(d >= 250000 && d < 350000) return '#ffd699';      // 250.000–350.000 → jaune-orangée
    if(d >= 200000 && d < 250000) return '#fff4b8';      // 200.000–250.000 → jaune très clair
    return '#1a1a1a';                                     // Tout le reste (<200.000) → noir
}

function getColorTotalRentP50LessorLegalPerson2024(d) {
 // Violet pour tranches supérieures
    if(d >= 7500 && d <= 8500) return '#1f023d';   // 7.500–8.500 → violet foncé
    if(d >= 6500 && d < 7500) return '#6c04d9';    // 6.500–7.500 → violet moyen
    if(d >= 5500 && d < 6500) return '#bd86f7';    // 5.500–6.500 → violet clair

    // Bleu pour tranches fortes
    if(d >= 4500 && d < 5500) return '#02459e';    // 4.500–5.500 → rouge foncé
    if(d >= 3500 && d < 4500) return '#0f72f5';    // 3.500–4.500 → rouge vif
    if(d >= 3000 && d < 3500) return '#5291e3';    // 3.000–3.500 → rouge clair

    // Rouge pour tranches moyennes
    if(d >= 2500 && d < 3000) return '#b50000';    // 2.500–3.000 → orange foncé
    if(d >= 2000 && d < 2500) return '#e64c4c';    // 2.000–2.500 → orange clair

    // Orange pour tranches basses (saturé et visible)
    if(d >= 1500 && d < 2000) return '#8f5304';    // 1.500–2.000 → jaune vif
    if(d >= 1300 && d < 1500) return '#bd7313';    // 1.300–1.500 → jaune soutenu
    if(d >= 950 && d < 1300)  return '#bf873d';    // 950–1.300 → jaune foncé

    // Jaune pour tranches basses (saturé et visible)

    if(d >= 750 && d < 950)   return '#bd9904';    // 750–950 → jaune-orange
    if(d >= 550 && d < 750)   return '#b59514';    // 550–750 → jaune clair
    if(d >= 0 && d < 550)     return '#fff199';    // 0–550 → jaune clair visible

    return '#1a1a1a';                               // 0 exact → noir
}





function getColorTotalRentP50LessorNeutralPerson2024(d) {
   // Violet pour tranches supérieures

    if(d >= 4500 && d < 5500) return '#1f023d';   // 7.500–8.500 → violet foncé
    if(d >= 3500 && d < 4500) return '#6c04d9';    // 6.500–7.500 → violet moyen
    if(d >= 3000 && d < 3500) return '#bd86f7';    // 5.500–6.500 → violet clair

    // Rouge pour tranches moyennes
    if(d >= 2500 && d < 3000) return '#b50000';    // 2.500–3.000 → orange foncé
    if(d >= 2000 && d < 2500) return '#e64c4c';    // 2.000–2.500 → orange clair

    // Orange pour tranches basses (saturé et visible)
    if(d >= 1500 && d < 2000) return '#8f5304';    // 1.500–2.000 → jaune vif
    if(d >= 1300 && d < 1500) return '#bd7313';    // 1.300–1.500 → jaune soutenu
    if(d >= 950 && d < 1300)  return '#bf873d';    // 950–1.300 → jaune foncé

    // Jaune pour tranches basses (saturé et visible)

    if(d >= 750 && d < 950)   return '#bd9904';    // 750–950 → jaune-orange
    if(d >= 550 && d < 750)   return '#b59514';    // 550–750 → jaune clair
    if(d >= 0 && d < 550)     return '#fff199';    // 0–550 → jaune clair visible

    return '#1a1a1a';                               // 0 exact → noir
}


// --- Loyer Moyen ---

function getColorAvgRent(d) {
    if (isNaN(d)) return '#454342';          // valeur non valide → gris foncé

    if (d >= 900) return '#6a0dad';         // violet foncé
    if (d >= 800) return '#ff6600';         // orange foncé
    if (d >= 700) return '#ff9900';         // orange clair
    if (d >= 600) return '#ffd700';         // jaune saturé
    if (d >= 0)   return '#fff199';         // jaune clair

    return '#1a1a1a';                        // valeur exacte 0
}




function getColorMedianPriceApartment2011(d){
    if (isNaN(d)) return '#2b2b2b';        // no data

    if (d >= 250000) return '#6a0dad';     // 250.000–300.000 → violet
    if (d >= 200000) return '#ff6600';     // 200.000–250.000 → orange foncé
    if (d >= 150000) return '#ff9900';     // 150.000–200.000 → orange clair
    if (d >= 100000) return '#ffd700';     // 100.000–150.000 → jaune
    if (d >= 0)      return '#fff199';     // 0–100.000 → jaune clair

    return '#2b2b2b';                     // fallback
}


function getColorMedianPriceApartment2021(d){
    if (isNaN(d)) return '#2b2b2b';        // no data

    if (d >= 300000) return '#320269';     // 300.000-350.000 → violet
    if (d >= 250000) return '#ff0015';     // 250.000–300.000 → violet
    if (d >= 200000) return '#ff6600';     // 200.000–250.000 → orange foncé
    if (d >= 150000) return '#ff9900';     // 150.000–200.000 → orange clair
    if (d >= 100000) return '#ffd700';     // 100.000–150.000 → jaune
    if (d >= 0)      return '#fff199';     // 0–100.000 → jaune clair

    return '#2b2b2b';                     // fallback
}



function getColorMedianPriceHouses2011(d){
    if (isNaN(d)) return '#2b2b2b';        // no data

if (d >= 750000) return '#020005';   // 750.000–850.000 → violet foncé
if (d >= 650000) return '#1b0138 ';   // 650.000–750.000 → violet foncé
if (d >= 550000) return '#9f59f0';   // 550.000–650.000 → violet foncé
if (d >= 500000) return '#6a0dad';   // 500.000–550.000 → violet
if (d >= 450000) return '#ff0015';   // 450.000–500.000 → rouge
if (d >= 400000) return '#ff3300';   // 400.000–450.000 → rouge-orange
if (d >= 350000) return '#ff6600';   // 350.000–400.000 → orange foncé
if (d >= 300000) return '#f59207';   // 300.000–350.000 → orange

// tranches basses (inchangées)
if (d >= 200000) return '#ffd700';   // jaune
    if (d >= 0)      return '#fff199';     // 0–100.000 → jaune clair

    return '#2b2b2b';                     // fallback
}


function getColorMedianPriceHouses2021(d){
    if (isNaN(d)) return '#2b2b2b';        // no data

if (d >= 750000) return '#020005';   // 750.000–850.000 → violet foncé
if (d >= 650000) return '#1b0138 ';   // 650.000–750.000 → violet foncé
if (d >= 550000) return '#9f59f0';   // 550.000–650.000 → violet foncé
if (d >= 500000) return '#6a0dad';   // 500.000–550.000 → violet
if (d >= 450000) return '#ff0015';   // 450.000–500.000 → rouge
if (d >= 400000) return '#ff3300';   // 400.000–450.000 → rouge-orange
if (d >= 350000) return '#ff6600';   // 350.000–400.000 → orange foncé
if (d >= 300000) return '#f7ee40';   // 300.000–350.000 → orange

// tranches basses (inchangées)
if (d >= 200000) return '#ffd700';   // jaune
    if (d >= 0)      return '#fff199';     // 0–100.000 → jaune clair

    return '#2b2b2b';                     // fallback
}
































function getColorTotal_Population_2014(d) {
    d = Number(d);
    if (d > 0)   return '#34A853';
    return '#1a1a1a';
}


function getColorTotal_Population_2025(d){
    d = Number(d);
    if (d > 0)   return '#34A853';
    return '#1a1a1a';
}


function getColorAvg_Revenue_2023(d) {

    if (isNaN(d)) return '#ffffff'; // valeur non valide

    if (d >= 90000) return '#320269';   // 90.000–100.000 → violet foncé
    if (d >= 80000) return '#6a0dad';   // 80.000–90.000 → violet

    if (d >= 70000) return '#990000';   // 70.000–80.000 → rouge foncé
    if (d >= 60000) return '#cc0000';   // 60.000–70.000 → rouge

    if (d >= 50000) return '#ff3300';   // 50.000–60.000 → rouge/orange
    if (d >= 40000) return '#ff6600';   // 40.000–50.000 → orange foncé
    if (d >= 30000) return '#ff9900';   // 30.000–40.000 → orange

    if (d >= 20000) return '#ffb366';   // 20.000–30.000 → orange clair
    if (d >= 12000) return '#ffd700';   // 12.000–20.000 → jaune foncé

    if (d > 0) return '#fff4b8';       // 0–12.000 → jaune clair

    return '#ffffff'; // fallback
}

function getColorAvg_Revenue_2013(d){

    if (isNaN(d)) return '#000000'; // valeur non valide

    if (d >= 90000) return '#320269';   // 90.000–100.000 → violet foncé
    if (d >= 80000) return '#6a0dad';   // 80.000–90.000 → violet

    if (d >= 70000) return '#990000';   // 70.000–80.000 → rouge foncé
    if (d >= 60000) return '#cc0000';   // 60.000–70.000 → rouge

    if (d >= 50000) return '#ff3300';   // 50.000–60.000 → rouge/orange
    if (d >= 40000) return '#ff6600';   // 40.000–50.000 → orange foncé
    if (d >= 30000) return '#ff9900';   // 30.000–40.000 → orange

    if (d >= 20000) return '#ffb366';   // 20.000–30.000 → orange clair
    if (d >= 12000) return '#ffd700';   // 12.000–20.000 → jaune foncé

    if (d > 0) return '#fff4b8';       // 0–12.000 → jaune clair

    return '#000000'; // fallback
}





// --- Load theme GeoJSON ---
function loadThemeGeoJSON(filePath, valueProperty, getColorFunc, legendFunc){
    if(currentThemeLayer){ map.removeLayer(currentThemeLayer); }

    fetch(filePath)
      .then(res => res.json())
      .then(data => {
          function style(feature){
              return {
                  fillColor: getColorFunc(feature.properties[valueProperty]),
                  weight: 1,
                  opacity: 1,
                  fillOpacity: 0.3
              };
          }

          currentThemeLayer = L.geoJSON(data, {
              style: style,
              onEachFeature: function(feature, layer){
                  layer.bindTooltip(Object.entries(feature.properties)
                    .map(([k,v]) => k + ': ' + v).join('<br>'));
              }
          }).addTo(map);

          map.fitBounds(currentThemeLayer.getBounds());
          legendFunc(); // Affiche la légende correspondante
      });
}

// --- UI interactions ---
document.getElementById('btn-center').addEventListener('click', () => map.setView([50.85,4.35],10));

document.getElementById('btn-toggle').addEventListener('click', function(){
  if(bruxellesLayer){
    if(polygonsOn){
      map.removeLayer(bruxellesLayer);
      polygonsOn=false;
      this.classList.add('secondary');
      this.innerText='Polygones OFF';
    } else {
      bruxellesLayer.addTo(map);
      polygonsOn=true;
      this.classList.remove('secondary');
      this.innerText='Polygones ON';
    }
  }
});

document.getElementById('btn-filters-off').addEventListener('click', function() {
  if(currentThemeLayer){
    map.removeLayer(currentThemeLayer);
    currentThemeLayer = null;
  }
  activeTheme = null;
  if(bruxellesLayer && !map.hasLayer(bruxellesLayer)){ bruxellesLayer.addTo(map); }
  document.getElementById('filters-content').innerHTML = 'choose a theme';
  polygonsOn = true;
  document.getElementById('btn-toggle').classList.remove('secondary');
  document.getElementById('btn-toggle').innerText = 'Polygones ON';
  document.querySelector('.legend').innerHTML = '';
  map.setView([50.85,4.35], 10);
});

// --- Dropdown toggles génériques ---
function toggleDropdown(btnId, dropdownId){
  document.getElementById(btnId).addEventListener('click', function(){
    const dd = document.getElementById(dropdownId);
    dd.style.display = dd.style.display === 'flex' ? 'none' : 'flex';
  });
}

toggleDropdown('btn-city', 'city-dropdown');
toggleDropdown('btn-theme', 'theme-dropdown');
toggleDropdown('btn-filters', 'filters-dropdown');



// Theme -> filters mapping
const themeFilters = {
  'Total sales 2013-2024': ['house', 'appart'],
  '2-3 facades houses total sales 2013-2024': ['house', 'appart'],
  Rents: ['house', 'appart'],
  SocioEconomics: ['quantity','work status','occupation','revenue','age group'],
  Commerces: ['boutiques','fabrics'],
  Housing: ['houses','appartments','hlm'],
  Security: ['crimes','violence','incivilité'],
  Pollution: ['air','noise'],
  GreenArea: ['travel time','distance']
};




// Theme selection

document.querySelectorAll('#theme-dropdown div').forEach(el => {
  el.addEventListener('click', function(){
    var theme = this.dataset.theme;
    activeTheme = theme;
    var filtersDiv = document.getElementById('filters-content');
    var filters = themeFilters[theme] || [];
    filtersDiv.innerHTML = filters.length>0 ? filters.join(', ') : 'choose a theme';

    /* document.getElementById('theme-dropdown').style.display = 'none';*/





    if(theme === 'Total sales 2013-2024'){
      loadThemeGeoJSON(
      'merge_total_sales_2013_2024_BX_only_with_geofile.geojson',
      'total_sales_2013_2024', getColorTotalImmoSales, showLegendTotalImmoSales);
    }



    if(theme === '2-3 facades houses total sales 2013-2024'){
    loadThemeGeoJSON(
        'merge_sales_2_3_facades_BX_only_with_geofile.geojson',
        'total_sales', getColor2_3FacadesHouses, showLegend2_3FacadesHouses
    );
}


if(theme === '4 or plus facades houses total sales 2013-2024'){
    loadThemeGeoJSON(
        'merge_sales_4_or_plus_facades_BX_only_with_geofile.geojson',
        'total_sales', getColor4orplusFacades, showLegend4orplusFacades
    );
}





if(theme === 'apartments total sales 2013-2024'){
    loadThemeGeoJSON(
        'merge_apartments_BX_only_with_geofile.geojson',
        'total_sales', getColorApartments, showLegendApartments
    );
}


if(theme === 'median sale price 2013'){
    loadThemeGeoJSON(
        'merge_sales_median_2013_BX_only_with_geofile.geojson',
        'MS_P50 (MEDIAN_PRICE)', getColorMedianSalesPrice2013, showLegendSalesMedian2013
    );
}


if(theme === 'median sale price 2023'){
    loadThemeGeoJSON(
        'merge_sales_median_2023_BX_only_with_geofile.geojson',
        'MS_P50 (MEDIAN_PRICE)', getColorMedianSalesPrice2023, showLegendSalesMedian2023
    );
}

if(theme === 'median sale price apartment 2013'){
    loadThemeGeoJSON(
        'merge_sales_median_apartment_2013_BX_only_with_geofile.geojson',
        'MS_P50 (MEDIAN_PRICE)', getColorMedianSalesPriceApartment2013, showLegendSalesMedianApartment2013
    );
}


if(theme === 'median sale price apartment 2023'){
    loadThemeGeoJSON(
        'merge_sales_median_apartment_2023_BX_only_with_geofile.geojson',
        'MS_P50 (MEDIAN_PRICE)', getColorMedianSalesPriceApartment2023, showLegendSalesMedianApartment2023
    );
}


if(theme === 'MS_P10_2013'){
    loadThemeGeoJSON(
        'merge_sales_ms_p10_2013_BX_only_with_geofile.geojson',
        'MS_P10', getColorMS_P10_2013, showLegendMS_P10_2013
    );
}

if(theme === 'MS_P10_2023'){
    loadThemeGeoJSON(
        'merge_sales_ms_p10_2023_BX_only_with_geofile.geojson',
        'MS_P10', getColorMS_P10_2023, showLegendMS_P10_2023
    );
}



if(theme === 'MS_P25_2013'){
    loadThemeGeoJSON(
        'merge_sales_ms_p25_2013_BX_only_with_geofile.geojson',
        'MS_P25', getColorMS_P25_2013, showLegendMS_P25_2013
    );
}

if(theme === 'MS_P25_2023'){
    loadThemeGeoJSON(
        'merge_sales_ms_p25_2023_BX_only_with_geofile.geojson',
        'MS_P25', getColorMS_P25_2023, showLegendMS_P25_2023
    );
}



if(theme === 'MS_P75_2013'){
    loadThemeGeoJSON(
        'merge_sales_ms_p75_2013_BX_only_with_geofile.geojson',
        'MS_P75', getColorMS_P75_2013, showLegendMS_P75_2013
    );
}



if(theme === 'MS_P75_2023'){
    loadThemeGeoJSON(
        'merge_sales_ms_p75_2023_BX_only_with_geofile.geojson',
        'MS_P75', getColorMS_P75_2023, showLegendMS_P75_2023
    );
}

if(theme === 'MS_P90_2013'){
    loadThemeGeoJSON(
        'merge_sales_ms_p90_2013_BX_only_with_geofile.geojson',
        'MS_P90', getColorMS_P90_2013, showLegendMS_P90_2013
    );
}


if(theme === 'MS_P90_2023'){
    loadThemeGeoJSON(
        'merge_sales_ms_p90_2023_BX_only_with_geofile.geojson',
        'MS_P90', getColorMS_P90_2023, showLegendMS_P90_2023
    );
}

if (theme === 'MS_P10_2013_all_houses') {

    // Supprimer la couche précédente si elle existe
    if (currentThemeLayer) {
        map.removeLayer(currentThemeLayer);
    }

    fetch('merge_sales_ms_p10_2013_BX_only_with_geofile_all_houses.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature) {
                    // 🔍 Affiche toutes les propriétés pour vérifier le nom exact
                    console.log(feature.properties);

                    // Remplace "ms_p10_2013_all_houses" par le nom exact qui apparaît dans la console
                    let num = feature.properties["MS_P10"];

                    // Dégradé de couleurs
                    let color;
                    if (isNaN(num)) color = '#1a1a1a';           // pas de données
                    else if (num > 550000) color = '#800026';    // très haut
                    else if (num > 450000) color = '#BD0026';
                    else if (num > 300000) color = '#E31A1C';
                    else if (num > 200000) color = '#FC4E2A';
                    else if (num > 150000) color = '#FD8D3C';
                    else if (num > 100000) color = '#FEB24C';
                    else if (num > 0)      color = '#FFFFCC';
                    else color = '#f0f0f0';                       // 0

                    return {
                        color: '#000',
                        weight: 1,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
               onEachFeature: function(feature, layer) {
    // Convertir les propriétés en texte multiligne
    let tooltipText = Object.entries(feature.properties)
        .map(([key, value]) => `${key}: ${value}`)
        .join('<br>'); // <br> pour faire des retours à la ligne

    // Lier le tooltip
    layer.bindTooltip(tooltipText, {
        direction: 'center',
        permanent: false,
        className: 'my-tooltip'
    });
}
            }).addTo(map);

            // Affiche la légende
            showLegendMS_P10_2013_all_houses();
        });
}


if (theme === 'MS_P10_2013_apartments') {

    // Supprimer la couche précédente si elle existe
    if (currentThemeLayer) {
        map.removeLayer(currentThemeLayer);
    }

    fetch('merge_sales_ms_p10_2013_BX_only_with_geofile_Appartements.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature) {
                    // 🔍 Affiche toutes les propriétés pour vérifier le nom exact
                    console.log(feature.properties);

                    // Remplace "MS_P10" par le nom exact qui apparaît dans la console
                    let num = feature.properties["MS_P10"];

                    // Dégradé de couleurs adapté pour les appartements
                    let color;
                    if (isNaN(num)) color = '#1a1a1a';       // pas de données
                    else if (num > 250000) color = '#3404b0'; // violet foncé
                    else if (num > 200000) color = '#9d91e6'; // violet clair
                    else if (num > 180000) color = '#020f4a'; // bleu foncé
                    else if (num > 150000) color = '#3d71eb'; // bleu
                    else if (num > 100000) color = '#1cf500'; // vert vif
                    else if (num > 0)      color = '#fff4b8'; // très clair
                    else color = '#f0f0f0';                   // 0

                    return {
                        color: '#000',
                        weight: 1,
                        fillColor: color,
                        fillOpacity: 0.3
                    };
                },
                onEachFeature: function(feature, layer) {
                    // Tooltip multiligne pour toutes les propriétés
                    let tooltipText = Object.entries(feature.properties)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join('<br>');

                    layer.bindTooltip(tooltipText, {
                        direction: 'center',
                        permanent: false,
                        className: 'my-tooltip'
                    });
                }
            }).addTo(map);

            // Affiche la légende
            showLegendMS_P10_2013_apartments();
        });
}






if (theme === 'MS_P10_2023_all_houses') {

    // Supprimer la couche précédente si elle existe
    if (currentThemeLayer) {
        map.removeLayer(currentThemeLayer);
    }

    fetch('merge_sales_ms_p10_2023_BX_only_with_geofile_all_houses.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature) {
                    // 🔍 Affiche toutes les propriétés pour vérifier le nom exact
                    console.log(feature.properties);

                    // Remplace "MS_P10_2023" par le nom exact de la propriété qui contient la valeur
                    let num = feature.properties["MS_P10"];

                    // Dégradé de couleurs adapté aux tranches
                    let color;
                    if (isNaN(num)) color = '#1a1a1a';      // pas de données
                    else if (num > 500000) color = '#800026';
                    else if (num > 400000) color = '#fc001d';
                    else if (num > 300000) color = '#3404b0';
                    else if (num > 200000) color = '#3d71eb';
                    else if (num > 150000) color = '#1cf500';
                    else if (num >= 0) color = '#fff4b8';
                    else color = '#f0f0f0';                 // zéro

                    return {
                        color: '#000',
                        weight: 1,
                        fillColor: color,
                        fillOpacity: 0.3
                    };
                },
                onEachFeature: function(feature, layer) {
                    // Convertir les propriétés en texte multiligne
                    let tooltipText = Object.entries(feature.properties)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join('<br>');

                    // Lier le tooltip
                    layer.bindTooltip(tooltipText, {
                        direction: 'center',
                        permanent: false,
                        className: 'my-tooltip'
                    });
                }
            }).addTo(map);

            // Affiche la légende
            showLegendMS_P10_2023_all_houses();
        });
}


if (theme === 'MS_P10_2023_apartments') {

    // Supprimer la couche précédente si elle existe
    if (currentThemeLayer) {
        map.removeLayer(currentThemeLayer);
    }

    fetch('merge_sales_ms_p10_2023_BX_only_with_geofile_apartments.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature) {
                    // Vérifier le nom exact de la propriété
                    console.log(feature.properties);

                    let num = feature.properties["MS_P10"]; // ajuste si le nom exact diffère

                    let color;
                    if (isNaN(num)) color = '#1a1a1a';
                    else if (num > 350000) color = '#fc001d';
                    else if (num > 300000) color = '#5e0303';
                    else if (num > 250000) color = '#3404b0';
                    else if (num > 200000) color = '#9d91e6';
                    else if (num > 180000) color = '#020f4a';
                    else if (num > 150000) color = '#3d71eb';
                    else if (num > 120000) color = '#043d1f';
                    else if (num > 100000) color = '#1cf500';
                    else if (num > 0)      color = '#fff4b8';
                    else color = '#f0f0f0';

                    return {
                        color: '#000',
                        weight: 1,
                        fillColor: color,
                        fillOpacity: 0.3 // transparent
                    };
                },
                onEachFeature: function(feature, layer) {
                    // Tooltip multiligne pour lire toutes les propriétés
                    let tooltipText = Object.entries(feature.properties)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join('<br>');
                    layer.bindTooltip(tooltipText, {
                        direction: 'center',
                        permanent: false,
                        className: 'my-tooltip'
                    });
                }
            }).addTo(map);

            // Affiche la légende adaptée
            showLegendMS_P10_2023_apartments();
        });
}






if (theme === 'MS_P25_2013_all_houses') {

    // Supprimer la couche précédente si elle existe
    if (currentThemeLayer) {
        map.removeLayer(currentThemeLayer);
    }

    fetch('merge_sales_ms_p25_2013_BX_only_with_geofile_all_houses.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature) {

                    // 🔍 DEBUG → voir le vrai nom du champ
                    console.log(feature.properties);

                    // ⚠️ ADAPTE ICI si besoin (très important)
                    let num = feature.properties["MS_P25"];
                    // ou parfois juste:
                    // let num = feature.properties["MS_P25"];

                    num = parseNumber(num);

                    let color = getColorMS_P25_2013_all_houses(num);

                    return {
                        color: '#000',
                        weight: 1,
                        fillColor: color,
                        fillOpacity: 0.5 // plus transparent comme tu voulais
                    };
                },

                onEachFeature: function(feature, layer) {

                    // Tooltip propre multilignes
                    let tooltipText = Object.entries(feature.properties)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join('<br>');

                    layer.bindTooltip(tooltipText, {
                        direction: 'center',
                        permanent: false,
                        className: 'my-tooltip'
                    });
                }

            }).addTo(map);

            // ✅ Afficher la légende
            showLegendMS_P25_2013_all_houses();
        });
}

if(theme === 'MS_P25_2013_apartments'){
    loadThemeGeoJSON(
        'merge_sales_ms_p25_2013_BX_only_with_geofile_Appartements.geojson',
        'MS_P25', getColorMS_P25_2013_apartments, showLegendMS_P25_2013_apartments
    );
}


if(theme === 'MS_P25_2023_all_houses'){
    loadThemeGeoJSON(
        'merge_sales_ms_p25_2023_BX_only_with_geofile_all_houses.geojson',
        'MS_P25', getColorMS_P25_2023_all_houses, showLegendMS_P25_2023_all_houses
    );
}

if(theme === 'MS_P25_2023_apartments'){
    loadThemeGeoJSON(
        'merge_sales_ms_p25_2023_BX_only_with_geofile_apartments.geojson',
        'MS_P25', getColorMS_P25_2023_apartments, showLegendMS_P25_2023_apartments
    );
}






if(theme === 'MS_P75_2013_all_houses'){
    loadThemeGeoJSON(
        'merge_sales_ms_p75_2013_BX_only_with_geofile_all_houses.geojson',
        'MS_P75', getColorMS_P75_2013_all_houses, showLegendMS_P75_2013_all_houses
    );
}

if(theme === 'MS_P75_2013_apartments'){
    loadThemeGeoJSON(
        'merge_sales_ms_p75_2013_BX_only_with_geofile_apartments.geojson',
        'MS_P75', getColorMS_P75_2013_apartments, showLegendMS_P75_2013_apartments
    );
}

if(theme === 'MS_P75_2023_all_houses'){
    loadThemeGeoJSON(
        'merge_sales_ms_p75_2023_BX_only_with_geofile_all_houses.geojson',
        'MS_P75', getColorMS_P75_2023_all_houses, showLegendMS_P75_2023_all_houses
    );
}

if(theme === 'MS_P75_2023_apartments'){
    loadThemeGeoJSON(
        'merge_sales_ms_p75_2023_BX_only_with_geofile_apartments.geojson',
        'MS_P75', getColorMS_P75_2023_apartments, showLegendMS_P75_2023_apartments
    );
}



if(theme === 'MS_P90_2013_all_houses'){
    loadThemeGeoJSON(
        'merge_sales_ms_p90_2013_BX_only_with_geofile_all_houses.geojson',
        'MS_P90', getColorMS_P90_2013_all_houses, showLegendMS_P90_2013_all_houses
    );
}

if(theme === 'MS_P90_2013_apartments'){
    loadThemeGeoJSON(
        'merge_sales_ms_p90_2013_BX_only_with_geofile_apartments.geojson',
        'MS_P90', getColorMS_P90_2013_apartments, showLegendMS_P90_2013_apartments
    );
}

if(theme === 'MS_P90_2023_all_houses'){
    loadThemeGeoJSON(
        'merge_sales_ms_p90_2023_BX_only_with_geofile_all_houses.geojson',
        'MS_P90', getColorMS_P90_2023_all_houses, showLegendMS_P90_2023_all_houses
    );
}

if(theme === 'MS_P90_2023_apartments'){
    loadThemeGeoJSON(
        'merge_sales_ms_p90_2023_BX_only_with_geofile_apartments.geojson',
        'MS_P90', getColorMS_P90_2023_apartments, showLegendMS_P90_2023_apartments
    );
}

if(theme === 'TotalRentP50LessorLegalPerson2024'){
    loadThemeGeoJSON(
        'merged_StatisticalUnitWideRealEstateRentsAnnual_2024_lessorlegalperson_totalrentp50_BX_only.geojson',
        'TotalRentP50', getColorTotalRentP50LessorLegalPerson2024, showLegendTotalRentP50LessorLegalPerson2024
    );
}

if(theme === 'TotalRentP50LessorNeutralPerson2024'){
    loadThemeGeoJSON(
        'merged_StatisticalUnitWideRealEstateRentsAnnual_2024_lessorneutralperson_totalrentp50_BX_only.geojson',
        'TotalRentP50', getColorTotalRentP50LessorNeutralPerson2024, showLegendTotalRentP50LessorNeutralPerson2024
    );
}

if(theme === 'TotalRentP50TakerLegalPerson2024'){
    loadThemeGeoJSON(
        'merged_StatisticalUnitWideRealEstateRentsAnnual_2024_takerlegalperson_totalrentp50_BX_only.geojson',
        'TotalRentP50', getColorTotalRentP50TakerLegalPerson2024, showLegendTotalRentP50TakerLegalPerson2024
    );
}



if(theme === 'Prix median appartements 2011'){
    loadThemeGeoJSON(
        'immo_median_saleprice_appart_2011.geojson',
        'immo_median_saleprice_appart_2011', getColorMedianPriceApartment2011, showLegendMedianPriceApartment2011
    );
}


if(theme === 'Prix median appartements 2021'){
    loadThemeGeoJSON(
        'immo_median_saleprice_appart_2021.geojson',
        'immo_median_saleprice_appart_2021', getColorMedianPriceApartment2021, showLegendMedianPriceApartment2021
    );
}





if(theme === 'Prix median maisons 2011'){
    loadThemeGeoJSON(
        'immo_median_saleprice_house_2011.geojson',
        'immo_median_saleprice_house_2011', getColorMedianPriceHouses2011, showLegendMedianPriceHouses2011
    );
}


if(theme === 'Prix median maisons 2021'){
    loadThemeGeoJSON(
        'immo_median_saleprice_house_2021.geojson',
        'immo_median_saleprice_house_2021', getColorMedianPriceHouses2021, showLegendMedianPriceHouses2021
    );
}





























if(theme === 'Total_Population_2014'){
    loadThemeGeoJSON(
        'merged_statsector_population_BX_only_2014_partialmatch.geojson',
        'Total_Population_2014', getColorTotal_Population_2014, showLegendTotal_Population_2014
    );
}

if(theme === 'Total_Population_2025'){
    loadThemeGeoJSON(
        'merged_statsector_population_BX_only_2025_partialmatch.geojson',
        'Total_Population_2025', getColorTotal_Population_2025, showLegendTotal_Population_2025
    );
}




if(theme === 'Avg_Revenue_2023'){
    loadThemeGeoJSON(
        'merged_statsector_revenue_BX_only_2023_partialmatch.geojson',
        'MS_AVG_TOT_NET_TAXABLE_INC', getColorAvg_Revenue_2023, showLegendAvg_Revenue_2023
    );
}





// --- Nouvelle couche vols 2024 ---


if(theme === 'Vols_2024'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_vol_2024_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {
            // Trouver la valeur max pour normaliser le gradient
            let vols = data.features.map(f => Number(f.properties.vol) || 0);
            let maxVol = Math.max(...vols);

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    let val = Number(feature.properties.vol) || 0;
                    let color = '#ffff66'; // jaune par défaut

if (isNaN(val)) {
    color = '#454342'; // gris si valeur non valide

} else if (val >= 30000 && val <= 40000) {
    color = '#1b032b'; // violet foncé

} else if (val >= 13000 && val < 20000) {
    color = '#ff0000'; // rouge vif

} else if (val >= 10000 && val < 13000) {
    color = '#fcab08'; // orange vif

} else if (val >= 7000 && val < 10000) {
    color = '#ffff66'; // jaune vif

} else if (val >= 0) {
    color = '#ffff99'; // jaune clair pour les valeurs <7000
}

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
               // ✅ Afficher la légende
            showLegendVols2024();
        });
}




if(theme === 'Vols_2014'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_vol_2014_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {
            // Trouver la valeur max pour normaliser le gradient
            let vols = data.features.map(f => Number(f.properties.vol) || 0);
            let maxVol = Math.max(...vols);

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    let val = Number(feature.properties.vol) || 0;
                    let color = '#ffff66'; // jaune par défaut
if (isNaN(val)) {
    color = '#454342'; // gris si valeur non valide

} else if (val >= 30000 && val <= 40000) {
    color = '#1b032b'; // violet foncé

} else if (val >= 13000 && val < 20000) {
    color = '#ff0000'; // rouge vif

} else if (val >= 10000 && val < 13000) {
    color = '#fcab08'; // orange vif

} else if (val >= 7000 && val < 10000) {
    color = '#ffff66'; // jaune vif

} else if (val >= 0) {
    color = '#ffff99'; // jaune clair pour les valeurs <7000
}
                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
               // ✅ Afficher la légende
            showLegendVols2014();
        });
}




if(theme === 'Vols_2000'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_vol_2000_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {
            // Trouver la valeur max pour normaliser le gradient
            let vols = data.features.map(f => Number(f.properties.vol) || 0);
            let maxVol = Math.max(...vols);

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    let val = Number(feature.properties.vol) || 0;
                    let color = '#ffff99'; // jaune clair par défaut

if (isNaN(val)) {
    color = '#454342'; // gris si valeur non valide

} else if (val >= 30000 && val <= 40000) {
    color = '#1b032b'; // violet foncé

} else if (val >= 13000 && val < 20000) {
    color = '#ff0000'; // rouge vif

} else if (val >= 10000 && val < 13000) {
    color = '#fcab08'; // orange vif

} else if (val >= 7000 && val < 10000) {
    color = '#ffff66'; // jaune vif

} else if (val >= 0) {
    color = '#ffff99'; // jaune clair pour les valeurs <7000
}
                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
              // ✅ Afficher la légende
            showLegendVols2000();

        });
}



if(theme === 'coups_blessures_2024'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_coups_blessures_2024_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Utilise la bonne colonne du fichier
                    let val = Number(feature.properties.coups_blessures) || 0;

                    let color = '#ffff66'; // jaune par défaut
                    if(val >= 4000) color = '#1b032b';      // violet foncé
                    else if(val >= 2000) color = '#ff0000'; // rouge
                    else if(val >= 1000) color = '#ff9900'; // orange
                    else color = '#ffff66';                 // jaune

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
            // ✅ Afficher la légende
            showLegendCoupsBlessures2024();
        });
}








if(theme === 'coups_blessures_2014'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_coups_blessures_2014_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Utilise la bonne colonne du fichier
                    let val = Number(feature.properties.coups_blessures) || 0;

                    let color = '#ffff66'; // jaune par défaut
                    if(val >= 4000) color = '#1b032b';      // violet foncé
                    else if(val >= 2000) color = '#ff0000'; // rouge
                    else if(val >= 1000) color = '#ff9900'; // orange
                    else color = '#ffff66';                 // jaune

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
            // ✅ Afficher la légende
            showLegendCoupsBlessures2014();
        });
}








if(theme === 'coups_blessures_2000'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_coups_blessures_2000_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Utilise la bonne colonne du fichier
                    let val = Number(feature.properties.coups_blessures) || 0;

                    let color = '#ffff66'; // jaune par défaut

                    if(val >= 4000) color = '#1b032b';      // violet foncé
                    else if(val >= 2000) color = '#ff0000'; // rouge
                    else if(val >= 1000) color = '#ff9900'; // orange
                    else color = '#ffff66';                 // jaune

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
            // ✅ Afficher la légende
            showLegendCoupsBlessures2000();
        });
}








if(theme === 'drogues_2024'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_drogues_2024_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : drogues
                    let val = Number(feature.properties.drogues) || 0;

                    let color = '#ffff66'; // jaune par défaut

                    if(val >= 4000) color = '#1b032b';      // violet foncé
                    else if(val >= 2000) color = '#ff0000'; // rouge
                    else if(val >= 1000) color = '#ff9900'; // orange
                    else color = '#ffff66';                 // jaune

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
                        // ✅ Afficher la légende
            showLegendDrogues2024();
        });
}





if(theme === 'drogues_2014'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_drogues_2014_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : drogues
                    let val = Number(feature.properties.drogues) || 0;

                    let color = '#ffff66'; // jaune par défaut

                    if(val >= 4000) color = '#1b032b';      // violet foncé
                    else if(val >= 2000) color = '#ff0000'; // rouge
                    else if(val >= 1000) color = '#ff9900'; // orange
                    else color = '#ffff66';                 // jaune

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
              // ✅ Afficher la légende
            showLegendDrogues2014();
        });
}


if(theme === 'drogues_2000'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_drogues_2000_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : drogues
                    let val = Number(feature.properties.drogues) || 0;

                    let color = '#ffff66'; // jaune par défaut

                    if(val >= 4000) color = '#1b032b';      // violet foncé
                    else if(val >= 2000) color = '#ff0000'; // rouge
                    else if(val >= 1000) color = '#ff9900'; // orange
                    else color = '#ffff66';                 // jaune

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
              // ✅ Afficher la légende
            showLegendDrogues2000();
        });
}





if(theme === 'alcool_2024'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_alcool_2024_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : alcool
                    let val = Number(feature.properties.alcool) || 0;

let color = '#ffff66'; // jaune par défaut

if (isNaN(val)) {
    color = '#454342'; // gris si non valide

// Violet (tranches supérieures)
} else if (val >= 1000 && val <= 1500) {
    color = '#2c136b'; // violet très foncé

} else if (val >= 700 && val < 1000) {
    color = '#6a0dad'; // violet

// Rouge
} else if (val >= 500 && val < 700) {
    color = '#ff1a1a'; // rouge vif

// Orange
} else if (val >= 150 && val < 500) {
    color = '#ff6600'; // orange foncé

} else if (val >= 100 && val < 150) {
    color = '#ff9900'; // orange clair

// Jaune
} else if (val >= 50 && val < 100) {
    color = '#ffd700'; // jaune soutenu

} else if (val >= 0 && val < 50) {
    color = '#fff199'; // jaune clair

} else {
    color = '#e6e6e6'; // fallback
}

return {
    color: '#000',
    weight: 2,
    fillColor: color,
    fillOpacity: 0.6
};
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
                          // ✅ Afficher la légende
            showLegendAlcool2024();
        });
}


if(theme === 'alcool_2014'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_alcool_2014_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : alcool
                    let val = Number(feature.properties.alcool) || 0;

let color = '#ffff66'; // jaune par défaut

if (isNaN(val)) {
    color = '#454342'; // gris si non valide

// Violet (tranches supérieures)
} else if (val >= 1000 && val <= 1500) {
    color = '#2c136b'; // violet très foncé

} else if (val >= 700 && val < 1000) {
    color = '#6a0dad'; // violet

// Rouge
} else if (val >= 500 && val < 700) {
    color = '#ff1a1a'; // rouge vif

// Orange
} else if (val >= 150 && val < 500) {
    color = '#ff6600'; // orange foncé

} else if (val >= 100 && val < 150) {
    color = '#ff9900'; // orange clair

// Jaune
} else if (val >= 50 && val < 100) {
    color = '#ffd700'; // jaune soutenu

} else if (val >= 0 && val < 50) {
    color = '#fff199'; // jaune clair

} else {
    color = '#e6e6e6'; // fallback
}

return {
    color: '#000',
    weight: 2,
    fillColor: color,
    fillOpacity: 0.6
};
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
                          // ✅ Afficher la légende
            showLegendAlcool2014();
        });
}






if(theme === 'alcool_2000'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_alcool_2000_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : alcool
                    let val = Number(feature.properties.alcool) || 0;

let color = '#ffff66'; // jaune par défaut

if (isNaN(val)) {
    color = '#454342'; // gris si non valide

// Violet (tranches supérieures)
} else if (val >= 1000 && val <= 1500) {
    color = '#2c136b'; // violet très foncé

} else if (val >= 700 && val < 1000) {
    color = '#6a0dad'; // violet

// Rouge
} else if (val >= 500 && val < 700) {
    color = '#ff1a1a'; // rouge vif

// Orange
} else if (val >= 150 && val < 500) {
    color = '#ff6600'; // orange foncé

} else if (val >= 100 && val < 150) {
    color = '#ff9900'; // orange clair

// Jaune
} else if (val >= 50 && val < 100) {
    color = '#ffd700'; // jaune soutenu

} else if (val >= 0 && val < 50) {
    color = '#fff199'; // jaune clair

} else {
    color = '#e6e6e6'; // fallback
}
return {
    color: '#000',
    weight: 2,
    fillColor: color,
    fillOpacity: 0.6
};
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
                          // ✅ Afficher la légende
            showLegendAlcool2000();
        });
}






if(theme === 'armes_2024'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_armes_2024_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : armes
                    let val = Number(feature.properties.armes) || 0;

                    let color = '#ffff66'; // jaune par défaut

                    if(val >= 800) color = '#1b032b';      // violet foncé
                    else if(val >= 300) color = '#ff0000'; // rouge
                    else if(val >= 180) color = '#ff9900'; // orange
                    else color = '#ffff66';                 // jaune

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);

  // ✅ Afficher la légende
            showLegendArmes2024();

        });
}



if(theme === 'armes_2014'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_armes_2014_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : armes
                    let val = Number(feature.properties.armes) || 0;

                    let color = '#ffff66'; // jaune par défaut

                    if(val >= 800) color = '#1b032b';      // violet foncé
                    else if(val >= 300) color = '#ff0000'; // rouge
                    else if(val >= 180) color = '#ff9900'; // orange
                    else color = '#ffff66';                 // jaune

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
              // ✅ Afficher la légende
            showLegendArmes2014();
        });
}





if(theme === 'armes_2000'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_armes_2000_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : armes
                    let val = Number(feature.properties.armes) || 0;

                    let color = '#ffff66'; // jaune par défaut

                    if(val >= 800) color = '#1b032b';      // violet foncé
                    else if(val >= 300) color = '#ff0000'; // rouge
                    else if(val >= 180) color = '#ff9900'; // orange
                    else color = '#ffff66';                 // jaune

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
              // ✅ Afficher la légende
            showLegendArmes2000();
        });
}





if(theme === 'secu_publiq_2024'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_secu_publiq_2024_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : secu_publiq
                    let val = Number(feature.properties.secu_publiq) || 0;

let color = '#ffd700'; // jaune par défaut

if (isNaN(val)) {
    color = '#454342'; // gris si non valide

} else if (val >= 1000 && val <= 1750) {
    color = '#4b0082'; // violet (tranche supérieure uniquement)

} else if (val >= 700 && val < 1000) {
    color = '#ff0000'; // rouge

} else if (val >= 500 && val < 700) {
    color = '#ff3300'; // rouge/orange (transition)

} else if (val >= 300 && val < 500) {
    color = '#ff9900'; // orange

} else {
    color = '#ffd700'; // jaune (0–299)
}
                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
                          // ✅ Afficher la légende
            showLegendSecuPubliq2024();
        });
}



if(theme === 'secu_publiq_2014'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_secu_publiq_2014_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : secu_publiq
                    let val = Number(feature.properties.secu_publiq) || 0;

let color = '#e6e6e6'; // gris par défaut

if (isNaN(val)) {
    color = '#454342'; // non valide

} else if (val >= 1000 && val <= 1750) {
    color = '#4b0082'; // violet (tranche supérieure uniquement)

} else if (val >= 700 && val < 1000) {
    color = '#ff0000'; // rouge

} else if (val >= 500 && val < 700) {
    color = '#ff9900'; // orange

} else if (val >= 300 && val < 500) {
    color = '#ff9900'; // orange

} else {
    color = '#ffd700'; // jaune (0–299)
}

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
                          // ✅ Afficher la légende
            showLegendSecuPubliq2014();
        });
}




if(theme === 'secu_publiq_2000'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_secu_publiq_2000_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : secu_publiq
                    let val = Number(feature.properties.secu_publiq) || 0;

let color = '#e6e6e6'; // gris par défaut

if (isNaN(val)) {
    color = '#454342'; // non valide

} else if (val >= 1000 && val <= 1750) {
    color = '#4b0082'; // violet (tranche supérieure uniquement)

} else if (val >= 700 && val < 1000) {
    color = '#ff0000'; // rouge

} else if (val >= 500 && val < 700) {
    color = '#ff9900'; // orange

} else if (val >= 300 && val < 500) {
    color = '#ff9900'; // orange

} else {
    color = '#ffd700'; // jaune (0–299)
}
                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);

                          // ✅ Afficher la légende
            showLegendSecuPubliq2000();
        });
}





if(theme === 'degradat_prop_2024'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_degradat_prop_2024_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : degradat_prop
                    let val = Number(feature.properties.degradat_prop) || 0;

let color = '#ffff66'; // jaune par défaut

if (isNaN(val)) {
    color = '#454342'; // gris si valeur non valide
} else if (val >= 4000) {
    color = '#1b032b'; // violet foncé (tranche supérieure)
} else if (val >= 3000) {
    color = '#ff0000'; // rouge
} else if (val >= 2000) {
    color = '#ff6600'; // orange foncé
} else if (val >= 1500) {
    color = '#ff9900'; // orange clair
} else if (val >= 1000) {
    color = '#ffd700'; // jaune doré
} else if (val >= 500) {
    color = '#ffff66'; // jaune
} else {
    color = '#e6e6e6'; // gris clair pour <500
}

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
          // ✅ Afficher la légende
            showLegendDegProp2024();
        });
}





if(theme === 'degradat_prop_2014'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_degradat_prop_2014_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : degradat_prop
                    let val = Number(feature.properties.degradat_prop) || 0;

let color = '#ffff66'; // jaune par défaut

if (isNaN(val)) {
    color = '#454342'; // gris si valeur non valide
} else if (val >= 4000) {
    color = '#1b032b'; // violet foncé (tranche supérieure)
} else if (val >= 3000) {
    color = '#ff0000'; // rouge
} else if (val >= 2000) {
    color = '#ff6600'; // orange foncé
} else if (val >= 1500) {
    color = '#ff9900'; // orange clair
} else if (val >= 1000) {
    color = '#ffd700'; // jaune doré
} else if (val >= 500) {
    color = '#ffff66'; // jaune
} else {
    color = '#e6e6e6'; // gris clair pour <500
}

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
                      // ✅ Afficher la légende
            showLegendDegProp2014();
        });
}







if(theme === 'degradat_prop_2000'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_degradat_prop_2000_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : degradat_prop
                    let val = Number(feature.properties.degradat_prop) || 0;

let color = '#ffff66'; // jaune par défaut

if (isNaN(val)) {
    color = '#454342'; // gris si valeur non valide
} else if (val >= 4000) {
    color = '#1b032b'; // violet foncé (tranche supérieure)
} else if (val >= 3000) {
    color = '#ff0000'; // rouge
} else if (val >= 2000) {
    color = '#ff6600'; // orange foncé
} else if (val >= 1500) {
    color = '#ff9900'; // orange clair
} else if (val >= 1000) {
    color = '#ffd700'; // jaune doré
} else if (val >= 500) {
    color = '#ffff66'; // jaune
} else {
    color = '#e6e6e6'; // gris clair pour <500
}

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
                      // ✅ Afficher la légende
            showLegendDegProp2000();
        });
}



if(theme === 'Cambriolages_2024'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_cambriolage_2024_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : cambriolage
                    let val = Number(feature.properties.cambriolage) || 0;

let color = '#ffff66'; // jaune par défaut

if (isNaN(val)) {
    color = '#454342'; // gris si non valide

} else if (val >= 2000) {
    color = '#1b032b'; // violet foncé (1.500–2.000)

   } else if (val >= 1500) {
    color = '#f2340a'; // rouge (1.500–2.000)

} else if (val >= 1000) {
    color = '#ff9900'; // rouge (1.000–1.500)

} else if (val >= 500) {
    color = '#ffff66'; // orange (500–1.000)

} else {
    color = '#ffff66'; // jaune (<500)
}
                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
                      // ✅ Afficher la légende
            showLegendCambriolages2024();

        });
}



if(theme === 'Cambriolages_2014'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_cambriolage_2014_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : cambriolage
                    let val = Number(feature.properties.cambriolage) || 0;

let color = '#ffff66'; // jaune par défaut

if (isNaN(val)) {
    color = '#454342'; // gris si non valide

} else if (val >= 2000) {
    color = '#1b032b'; // violet foncé (1.500–2.000)

   } else if (val >= 1500) {
    color = '#f2340a'; // rouge (1.500–2.000)

} else if (val >= 1000) {
    color = '#ff9900'; // rouge (1.000–1.500)

} else if (val >= 500) {
    color = '#ffff66'; // orange (500–1.000)

} else {
    color = '#ffff66'; // jaune (<500)
}
                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
                      // ✅ Afficher la légende
            showLegendCambriolages2014();

        });
}




if(theme === 'Cambriolages_2000'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zp_crime_type_cambriolage_2000_bx_geofile.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // ⚠️ Colonne correcte : cambriolage
                    let val = Number(feature.properties.cambriolage) || 0;

let color = '#ffff66'; // jaune par défaut

if (isNaN(val)) {
    color = '#454342'; // gris si non valide

} else if (val >= 2000) {
    color = '#1b032b'; // violet foncé (1.500–2.000)

   } else if (val >= 1500) {
    color = '#f2340a'; // rouge (1.500–2.000)

} else if (val >= 1000) {
    color = '#ff9900'; // rouge (1.000–1.500)

} else if (val >= 500) {
    color = '#ffff66'; // orange (500–1.000)

} else {
    color = '#ffff66'; // jaune (<500)
}
                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
                      // ✅ Afficher la légende
            showLegendCambriolages2000();

        });
}








// --- Fonction pour convertir les valeurs en nombres décimaux ---

function parseDecimal(val) {
    if (val == null) return NaN; // null ou undefined
    let str = String(val).replace(',', '.').replace(/\s/g, '').replace('%','');
    return parseFloat(str);
}









// --- Thème population ---
if(theme === 'Evolution Population 2012-2022 en %'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('pop_evo_2012_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties.pop_tx_aug_2012_2022;
                    let num = parseDecimal(val);

                    // Choix de la couleur selon la valeur
                    let color;
                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide
                    } else if (num > 10) {
                        color = '#01240c'; // vert foncé
                    } else if (num >= 5) {
                        color = '#77f06e'; // vert
                    } else if (num > 0) {
                        color = '#f0e16e'; // jaune
                    } else {
                        color = '#454342'; // gris pour 0
                    }

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(feature.properties.pop_tx_aug_2012_2022);
                }
            }).addTo(map);
        });
}





// --- Fonction pour convertir en nombre sûr ---
function parseNumber(val) {
    if (val === null || val === undefined) return NaN;
    return Number(String(val).replace(/\s/g,'').replace(',', '.').replace('%',''));
}





// --- Thème population en 2022 ---
if(theme === 'Population en 2022'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('pop_2022_ok.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties.pop_nb_2022;
                    let num = parseNumber(val);  // <-- conversion en nombre

                    // Choix de la couleur selon la valeur
                    let color;
                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide
                    } else if (num > 100000) {
                        color = '#01240c'; // vert foncé
                    } else if (num >= 50000) {
                        color = '#77f06e'; // vert
                    } else if (num > 10000) {
                        color = '#f0e16e'; // jaune
                    } else {
                        color = '#d9d9d9'; // gris clair pour 0
                    }

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties.pop_nb_2022;
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}


// --- Fonction pour convertir en nombre sûr ---
function parseNumber(val) {
    if (val === null || val === undefined) return NaN;
    return Number(String(val).replace(/\s/g,'').replace(',', '.').replace('%',''));
}

// --- Thème Densité de Population ---
if(theme === 'Densité de Population'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('hab_km2.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["hab/km2"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
                    let color;
                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide
                    } else if (num > 10000) {
                        color = '#01240c'; // vert foncé
                    } else if (num >= 5000) {
                        color = '#77f06e'; // vert
                    } else if (num > 1000) {
                        color = '#f0e16e'; // jaune
                    } else {
                        color = '#d9d9d9'; // gris clair pour 0
                    }

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["hab/km2"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}



// --- Fonction pour convertir en nombre sûr ---
function parseNumber(val) {
    if (val === null || val === undefined) return NaN;
    return Number(String(val).replace(/\s/g,'').replace(',', '.').replace('%',''));
}







// --- Thème % Population agée de 18 à 64 ans ---
if(theme === '% Population agée de 18 à 64 ans'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('pop_tx_agegroup_18_64_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["pop_tx_agegroup_18_64_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
                    let color;
                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide
                    } else if (num > 70) {
                        color = '#01240c'; // vert foncé
                    } else if (num >= 60) {
                        color = '#77f06e'; // vert
                    } else if (num > 50) {
                        color = '#f0e16e'; // jaune
                    } else {
                        color = '#d9d9d9'; // gris clair pour 0
                    }

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["hab/km2"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème Solde migratoire interne ---
if(theme === 'Solde migratoire interne'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('pop_soldmig_intern.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["pop_soldmig_intern"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide
} else if (num > 0) {
    color = '#77f06e'; // vert foncé
} else if (num === 0) {
    color = '#f50505'; // orange
} else if (num < 0) {
    color = '#200330'; // rouge
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}



// --- Thème Solde migratoire international ---
if(theme === 'Solde migratoire international'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('pop_soldmig_internat.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["pop_soldmig_internat"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide
} else if (num >= 20) {
    color = '#074f37'; // vert foncé
} else if (num >= 10) {
    color = '#19fa05'; // vert
} else if (num >= 0) {
    color = '#fae505'; // jaune
} else {
    color = '#454342'; // gris pour les valeurs négatives ou inattendues
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}







// --- Thème Population Croissance Annuelle ---
if(theme === 'Population Croissance Annuelle'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('pop_croissance_an.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["pop_croissance_an"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide

} else if (num >= 1) {
    color = '#074f37'; // vert foncé
} else if (num >= 0) {
    color = '#19fa05'; // vert
} else if (num < 0) {
    color = '#73070c'; // rouge
} else {
    color = '#454342'; // gris pour les valeurs négatives ou inattendues
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème % Population immigrée ---
if(theme === '% Population immigrée'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('pop_tx_immig_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["pop_tx_immig_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide
} else if (num >= 50) {
    color = '#190233'; // rouge foncé
} else if (num >= 40) {
    color = '#db1a04'; // rouge
} else if (num >= 30) {
    color = '#db8204'; // orange
} else if (num >= 20) {
    color = '#c9db04'; // jaune
} else if (num >= 1) {
    color = '#074f37'; // vert foncé
} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème % Population immigrée UE ---
if(theme === '% Population immigrée UE'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('pop_tx_immig_fromEU.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["pop_tx_immig_fromEU"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide


} else if (num >= 60) {
    color = '#032918'; // vert foncé

} else if (num >= 50) {
    color = '#39f7a2'; // vert

} else if (num >= 40) {
    color = '#c9db04  '; // jaune

} else if (num >= 30) {
    color = '#db8204'; // orange


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème % Population immigrée UE14 ---
if(theme === '% Population immigrée UE14'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('pop_tx_immig_fromEU14.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["pop_tx_immig_fromEU14"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide


} else if (num >= 60) {
    color = '#032918'; // vert foncé

} else if (num >= 40) {
    color = '#39f7a2'; // vert

} else if (num >= 30) {
    color = '#c9db04  '; // jaune

} else if (num >= 10) {
    color = '#db8204'; // orange


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}



// --- Thème % Population immigrée UE13 ---
if(theme === '% Population immigrée UE13'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('pop_tx_immig_fromEU13.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["pop_tx_immig_fromEU13"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide


} else if (num >= 30) {
    color = '#822107 '; // orange foncé

} else if (num >= 20) {
    color = '#b37d09  '; // orange

} else if (num >= 10) {
    color = '#736903'; // jaune


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}






// --- Thème pop_tx_immig_resteEu+nonEU ---
if(theme === 'pop_tx_immig_resteEu+nonEU'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('pop_tx_immig_resteEu+nonEU.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["pop_tx_immig_resteEu+nonEU"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide

} else if (num >= 60) {
    color = '#1e0340'; // violet

} else if (num >= 50) {
    color = '#731803 '; // rouge

} else if (num >= 40) {
    color = '#822107 '; // orange foncé

} else if (num >= 30) {
    color = '#b37d09  '; // orange

} else if (num >= 20) {
    color = '#736903'; // jaune


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème % Population immigrée nationalité étrangère naissance ---
if(theme === '% Population immigrée nationalité étrangère naissance'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('pop_tx_nationalite_etrg_alanaissance.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["pop_tx_nationalite_etrg_alanaissance"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide

} else if (num >= 60) {
    color = '#1e0340 '; // violet

} else if (num >= 50) {
    color = '#822107 '; // orange foncé

} else if (num >= 40) {
    color = '#b37d09  '; // orange

} else if (num >= 30) {
    color = '#736903'; // jaune


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}










// --- Thème Taux natalité ---
if(theme === 'Taux natalité'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('pop_tx_natalite.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["pop_tx_natalite"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#012614'; // vert foncé

} else if (num >= 10) {
    color = '#02c466'; // vert

} else if (num >= 5) {
    color = '#736903'; // jaune


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}



// --- Thème Revenu Médian ---
if(theme === 'Revenu Médian'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_med_rev.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_med_rev"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;

if (isNaN(num)) {
    color = '#454342'; // valeur non valide → gris

} else if (num >= 19000) {
    color = '#4b0082'; // 19–21+ → violet (valeurs hautes)

} else if (num >= 16000) {
    color = '#ff6600'; // 16–18 → orange

} else if (num >= 13000) {
    color = '#ffd700'; // 13–15 → jaune

} else {
    color = '#fff4b8'; // <13000 → jaune très clair
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
                                  // ✅ Afficher la légende
            showLegendRevenuMedian();
        });
}



// --- Thème Taux emploi ---
if(theme === 'Taux emploi'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_emploi.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_emploi"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 60) {
    color = '#054f17'; // vert foncé

} else if (num >= 55) {
    color = '#04b30f'; // vert

} else if (num >= 50) {
    color = '#b3a704'; // jaune

} else if (num >= 40) {
    color = '#f76f07'; // orange


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}









// --- Thème Taux emploi 15 à 24 ans ---
if(theme === 'Taux emploi 15 à 24 ans'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_emploi_15_24.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_emploi_15_24"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide





} else if (num >= 20) {
    color = '#04b30f'; // vert

} else if (num >= 15) {
    color = '#b3a704'; // jaune

} else if (num >= 10) {
    color = '#f76f07'; // orange


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème Taux emploi 25 à 49 ans ---
if(theme === 'Taux emploi 25 à 49 ans'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_emploi_25_49.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_emploi_25_49"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide





} else if (num >= 70) {
    color = '#04b30f'; // vert

} else if (num >= 60) {
    color = '#b3a704'; // jaune

} else if (num >= 50) {
    color = '#f76f07'; // orange


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}






// --- Thème Taux emploi 50 à 64 ans ---
if(theme === 'Taux emploi 50 à 64 ans'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_emploi_50_64.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_emploi_50_64"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide





} else if (num >= 60) {
    color = '#04b30f'; // vert

} else if (num >= 50) {
    color = '#b3a704'; // jaune

} else if (num >= 40) {
    color = '#f76f07'; // orange


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}






// --- Thème Taux salariés ---
if(theme === 'Taux salariés'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_sal.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_sal"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide




} else if (num >= 90) {
    color = '#002111'; // vert foncé

} else if (num >= 80) {
    color = '#07a357'; // vert foncé

} else if (num >= 70) {
    color = '#02f2a6 '; // vert normal

} else if (num >= 60) {
    color = '#e2f576'; // vert clair


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}







// --- Thème Taux indépendants ---
if(theme === 'Taux indépendants'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_indep.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_indep"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide

} else if (num >= 30) {
    color = '#002111'; // vert foncé

} else if (num >= 20) {
    color = '#02f27d'; // vert foncé

} else if (num >= 10) {
    color = '#c9ff05 '; // jaune normal

} else if (num >= 5) {
    color = '#f7eb0a'; // jaune clair


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème Taux ouvriers ---
if(theme === 'Taux ouvriers'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_ouvr.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_ouvr"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide




} else if (num >= 40) {
    color = '#002111'; // vert foncé

} else if (num >= 30) {
    color = '#02f27d'; // vert foncé

} else if (num >= 20) {
    color = '#c9ff05'; // jaune normal

} else if (num >= 10) {
    color = '#f7eb0a'; // jaune clair


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème Taux employés ---
if(theme === 'Taux employés'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_employee.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_employee"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide




} else if (num >= 70) {
    color = '#002111'; // vert foncé

} else if (num >= 60) {
    color = '#02f27d'; // vert foncé

} else if (num >= 50) {
    color = '#c9ff05'; // jaune normal

} else if (num >= 40) {
    color = '#f7eb0a'; // jaune clair


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème Emplois Institutions Internationales ---
if(theme === 'Emplois Institutions Internationales'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_nb_internat_instit_jobs.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_nb_internat_instit_jobs"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide

} else if (num >= 30000) {
    color = '#052df7'; // vert foncé

} else if (num >= 6000) {
    color = '#02e6f2'; // vert foncé

} else if (num >= 2000) {
    color = '#002111'; // vert foncé

} else if (num >= 1000) {
    color = '#0c693b'; // vert foncé

    } else if (num >= 100) {
    color = '#02f27d'; // vert foncé

} else if (num > 0) {
    color = '#c9ff05'; // jaune normal

} else if (num == 0) {
    color = '#000000'; // noir


} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème Taux fonctionnaires ---
if(theme === 'Taux fonctionnaires'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_fonct.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_fonct"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide


} else if (num >= 30) {
    color = '#012108'; // vert foncé

} else if (num >= 20) {
    color = '#1c3801'; // vert foncé

    } else if (num >= 10) {
    color = '#85d13f'; // vert foncé

} else if (num > 5) {
    color = '#d2d90f'; // jaune




} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème Taux chomage ---
if(theme === 'Taux chomage'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_chomg.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_chomg"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide


} else if (num >= 20) {
    color = '#ed0707'; // rouge

} else if (num >= 15) {
    color = '#edc707'; // orange

    } else if (num >= 10) {
    color = '#1c3801'; // vert

} else if (num > 5) {
    color = '#012108'; // vert foncé




} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}



// --- Thème Taux chomage LD ---
if(theme === 'Taux chomage LD'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_chom_longduree.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_chom_longduree"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#ed0707'; // rouge

    } else if (num >= 10) {
    color = '#edc707'; // orange

} else if (num >= 5) {
    color = '#012108'; // vert foncé




} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème Taux chomage ---
if(theme === 'Taux chomage'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_chomg.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_chomg"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide


} else if (num >= 20) {
    color = '#ed0707'; // rouge

} else if (num >= 15) {
    color = '#edc707'; // orange

    } else if (num >= 10) {
    color = '#1c3801'; // vert

} else if (num > 5) {
    color = '#012108'; // vert foncé




} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}



// --- Thème Taux chomage 15 a 24 ans ---
if(theme === 'Taux chomage 15 a 24 ans'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_15_24yo_tx_chom.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_15_24yo_tx_chom"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 25) {
    color = '#ed0707'; // rouge

    } else if (num >= 20) {
    color = '#e0a80b'; // orange

} else if (num >= 15) {
    color = '#edc707'; // jaune




} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème Taux chomage 50 a 64 ans ---
if(theme === 'Taux chomage 50 a 64 ans'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_chom_50_64.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_chom_50_64"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 20) {
    color = '#ed0707'; // rouge

    } else if (num >= 10) {
    color = '#e0a80b'; // orange

} else if (num >= 5) {
    color = '#edc707'; // jaune




} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème Taux chomage 25 a 49 ans ---
if(theme === 'Taux chomage 25 a 49 ans'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_chom_25_49.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_chom_25_49"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 20) {
    color = '#ed0707'; // rouge

    } else if (num >= 10) {
    color = '#e0a80b'; // orange

} else if (num >= 5) {
    color = '#edc707'; // jaune




} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}






// --- Thème Taux chomage 50 a 64 ans ---
if(theme === 'Taux chomage 50 a 64 ans'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_chom_50_64.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_chom_50_64"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 20) {
    color = '#ed0707'; // rouge

    } else if (num >= 10) {
    color = '#e0a80b'; // orange

} else if (num >= 5) {
    color = '#edc707'; // jaune




} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème Taux GRAPA 65+---
if(theme === 'Taux GRAPA 65+'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('GRAPA_65+_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["GRAPA_65+_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 20) {
    color = '#ed0707'; // rouge

    } else if (num >= 10) {
    color = '#e0a80b'; // orange

} else if (num >= 1) {
    color = '#edc707'; // jaune




} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}



// --- Thème Taux CPAS 18 a 24 ans---
if(theme === 'Taux CPAS 18 a 24 ans'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('tx_CPAS_18_24_2021.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_CPAS_18_24_2021"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 20) {
    color = '#ed0707'; // rouge

    } else if (num >= 10) {
    color = '#e0a80b'; // orange

} else if (num >= 1) {
    color = '#edc707'; // jaune




} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}



// --- Thème Taux naissances sans revenu de travail---
if(theme === 'Taux naissances sans revenu de travail'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_births_noworkrevenue.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_births_noworkrevenue"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide

} else if (num >= 30) {
    color = '#290457'; // violet

} else if (num >= 20) {
    color = '#ed0707'; // rouge

    } else if (num >= 10) {
    color = '#e0a80b'; // orange

} else if (num >= 5) {
    color = '#edc707'; // jaune




} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
                               // ✅ Afficher la légende
            showLegendTxNaissSansRevenue();
        });
}




// --- Thème Taux naissances meres etrangeres---
if(theme === 'Taux naissances meres etrangeres'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_tx_naissances_mere_etrang.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_tx_naissances_mere_etrang"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide

} else if (num >= 60) {
    color = '#290457'; // violet

} else if (num >= 50) {
    color = '#ed0707'; // rouge

    } else if (num >= 40) {
    color = '#e0a80b'; // orange

} else if (num >= 30) {
    color = '#edc707'; // jaune




} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
                                           // ✅ Afficher la légende
            showLegendTxNaissMeresEtrangeres();
        });
}





// --- Thème Taux retard scolaire---
if(theme === 'Taux retard scolaire'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('ensign_retard_scol.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["ensign_retard_scol"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide

} else if (num >= 25) {
    color = '#290457'; // violet

} else if (num >= 20) {
    color = '#ed0707'; // rouge

    } else if (num >= 10) {
    color = '#e0a80b'; // orange

} else if (num >= 5) {
    color = '#edc707'; // jaune




} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème Etablissements---
if(theme === 'Etablissements'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_nb_etabls.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_nb_etabls"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide

} else if (num >= 10000) {
    color = '#05f7f7'; // turquoise

} else if (num >= 2000) {
    color = '#02420f'; // vert foncé 2

} else if (num >= 1000) {
    color = '#05851f'; // vert foncé

    } else if (num >= 500) {
    color = '#56f072'; // vert

} else if (num >= 300) {
    color = '#edc707'; // jaune




} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème Sieges sociaux---
if(theme === 'Sieges sociaux'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_soc_siege.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_soc_siege"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide

} else if (num >= 10000) {
    color = '#4b0082'; // violet (très élevé)

} else if (num >= 5000) {
    color = '#30030e'; // rouge foncé

} else if (num >= 3000) {
    color = '#cc0000'; // rouge

} else if (num >= 2000) {
    color = '#ff6600'; // orange

} else if (num >= 1500) {
    color = '#ffd700'; // jaune

} else {
    color = '#fff4b8'; // jaune très clair (<1500)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
                                              // ✅ Afficher la légende
            showLegendSiegesSoc();
        });
}



// --- Thème Solde migration entreprises 2009 a 2020---
if(theme === 'Solde migration entreprises 2009 a 2020'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_soldmig_firms_total_2009_2020.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_soldmig_firms_total_2009_2020"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide




} else if (num >= 100) {
    color = '#024a1d'; // vert foncé

} else if (num >= 20) {
    color = '#05851f'; // vert foncé

} else if (num >= 10) {
    color = '#05f75e'; // vert

} else if (num >= 0) {
    color = '#f7f305'; // jaune


} else if (num <= -250) {
    color = '#380134'; // violet

} else if (num <= -100) {
    color = '#c90815'; // rouge

    } else if (num <= 0) {
    color = '#c90815'; // rouge





} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème Solde migration entreprises 2009 a 2020 Horeca---
if(theme === 'Solde migration entreprises 2009 a 2020 Horeca'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_soldmig_2009_2020_horeca.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_soldmig_2009_2020_horeca"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide


} else if (num >= 20) {
    color = '#024a1d'; // vert foncé

} else if (num >= 10) {
    color = '#05851f'; // vert foncé

  } else if (num < -10) {
    color = '#380134'; // violet

    } else if (num < 0) {
    color = '#c90815'; // rouge

    } else if (num >= 0) {
    color = '#05f75e'; // vert

    } else if (num == 0) {
    color = '#f7f305'; // rouge





} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème Solde migration entreprises 2009 a 2020 commerce detail---
if(theme === 'Solde migration entreprises 2009 a 2020 commerce detail'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_soldmig_2009_2020_commrcdetail.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_soldmig_2009_2020_commrcdetail"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide



  } else if (num < -20) {
    color = '#380134'; // violet

    } else if (num < -10) {
    color = '#a10505'; // rouge

    } else if (num < 0) {
    color = '#f05107'; // orange

    } else if (num >= 0) {
    color = '#05f75e'; // vert

    } else if (num == 0) {
    color = '#f7f305'; // jaune





} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}



// --- Thème Solde migration entreprises 2009 a 2020 IT---
if(theme === 'Solde migration entreprises 2009 a 2020 IT'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_soldmig_2009_2020_IT.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_soldmig_2009_2020_IT"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;
if (isNaN(num)) {
    color = '#454342'; // gris si non valide



  } else if (num < -20) {
    color = '#380134'; // violet

    } else if (num < -10) {
    color = '#a10505'; // rouge

    } else if (num < 0) {
    color = '#f05107'; // orange

    } else if (num >= 0) {
    color = '#05f75e'; // vert

    } else if (num >= 10) {
    color = '#045422'; // vert

    } else if (num == 0) {
    color = '#f7f305'; // jaune





} else {
    color = '#454342'; // gris pour les valeurs 0 ou négatives
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}



// --- Thème Solde migration entreprises 2009 a 2020 RBC---
if(theme === 'Solde migration entreprises 2009 a 2020 RBC'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_soldmig_RBC_2009_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_soldmig_RBC_2009_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide

// 🔴 valeurs négatives
} else if (num < -40) {
    color = '#380134'; // violet
} else if (num < -10) {
    color = '#a10505'; // rouge
} else if (num < 0) {
    color = '#f05107'; // orange

// 🟢 valeurs positives
} else if (num >= 100) {
    color = '#05f1f5'; // vert foncé
} else if (num >= 30) {
    color = '#045221'; // turquoise
} else if (num >= 10) {
    color = '#045422'; // vert foncé
} else if (num >= 0) {
    color = '#05f75e'; // vert
}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}



// --- Thème Solde migration entreprises 2009 a 2020 Régions---
if(theme === 'Solde migration entreprises 2009 a 2020 Régions'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('fin_soldmig_ firms_Wal_Flan_2009_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["fin_soldmig_ firms_Wal_Flan_2009_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide

// 🔴 valeurs négatives
} else if (num < -40) {
    color = '#380134'; // violet
} else if (num < -10) {
    color = '#a10505'; // rouge
} else if (num < 0) {
    color = '#f05107'; // orange


}



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème Taux vegetation---
if(theme === 'Taux vegetation'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('eco_tx_veget.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["eco_tx_veget"];
                    let num = parseNumber(val);  // conversion en nombre

let color;

if (isNaN(num)) {
    color = '#454342'; // valeur non valide → gris
}
// Tranches basses : orange → jaune
else if (num >= 15 && num < 20) {
    color = '#ff9933'; // 15–19 → orange très clair
} else if (num >= 20 && num < 30) {
    color = '#ffb366'; // 20–29 → orange clair
} else if (num >= 30 && num < 40) {
    color = '#ffd699'; // 30–39 → orange moyen
} else if (num >= 40 && num < 50) {
    color = '#ffead1'; // 40–49 → jaune orangé
}
// Tranche moyenne : vert clair fixe
else if (num >= 50 && num < 60) {
    color = '#33cc33'; // 50–59 → vert clair
}
// Dégradé vert pour valeurs élevées
else if (num >= 60 && num < 70) {
    color = '#66cc33'; // 60–69 → vert vif
} else if (num >= 70 && num < 80) {
    color = '#009900'; // 70–79 → vert intense
} else if (num >= 80 && num < 90) {
    color = '#006600'; // 80–89 → vert foncé
} else if (num >= 90) {
    color = '#003300'; // 90–100 → vert très foncé
}
// Fallback
else {
    color = '#f2fff2'; // <15 → orange très pâle
}

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
                                  // ✅ Afficher la légende
            showLegendTxVeget();
        });
}



// --- Thème Taux espaces verts accessibles public---
if(theme === 'Taux espaces verts accessibles public'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('eco_tx_espacevert_accesspublic.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["eco_tx_espacevert_accesspublic"];
                    let num = parseNumber(val);  // conversion en nombre

                    let color;

                    if (isNaN(num)) {
                        color = '#454342'; // valeur non valide → gris
                    }
                    // Tranches basses : rouge → orange → jaune
                    else if (num >= 0 && num < 10) {
                        color = '#ff3300'; // 0–9 → rouge
                    } else if (num >= 10 && num < 15) {
                        color = '#ff6600'; // 10–14 → orange foncé
                    } else if (num >= 15 && num < 20) {
                        color = '#ffb366'; // 15–19 → orange léger
                    } else if (num >= 20 && num < 30) {
                        color = '#ffd700'; // 20–29 → jaune foncé
                    } else if (num >= 30 && num < 40) {
                        color = '#fff199'; // 30–39 → jaune clair
                    } else if (num >= 40 && num < 50) {
                        color = '#fff5b1'; // 40–49 → jaune très clair
                    }
                    // Tranches supérieures : vert clair → vert foncé
                    else if (num >= 50 && num < 60) {
                        color = '#ccff99'; // 50–59 → vert très clair
                    } else if (num >= 60 && num < 70) {
                        color = '#99cc33'; // 60–69 → vert clair
                    } else if (num >= 70 && num < 80) {
                        color = '#66b200'; // 70–79 → vert moyen
                    } else if (num >= 80 && num < 90) {
                        color = '#338000'; // 80–89 → vert foncé
                    } else if (num >= 90) {
                        color = '#1a3300'; // 90–100 → vert très foncé
                    }



                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
                        // ✅ Afficher la légende
            showLegendTxVegetPubliq();

        });
}





// --- Thème Logements sociaux---
if(theme === 'Logements sociaux'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('immo_nb_logsoc.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["immo_nb_logsoc"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur
// Choix de la couleur
let color;

if (isNaN(num)) {
    color = '#454342'; // gris foncé si non valide

} else if (num >= 8000) {
    color = '#360661'; // violet très foncé (8.000–10.000)

} else if (num >= 6000) {
    color = '#5a0f9e'; // violet foncé (6.000–8.000)

} else if (num >= 5000) {
    color = '#8a33e3'; // violet moyen (5.000–6.000)

} else if (num >= 3000) {
    color = '#b366f7'; // violet clair (3.000–5.000)

} else if (num >= 2500) {
    color = '#d90000'; // rouge foncé (2.500–3.000)

} else if (num >= 2000) {
    color = '#ff3300'; // rouge vif (2.000–2.500)

} else if (num >= 1500) {
    color = '#ff6600'; // orange foncé (1.500–2.000)

} else if (num >= 1000) {
    color = '#ffcc00'; // orange clair (1.000–1.500)

} else if (num >= 500) {
    color = '#ffe066'; // jaune foncé (500–1.000)

} else {
    color = '#fff399'; // jaune clair (0–499)
}

return {
    color: '#000',      // contour noir
    weight: 2,
    fillColor: color,
    fillOpacity: 0.8    // légèrement plus opaque pour mieux voir
};
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
            // ✅ Afficher la légende
            showLegendNbLogSoc();
        });
}


// --- Thème Batiments residentiels---
if(theme === 'Batiments residentiels'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('immo_nb_bat_resid.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["immo_nb_bat_resid"];
                    let num = parseNumber(val);  // conversion en nombre


// Choix de la couleur selon la valeur
let color;

if (isNaN(num)) {
    color = '#454342'; // gris foncé si non valide


} else if (num >= 30000) {
    color = '#09000f'; // violet très saturé (30.000–60.000) → très visible

} else if (num >= 15000) {
    color = '#1b012b'; // violet saturé (15.000–30.000) → plus visible

} else if (num >= 10000) {
    color = '#b366f7'; // violet clair (10.000–15.000)

} else if (num >= 8000) {
    color = '#ff3300'; // rouge vif (8.000–10.000)

} else if (num >= 5000) {
    color = '#ff6600'; // orange foncé (5.000–8.000)

} else if (num >= 3000) {
    color = '#ffcc00'; // jaune-orange (3.000–5.000)

} else {
    color = '#fff199'; // jaune clair (0–3.000)
}







                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
             // ✅ Afficher la légende
            showLegendNbLogResid();

        });
}



// --- Thème Loyer moyen---

// --- Chargement de la couche ---
if(theme === 'Loyer moyen'){
    loadThemeGeoJSON(
        'immo_avg_rent.geojson', // GeoJSON à charger
        'immo_avg_rent',         // Propriété contenant la valeur

        getColorAvgRent,         // Fonction de couleur
        showLegendAvgRent        // Fonction légende
    );
}





// --- Thème Appartements vendus 2011---
if(theme === 'Appartements vendus 2011'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('immo_nb_appart_sales_2011.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["immo_nb_appart_sales_2011"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur

// Choix de la couleur

let color;

if (isNaN(num)) {
    color = '#2b2b2b'; // no data
}
else if (num > 1000) {
    color = '#120101'; // rouge très foncé (quasi noir)
}
else if (num > 700) {
    color = '#d7191c'; // rouge vif
}
else if (num > 500) {
    color = '#f04e23'; // orange-rouge
}
else if (num > 200) {
    color = '#fd8d3c'; // orange
}
else if (num > 100) {
    color = '#fed976'; // jaune
}
else if (num > 0) {
    color = '#ffffcc'; // très clair
}
else {
    color = '#f0f0f0'; // 0
}

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["immo_nb_appart_sales_2011"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);

             // ✅ AJOUT ICI
        showLegendApartments2011();

        });
}







// --- Thème Appartements vendus 2021---
if(theme === 'Appartements vendus 2021'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('immo_nb_appart_sales_2021.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["immo_nb_appart_sales_2021"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
let color;

if (isNaN(num)) {
    color = '#2b2b2b'; // no data
}
else if (num >= 5000) {
    color = '#0a0a0a'; // rouge très foncé (max)
}
else if (num >= 1000) {
    color = '#120101'; // rouge très foncé (max)
}
else if (num >= 700) {
    color = '#d7191c'; // rouge
}
else if (num >= 500) {
    color = '#f04e23'; // orange-rouge
}
else if (num >= 200) {
    color = '#fd8d3c'; // orange
}
else if (num >= 100) {
    color = '#fed976'; // jaune
}
else if (num > 0) {
    color = '#ffffcc'; // très clair
}
else {
    color = '#f0f0f0'; // 0
}
                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
             // ✅ AJOUT ICI
    showLegendApartments2021();

        });
}





































// --- Thème Parc immobilier 2 a 3 facades---
if(theme === 'Parc immobilier 2 a 3 facades'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('immo_tx_23fac_houses.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["immo_tx_23fac_houses"];
                    let num = parseNumber(val);  // conversion en nombre

// Choix de la couleur selon la valeur
let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide

// Violet pour la tranche supérieure
} else if (num >= 80) {
    color = '#6a0dad'; // violet foncé

// Orange pour la tranche intermédiaire
} else if (num >= 70) {
    color = '#ff6600'; // orange vif

// Jaune pour la tranche basse
} else if (num >= 60) {
    color = '#ffd700'; // jaune

// Gris pour les valeurs inférieures
} else {
    color = '#e6e6e6'; // gris clair
}

                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
                        // ✅ AJOUT ICI
    showLegendTx2_3_Facades();
        });
}





// --- Thème Parc immobilier 4 facades---
if(theme === 'Parc immobilier 4 facades'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('immo_tx_4f_houses.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["immo_tx_4f_houses"];
                    let num = parseNumber(val);  // conversion en nombre

// Choix de la couleur selon la valeur (jaune → orange → violet)
let color;

if (isNaN(num)) {
    color = '#454342'; // gris si valeur non valide
} else if (num >= 10) {
    color = '#6a0dad'; // violet foncé (tranche supérieure)
} else if (num >= 5) {
    color = '#ff6600'; // orange vif
} else if (num >= 1) {
    color = '#faaf2d'; // jaune orangé
} else if (num == 0) {
    color = '#ffffff'; // jaune clair
} else {
    color = '#e6e6e6'; // fallback gris clair
}
                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
                                    // ✅ AJOUT ICI
    showLegendTx4_Facades();
        });
}








// --- Thème Parc immobilier immeuble appartements---
if(theme === 'Parc immobilier immeuble appartements'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('immo_tx_immeub_appart.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["immo_tx_immeub_appart"];
                    let num = parseNumber(val);  // conversion en nombre

let color;

if (isNaN(num)) {
    color = '#454342'; // gris si valeur non valide
} else if (num >= 35) {
    color = '#6a0dad'; // violet foncé
} else if (num >= 30) {
    color = '#ff0015'; // rouge vif
} else if (num >= 20) {
    color = '#f58840'; // orange vif
} else if (num >= 10) {
    color = '#ffd700'; // jaune orangé
} else { // 0–9
    color = '#faaf2d'; // jaune clair
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
// ✅ AJOUT ICI
    showLegendImmeubleAppart();

        });
}




// --- Thème Secteurs economiques majeures---
if(theme === 'Secteurs economiques majeures'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('caract_economiq.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["caract_economiq"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide

} else if (num >= 35) {
    color = '#2c136b'; // violet

} else if (num >= 30) {
    color = '#f71d05'; // rouge

} else if (num >= 20) {
    color = '#f78a05'; // orange

} else if (num >= 10) {
    color = '#f2ee02'; // jaune

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème Gentrification---
if(theme === 'Gentrification'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('gentrification.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["gentrification"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#ffffff'; // gris si non valide

} else if (num == 1) {
    color = '#07eb2d'; // vert

} else {
    color = '#454342'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
            // ✅ AJOUT ICI
    showLegendGentrification();

        });
}





// --- Thème % Roumains---
if(theme === '% Roumains'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_roum_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}



// --- Thème % Marocains---
if(theme === '% Marocains'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_maroc_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème % Syrie---
if(theme === '% Syrie'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_syrie_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}






// --- Thème % Francais---
if(theme === '% Francais'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_fr_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème % Inde---
if(theme === '% Inde'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_inde_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}



// --- Thème % Turc---
if(theme === '% Turc'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_turc_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}






// --- Thème % Italie---
if(theme === '% Italie'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_it_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème % Portugal---
if(theme === '% Portugal'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_portugal_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème % Espagne---
if(theme === '% Espagne'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_es_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème % Pologne---
if(theme === '% Pologne'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_pl_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème % Bresil---
if(theme === '% Bresil'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_bresil_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème % Allemagne---
if(theme === '% Allemagne'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_al_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}












// --- Thème % RDC---
if(theme === '% RDC'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_rdc_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème % Bulgarie---
if(theme === '% Bulgarie'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_boulg_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème % Japon---
if(theme === '% Japon'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_jap_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}





// --- Thème % Grece---
if(theme === '% Grece'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_grece_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}






// --- Thème % NL---
if(theme === '% NL'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_nl_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}




// --- Thème % Moldovie---
if(theme === '% Moldovie'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_mold_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}



// --- Thème % UK---
if(theme === '% UK'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_uk_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}






// --- Thème % Guinee---
if(theme === '% Guinee'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('merged_tx_origins_municipality_BX_only_2022.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["tx_guinee_2022"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur


let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide



} else if (num >= 15) {
    color = '#f71d05'; // rouge

} else if (num >= 10) {
    color = '#f78a05'; // orange

} else if (num >= 5) {
    color = '#c7c71c'; // jaune orange

} else if (num > 0) {
    color = '#07eb2d'; // vert

} else {
    color = '#e6e6e6'; // gris clair (<10)
}


                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.6
                    };
                },
                onEachFeature: function(feature, layer){
                    // tooltip + popup cohérents
                    let val = feature.properties["pop_soldmig_intern"];
                    let popupContent = Object.entries(feature.properties)
                        .map(([key, value]) => `<b>${key}</b>: ${value}`)
                        .join('<br>');

                    layer.bindPopup(popupContent);
                    layer.bindTooltip(val);
                }
            }).addTo(map);
        });
}









// Appel dans ton code lorsque tu charges ce thème
// loadThemeGeoJSON('merge_sales_2_3_facades_BX_only_with_geofile.geojson', 'total_sales');
// showLegend2_3FacadesHouses();

  });
});

// Leaflet controls inside circle
map.whenReady(function () {
  const controls = document.querySelector('.leaflet-control-container');
  const wrapper = document.querySelector('.map-wrapper');
  if (controls && wrapper) wrapper.appendChild(controls);
});



// Resize map
window.addEventListener('resize', () => setTimeout(() => map.invalidateSize(),200));

window._map = map;

  // Toggle info panel
document.getElementById('btn-info').addEventListener('click', function(){
  var panel = document.getElementById('info-panel');
  panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('address-input').addEventListener('keydown', async function(e) {
  if (e.key !== 'Enter') return;

  const value = this.value.trim();
  if (!value) return;

  if (addressMarkers.length >= MAX_ADDRESS_MARKERS) {
    alert('Maximum 5 markers reached');
    return;
  }

  const result = await geocodeAddress(value);
  if (!result) {
    alert('Address not found in Brussels');
    return;
  }

  addAddressMarker(result.lat, result.lon, value);
  this.value = '';
});



// MOT DE PASSE "1" LE TEMPS DE DEV

  function unlockInternal() {
    const keyInput = document.getElementById("internalKey").value;
    const PASSWORD = "1";
    const contentCenter = document.getElementById("protected-content");
    const contentRight = document.getElementById("protected-content2");
    const message = document.getElementById("internal-message");

    if (keyInput === PASSWORD) {
        contentCenter.style.opacity = "1";
        contentCenter.style.pointerEvents = "auto";
        contentRight.style.opacity = "1";
        contentRight.style.pointerEvents = "auto";
        message.textContent = "Access granted";
        message.style.color = "green";
    } else {
        contentCenter.style.opacity = "0";
        contentCenter.style.pointerEvents = "none";
        contentRight.style.opacity = "0";
        contentRight.style.pointerEvents = "none";
        message.textContent = "Invalid key";
        message.style.color = "red";
    }
}







document.querySelectorAll('.theme-group-toggle').forEach(toggle => {

    // Nettoyage du texte (supprime flèches existantes)
    const baseText = toggle.textContent.replace(" ▸", "").replace(" ▾", "").trim();

    // Initialisation flèche fermée
    toggle.textContent = baseText + " ▸";

    toggle.addEventListener('click', function () {

        const submenu = this.nextElementSibling;
        const isOpen = submenu.classList.contains("open");

        if (isOpen) {
            // Fermer
            submenu.classList.remove("open");
            this.classList.remove("active");
            this.textContent = baseText + " ▸";
        } else {
            // Ouvrir
            submenu.classList.add("open");
            this.classList.add("active");
            this.textContent = baseText + " ▾";
        }

    });

});


/* ============================= */
/* ===== SELECTION ITEM ======== */
/* ============================= */

document.querySelectorAll('.theme-submenu div').forEach(item => {

    item.addEventListener('click', function (e) {

        e.stopPropagation(); // évite interaction avec parent

        // Retire sélection précédente
        document.querySelectorAll('.theme-submenu div').forEach(i => {
            i.classList.remove('selected');
        });

        // Ajoute sélection
        this.classList.add('selected');

    });

});



document.getElementById('btn-scan-save').addEventListener('click', async () => {

  try {

    if (!activeAddress) {
      alert("Please enter an address");
      return;
    }

    const results = [];
    const screenshots = [];

    for (let theme of ALL_THEMES) {

      // 👉 Charger visuellement le thème (pour capture)
      loadThemeGeoJSON(
        theme.file,
        theme.property,
        () => "#000",
        () => {}
      );

      // ⏳ attendre rendu
      await new Promise(r => setTimeout(r, 500));

      const value = getValueFromTheme(
        theme,
        activeAddress.lat,
        activeAddress.lon
      );

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

    alert("Scanned & Saved successfully");

  } catch (err) {
    console.error(err);
    alert("Error during Scan & Save process");
  }

});



