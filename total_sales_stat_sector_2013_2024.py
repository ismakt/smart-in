import pandas as pd

# Path to your CSV
file_path = r"C:\Users\User\Desktop\ventes_preparation\ventes_sectstat_2013_2024_clean.csv"

# Read CSV (adjust separator if needed)
df = pd.read_csv(file_path, sep=';')  # ou sep=',' si nécessaire

# Ensure MS_TRANSACTIONS is numeric
df['MS_TRANSACTIONS'] = pd.to_numeric(df['MS_TRANSACTIONS'], errors='coerce')

# Group by sector, summing all transactions over 2013-2024
total_sales_per_sector = df.groupby('CD_STAT_SECTOR', as_index=False)['MS_TRANSACTIONS'].sum()

# Rename column to match SQL-style name
total_sales_per_sector.rename(columns={'MS_TRANSACTIONS': 'total_sales_2013_2024'}, inplace=True)

# Show the result
print(total_sales_per_sector)

# Optional: save to CSV
total_sales_per_sector.to_csv("C:/Users/User/Desktop/1/html/html_geojson/total_sales_per_sector_2013_2024.csv", index=False)
