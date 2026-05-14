import pandas as pd

# 📂 Chemin vers ton fichier CSV
file_path = r"C:\Users\User\Desktop\1\html\html_geojson\rents\rents_yearly\StatisticalUnitWideRealEstateRentsAnnual_20241231.csv"

# 🔄 Charger le CSV
df = pd.read_csv(file_path, sep=';')

# ⚙️ Configurations pour un affichichage complet
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', None)
pd.set_option('display.max_colwidth', None)
pd.set_option('display.width', 2000)

# 📌 Aperçu des premières lignes
print("\n📌 Aperçu des 5 premières lignes :\n")
print(df.head())

# 📌 Noms des colonnes
print("\n📌 Noms des colonnes :\n")
for col in df.columns:
    print(col)

