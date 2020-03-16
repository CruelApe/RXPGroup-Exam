// This will handle actions pertaining to Cart

import { REMOVE_PRODUCT } from './actiontypes/CartActionType'

export const RemoveProductFromCart = (id) => {
    return {
        type: REMOVE_PRODUCT, id 
    }
}