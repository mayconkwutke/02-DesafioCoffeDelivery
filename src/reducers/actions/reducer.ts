import produce from 'immer';
import { ActionTypes } from './action';
// import produce from 'immer'

export interface AddressType {
    cep: string,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
}

export interface CoffeeType {
    id: string,
    image: string,
    name: string,
    price: string,
    quantity: string,
    total: string,
}

export interface CoffeeBuyType {
    id: string,
    coffee: CoffeeType[],
    endereco: AddressType,
    payment: string,
    totalPrice: string
 
}

interface DataCoffeeType {
    listCoffe: CoffeeType[],
    listBuyCoffee: CoffeeBuyType,
}

export interface coffeeUpdate {
    id: string,
    quantity: string,
}

export function coffeeReducer(state: DataCoffeeType, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_COFFEE:
            const coffeeCheck = state.listCoffe.findIndex(item => {
                return item.name === action.payload.newCoffee.name
            })
            if (coffeeCheck < 0) {
                return produce(state, (draft) => {
                    console.log("Não Registrado")
                    draft.listCoffe.push(action.payload.newCoffee)
                })

            }
            return produce(state, (draft) => {
                console.log("Registrado")
                const quantity = String(parseInt(draft.listCoffe[coffeeCheck].quantity) + parseInt(action.payload.newCoffee.quantity));
                draft.listCoffe[coffeeCheck].quantity = quantity
                const price = String(parseFloat(draft.listCoffe[coffeeCheck].price) * parseInt(quantity));
                console.log(price);
                draft.listCoffe[coffeeCheck].total = price
            }
            )

        case ActionTypes.UPDATE_COFFEE_LIST:
            const itemUpdate = state.listCoffe.findIndex(item => {
                return item.id === action.payload.updateCoffee.idItem
            })
            return produce(state, (draft) => {
                const quantity = action.payload.updateCoffee.quantity;
                draft.listCoffe[itemUpdate].quantity = quantity
                const price = String(parseFloat(draft.listCoffe[itemUpdate].price) * parseInt(quantity));
                draft.listCoffe[itemUpdate].total = price
            }
            )
        case ActionTypes.DELETE_COFFEE_LIST:
            const itemDelete = state.listCoffe.filter(item => {
                return item.id !== action.payload.deleteCoffee
            })
            return produce(state, (draft) => {
                draft.listCoffe = itemDelete
            })

        case ActionTypes.FINISH_PURCHASE:
            return produce(state, (draft) => {
                draft.listBuyCoffee = (action.payload.finishCoffee)
                draft.listCoffe = []
                
            })
        default:
            return state
    }
}