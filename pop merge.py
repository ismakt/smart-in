import pandas as pd
import geopandas as gpd

# --- Charger CSV ---
df = pd.read_csv(r"C:\Users\User\Desktop\app_related\1\html\html_geojson\ibsa_db\ibsa_nb_immig.csv", sep=';')
df['CD_SECTOR'] = df['CD_SECTOR'].astype(str).str.strip()

# --- Charger GeoJSON ---
gdf = gpd.read_file(r"fromoriginalshapefile_to_selectionBXonly_convertedinto_4326.geojson")
gdf['cd_sector'] = gdf['cd_sector'].astype(str).str.strip()

# --- Fonction pour trouver match partiel ---
def find_partial_match(code, geojson_codes):
    for g_code in geojson_codes:
        if code in g_code:   # Vérifie si le code CSV est **contenu dans** le code GeoJSON
            return g_code
    return None

# Liste des codes GeoJSON
geojson_codes = gdf['cd_sector'].tolist()

# Appliquer la recherche partielle
df['matched_cd_sector'] = df['CD_SECTOR'].apply(lambda x: find_partial_match(x, geojson_codes))

# Vérifier les correspondances
print(df[['CD_SECTOR', 'matched_cd_sector']].head(20))

# --- Merge sur la colonne matched_cd_sector ---
merged_gdf = gdf.merge(
    df,
    how='left',
    left_on='cd_sector',
    right_on='matched_cd_sector'
)

# --- Supprimer colonnes inutiles ---
merged_gdf.drop(columns=['matched_cd_sector', 'CD_SECTOR'], inplace=True)

# --- Sauvegarder ---
merged_gdf.to_file(r"merged_statsector_revenue_BX_only_2013_partialmatch.geojson", driver='GeoJSON', encoding='utf-8')
