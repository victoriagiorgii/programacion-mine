class ProductManager{
    constructor(){
        this.products = []
    };

    addProduct(title, description,price, stock, thumbnail,code){
        if(!title || !description || !price || !stock || !thumbnail){
            return console.log("Todos los campos son obligatorios")
        }if(this.products.find((product)=> product.code === code)  ){
            return console.log("nose a encontrado")
        }
    
    
     
        let addId;
        if(this.products.length === 0){
          addId= 1;
        }else{
            addId= this.products [this.products.length - 1].id + 1;
        }
      
        const newProduct=({
            title,
            description,
            price,
            stock,
            thumbnail,
            code,
            id:addId,
            
    })
        this.products.push(newProduct);
        console.log("producto agregado");
    
    }
    getProductById(addProduct){
        if(this.products.find((product)=> product.id === addProduct)){
            console.log(this.products.find((product)=> product.id === addProduct));
        
        }else{
            console.log("id no encontrado");
        }
    }  
    


    getAllProducts(){
        return(this.products)
    } 
  
}



const manager = new ProductManager();
//console.log(manager);
manager.addProduct("Pulsera","pulsera de plata brillos",7000,4,"sin imagen","321");
manager.addProduct("Aro","aro de plata forma mariposa", 4200, 3, "sin imagen", "654");
manager.addProduct("Collar", "collar de plata con perlas",2500,6,"sin imagen","987");
manager.addProduct("Aro","aro de plata forma cilindrica",undefined);
manager.addProduct("Pulsera","pulsera plata con inicial",7300,undefined);

let products = manager.getAllProducts();
console.log(products);


