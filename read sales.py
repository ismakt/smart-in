import pandas as pd

# 📂 Chemin vers ton fichier Excel
file_path = r"C:\Users\User\Desktop\1\html\html_geojson\TF_POP_STRUCT_SECTORS_2014.xlsx"

# 🔄 Charger l’Excel
df = pd.read_excel(file_path)

# ✅ Sélectionner les colonnes souhaitées
columns_to_keep = ['CD_SECTOR', 'POPULATION', 'TX_DESCR_SECTOR_FR']
df_selected = df[columns_to_keep]

# 📌 Aperçu pour vérifier
print(df_selected.head())

# 💾 Enregistrer en CSV
output_path = r"C:\Users\User\Desktop\1\html\html_geojson\population_statsector_2014.csv"
df_selected.to_csv(output_path, index=False, sep=';')

print(f"\n✅ Fichier CSV enregistré ici : {output_path}")
