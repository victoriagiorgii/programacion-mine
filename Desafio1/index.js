class ProductManager{
    constructor(){
        this.products = []
    };

    addProduct(title, description,price, stock, thumbnail, code){
        if(!title || !description || !price || !stock || !thumbnail || !code){
            return console.log("Todos los campos son obligatorios")
        }
        let addId;
        if(this.products.length === 0){
          addId= 1;
        }else{
            addId= this.products [this.products.length - 1].id + 1;
        }
      
        const newProduct = {
            title,
            description,
            price,
            stock,
            thumbnail,
            code,

        }
        this.products.push(newProduct);
        console.log("producto agregado");
    }
    getProductById(code){
        const products = this.products.find(p => p.code === code);
        if(!this.products){
          throw new Error ('El producto no fue encontrado &{code}');
        }
        return products;
    }
}

const manager = new ProductManager();
//console.log(manager);
manager.addProduct("Pulsera","pulsera de plata brillos",7000,4,"sin imagen","329756");
manager.addProduct("Aro","aro de plata forma mariposa", 4200, 3, "sin imagen", "425996");
manager.addProduct("Collar", "collar de plata con perlas",2500,6,"sin imagen","945632")
manager.addProduct("Aro","aro de plata forma cilindrica",undefined)
manager.addProduct("Pulsera","pulsera plata con inicial",7300,undefined)