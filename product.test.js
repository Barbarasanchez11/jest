const { resetProducts, addProduct, removeProduct, getProduct, updateProduct } = require('./product');

beforeEach(() => {
    resetProducts();
});

describe('addProduct', () => {
   
   it('should throw an error if name or price is undefined', () =>{
        expect(() => addProduct()).toThrow('Information required');
    });

    it('should add a product', () => {
        expect(addProduct('stuff1', 10)).toEqual({
            id: 1,
            name: 'stuff1',
            price: 10
        });
    });

    it('should throw error if product exits', () => {
        addProduct('stuff1', 10);
        expect(() => addProduct('stuff1', 10)).toThrow('this product is repeated');
    });
});

describe('removeProduct', () => {
    it('should throw error if product doesn`t exist', () => {
        expect(() => removeProduct(0)).toThrow('ID not found');
    });
    
    it('should remove product by id', () => {
        const product = addProduct('stuff1', 10); 
        expect(removeProduct(product.id)).toBe('Product deleted!');
    });
});


describe('getProduct', () => {

    it('should throw error if product not exists', () => {
        expect(() => getProduct(3)).toThrow('this product not exists');
    });

    it('should show the product details', () => {
        addProduct('stuff1', 10); 
        const product = getProduct(1)
        expect(getProduct(1)).toEqual({
            id: 1,
            name: 'stuff1',
            price: 10
        });
    });
});

describe('updateProduct', () =>{
it('should update a product', () => {
        addProduct('stuff1', 10)
        updateProduct(1,'stuff2', 20)
        const upProduct= getProduct(1)
        expect(upProduct).toEqual({
            id: 1,
            name: 'stuff2',
            price: 20
        })
    }) 
it('shoul fail when product is repeated', () => {
        expect(()=> updateProduct(2, 'stuff3', 30).toThrow('product not found'))    
    })
})
it('should only update the price', () => {
    addProduct('stuff1', 10);
    updateProduct(1, 'stuff2', 20);
    const upProduct = getProduct(1);
    expect(upProduct).toEqual({
         id: 1,
         name: 'stuff2',
        price: 20 });
})
it('should only update the name', () => {
    addProduct('stuff1', 10);
    updateProduct(1, 'stuff2', 20);
    const upProduct = getProduct(1);
    expect(upProduct).toEqual({ 
        id: 1,
        name: 'stuff2',
        price: 20 });
})
