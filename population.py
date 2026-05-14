import pandas as pd

# 📂 Chemin vers le fichier Excel
file_path = r"C:\Users\User\Desktop\1\html\html_geojson\OPENDATA_SECTOREN_2025_NEW.xlsx"

# 🔄 Charger l'Excel
df = pd.read_excel(file_path)

# ⚙️ Nettoyer les noms de colonnes
df.columns = df.columns.str.strip()

# 🖨️ Afficher les noms de colonnes et les 3 premières lignes
print("📌 Colonnes détectées :")
print(df.columns.tolist())
print("\n📌 Aperçu des 3 premières lignes :")
print(df.head(3))

# ✅ Garder seulement les colonnes désirées
columns_to_keep = ['CD_SECTOR', 'TOTAL', 'TX_DESCR_SECTOR_FR']
df_selected = df[columns_to_keep]

# 💾 Enregistrer en CSV
output_csv = r"C:\Users\User\Desktop\1\html\html_geojson\TF_POP_STRUCT_SECTORS_2025_selected.csv"
df_selected.to_csv(output_csv, index=False, sep=';')

print(f"\n✅ CSV enregistré ici : {output_csv}")
