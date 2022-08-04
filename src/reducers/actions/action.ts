import { CoffeeType, CoffeeBuyType} from './reducer'

export enum ActionTypes {
    ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
    UPDATE_COFFEE_LIST = 'UPDATE_COFFEE_LIST',
    DELETE_COFFEE_LIST = 'DELETE_COFFEE_LIST',
    FINISH_PURCHASE = 'FINISH_PURCHASE',
}

export function addNewCoffeeCart(newCoffee: CoffeeType) {
    return {
        type: ActionTypes.ADD_NEW_COFFEE,
        payload: {
            newCoffee,
        },
    }
}

export function updateCoffeeCart(updateCoffee: CoffeeType) {
    return {
        type: ActionTypes.UPDATE_COFFEE_LIST,
        payload: {
            updateCoffee,
        },
    }
}
export function deleteCoffeeCart(deleteCoffee: string) {
    return {
        type: ActionTypes.DELETE_COFFEE_LIST,
        payload: {
            deleteCoffee,
        },
    }
}
export function finishPurchaseCoffee(finishCoffee: CoffeeBuyType) {
    return {
        type: ActionTypes.FINISH_PURCHASE,
        payload: {
            finishCoffee,
        },
    }
}