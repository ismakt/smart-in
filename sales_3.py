import pandas as pd
import geopandas as gpd

# Paths
csv_file = r"C:/Users/User/Desktop/1/html/html_geojson/total_sales_per_sector_2013_2024.csv"
geojson_file = r"C:\Users\User\Desktop\1\html\html_geojson\fromoriginalshapefile_to_selectionBXonly_convertedinto_4326.geojson"
output_file = r"C:\Users\User\Desktop\1\html\html_geojson\merge_total_sales_2013_2024_BX_only_with_geofile.geojson"

# --- 1. Load CSV with total sales per sector ---
df = pd.read_csv(csv_file, sep=',')
print("CSV columns:", df.columns.tolist())
print("CSV preview:\n", df.head(3))

# --- 2. Load GeoJSON ---
gdf = gpd.read_file(geojson_file)
print("GeoJSON columns:", gdf.columns.tolist())
print("GeoJSON preview:\n", gdf.head(3))

# --- 3. Merge CSV into GeoJSON ---
# GeoJSON column: 'cd_sector', CSV column: 'CD_STAT_SECTOR'
merged_gdf = gdf.merge(df, how='left', left_on='cd_sector', right_on='CD_STAT_SECTOR')

# --- 4. Keep only sectors with sales ---
merged_gdf = merged_gdf[merged_gdf['total_sales_2013_2024'].notna()]

# --- 5. Save merged GeoJSON ---
merged_gdf.to_file(output_file, driver='GeoJSON')

print(f"Merged GeoJSON saved to: {output_file}")
