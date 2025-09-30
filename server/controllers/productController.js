export function productController(db){
    return{
        list : async (req, res) => {
            try {
                const result = await db.query('SELECT * FROM stock_items ORDER BY id DESC')
                return res.json(result.rows ?? result)    
            } catch (err) {
                console.error("Error in product controller GET", err)
                return res.status(500).json({error : "Failed to fecth products"})
            }
        }
    }
}