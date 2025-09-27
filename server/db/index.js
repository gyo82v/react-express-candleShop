import path from "node:path"
import fs from "node:fs/promises"
import { PGlite } from "@electric-sql/pglite";
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function initDB(dbDir) {
    await fs.mkdir(dbDir, {recursive : true})
    const db = await PGlite.create(dbDir)

    const createTablePath = path.join(__dirname, "create-table.sql")
    const createTableSql = await fs.readFile(createTablePath, "utf8")
    await db.exec(createTableSql)

    const countRes = await db.query('SELECT COUNT(*)::INT AS count FROM stock_items')
    const count = (countRes.rows && Number(countRes.rows[0].count)) || 0
    if(count === 0){
        const insertSqlPath = path.join(__dirname, "insertItemsIntoStock.sql")
        const insertSql = await fs.readFile(insertSqlPath, "utf8")
        await db.exec(insertSql)
    }
    return db
    
}