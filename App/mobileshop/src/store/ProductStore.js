// This store will read the data from the file in which holds 
// the provided sample data from the requirements.
import productData from '../data/ProductData.json'
import { ADD_PRODUCT } from '../actions/actiontypes/ProductsActionType'
import { REMOVE_PRODUCT } from '../actions/actiontypes/CartActionType'

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
                PriceDisplay: numberFormat.format(x.price)
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
        let newTotal = state.total - productToRemove.Price
        
        return{
            ...state,
            products: [...state.products, productToRemove],
            addedProducts: newProducts,
            total: newTotal
        }
    }
    else{
        return state
    }

}

export default productStore;