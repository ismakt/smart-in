import geopandas as gpd

# 📂 Chemin vers ton GeoJSON
file_path = r"C:\Users\User\Desktop\1\html\html_geojson\shapefile_BX_only_geojson_4326.geojson"

# 🔄 Charger le GeoJSON
gdf = gpd.read_file(file_path)

# 🖨️ Afficher les colonnes
print("\n📌 Colonnes du GeoJSON :")
print(gdf.columns.tolist())

# 🖨️ Afficher les 5 premières lignes
print("\n📌 Aperçu des 5 premières lignes :")
print(gdf.head())
