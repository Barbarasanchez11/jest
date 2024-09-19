const { resetProducts, addProduct, removeProduct } = require('./product');

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
        expect(() => removeProduct(0)).toThrow('No such ID found');
    });
    
    it('should remove product by id', () => {
        const product = addProduct('stuff1', 10); 
        expect(removeProduct(product.id)).toBe('Product deleted!');
    });
});