import fs from 'fs'
export class ProductManager{
    constructor(patch){
        this.patch=patch;
       
    }
    addProduct=async (title, description,price,thumbnail,code,stock)=>{
        let productos = []
        productos = await this.readProducts() 

        let id = 1 
        if(productos.length){
            id = productos[productos.length -1].id +1
        }
        let newProduct={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id
        };
        productos = [...productos,newProduct] 
         fs.writeFileSync(this.patch, JSON.stringify(productos))

    };
   readProducts= ()=>{
    let respuesta1=  fs.readFileSync(this.patch, "utf-8")
    if(!respuesta1) return null
    return JSON.parse(respuesta1)
   }
  

   getProductsById= async (id) => {
    let respuesta3 = await this.readProducts()
    if(!respuesta3.find(product => product.id === id)){
        console.log("Producto no encontrado");
    }else{
        console.log(respuesta3.find((products)=> products.id === id));
    }

   };

   deleteProductById = async (id) => {
    let respuesta3 = await this.readProducts();
    let productFilter = respuesta3.filter(products => products.id != id)
    fs.writeFileSync(this.patch, JSON.stringify(productFilter));
    console.log("Producto eliminado");
   };

   updateProducts= async (id,...productos)=> {
    await this.deleteProductById(id);
    let oldProduct =await this.readProducts()
    let modProd = [...oldProduct,{id,...productos}]
    fs.writeFileSync(this.patch, JSON.stringify(modProd));
   }

}

const productos = new ProductManager("../productos.txt");

productos.addProduct("collar","collar plata",7000,"Imagen1","321",4);
productos.addProduct("pulsera","pulsera corazon",4200,"Imagen2","654",3);
productos.addProduct("anillo","anillo diamante",2500,"Imagen3","987",6);

//productos.getProducts()
//productos.getProductsById()

//productos.deleteProductById()