import { ADD_PRODUCT } from './actiontypes/ProductsActionType'

export const AddProductToCart = (id) => {
    return {
        type: ADD_PRODUCT, id 
    }
}