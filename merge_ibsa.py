import geopandas as gpd
import pandas as pd
import unicodedata

# =========================
# FICHIERS
# =========================
geojson_file = r"C:\Users\User\Desktop\1\html\html_geojson\shapefile_BX_only_geojson_4326.geojson"
csv_file = r"C:\Users\User\Desktop\1\html\html_geojson\ibsa_immigstat_3.csv"
output_file = r"C:\Users\User\Desktop\1\html\html_geojson\perc_Guinee.geojson"

# =========================
# NORMALISATION TEXTE
# =========================
def normalize(value):
    return (
        unicodedata.normalize("NFKD", str(value))
        .encode("ascii", "ignore")
        .decode("utf-8")
        .strip()
        .lower()
    )

# =========================
# 1. CHARGER GEOJSON
# =========================
gdf = gpd.read_file(geojson_file)
print("GeoJSON columns :", gdf.columns.tolist())

# =========================
# 2. CHARGER CSV
# =========================
df = pd.read_csv(csv_file, sep=';')
print("CSV columns :", df.columns.tolist())

# =========================
# 3. NORMALISER LES CLÉS
# =========================
gdf["libgeo_fr"] = gdf["libgeo_fr"].apply(normalize)
df["name"] = df["name"].apply(normalize)

# =========================
# 4. CORRESPONDANCE SPÉCIALE
# =========================
correspondance = {
    "ville de bruxelles": "bruxelles"
}
df["name"] = df["name"].replace(correspondance)

# =========================
# 5. GARDER SEULEMENT LES COLONNES UTILES
# =========================
df = df[["name", "perc_Guinee"]]

# =========================
# 6. MERGE
# =========================
merged_gdf = gdf.merge(
    df,
    how="left",
    left_on="libgeo_fr",
    right_on="name"
)

# =========================
# 7. NETTOYAGE FINAL
# =========================
merged_gdf = merged_gdf[["name", "perc_Guinee", "geometry"]]

# =========================
# 8. CONTROLE
# =========================
print("Communes sans données :", merged_gdf["perc_Guinee"].isna().sum())

# =========================
# 9. EXPORT
# =========================
merged_gdf.to_file(
    output_file,
    driver="GeoJSON",
    encoding="utf-8"
)

print(f"\n✅ GeoJSON final sauvegardé ici : {output_file}")
