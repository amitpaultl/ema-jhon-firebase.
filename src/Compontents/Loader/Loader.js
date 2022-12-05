import { getStoragCard } from "../../utilities/fakedb";

export const productAndCardLoader = async () =>{
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const saveCard = getStoragCard();
    const previousCart = []
    
    for(const id in saveCard){
        const addedproduct = products.find(produc => produc.id === id);
        if(addedproduct){
            const quenty = saveCard[id];
            addedproduct.quantity = quenty; 
            previousCart.push(addedproduct)
        }
        
    }
    
    return {products: products, previousCart:previousCart};
}