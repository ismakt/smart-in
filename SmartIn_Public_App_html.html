<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<title>Smart-In App</title>

<!-- Leaflet CSS & JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>



<!-- Font -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">

<meta name="viewport" content="width=device-width, initial-scale=1" />

<style>
:root{
  --bg-1: #060709;
  --bg-2: #0e1114;
  --card: rgba(255,255,255,0.03);
  --glass-border: rgba(255,255,255,0.06);
  --accent: #ff3b30;
  --muted: rgba(255,255,255,0.6);
  --shadow: 0 10px 30px rgba(0,0,0,0.6);
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}
html,body{
  height:100%;
  margin:0;
  background:linear-gradient(180deg,var(--bg-1),var(--bg-2));
  color:#eaeef7;
  overflow:hidden;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
.dashboard { height:100vh; width:100vw; display:flex; gap:20px; padding:20px; box-sizing:border-box; align-items:stretch; justify-content:center; }


.left {
  width: 300px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 100vh;       /* occupe toute la hauteur de l'écran */
  overflow-y: auto;    /* active le scroll vertical */
  padding-right: 6px;  /* optionnel : pour éviter que le scroll chevauche le contenu */
}


.brand {
  width: 50%;        /* largeur fixe du brand */
  padding: 16px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  box-shadow: var(--shadow);
  border: 1px solid var(--glass-border);
  flex-shrink: 0;     /* ne se réduit pas */
}

.theme-container {
  width: 100%;               /* largeur du conteneur */
  flex: 1 1 auto;            /* prend l’espace restant */
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;          /* active le scroll vertical */
  max-height: 100%;           /* utilise toute la hauteur disponible */
  padding-right: 6px;        /* espace pour le scroll */
}








}





.brand { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border-radius:14px; padding:16px; box-shadow: var(--shadow); border:1px solid var(--glass-border); }
.brand h1{ margin:0; font-size:18px; color:#ffd84d; }
.brand p{ margin:6px 0 0 0; color:var(--muted); font-size:13px; }
.controls { display:flex; flex-direction:column; gap:10px; }
.btn { padding:10px 12px; border-radius:10px; background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.06)); border:1px solid rgba(255,255,255,0.03); color:#eef6ff; cursor:pointer; font-weight:600; box-shadow: 6px 6px 16px rgba(0,0,0,0.6), -4px -4px 10px rgba(255,255,255,0.02); transition: transform .12s ease, box-shadow .12s ease; text-align:center; }
.btn:active{ transform:translateY(1px); }
.btn.secondary{ background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(0,0,0,0.08)); border:1px solid rgba(255,255,255,0.02); }
.center { flex:1; display:flex; flex-direction:column; gap:14px; min-width:400px; }
.map-card { flex:1; border-radius:50%; position:relative; display:flex; align-items:center; justify-content:center; overflow:visible; }
.map-wrapper { width:100%; max-width:650px; aspect-ratio:1/1; display:flex; align-items:center; justify-content:center; position:relative; z-index:1; }
.map-circle { width:100%; height:100%; border-radius:50%; overflow:hidden; display:flex; align-items:center; justify-content:center; }
#map { width:100%; height:100%; border-radius:50%; filter: brightness(1) saturate(5) ; }
.right { width:220px; min-width:220px; display:flex; flex-direction:column; gap:18px; }
.dropdown { display:none; flex-direction:column; margin-top:6px; gap:4px; background: rgba(255,255,255,0.05); padding:6px 8px; border-radius:10px; border:2px solid rgba(255,255,255,0.03); cursor:pointer; }
.dropdown div:hover { background: rgba(255,255,255,0.1); }
.foliumtooltip { background: rgba(10,10,12,0.95); color:#fff; border-radius:8px; padding:8px 10px; border:2px solid rgba(255,255,255,0.04); }

/* Custom Zoom */
.custom-zoom-container { display: flex; flex-direction: row; gap: 8px; margin-top: 10px; }
.custom-zoom-container .btn { width: 36px; height: 36px; padding: 0; font-size: 20px; display: flex; justify-content: center; align-items: center; }


/* Legend styling */
.legend { padding:6px; background: rgba(0,0,0,0.4); border-radius:6px; font-size:12px; line-height:1.4; }

@media (max-width:1000px){
  .dashboard{ flex-direction:column; padding:12px; gap:12px; }
  .left, .right { width:100%; display:flex; flex-direction:row; gap:10px; }
  .left { justify-content:space-between; }
  .right { justify-content:space-between; }
  .center { width:100%; min-width:0; }
  #map { border-radius:12px; height:calc(70vh); }
}

  #btn-filters {
  background-color: #000000;  /* fond noir */
  color: #000000;             /* texte noir */
  border: 1px solid #000000;  /* bordure noire pour qu’on ne voit rien */
  pointer-events: none;       /* désactive les clics */
}




  #info-panel {
  background: rgba(255,255,255,0.05);
  border: 2px solid rgba(255,255,255,0.03);
  border-radius: 10px;
  padding: 8px;
  margin-top: 6px;
  color: #eef6ff;
  font-size: 13px;
}






  .address-control {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

#address-input {
  padding: 10px 12px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.06));
  border: 1px solid rgba(255,255,255,0.03);
  color: #f5f0f0;
  font-weight: 600;
  outline: none;
  box-shadow: 6px 6px 16px rgba(0,0,0,0.6),
              -4px -4px 10px rgba(255,255,255,0.02);
}

#address-input::placeholder {
  color: #fcfcfc;
}

.address-limit {
  font-size: 11px;
  color: var(--muted);
  text-align: right;
}


.address-marker {
  position: relative;
}

.address-marker .dot {
  width: 10px;
  height: 10px;
  background: #ff3b30;
  border-radius: 50%;
  border: 2px solid white;
}

.address-marker .close {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 14px;
  height: 14px;
  font-size: 10px;
  background: #111;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

  .address-circle {
  pointer-events: none;
}

  .custom-zoom-container {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

  .map-controls {
  display: flex;
  flex-direction: column;
  gap: 8px;
}


.info-container {
  position: absolute;  /* pour le placer librement */
  top: 20px;           /* distance depuis le haut du parent (ex : la map) */
  left: 20px;          /* distance depuis la gauche */
  z-index: 1000;       /* pour être au-dessus des autres éléments */
}


.info-dropdown {
  position: absolute;
  top: 42px;
  right: 0;
  width: 260px;
  max-height: 320px;
  overflow-y: auto;
  background: #111;
  color: white;
  padding: 12px;
  border-radius: 8px;
  z-index: 1000;
  display: none;
}

#protected-content, #protected-content2 {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}



</style>
</head>

<body>

<!-- Champ mot de passe, toujours visible -->
<div id="password-container">
    <input type="password" id="internalKey" placeholder="Enter internal key">
    <button onclick="unlockInternal()">Unlock</button>
    <span id="internal-message"></span>
</div>



<div class="dashboard">
  <div class="left">
    <div class="brand">
      <h1>Vadilion Digital</h1>
      <p>Smart-In — Brussels</p>
    </div>
    <div class="controls">


            <button id="btn-city" class="btn">Select city</button>
            <div id="city-dropdown" class="dropdown">
        <div data-city="Bruxelles">Bruxelles</div>
              <div data-city="Paris">Paris</div>
              <div data-city="Nice-Monaco">Nice-Monaco</div>
 </div>



      <button id="btn-theme" class="btn">Select Theme</button>
      <div id="theme-dropdown" class="dropdown">



        <div data-theme="Total sales 2013-2024">Total Sales (2013-2024)</div>
        <div data-theme="2-3 facades houses total sales 2013-2024">Houses Sales (2013-2024)</div>
        <div data-theme="4 or plus facades houses total sales 2013-2024">Villa Sales (2013-2024)</div>
        <div data-theme="apartments total sales 2013-2024">Flats Sales (2013-2024)</div>
        <div data-theme="median sale price 2013">Median Sale Price (2013)</div>
        <div data-theme="median sale price 2023">Median Sale Price (2023)</div>
        <div data-theme="MS_P10_2013">MS_P10_2013</div>
        <div data-theme="MS_P10_2023">MS_P10_2023</div>
        <div data-theme="MS_P25_2013">MS_P25_2013</div>
        <div data-theme="MS_P25_2023">MS_P25_2023</div>
        <div data-theme="MS_P75_2013">MS_P75_2013</div>
        <div data-theme="MS_P75_2023">MS_P75_2023</div>
        <div data-theme="MS_P90_2013">MS_P90_2013</div>
        <div data-theme="MS_P90_2023">MS_P90_2023</div>
        <div data-theme="median sale price apartment 2013">Median Sale Price - Flats (2013)</div>
        <div data-theme="median sale price apartment 2023">Median Sale Price - Flats (2023)</div>
        <div data-theme="MS_P10_2013_all_houses">MS_P10_2013_all_houses</div>
        <div data-theme="MS_P10_2013_apartments">MS_P10_2013_apartments</div>
        <div data-theme="MS_P10_2023_all_houses">MS_P10_2023_all_houses</div>
        <div data-theme="MS_P10_2023_apartments">MS_P10_2023_apartments</div>
        <div data-theme="MS_P25_2013_all_houses">MS_P25_2013_all_houses</div>
        <div data-theme="MS_P25_2013_apartments">MS_P25_2013_apartments</div>
        <div data-theme="MS_P25_2023_all_houses">MS_P25_2023_all_houses</div>
        <div data-theme="MS_P25_2023_apartments">MS_P25_2023_apartments</div>
        <div data-theme="MS_P75_2013_all_houses">MS_P75_2013_all_houses</div>
        <div data-theme="MS_P75_2013_apartments">MS_P75_2013_apartments</div>
        <div data-theme="MS_P75_2023_all_houses">MS_P75_2023_all_houses</div>
        <div data-theme="MS_P75_2023_apartments">MS_P75_2023_apartments</div>
        <div data-theme="MS_P90_2013_all_houses">MS_P90_2013_all_houses</div>
        <div data-theme="MS_P90_2013_apartments">MS_P90_2013_apartments</div>
        <div data-theme="MS_P90_2023_all_houses">MS_P90_2023_all_houses</div>
        <div data-theme="MS_P90_2023_apartments">MS_P90_2023_apartments</div>
        <div data-theme="TotalRentP50LessorLegalPerson2024">TotalRentP50LessorLegalPerson2024</div>
        <div data-theme="TotalRentP50LessorNeutralPerson2024">TotalRentP50LessorNeutralPerson2024</div>
        <div data-theme="Total_Population_2014">Total_Population_2014</div>
        <div data-theme="Total_Population_2025">Total_Population_2025</div>
        <div data-theme="Avg_Revenue_2023">Avg_Revenue_2023</div>
        <div data-theme="Avg_Revenue_2013">Avg_Revenue_2013</div>
        <div data-theme="ZP">ZP</div>
        <div data-theme="Vols_2024">Vols_2024</div>
        <div data-theme="Vols_2014">Vols_2014</div>
        <div data-theme="Vols_2000">Vols_2000</div>
        <div data-theme="coups_blessures_2024">coups_blessures_2024</div>
        <div data-theme="coups_blessures_2014">coups_blessures_2014</div>
        <div data-theme="coups_blessures_2000">coups_blessures_2000</div>
        <div data-theme="drogues_2024">drogues_2024</div>
        <div data-theme="drogues_2014">drogues_2014</div>
        <div data-theme="drogues_2000">drogues_2000</div>
        <div data-theme="alcool_2024">alcool_2024</div>
        <div data-theme="alcool_2014">alcool_2014</div>
        <div data-theme="alcool_2000">alcool_2000</div>
        <div data-theme="armes_2024">armes_2024</div>
        <div data-theme="armes_2014">armes_2014</div>
        <div data-theme="armes_2000">armes_2000</div>
        <div data-theme="secu_publiq_2024">secu_publiq_2024</div>
        <div data-theme="secu_publiq_2014">secu_publiq_2014</div>
        <div data-theme="secu_publiq_2000">secu_publiq_2000</div>
        <div data-theme="degradat_prop_2024">degradat_prop_2024</div>
        <div data-theme="degradat_prop_2014">degradat_prop_2014</div>
        <div data-theme="degradat_prop_2000">degradat_prop_2000</div>
        <div data-theme="Cambriolages_2024">Cambriolages_2024</div>
        <div data-theme="Cambriolages_2014">Cambriolages_2014</div>
        <div data-theme="Cambriolages_2000">Cambriolages_2000</div>
        <div data-theme="Evolution Population 2012-2022 en %">Evolution Population 2012-2022 en %</div>
        <div data-theme="Population en 2022">Population en 2022</div>
        <div data-theme="Densité de Population">Densité de Population</div>
        <div data-theme="% Population agée de 18 à 64 ans">% Population agée de 18 à 64 ans</div>
        <div data-theme="Solde migratoire interne">Solde migratoire interne</div>
        <div data-theme="Solde migratoire international">Solde migratoire international</div>
        <div data-theme="Population Croissance Annuelle">Population Croissance Annuelle</div>
        <div data-theme="% Population immigrée">% Population immigrée</div>
        <div data-theme="% Population immigrée UE">% Population immigrée UE</div>
        <div data-theme="% Population immigrée UE14">% Population immigrée UE14</div>
        <div data-theme="% Population immigrée UE13">% Population immigrée UE13</div>
        <div data-theme="pop_tx_immig_resteEu+nonEU">pop_tx_immig_resteEu+nonEU</div>
        <div data-theme="% Population immigrée nationalité étrangère naissance">% Population immigrée nationalité étrangère naissance</div>
        <div data-theme="Taux natalité">Taux natalité</div>
        <div data-theme="Revenu Médian">Revenu Médian</div>
        <div data-theme="Taux emploi">Taux emploi</div>
        <div data-theme="Taux emploi 15 à 24 ans">Taux emploi 15 à 24 ans</div>
        <div data-theme="Taux emploi 25 à 49 ans">Taux emploi 25 à 49 ans</div>
        <div data-theme="Taux emploi 50 à 64 ans">Taux emploi 50 à 64 ans</div>
        <div data-theme="Taux salariés">Taux salariés</div>
        <div data-theme="Taux indépendants">Taux indépendants</div>
        <div data-theme="Taux ouvriers">Taux ouvriers</div>
        <div data-theme="Taux employés">Taux employés</div>
        <div data-theme="Emplois Institutions Internationales">Emplois Institutions Internationales</div>
        <div data-theme="Taux fonctionnaires">Taux fonctionnaires</div>
        <div data-theme="Taux chomage">Taux chomage</div>
        <div data-theme="Taux chomage LD">Taux chomage LD</div>
        <div data-theme="Taux chomage 15 a 24 ans">Taux chomage 15 a 24 ans</div>
        <div data-theme="Taux chomage 25 a 49 ans">Taux chomage 25 a 49 ans</div>
        <div data-theme="Taux chomage 50 a 64 ans">Taux chomage 50 a 64 ans</div>
        <div data-theme="Taux CPAS 18 a 24 ans">Taux CPAS 18 a 24 ans</div>
        <div data-theme="Taux GRAPA 65+">Taux GRAPA 65+</div>
        <div data-theme="Taux naissances sans revenu de travail">Taux naissances sans revenu de travail</div>
        <div data-theme="Taux naissances meres etrangeres">Taux naissances meres etrangeres</div>
        <div data-theme="Taux retard scolaire">Taux retard scolaire</div>
        <div data-theme="Sieges sociaux">Sieges sociaux</div>
        <div data-theme="Etablissements">Etablissements</div>
        <div data-theme="Solde migration entreprises 2009 a 2020">Solde migration entreprises 2009 a 2020</div>
        <div data-theme="Solde migration entreprises 2009 a 2020 Horeca">Solde migration entreprises 2009 a 2020 Horeca </div>
        <div data-theme="Solde migration entreprises 2009 a 2020 commerce detail">Solde migration entreprises 2009 a 2020 commerce detail</div>
        <div data-theme="Solde migration entreprises 2009 a 2020 IT">Solde migration entreprises 2009 a 2020 IT</div>
        <div data-theme="Solde migration entreprises 2009 a 2020 RBC">Solde migration entreprises 2009 a 2020 RBC</div>
        <div data-theme="Solde migration entreprises 2009 a 2020 Régions">Solde migration entreprises 2009 a 2020 Régions</div>
        <div data-theme="Taux vegetation">Taux vegetation</div>
        <div data-theme="Taux espaces verts accessibles public">Taux espaces verts accessibles public</div>
        <div data-theme="Logements sociaux">Logements sociaux</div>
        <div data-theme="Batiments residentiels">Batiments residentiels</div>
        <div data-theme="Loyer moyen">Loyer moyen</div>
        <div data-theme="Appartements vendus 2011">Appartements vendus 2011</div>
        <div data-theme="Appartements vendus 2021">Appartements vendus 2021</div>
        <div data-theme="Maisons vendus 2011">Maisons vendus 2011</div>
        <div data-theme="Maisons vendus 2021">Maisons vendus 2021</div>
        <div data-theme="Prix median appartements 2011">Prix median appartements 2011</div>
        <div data-theme="Prix median appartements 2021">Prix median appartements 2021</div>
        <div data-theme="Prix median maisons 2011">Prix median maisons 2011</div>
        <div data-theme="Prix median maisons 2021">Prix median maisons 2021</div>
        <div data-theme="Parc immobilier 2 a 3 facades">Parc immobilier 2 a 3 facades</div>
        <div data-theme="Parc immobilier 4 facades">Parc immobilier 4 facades</div>
        <div data-theme="Parc immobilier immeuble appartements">Parc immobilier immeuble appartements</div>
        <div data-theme="Secteurs economiques majeures">Secteurs economiques majeures</div>
        <div data-theme="Gentrification">Gentrification</div>


        <div data-theme="% Roumains">% Roumains</div>
        <div data-theme="% Marocains">% Marocains</div>
        <div data-theme="% Syrie">% Syrie</div>
        <div data-theme="% Francais">% Francais</div>
        <div data-theme="% Inde">% Inde</div>
        <div data-theme="% Turc">% Turc</div>
        <div data-theme="% Francais">% Francais</div>
        <div data-theme="% Italie">% Italie</div>
        <div data-theme="% Portugal">% Portugal</div>
        <div data-theme="% Espagne">% Espagne</div>
        <div data-theme="% Pologne">% Pologne</div>
        <div data-theme="% Bresil">% Bresil</div>
        <div data-theme="% Allemagne">% Allemagne</div>
        <div data-theme="% RDC">% RDC</div>
        <div data-theme="% Bulgarie">% Bulgarie</div>
        <div data-theme="% Japon">% Japon</div>
        <div data-theme="% Grece">% Grece</div>
        <div data-theme="% NL">% NL</div>
        <div data-theme="% Moldovie">% Moldovie</div>
        <div data-theme="% UK">% UK</div>
        <div data-theme="% Guinee">% Guinee</div>

        <div data-theme="///Current and Future Urban and R.E. projects affecting the market///">///Current and Future Urban and R.E. projects affecting the market///</div>

        <div data-theme="///M2 sales price///">///M2 sales price///</div>
        <div data-theme="///Air and Noise Pollutions///">///Air and Noise Pollutions///</div>



      </div>


      <button id="btn-filters" class="btn">Filtres</button>
      <div id="filters-dropdown" class="dropdown">
        <div id="filters-content">choose a theme</div>
      </div>
    </div>
  </div>

<div class="center">
    <div id="protected-content">
        <div class="map-card">
            <div class="map-wrapper">
                <div class="map-circle">
                    <div id="map"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="right">
    <div class="controls">
        <div id="protected-content2">
            <div class="legend"></div>

            <!-- Bouton Info -->
            <div class="custom-info-container">
                <button id="btn-info" class="btn secondary">Info</button>
            </div>

            <!-- Panneau d'explication -->
            <div id="info-panel" class="dropdown" style="display:none; flex-direction: column; max-height:200px; overflow-y:auto; margin-top: 20px;">
                <div class="info-content"></div>
              <button id="btn-save-pdf" class="btn" style="display:none;" > Save as PDF</button> </div> </div> </div>







        <!-- Address input -->
        <div class="address-control">
            <input id="address-input" type="text" placeholder="Enter address (Max 3 marks)" title="Enter address" />
            <div id="address-limit" class="address-limit"></div>
        </div>

        <button id="btn-center" class="btn">Center map</button>
        <button id="btn-toggle" class="btn secondary">Polygones OFF</button>
        <button id="btn-filters-off" class="btn secondary">Filters OFF</button>

        <div class="custom-zoom-container">
            <button id="zoom-in" class="btn">+</button>
            <button id="zoom-out" class="btn">-</button>
        </div>
    </div>
</div>



<script>

  let currentTheme = null; // défini en haut, avant l'utilisation






      // --- Fonction pour convertir les valeurs en nombres décimaux ---


    function parseDecimal(val) {
        if (val == null) return NaN; // null ou undefined
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

// --- Global GeoJSON variables ---


var bruxellesLayer;
var currentThemeLayer;
var activeTheme = null;
var polygonsOn = true;

document.addEventListener('DOMContentLoaded', () => {

  /* ===============================
     VARIABLES GLOBALES
  =============================== */
  let currentTheme = null;          // thème sélectionné
  let addressMarkers = [];
  const MAX_ADDRESS_MARKERS = 3;

  let activeAddress = null;
  let activeSector  = null;


const btnSavePDF = document.getElementById('btn-save-pdf');









  /* ===============================
     RÉFÉRENCES DOM
  =============================== */
  const infoPanel    = document.getElementById('info-panel');
  const infoContent  = document.querySelector('#info-panel .info-content');
  const btnInfo      = document.getElementById('btn-info');
  const addressInput = document.getElementById('address-input');



document.addEventListener('DOMContentLoaded', () => {

  const infoContent = document.querySelector('#info-panel .info-content');
  const btnSavePDF  = document.getElementById('btn-save-pdf');

  btnSavePDF.addEventListener('click', () => {
    if (!infoContent) return;

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    doc.html(infoContent, {
      callback: function (doc) {
        doc.save('report.pdf'); // téléchargement automatique
      },
      x: 10,
      y: 10,
      width: 190,
      windowWidth: 800
    });
  });

});













  /* ===============================
     FONCTION : OPEN INFO PANEL
  =============================== */
  function openInfoPanel() {
    infoPanel.style.display = 'flex';
  }

  /* ===============================
     FONCTION : UPDATE INFO PANEL
  =============================== */

function updateInfoPanel() {
  // Si pas d'adresse, pas de secteur ou pas de thème sélectionné
  if (!activeAddress || !activeSector || !currentTheme) {
    infoContent.innerHTML = "Ajoutez une adresse et choisissez un thème.";
    btnSavePDF.style.display = 'none'; // cacher le bouton
    return;
  }

  // Récupère la valeur du thème pour le secteur sélectionné
  const value = activeSector.feature.properties[currentTheme] ?? 'N/A';

  // Contenu du panneau d'info
  infoContent.innerHTML = `
    <b>Adresse sélectionnée</b><br>
    Lat : ${activeAddress.lat.toFixed(5)}, Lng : ${activeAddress.lng.toFixed(5)}<br><br>

    <b>Thème</b><br>
    ${currentTheme}<br><br>

    <b>Valeur du secteur</b><br>
    ${value}
  `;

  // Affiche le bouton PDF
  btnSavePDF.style.display = 'block';
}

  /* ===============================
     FONCTION : GET SECTOR FROM LAT/LNG
  =============================== */
  function getSectorFromLatLng([lat, lng]) {
    let found = null;
    if (!bruxellesLayer) return null;

    bruxellesLayer.eachLayer(layer => {
      if (layer.feature && layer.getBounds().contains([lat, lng])) {
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
      lng: parseFloat(data[0].lon)
    };
  }

  /* ===============================
     FONCTION : AJOUTER MARKER ADRESSE
  =============================== */
  function addAddressMarker(lat, lng, label) {
    if (addressMarkers.length >= MAX_ADDRESS_MARKERS) return;

    const id = Date.now().toString();

    const marker = L.marker([lat, lng], {
      icon: createAddressIcon(id),
      pane: 'markerPane'
    }).addTo(map);

    const circle500 = L.circle([lat, lng], {
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
    activeAddress = { lat, lng };
    activeSector = getSectorFromLatLng([lat, lng]);

    updateInfoPanel();
    openInfoPanel();

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

    map.setView([lat, lng], Math.max(map.getZoom(), 13));
  }

  /* ===============================
     EVENT : BOUTON INFO
  =============================== */
  btnInfo.addEventListener('click', () => {
    infoPanel.style.display = infoPanel.style.display === 'flex' ? 'none' : 'flex';
  });

  /* ===============================
     EVENT : INPUT ADRESSE
  =============================== */
  addressInput.addEventListener('keydown', async (e) => {
    if (e.key !== 'Enter') return;

    const value = addressInput.value.trim();
    if (!value) return;

    if (addressMarkers.length >= MAX_ADDRESS_MARKERS) {
      alert('Maximum 3 markers reached');
      return;
    }

    const result = await geocodeAddress(value);
    if (!result) {
      alert('Adresse introuvable à Bruxelles');
      return;
    }

    addAddressMarker(result.lat, result.lng, value);
    addressInput.value = '';
  });

  /* ===============================
     EVENT : BOUTONS THEME
  =============================== */
  const themeButtons = document.querySelectorAll('#theme-dropdown div');
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentTheme = btn.dataset.theme;
      if (activeAddress && activeSector) {
        updateInfoPanel();
        openInfoPanel();
      }
    });
  });

});


// --- Créer un pane pour les communes avec un zIndex élevé ---

map.createPane('communesPane');
map.getPane('communesPane').style.zIndex = 650;  // plus haut que le pane par défaut

// --- Charger la couche de base des communes ---

fetch('shapefile_BX_only_geojson_4326.geojson')
  .then(res => res.json())
  .then(data => {

    // Couche de base : uniquement les contours, aucun remplissage

    bruxellesLayer = L.geoJSON(data, {
      pane: 'communesPane',
      style: function () {
        return {
          color: '#000',        // contour noir
          weight: 2,
          fillColor: 'none',    // aucun remplissage
          fillOpacity: 0        // transparent
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

function showLegendTotalSales() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Total sales 2013-2024</b></div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fa0505;margin-right:6px;"></span>> 1000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#4737a1;margin-right:6px;"></span>751–1000</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#020f4a;margin-right:6px;"></span>501–750</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#3d71eb;margin-right:6px;"></span>301–500</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#043d1f;margin-right:6px;"></span>101–300</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1cf500;margin-right:6px;"></span>11–100</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>1–10</div>
  `;
}

function showLegend2_3Facades() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>2–3 facades houses total sales 2013–2024</b></div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#3d71eb;margin-right:6px;"></span>151-200</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#043d1f;margin-right:6px;"></span>101–150</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1cf500;margin-right:6px;"></span>11–100</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>1–10</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>0</div>
  `;
}

function showLegend4orplusFacades() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>4 or plus facades houses total sales 2013–2024</b></div>

            <div><span style="display:inline-block;width:20px;height:12px;background:#f52d05;margin-right:6px;"></span>51-60</div>

        <div><span style="display:inline-block;width:20px;height:12px;background:#4737a1;margin-right:6px;"></span>41-50</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#3d71eb;margin-right:6px;"></span>31-40</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#043d1f;margin-right:6px;"></span>21–30</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#1cf500;margin-right:6px;"></span>11–20</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>1–10</div>

    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>0</div>
  `;
}

function showLegendApartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Apartments total sales 2013–2024</b></div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#f50505;margin-right:6px;"></span>751 and more</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a0f33;margin-right:6px;"></span>501-750</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#8f6bdb;margin-right:6px;"></span>301-500</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#3d71eb;margin-right:6px;"></span>201-300</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#043d1f;margin-right:6px;"></span>101–200</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1cf500;margin-right:6px;"></span>51-100</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#fff4b8;margin-right:6px;"></span>1–50</div>
    <div><span style="display:inline-block;width:20px;height:12px;background:#1a1a1a;margin-right:6px;"></span>0</div>
        `;
        }


function showLegendSalesMedian2013() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Sales Median Price 2013</b></div>
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



function showLegendSalesMedian2023() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Sales Median Price 2023</b></div>
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


function showLegendSalesMedianApartment2013() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Sales Median Price Apartment 2013</b></div>
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


function showLegendSalesMedianApartment2023() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Sales Median Price Apartment 2023</b></div>
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

function showLegendMS_P10_2013() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P10_2013</b></div>
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


function showLegendMS_P10_2023() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P10_2023</b></div>
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

function showLegendMS_P25_2013() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P25_2013</b></div>
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


function showLegendMS_P25_2023() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P25_2023</b></div>
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



function showLegendMS_P75_2013() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P75_2013</b></div>
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


function showLegendMS_P75_2023() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P75_2023</b></div>
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




function showLegendMS_P90_2013() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P90_2013</b></div>
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


function showLegendMS_P90_2023() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P90_2023</b></div>
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

function showLegendMS_P10_2013_all_houses() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P10_2013_all_houses</b></div>
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

function showLegendMS_P10_2013_apartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P10_2013_apartments</b></div>
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


function showLegendMS_P10_2023_all_houses() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P10_2023_all_houses</b></div>
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


function showLegendMS_P25_2013_apartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P25_2013_apartments</b></div>
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



function showLegendMS_P25_2023_all_houses() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P25_2023_all_houses</b></div>
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




function showLegendMS_P25_2023_apartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P25_2023_apartments</b></div>
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


function showLegendMS_P75_2013_all_houses() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P75_2013_all_houses</b></div>
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

function showLegendMS_P75_2013_apartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P75_2013_apartments</b></div>
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



function showLegendMS_P75_2023_all_houses() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P75_2023_all_houses</b></div>
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


function showLegendMS_P75_2023_apartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P75_2023_apartments</b></div>
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




function showLegendMS_P90_2013_all_houses() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P90_2013_all_houses</b></div>
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


function showLegendMS_P90_2013_apartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P90_2013_apartments</b></div>
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


function showLegendMS_P90_2023_all_houses() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P90_2023_all_houses</b></div>
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


function showLegendMS_P90_2023_apartments() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>MS_P90_2023_apartments</b></div>
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

function showLegendTotalRentP50LessorLegalPerson2024() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>TotalRentP50LessorLegalPerson2024</b></div>
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

function showLegendTotalRentP50LessorNeutralPerson2024() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>TotalRentP50LessorNeutralPerson2024</b></div>
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

function showLegendAvg_Revenue_2013() {
  const legendDiv = document.querySelector('.legend');
  legendDiv.innerHTML = `
    <div><b>Avg_Revenue_2013</b></div>
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






// --- GetColor functions par thème ---

function getColorTotalSales(d){
    if(d > 1000) return '#fa0505';
    if(d > 750) return '#4737a1';
    if(d > 500) return '#020f4a';
    if(d > 300) return '#3d71eb';
    if(d > 100) return '#043d1f';
    if(d > 10) return '#1cf500';
    if(d > 0) return '#fff4b8';
    return '#1a1a1a';
}

function getColorFacades(d){
    if(d > 150) return '#3d71eb';
    if(d > 100) return '#043d1f';
    if(d > 10) return '#1cf500';
    if(d > 0) return '#fff4b8';
    return '#1a1a1a';
}

function getColor4orplusFacades(d){
if(d > 50) return '#f52d05';
if(d > 40) return '#4737a1';
    if(d > 30) return '#3d71eb';
    if(d > 20) return '#043d1f';
    if(d > 10) return '#1cf500';
    if(d > 0) return '#fff4b8';
    return '#1a1a1a';
}

function getColorApartments(d){
if(d > 750) return '#f50505'; //rouge
if(d > 500) return '#1a0f33'; //violet foncé
if(d > 300) return '#8f6bdb'; //violet
    if(d > 200) return '#3d71eb'; //bleu
    if(d > 100) return '#043d1f'; //vert foncé
    if(d > 50) return '#1cf500'; //vert
    if(d > 0) return '#fff4b8'; //jaune
    return '#1a1a1a';
}

function getColorMedianSalesPrice2013(d){
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

function getColorMedianSalesPrice2023(d){
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

function getColorMedianSalesPriceApartment2013(d){
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

function getColorMedianSalesPriceApartment2023(d){
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

function getColorMS_P10_2013(d){
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


function getColorMS_P10_2023(d){
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


function getColorMS_P25_2013(d){
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


function getColorMS_P25_2023(d){
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


function getColorMS_P75_2013(d){
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

function getColorMS_P75_2023(d){
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

function getColorMS_P90_2013(d){
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

function getColorMS_P90_2023(d){
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


function getColorMS_P10_2013_all_houses(d){
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

function getColorMS_P10_2013_apartments(d){
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


function getColorMS_P25_2013_all_houses(d){
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

function getColorMS_P25_2013_apartments(d){
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

function getColorMS_P25_2023_all_houses(d){
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

function getColorMS_P25_2023_apartments(d){
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


function getColorMS_P75_2013_all_houses(d){
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



function getColorMS_P75_2013_apartments(d){
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



function getColorMS_P75_2023_all_houses(d){
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


function getColorMS_P75_2023_apartments(d){
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

function getColorMS_P90_2013_all_houses(d){
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


function getColorMS_P90_2013_apartments(d){
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


function getColorMS_P90_2023_all_houses(d){
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

function getColorMS_P90_2023_apartments(d){
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


function getColorTotalRentP50LessorLegalPerson2024(d){
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


function getColorTotalRentP50LessorNeutralPerson2024(d) {
    d = Number(d);
    if (d >= 701) return '#b30000';
    if (d >= 601) return '#e34a33';
    if (d >= 501) return '#fc8d59';
    if (d > 0)   return '#fdbb84';
    return '#1a1a1a';
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


function getColorAvg_Revenue_2023(d){
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

function getColorAvg_Revenue_2013(d){
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
    document.getElementById('theme-dropdown').style.display = 'none';

    if(theme === 'Total sales 2013-2024'){
      loadThemeGeoJSON('merge_total_sales_2013_2024_BX_only_with_geofile.geojson', 'total_sales_2013_2024', getColorTotalSales, showLegendTotalSales);
    }
    if(theme === '2-3 facades houses total sales 2013-2024'){
    loadThemeGeoJSON(
        'merge_sales_2_3_facades_BX_only_with_geofile.geojson',
        'total_sales', getColorFacades, showLegend2_3Facades
    );
}

if(theme === '4 or plus facades houses total sales 2013-2024'){
    loadThemeGeoJSON(
        'merge_apartments_BX_only_with_geofile.geojson',
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


if(theme === 'MS_P10_2013_all_houses'){
    loadThemeGeoJSON(
        'merge_sales_ms_p10_2013_BX_only_with_geofile_all_houses.geojson',
        'MS_P10_2013_all_houses', getColorMS_P10_2013_all_houses, showLegendMS_P10_2013_all_houses
    );
}

if(theme === 'MS_P10_2013_apartments'){
    loadThemeGeoJSON(
        'merge_sales_ms_p10_2013_BX_only_with_geofile_Appartements.geojson',
        'MS_P10_2013_apartments', getColorMS_P10_2013_apartments, showLegendMS_P10_2013_apartments
    );
}

if(theme === 'MS_P10_2023_all_houses'){
    loadThemeGeoJSON(
        'merge_sales_ms_p10_2023_BX_only_with_geofile_all_houses.geojson',
        'MS_P10_2023_all_houses', getColorMS_P10_2023_all_houses, showLegendMS_P10_2023_all_houses
    );
}

if(theme === 'MS_P10_2023_apartments'){
    loadThemeGeoJSON(
        'merge_sales_ms_p10_2023_BX_only_with_geofile_apartments.geojson',
        'MS_P10_2023_apartments', getColorMS_P10_2023_apartments, showLegendMS_P10_2023_apartments
    );
}







if(theme === 'MS_P25_2013_all_houses'){
    loadThemeGeoJSON(
        'merge_sales_ms_p25_2013_BX_only_with_geofile_all_houses.geojson',
        'MS_P25_2013_all_houses', getColorMS_P25_2013_all_houses, showLegendMS_P25_2013_all_houses
    );
}

if(theme === 'MS_P25_2013_apartments'){
    loadThemeGeoJSON(
        'merge_sales_ms_p25_2013_BX_only_with_geofile_Appartements.geojson',
        'MS_P25_2013_apartments', getColorMS_P25_2013_apartments, showLegendMS_P25_2013_apartments
    );
}


if(theme === 'MS_P25_2023_all_houses'){
    loadThemeGeoJSON(
        'merge_sales_ms_p25_2023_BX_only_with_geofile_all_houses.geojson',
        'MS_P25_2023_all_houses', getColorMS_P25_2023_all_houses, showLegendMS_P25_2023_all_houses
    );
}

if(theme === 'MS_P25_2023_apartments'){
    loadThemeGeoJSON(
        'merge_sales_ms_p25_2023_BX_only_with_geofile_apartments.geojson',
        'MS_P25_2023_apartments', getColorMS_P25_2023_apartments, showLegendMS_P25_2023_apartments
    );
}






if(theme === 'MS_P75_2013_all_houses'){
    loadThemeGeoJSON(
        'merge_sales_ms_p75_2013_BX_only_with_geofile_all_houses.geojson',
        'MS_P75_2013_all_houses', getColorMS_P75_2013_all_houses, showLegendMS_P75_2013_all_houses
    );
}

if(theme === 'MS_P75_2013_apartments'){
    loadThemeGeoJSON(
        'merge_sales_ms_p75_2013_BX_only_with_geofile_apartments.geojson',
        'MS_P75_2013_apartments', getColorMS_P75_2013_apartments, showLegendMS_P75_2013_apartments
    );
}

if(theme === 'MS_P75_2023_all_houses'){
    loadThemeGeoJSON(
        'merge_sales_ms_p75_2023_BX_only_with_geofile_all_houses.geojson',
        'MS_P75_2023_all_houses', getColorMS_P75_2023_all_houses, showLegendMS_P75_2023_all_houses
    );
}

if(theme === 'MS_P75_2023_apartments'){
    loadThemeGeoJSON(
        'merge_sales_ms_p75_2023_BX_only_with_geofile_apartments.geojson',
        'MS_P75_2023_apartments', getColorMS_P75_2023_apartments, showLegendMS_P75_2023_apartments
    );
}



if(theme === 'MS_P90_2013_all_houses'){
    loadThemeGeoJSON(
        'merge_sales_ms_p90_2013_BX_only_with_geofile_all_houses.geojson',
        'MS_P90_2013_all_houses', getColorMS_P90_2013_all_houses, showLegendMS_P90_2013_all_houses
    );
}

if(theme === 'MS_P90_2013_apartments'){
    loadThemeGeoJSON(
        'merge_sales_ms_p90_2013_BX_only_with_geofile_apartments.geojson',
        'MS_P90_2013_all_houses', getColorMS_P90_2013_all_houses, showLegendMS_P90_2013_all_houses
    );
}

if(theme === 'MS_P90_2023_all_houses'){
    loadThemeGeoJSON(
        'merge_sales_ms_p90_2023_BX_only_with_geofile_all_houses.geojson',
        'MS_P90_2013_all_houses', getColorMS_P90_2013_all_houses, showLegendMS_P90_2013_all_houses
    );
}

if(theme === 'MS_P90_2023_apartments'){
    loadThemeGeoJSON(
        'merge_sales_ms_p90_2023_BX_only_with_geofile_apartments.geojson',
        'MS_P90_2013_all_houses', getColorMS_P90_2013_all_houses, showLegendMS_P90_2013_all_houses
    );
}

if(theme === 'TotalRentP50LessorLegalPerson2024'){
    loadThemeGeoJSON(
        'merged_StatisticalUnitWideRealEstateRentsAnnual_2024_lessorlegalperson_totalrentp50_BX_only.geojson',
        'TotalRentP50LessorLegalPerson2024', getColorTotalRentP50LessorLegalPerson2024, showLegendTotalRentP50LessorLegalPerson2024
    );
}

if(theme === 'TotalRentP50LessorNeutralPerson2024'){
    loadThemeGeoJSON(
        'merged_StatisticalUnitWideRealEstateRentsAnnual_2024_lessorneutralperson_totalrentp50_BX_only.geojson',
        'TotalRentP50LessorNeutralPerson2024', getColorTotalRentP50LessorNeutralPerson2024, showLegendTotalRentP50LessorNeutralPerson2024
    );
}

if(theme === 'TotalRentP50TakerLegalPerson2024'){
    loadThemeGeoJSON(
        'merged_StatisticalUnitWideRealEstateRentsAnnual_2024_takerlegalperson_totalrentp50_BX_only.geojson',
        'TotalRentP50TakerLegalPerson2024', getColorTotalRentP50TakerLegalPerson2024, showLegendTotalRentP50TakerLegalPerson2024
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
        'Avg_Revenue_2023', getColorAvg_Revenue_2023, showLegendAvg_Revenue_2023
    );
}



if(theme === 'Avg_Revenue_2013'){
    loadThemeGeoJSON(
        'merged_statsector_revenue_BX_only_2013_partialmatch.geojson',
        'Avg_Revenue_2013', getColorAvg_Revenue_2013, showLegendAvg_Revenue_2013
    );
}


if(theme === 'ZP'){

    // Supprimer la couche précédente si elle existe
    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('zones_police_bruxelles.geojson')
        .then(res => res.json())
        .then(data => {
            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    let color = '#cccccc'; // gris par défaut
                    switch(feature.properties.zone_police){
                        case 'ZP MIDI': color = '#ff6666'; break;
                        case 'ZP BRUXELLES-OUEST': color = '#66ccff'; break;
                        case 'ZP BRUXELLES CAPITALE IXELLES': color = '#ffff66'; break;
                        case 'ZP POLBRUNO': color = '#66ff66'; break;
                        case 'ZP MONTGOMERY': color = '#ffcc66'; break;
                        case 'ZP UCCLE-W-B-AUDERGHEM': color = '#cc66ff'; break;
                    }
                    return {
                        color: '#000',
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 0.5
                    };
                },
                onEachFeature: function(feature, layer){
                    layer.bindTooltip(feature.properties.zone_police);
                }
            }).addTo(map);
        });
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

                    if(val > 15000) color = '#1b032b';       // violet foncé
                    else if(val > 10000) color = '#ff0000';  // rouge
                    else if(val > 5000) color = '#ff9900';   // orange
                    else color = '#ffff66';                   // jaune

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

                    if(val > 15000) color = '#1b032b';       // violet foncé
                    else if(val > 10000) color = '#ff0000';  // rouge
                    else if(val > 5000) color = '#ff9900';   // orange
                    else color = '#ffff66';                   // jaune

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
                    let color = '#ffff66'; // jaune par défaut

                    if(val > 15000) color = '#1b032b';       // violet foncé
                    else if(val > 10000) color = '#ff0000';  // rouge
                    else if(val > 5000) color = '#ff9900';   // orange
                    else color = '#ffff66';                   // jaune

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
    color = '#454342'; // gris si non valide

} else if (num >= 20000) {
    color = '#02f7ba'; // turquoise

} else if (num >= 18000) {
    color = '#014503'; // vert foncé

} else if (num >= 16000) {
    color = '#07f70b'; // vert

} else if (num >= 14000) {
    color = '#f7e707'; // jaune

} else if (num >= 12000) {
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
    color = '#05f7f7'; // turquoise

} else if (num >= 5000) {
    color = '#02420f'; // vert foncé 2

} else if (num >= 3000) {
    color = '#05851f'; // vert foncé

    } else if (num >= 2000) {
    color = '#56f072'; // vert

} else if (num >= 1500) {
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

                    // Choix de la couleur selon la valeur
let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide

// 🟢 valeurs positives


} else if (num >= 70) {
    color = '#314501'; // vert foncé

} else if (num >= 60) {
    color = '#5d8501'; // vert moyen

} else if (num >= 40) {
    color = '#b3f21f'; // vert clair

} else if (num >= 30) {
    color = '#f7cd23'; // jaune


} else if (num >= 20) {
    color = '#e6a777'; // orange clair

} else if (num >= 15) {
    color = '#fa6e02'; // orange


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

                    // Choix de la couleur selon la valeur
let color;

if (isNaN(num)) {
    color = '#454342'; // gris si non valide

// 🟢 valeurs positives


} else if (num >= 50) {
    color = '#314501'; // vert foncé

} else if (num >= 40) {
    color = '#5d8501'; // vert moyen

} else if (num >= 20) {
    color = '#acfa05'; // vert clair

} else if (num >= 10) {
    color = '#fa8805'; // orange

} else if (num >= 5) {
    color = '#fa0505'; // rouge

} else if (num >= 0) {
    color = '#260c4d'; // violet


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

                    // Choix de la couleur selon la valeur
// Choix de la couleur
                    let color;

                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide
                    } else if (num >= 5000) {
                        color = '#360661'; // violet foncé
                    } else if (num >= 3000) {
                        color = '#8905fc'; // violet clair
                    } else if (num >= 2000) {
                        color = '#054c80'; // bleu foncé
                    } else if (num >= 1000) {
                        color = '#41a8f2'; // bleu moyen
                    } else if (num >= 500) {
                        color = '#99c7e8'; // bleu clair
                    } else {
                        color = '#e6e6e6'; // gris clair (0–499)
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
// Choix de la couleur
                    let color;

                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide
                    } else if (num >= 50000) {
                        color = '#360661'; // violet foncé
                    } else if (num >= 20000) {
                        color = '#8905fc'; // violet clair
                    } else if (num >= 10000) {
                        color = '#054c80'; // bleu foncé
                    } else if (num >= 5000) {
                        color = '#41a8f2'; // bleu moyen
                    } else if (num >= 2500) {
                        color = '#99c7e8'; // bleu clair
                    } else {
                        color = '#e6e6e6'; // gris clair (0–499)
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



// --- Thème Loyer moyen---
if(theme === 'Loyer moyen'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('immo_avg_rent.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["immo_avg_rent"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
// Choix de la couleur
                    let color;

                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide
                    } else if (num >= 900) {
                        color = '#fc0f03'; // rouge
                    } else if (num >= 800) {
                        color = '#fc7703'; // orange
                    } else if (num >= 700) {
                        color = '#696706'; // jaune foncé
                    } else if (num >= 600) {
                        color = '#f2ee02'; // jaune
                    } else {
                        color = '#e6e6e6'; // gris clair (0–499)
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
                        color = '#454342'; // gris si non valide
                    } else if (num >= 1000) {
                        color = '#05f7db'; // turquoise
                    } else if (num >= 500) {
                        color = '#075406'; // vert foncé
                    } else if (num >= 200) {
                        color = '#07fc03'; // vert
                    } else if (num >= 100) {
                        color = '#f2ee02'; // jaune
                    } else {
                        color = '#e6e6e6'; // gris clair (0–499)
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
// Choix de la couleur
                    let color;

                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide
                    } else if (num >= 1000) {
                        color = '#05f7db'; // turquoise
                    } else if (num >= 500) {
                        color = '#075406'; // vert foncé
                    } else if (num >= 200) {
                        color = '#07fc03'; // vert
                    } else if (num >= 100) {
                        color = '#f2ee02'; // jaune
                    } else {
                        color = '#e6e6e6'; // gris clair (0–499)
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




// --- Thème Maisons vendus 2011---
if(theme === 'Maisons vendus 2011'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('immo_nb_houses_sales_2011.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["immo_nb_houses_sales_2011"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
// Choix de la couleur
                    let color;

                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide
                    } else if (num >= 1000) {
                        color = '#05f7db'; // turquoise
                    } else if (num >= 500) {
                        color = '#075406'; // vert foncé
                    } else if (num >= 200) {
                        color = '#07fc03'; // vert
                    } else if (num >= 100) {
                        color = '#f2ee02'; // jaune
                    } else {
                        color = '#e6e6e6'; // gris clair (0–499)
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




// --- Thème Maisons vendus 2021---
if(theme === 'Maisons vendus 2021'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('immo_nb_houses_sales_2021.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["immo_nb_houses_sales_2021"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
// Choix de la couleur
                    let color;

                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide
                    } else if (num >= 1000) {
                        color = '#05f7db'; // turquoise
                    } else if (num >= 500) {
                        color = '#075406'; // vert foncé
                    } else if (num >= 200) {
                        color = '#07fc03'; // vert
                    } else if (num >= 100) {
                        color = '#f2ee02'; // jaune
                    } else {
                        color = '#e6e6e6'; // gris clair (0–499)
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




// --- Thème Prix median appartements 2011---
if(theme === 'Prix median appartements 2011'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('immo_median_saleprice_appart_2011.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["immo_median_saleprice_appart_2011"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
// Choix de la couleur
                    let color;

                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide
                    } else if (num >= 250000) {
                        color = '#05f7db'; // turquoise
                    } else if (num >= 210000) {
                        color = '#075406'; // vert foncé
                    } else if (num >= 190000) {
                        color = '#07fc03'; // vert
                    } else if (num >= 150000) {
                        color = '#f2ee02'; // jaune
                    } else {
                        color = '#e6e6e6'; // gris clair (0–499)
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






// --- Thème Prix median appartements 2021---
if(theme === 'Prix median appartements 2021'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('immo_median_saleprice_appart_2021.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["immo_median_saleprice_appart_2021"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
// Choix de la couleur
                    let color;

                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide
                    } else if (num >= 250000) {
                        color = '#05f7db'; // turquoise
                    } else if (num >= 210000) {
                        color = '#075406'; // vert foncé
                    } else if (num >= 190000) {
                        color = '#07fc03'; // vert
                    } else if (num >= 150000) {
                        color = '#f2ee02'; // jaune
                    } else {
                        color = '#e6e6e6'; // gris clair (0–499)
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







// --- Thème Prix median maisons 2011---
if(theme === 'Prix median maisons 2011'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('immo_median_saleprice_house_2011.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["immo_median_saleprice_house_2011"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
// Choix de la couleur
                    let color;

                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide
                    } else if (num >= 490000) {
                        color = '#05f7db'; // turquoise
                    } else if (num >= 410000) {
                        color = '#075406'; // vert foncé
                    } else if (num >= 315000) {
                        color = '#07fc03'; // vert
                    } else if (num >= 250000) {
                        color = '#f2ee02'; // jaune
                    } else {
                        color = '#e6e6e6'; // gris clair (0–499)
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












// --- Thème Prix median maisons 2021---
if(theme === 'Prix median maisons 2021'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('immo_median_saleprice_house_2021.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["immo_median_saleprice_house_2021"];
                    let num = parseNumber(val);  // conversion en nombre

                    // Choix de la couleur selon la valeur
// Choix de la couleur
                    let color;

                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide
                    } else if (num >= 490000) {
                        color = '#05f7db'; // turquoise
                    } else if (num >= 410000) {
                        color = '#075406'; // vert foncé
                    } else if (num >= 315000) {
                        color = '#07fc03'; // vert
                    } else if (num >= 250000) {
                        color = '#f2ee02'; // jaune
                    } else {
                        color = '#e6e6e6'; // gris clair (0–499)
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
// Choix de la couleur
                    let color;

                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide

                    } else if (num >= 80) {
                        color = '#075406'; // vert foncé
                    } else if (num >= 70) {
                        color = '#07fc03'; // vert
                    } else if (num >= 60) {
                        color = '#f2ee02'; // jaune
                    } else {
                        color = '#e6e6e6'; // gris clair (0–499)
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

                    // Choix de la couleur selon la valeur
// Choix de la couleur
                    let color;

                    if (isNaN(num)) {
                        color = '#454342'; // gris si non valide


                    } else if (num >= 10) {
                        color = '#075406'; // vert

                    } else if (num >= 5) {
                        color = '#07fc03'; // vert

   } else if (num > 0) {
                        color = '#f2ee02'; // jaune

                    } else if (num == 0) {
                        color = '#f78a05'; // jaune
                    } else {
                        color = '#e6e6e6'; // gris clair (0–499)
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
    color = '#454342'; // gris si non valide



} else if (num == 1) {
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





// --- Thème % Roumains---
if(theme === '% Roumains'){

    if(currentThemeLayer){
        map.removeLayer(currentThemeLayer);
    }

    fetch('perc_Roum.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Roum"];
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

    fetch('perc_Maroc.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Maroc"];
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

    fetch('perc_Syrie.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Syrie"];
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

    fetch('perc_Franc.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Franc"];
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

    fetch('perc_Inde.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Inde"];
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

    fetch('perc_Turc.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Turc"];
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

    fetch('perc_Italie.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Italie"];
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

    fetch('perc_Portugal.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Portugal"];
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

    fetch('perc_Espagne.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Espagne"];
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

    fetch('perc_Pologne.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Pologne"];
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

    fetch('perc_Bresil.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Bresil"];
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

    fetch('perc_Allemagne.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Allemagne"];
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

    fetch('perc_RDC.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_RDC"];
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

    fetch('perc_Bulagarie.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Bulagarie"];
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

    fetch('perc_Japon.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Japon"];
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

    fetch('perc_Grece.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Grece"];
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

    fetch('perc_NL.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_NL"];
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

    fetch('perc_Moldovie.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Moldovie"];
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

    fetch('perc_UK.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_UK"];
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

    fetch('perc_Guinee.geojson')
        .then(res => res.json())
        .then(data => {

            currentThemeLayer = L.geoJSON(data, {
                style: function(feature){
                    // Valeur depuis GeoJSON
                    let val = feature.properties["perc_Guinee"];
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
// showLegend2_3Facades();

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



  function unlockInternal() {
    const keyInput = document.getElementById("internalKey").value;
    const PASSWORD = "VadilionDigital";
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




</script>

</body>
</html>
