import geopandas as gpd
import pandas as pd

# --- Fichiers ---
geojson_file = r"C:\Users\User\Desktop\1\html\html_geojson\zones_police_bruxelles.geojson"
csv_file = r"C:\Users\User\Desktop\1\html\html_geojson\zp_crime_type_cambriolage_2000.csv"
output_file = r"C:\Users\User\Desktop\1\html\html_geojson\zp_crime_type_cambriolage_2000_bx_geofile.geojson"

# --- 1. Charger GeoJSON ---
gdf = gpd.read_file(geojson_file)
print("GeoJSON columns:", gdf.columns.tolist())
print(gdf.head())

# --- 2. Charger CSV ---
df = pd.read_csv(csv_file, sep=';')  # si c'est séparé par ';'
print("CSV columns:", df.columns.tolist())
print(df.head())

# --- 3. Nettoyer colonnes pour merge ---
gdf["zone_police"] = gdf["zone_police"].astype(str).str.strip()
df["zone_police"] = df["zone_police"].astype(str).str.strip()

# --- 4. Merge gauche ---
merged_gdf = gdf.merge(df, how='left', on="zone_police")

# --- 5. Vérifier ---
print("\nMerged GeoDataFrame :")
print(merged_gdf.head())

# --- 6. Sauvegarder ---
merged_gdf.to_file(output_file, driver="GeoJSON", encoding="utf-8")

print(f"\n✅ GeoJSON avec données criminelles sauvegardé ici : {output_file}")
