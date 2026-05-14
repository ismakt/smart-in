import pandas as pd

# 📂 Chemin vers ton fichier Excel
file_path = r"C:\Users\User\Desktop\1\html\html_geojson\TF_PSNL_INC_TAX_SECTOR.xlsx"

# 🔄 Charger le fichier Excel
df = pd.read_excel(file_path)

# 📝 Afficher les colonnes
print("\n📌 Colonnes du fichier :")
print(df.columns.tolist())

# 👀 Aperçu des 5 premières lignes
print("\n📊 Aperçu des données :")
print(df.head())

# 🔎 Sélectionner uniquement les colonnes souhaitées
cols_to_keep = ["CD_YEAR", "CD_SECTOR", "MS_AVG_TOT_NET_TAXABLE_INC", "TX_SECTOR_DESCR_FR"]

df_selected = df[cols_to_keep]

# 💾 Enregistrer en CSV
output_path = r"C:\Users\User\Desktop\1\html\html_geojson\revenue_clean.csv"
df_selected.to_csv(output_path, index=False, sep=';')

print("\n✅ Fichier enregistré :")
print(output_path)
