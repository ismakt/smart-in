import pandas as pd
import geopandas as gpd
import unicodedata

# --- Charger CSV ---
df = pd.read_csv(r"C:\Users\User\Desktop\app_related\1\html\html_geojson\ibsa_db\ibsa_nb_immig.csv", sep=';')
df['tx_munty_descr_fr'] = df['tx_munty_descr_fr'].astype(str).str.strip()

# --- Charger GeoJSON ---
gdf = gpd.read_file(r"fromoriginalshapefile_to_selectionBXonly_convertedinto_4326.geojson")
gdf['tx_munty_descr_fr'] = gdf['tx_munty_descr_fr'].astype(str).str.strip()

# --- Fonction pour normaliser les noms ---
def normalize_string(s):
    """
    Lowercase, strip spaces, remove accents, remove non-alphanumeric characters.
    """
    s = str(s).lower().strip()
    # Remove accents
    s = ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')
    # Keep only alphanumeric characters
    s = ''.join(c for c in s if c.isalnum())
    return s

# --- Appliquer normalisation ---
df['tx_munty_norm'] = df['tx_munty_descr_fr'].apply(normalize_string)
gdf['tx_munty_norm'] = gdf['tx_munty_descr_fr'].apply(normalize_string)

# --- Fonction pour trouver correspondance partielle ---
def find_partial_match_norm(code, geojson_codes):
    for g_code in geojson_codes:
        if code in g_code or g_code in code:  # Allow CSV in GeoJSON or GeoJSON in CSV
            return g_code
    return None

# Liste des codes GeoJSON normalisés
geojson_norm_list = gdf['tx_munty_norm'].tolist()

# --- Appliquer la recherche partielle ---
df['matched_tx_munty_norm'] = df['tx_munty_norm'].apply(lambda x: find_partial_match_norm(x, geojson_norm_list))

# --- Ajouter la vraie valeur de GeoJSON correspondante pour merge ---
df['matched_tx_munty_descr_fr'] = df['matched_tx_munty_norm'].map(
    dict(zip(gdf['tx_munty_norm'], gdf['tx_munty_descr_fr']))
)

# --- Vérifier correspondances ---
print(df[['tx_munty_descr_fr', 'matched_tx_munty_descr_fr']].head(20))

# --- Merge sur la colonne matched_tx_munty_descr_fr ---
merged_gdf = gdf.merge(
    df,
    how='left',
    left_on='tx_munty_descr_fr',
    right_on='matched_tx_munty_descr_fr'
)

# --- Sauvegarder GeoJSON final ---
merged_gdf.to_file(r"merged_tx_origins_municipality_BX_only_2022.geojson", driver='GeoJSON', encoding='utf-8')

print("Merge terminé et fichier GeoJSON sauvegardé !")