import pandas as pd
import os

# 📂 Chemin vers ton fichier CSV
file_path = r"C:\Users\User\Desktop\ventes_preparation\ventes_sectstat_2013_2024_clean.csv"

# 🔄 Lire le CSV
df = pd.read_csv(file_path, sep=';')

# 🔹 Année à filtrer
year = 2023

# 🔹 Type de bien à filtrer
prop_type = 'Toutes les maisons avec 2, 3, 4 ou plus de façades (excl. appartements)'

# 🔹 Colonnes nécessaires
cols = ['CD_STAT_SECTOR', 'CD_YEAR', 'MS_P90', 'CD_TYPE_FR']

# 🔹 Filtre combiné (année + type + MS_P10 présent)
df_final = df[
    (df['CD_YEAR'] == year) &
    (df['CD_TYPE_FR'] == prop_type) &
    (df['MS_P90'].notna())
]

# 📌 Afficher le tableau final
print(f"\n📌 Données {year} filtrées (MS_P90) pour '{prop_type}' :\n")
print(df_final[cols].to_string(index=False))

# 🔹 Sauvegarde du fichier CSV propre
output_dir = r"C:\Users\User\Desktop\1\html\html_geojson"
output_path = os.path.join(output_dir, f"sales_ms_p90_{prop_type}_{year}.csv".replace(" ", "_"))

df_final[cols].to_csv(output_path, index=False, encoding='utf-8-sig')

print(f"\n✅ Fichier enregistré ici : {output_path}")
