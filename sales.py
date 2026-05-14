import pandas as pd

file_path = r"C:\Users\User\Desktop\ventes_preparation\ventes_sectstat_2013_2024_clean.csv"

# Charger le CSV
df = pd.read_csv(file_path, sep=';')

# Groupby secteur + type de bien
nb_sales_by_type = df.groupby(['CD_STAT_SECTOR', 'CD_TYPE_FR']).size().reset_index(name='nb_sales')

# Renommer CD_TYPE_FR en property_type
nb_sales_by_type.rename(columns={'CD_TYPE_FR': 'property_type'}, inplace=True)

# Mapping des noms
rename_dict = {
    "Appartements": "Appart/Flat",
    "Maisons avec 2 ou 3 façades (type fermé + type demi-fermé)": "2/3 facade house",
    "Maisons avec 4 ou plus de façades (type ouvert)": "4 or + facades house",
    "Toutes les maisons avec 2, 3, 4 ou plus de façades (excl. appartements)": "All houses"
}

# Appliquer le renommage
nb_sales_by_type['property_type'] = nb_sales_by_type['property_type'].replace(rename_dict)

# --- Configurations pour affichage complet ---
pd.set_option('display.max_columns', None)   # toutes les colonnes
pd.set_option('display.max_rows', None)      # toutes les lignes (attention si beaucoup de lignes)
pd.set_option('display.max_colwidth', None)  # ne tronque pas le contenu des colonnes
pd.set_option('display.width', 2000)         # pour éviter les sauts de ligne forcés

# Afficher le résultat complet
print(nb_sales_by_type)
