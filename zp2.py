import pandas as pd

# --- Fichier d'entrée ---
csv_file = r"C:\Users\User\Desktop\1\html\html_geojson\zp_crimetype_updated.csv"
output_csv = r"C:\Users\User\Desktop\1\html\html_geojson\zp_crime_type_cambriolage_2000.csv"

# --- 1. Charger le CSV ---
df = pd.read_csv(csv_file, sep=';')  # adapter le séparateur si nécessaire
print("Colonnes du CSV :", df.columns.tolist())
print(df.head(5))

# --- 2. Filtrer l'année 2024 et garder seulement zone_police + vol ---
df_filtered = df[df['year'] == 2000][['zone_police', 'cambriolage', 'year']]

# --- 3. Sauvegarder en CSV ---
df_filtered.to_csv(output_csv, index=False, sep=';')

print(f"\n✅ CSV filtré sauvegardé ici : {output_csv}")
print(df_filtered.head(10))
