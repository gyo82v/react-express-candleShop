import express from "express"
import  {productController}  from "../controllers/productController.js"

export default function productRouter(db){
   const router = express.Router()
   const ctrl = productController(db)
   router.get("/", ctrl.list)
   return router
}


