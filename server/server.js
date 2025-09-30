import path from "node:path"
import express from "express"
import session from "express-session"
import { fileURLToPath } from "node:url"
import { initDB } from "./db/index.js"
import cors from "cors"
import productRouter from "./routes/product.js"

const PORT = 8000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DB_DIR = path.join(__dirname, "pglite-db")

async function main() {
    const db = await initDB(DB_DIR)
    const app = express()

    //middleware
    app.use(cors({
       origin: 'http://localhost:5173', 
       credentials: true               
    }))
    app.use(express.json())
    app.use(session({
       secret: 'jellyfish-baskingshark',
       resave: false, 
       saveUninitialized: false,
       cookie: {
         httpOnly: true,
         secure: false,
         sameSite: 'lax'
       }
    }))

    //routes
    app.use("/api/product", productRouter(db))


    //add here later production serve;

    app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))
}

main().catch((err) => {
    console.error("Failed to start server.", err)
    process.exit(1)
})



/*
const res = await fetch("http://localhost:8000/api/cart", {
      method: 'GET',
      credentials: 'include' // ← send cookies and accept Set-Cookie
      // mode: 'cors' // optional, browsers usually set this automatically for cross-origin requests
    });




*/