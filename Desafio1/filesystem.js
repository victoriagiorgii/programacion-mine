
class ProductManager{
    constructor(){
        this.patch="./productos.txt";
        this.products= []
    }
    static id = 0;
    addProduct=async (title, description,price, stock, thumbnail,code)=>{
        ProductManager.id ++
        let newProduct=(
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            ProductManager.id
        );
         this.products.push(newProduct)
         await fs.writeFile(this.patch, JSON.stringify(this.products));
    };
   readProducts= async()=>{
    let respuesta1= await fs.readFile(this.patch, "utf-8")
    return JSON.parse(respuesta1)
   }
   getProducts= async()=>{
    let respuesta2= await this.readProducts()
    return console.log (respuesta2)
   }

   getProductsById= async (id) => {
    let respuesta3 = await this.readProducts()
    if(!respuesta3.find(product => product.id === id)){
        console.log("Producto no encontrado");
    }else{
        console.log(respuesta3.find((products)=> products.id === id));
       }

   };

   deleteProductById = async () => {
    let respuesta3 = await this.readProducts();
    let productFilter = respuesta3.filter(products => products.id != id)
    await fs.writeFile(this.patch, JSON.stringify(productFilter));
    console.log("Producto eliminado");
   };

   updateProducts = async ({id, ...producto}) => {
    await this.deleteProductById(id);
    let oldProduct = await this.readProducts()
    let modProd = [{id, ...producto}, ...oldProduct];
    await fs.writeFile(this.patch, JSON.stringify(modProd));
   }


}

const productos = new ProductManager();

productos.addProduct("Title1","Description1",7000,"Imagen","321",4);
productos.addProduct("Title1","Description1",4200,"Imagen","654",3);
productos.addProduct("Title1","Description1",2500,"Imagen","987",6);

productos.getProducts()
productos.getProductsById()

productos.deleteProductById()