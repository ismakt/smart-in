import geopandas as gpd
import pandas as pd

# Chemin vers ton GeoJSON original
file_path = r"C:\Users\User\Desktop\shapefile\cleaned_files\shapefile_municipality\shapefile_municipality_geojson_4326_converted.geojson"

# Charger le GeoJSON
gdf = gpd.read_file(file_path)

# Configurations pour afficher tout
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', None)
pd.set_option('display.max_colwidth', None)
pd.set_option('display.width', 2000)

# Aperçu
print("📌 Aperçu des 3 premières lignes :\n")
print(gdf.head(3))

# Colonnes à conserver
columns_to_keep = ['codgeo', 'libgeo_fr', 'Shape_Leng', 'Shape_Area', 'geometry']

# Vérifier que ces colonnes existent
missing_cols = [col for col in columns_to_keep if col not in gdf.columns]
if missing_cols:
    print(f"\n⚠️ Colonnes manquantes dans le fichier GeoJSON : {missing_cols}")

# Liste des communes de la Région de Bruxelles
bruxelles_communes = [
    'Anderlecht', 'Bruxelles', 'Ixelles', 'Etterbeek', 'Evere', 'Ganshoren', 'Jette', 'Koekelberg',
    'Auderghem', 'Schaerbeek', 'Berchem-Sainte-Agathe', 'Saint-Gilles', 'Molenbeek-Saint-Jean',
    'Saint-Josse-ten-Noode', 'Woluwe-Saint-Lambert', 'Woluwe-Saint-Pierre', 'Uccle', 'Forest',
    'Watermael-Boitsfort'
]

# Filtrer pour ne garder que ces communes et les colonnes choisies
if 'libgeo_fr' in gdf.columns:
    filtered = gdf[gdf['libgeo_fr'].isin(bruxelles_communes)]
    filtered = filtered[columns_to_keep]  # garder seulement les colonnes souhaitées

    # Afficher les valeurs distinctes de libgeo_fr
    distinct_filtered = filtered['libgeo_fr'].unique()
    print("\n📌 Valeurs distinctes de libgeo_fr faisant partie des communes de la Région de Bruxelles :\n")
    print(distinct_filtered)

    # Sauvegarder le résultat en GeoJSON
    output_geojson = r"C:\Users\User\Desktop\shapefile\cleaned_files\shapefile_municipality\shapefile_BX_only_geojson_4326.geojson"
    filtered.to_file(output_geojson, driver='GeoJSON', encoding='utf-8')
    print(f"\n✅ Résultat sauvegardé en GeoJSON : {output_geojson}")
else:
    print("\n⚠️ Colonne 'libgeo_fr' non trouvée dans ce fichier GeoJSON.")
