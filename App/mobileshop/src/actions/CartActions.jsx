// This will handle actions pertaining to Cart

import { REMOVE_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY } from './actiontypes/CartActionType'

export const RemoveProductFromCart = (id) => {
    return {
        type: REMOVE_PRODUCT, id 
    }
}

export const IncreaseProductFromCart = (id) => {
    return {
        type: INCREASE_QUANTITY, id 
    }
}

export const DecreaseProductFromCart = (id) => {
    return {
        type: DECREASE_QUANTITY, id 
    }
}