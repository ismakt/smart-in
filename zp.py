import geopandas as gpd
from shapely.ops import unary_union

# --- Charger les communes ---
gdf = gpd.read_file(r"C:\Users\User\Desktop\1\html\html_geojson\shapefile_BX_only_geojson_4326.geojson")

# Vérifier les colonnes
print(gdf.columns)

# S’assurer que codgeo est bien string
gdf["codgeo"] = gdf["codgeo"].astype(str).str.strip()

# --- Dictionnaire des zones de police ---
zones_police = {
    "ZP MIDI": ["21001", "21013", "21007"],  # Anderlecht, Saint-Gilles, Forest
    "ZP BRUXELLES-OUEST": ["21011", "21008", "21010", "21012", "21003"],  # Koekelberg, Ganshoren, Jette, Molenbeek, BSA
    "ZP BRUXELLES CAPITALE IXELLES": ["21004", "21009"],  # Bruxelles + Ixelles
    "ZP POLBRUNO": ["21014", "21015", "21006"],  # Saint-Josse, Schaerbeek, Evere
    "ZP MONTGOMERY": ["21018", "21019", "21005"],  # Woluwe-St-Lambert, Woluwe-St-Pierre, Etterbeek
    "ZP UCCLE-W-B-AUDERGHEM": ["21002", "21017", "21016"]  # Auderghem, Watermael-Boitsfort, Uccle
}

# --- Construire un GeoDataFrame vide pour les zones ---
zones = []

for zone_name, nis_list in zones_police.items():
    subset = gdf[gdf["codgeo"].isin(nis_list)]

    if subset.empty:
        print(f"⚠️ WARNING : aucune commune trouvée pour {zone_name}")
        continue

    # Fusion des géométries
    merged_geom = unary_union(subset.geometry)

    # Créer une ligne par zone
    zones.append({
        "zone_police": zone_name,
        "communes": ",".join(nis_list),
        "geometry": merged_geom
    })

# Convertir en GeoDataFrame
zones_gdf = gpd.GeoDataFrame(zones, crs=gdf.crs)

# Sauvegarder
output_path = r"C:\Users\User\Desktop\1\html\html_geojson\zones_police_bruxelles.geojson"
zones_gdf.to_file(output_path, driver="GeoJSON", encoding="utf-8")

print("\n✅ Zones de police créées et sauvegardées !")
print(zones_gdf)
