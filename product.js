let products = []; 
let id = 0;

function resetProducts(){
    products = []; 
    id = 0;
}

function addProduct(name, price){
    if(name === undefined || price === undefined){
        throw new Error('Information required');
    }

    const isAproduct = products.find(product => product.name === name);
    if(isAproduct){
        throw new Error('this product is repeated');
    }
    
    const newProduct = {
        id: ++id,
        name: name,
        price: price
    }
    products.push(newProduct);
    return newProduct;
}

function removeProduct(id) {
    if(products.length === 0) {
        throw new Error ('ID not found');
    }

    const product = products.find(product => product.id === id);
    if(!product) {
        throw new Error ('ID not found');
    }
    
    products = products.filter(product => product.id !== id);
    return 'Product deleted!';
}


function getProducts() {
    return products;
  }
  
  function getProduct(productId) {
    const product = products.find(product => product.id === productId);
    if (!product) {
        throw new Error('this product not exists');
      
    }
  
    return product;
  }


  const updateProduct = (productId, newName, newPrice) => {
    const product = getProduct(productId);

    if (newName !== undefined) {
        product.name = newName;
    }

    if (newPrice !== undefined) {
        product.price = newPrice;
    }
};

module.exports = {
    resetProducts, 
    addProduct,
    removeProduct,
    getProduct,
    getProducts,
    updateProduct
};