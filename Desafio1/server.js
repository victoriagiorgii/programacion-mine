import express from "express";
import {ProductManager} from "./ProductManager.js"

const app = express();
app.use(express.urlencoded({ extended: true}));

const productos = new ProductManager("../productos.txt");
const readProducts= productos.readProducts();

app.get("/products", async (req, res) => {
    let limit = parseInt(req.query.limit);
    if(!limit) return res.send(readProducts)
    let allProducts = await readProducts
    let productLimit = allProducts.slice(0, limit)
 res.send(productLimit);
});


   app.get("/products/:id", async (req, res) =>{
    let id = parseInt(req.params.id);
    let allProducts = await readProducts
    let productById = allProducts.find(product => product.id === id)
    res.send(productById)

   });

const PORT= 8080;
const server = app.listen(PORT, ()=>{
    console.log('Express por Local Host ${server.address().port}')
})
server.on("error", (error) => console.log('Eror del servidor ${error}'))