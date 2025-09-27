CREATE TABLE IF NOT EXISTS stock_items(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price NOT NULL,
    scent TEXT NOT NULL,
    category TEXT NOT NULL,
    image TEXT NOT NULL
)