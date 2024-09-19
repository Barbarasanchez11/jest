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
        throw new Error ('No such ID found');
    }

    const product = products.find(product => product.id === id);
    if(!product) {
        throw new Error ('No such ID found');
    }
    
    products = products.filter(product => product.id !== id);
    return 'Product deleted!';
}

module.exports = {
    resetProducts, 
    addProduct,
    removeProduct
};