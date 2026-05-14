import pandas as pd

# Path to your CSV
file_path = r"C:\Users\User\Desktop\ventes_preparation\ventes_sectstat_2013_2024_clean.csv"

# Read CSV
df = pd.read_csv(file_path, sep=';')

# Dictionnaire de mapping
mapping = {
    "Maisons avec 2 ou 3 façades (type fermé + type demi-fermé)": "2-3 facades house",
    "Maisons avec 4 ou plus de façades (type ouvert)": "4 or + facades house",
    "Toutes les maisons avec 2, 3, 4 ou plus de façades (excl. appartements)": "all houses",
    "Appartements": "apartments"
}

# Appliquer le mapping
df['CD_TYPE_FR_RENAMED'] = df['CD_TYPE_FR'].map(mapping)

# Calcul somme MS_TRANSACTIONS par type renommé
result = df.groupby('CD_TYPE_FR_RENAMED')['MS_TRANSACTIONS'].sum().reset_index()

print(result)

# Enregistrer en CSV
output_path = r"C:\Users\User\Desktop\1\html\html_geojson\total_trans_prop_type_2013_2024.csv"
result.to_csv(output_path, index=False)

print(f"\nFichier enregistré ici : {output_path}")
