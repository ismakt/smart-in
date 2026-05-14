import pandas as pd
import geopandas as gpd

# --- Paths ---
csv_file = r"C:\Users\User\Desktop\1\html\html_geojson\TF_POP_STRUCT_SECTORS_2014_selected.csv"
geojson_file = r"C:\Users\User\Desktop\1\html\html_geojson\fromoriginalshapefile_to_selectionBXonly_convertedinto_4326.geojson"
output_file = r"C:\Users\User\Desktop\1\html\html_geojson\merged_statsector_population_BX_only_2014_ok.geojson"

# --- Load CSV ---
df = pd.read_csv(csv_file, sep=';')
df.columns = df.columns.str.strip()
df['CD_SECTOR'] = df['CD_SECTOR'].astype(str).str.strip()
print("CSV columns:", df.columns.tolist())

# --- Load GeoJSON ---
gdf = gpd.read_file(geojson_file)
gdf.columns = gdf.columns.str.strip()
gdf['cd_sector'] = gdf['cd_sector'].astype(str).str.strip()
print("GeoJSON columns:", gdf.columns.tolist())

# --- Vérification correspondance ---
print("Exemples CSV CD_SECTOR:", df['CD_SECTOR'].head(5).tolist())
print("Exemples GeoJSON cd_sector:", gdf['cd_sector'].head(5).tolist())
matching = df['CD_SECTOR'].isin(gdf['cd_sector'])
print("Nombre de codes CSV présents dans GeoJSON :", matching.sum(), "/", len(df))

# --- Merge ---
merged_gdf = gdf.merge(
    df,
    how='left',
    left_on='cd_sector',
    right_on='CD_SECTOR'
)

# --- Vérification population ---
print(merged_gdf[['cd_sector', 'POPULATION']].head(10))

# --- Drop duplicate key column ---
merged_gdf.drop(columns=['CD_SECTOR'], inplace=True)

# --- Save final GeoJSON ---
merged_gdf.to_file(output_file, driver='GeoJSON', encoding='utf-8')
print(f"\n✅ Merged GeoJSON saved to:\n{output_file}")
