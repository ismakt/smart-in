import pandas as pd

# 📂 Chemin vers ton fichier CSV source
file_path = r"C:\Users\User\Desktop\1\html\html_geojson\rents\rents_yearly\StatisticalUnitWideRealEstateRentsAnnual_20241231.csv"

# 📁 Chemin du fichier de sortie
output_path = r"C:\Users\User\Desktop\1\html\html_geojson\rents\rents_yearly\StatisticalUnitWideRealEstateRentsAnnual_2024_lessorneutralperson_totalrentp25_csv.csv"

# 🔄 Charger le CSV
df = pd.read_csv(file_path, sep=';')

# 🎯 Colonnes à garder
cols = ["NISCode", "NameFre", "TotalRentP25", "TakerType"]

# Vérifier si les colonnes existent
missing = [c for c in cols if c not in df.columns]
if missing:
    print("❗ Colonnes manquantes :", missing)
else:
    # 🔎 Filtrer : LessorType = LegalPerson
    df_filtered = df[df["TakerType"] == "Neutral"]

    # 🔎 Garder uniquement les TotalRentP50 non nuls (non NaN et ≠ 0)
    df_filtered = df_filtered[df_filtered["TotalRentP25"].notna()]
    df_filtered = df_filtered[df_filtered["TotalRentP25"] != 0]

    # 🎯 Ne garder que les colonnes nécessaires
    df_filtered = df_filtered[cols]

    print("\n📌 Lignes sélectionnées (NeutralPerson + TotalRentP50 non nuls) :\n")
    print(df_filtered)

    # 💾 Enregistrement du fichier filtré
    df_filtered.to_csv(output_path, sep=',', index=False, encoding='utf-8-sig')

    print(f"\n✅ Fichier enregistré sous : {output_path}")
