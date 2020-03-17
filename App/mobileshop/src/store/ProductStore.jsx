// This store will read the data from the file in which holds 
// the provided sample data from the requirements.
import productData from '../data/ProductData.json'
import { ADD_PRODUCT } from '../actions/actiontypes/ProductsActionType'
import { REMOVE_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../actions/actiontypes/CartActionType'

// Formats the price into a currency.
let numberFormat = new Intl.NumberFormat('en-AU', { 
    style: 'currency', 
    currency: 'AUD', 
    minimumFractionDigits: 2, 
}); 

// Added an "id" that will be used as Primary key for each item.
const initState = {
    products: productData
        .filter(x => x.isPublished === 'true')
        .map(x => {
            return {
                Id: x.id,
                Name: x.productName,
                Image: x.productImage,
                Price: parseInt(x.price),
                PriceDisplay: numberFormat.format(x.price),
                Quantity: 0
            }
        }),
    addedProducts: [],
    total: 0

}

const productStore = (state = initState, action)=>{
    
    // Checks the action type
    if(action.type === ADD_PRODUCT){
        
        // Selects the product to be added to cart.
        let addedProduct = state.products.find(product => product.Id === action.id)
        
        // Calculate the total from the selected product
        let newTotal = state.total + addedProduct.Price 
        addedProduct.Quantity = 1;
        return{
            ...state,
            products: [...state.products.filter(product => addedProduct.Id !== product.Id)],
            addedProducts: [...state.addedProducts, addedProduct],
            total: newTotal
        }
    }
    if(action.type === REMOVE_PRODUCT){

        // Selects the product to be removed from the cart.
        let productToRemove = state.addedProducts.find(addedProduct => action.id === addedProduct.Id)

        // Filters the cart collection to remove the selected product
        let newProducts = state.addedProducts.filter(addedProduct => action.id !== addedProduct.Id)
        
        //calculating the total
        let newTotal = state.total - (productToRemove.Price * productToRemove.Quantity)
        
        return{
            ...state,
            products: [...state.products, productToRemove],
            addedProducts: newProducts,
            total: newTotal
        }
    }
    if(action.type === INCREASE_QUANTITY){
        let increaseProduct = state.addedProducts.find(selectedProduct => selectedProduct.Id === action.id)
        
        increaseProduct.Quantity += 1 

        //Recalculating the total
        let newTotal = state.total + increaseProduct.Price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type === DECREASE_QUANTITY){  
        let decreaseProduct = state.addedProducts.find(selectedProduct => selectedProduct.Id === action.id) 
        
        //if the qt == 0 then it should be removed
        if(decreaseProduct.Quantity === 1){
            let newProducts = state.addedProducts.filter(addedProduct => addedProduct.Id !== action.id)
            let newTotal = state.total - decreaseProduct.Price
            return{
                ...state,
                products: [...state.products, decreaseProduct],
                addedProducts: newProducts,
                total: newTotal
            }
        }
        else {
            decreaseProduct.Quantity -= 1
            let newTotal = state.total - decreaseProduct.Price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }    
    else{
        return state
    }

}

export default productStore;