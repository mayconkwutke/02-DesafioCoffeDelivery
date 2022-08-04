import {createContext, ReactNode, useEffect, useReducer} from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewCoffeeCart, updateCoffeeCart, deleteCoffeeCart, finishPurchaseCoffee } from '../reducers/actions/action';
import { CoffeeType, coffeeReducer, CoffeeBuyType } from '../reducers/actions/reducer';

// interface CoffeeType {
//     id: string,
//     image: string,
//     name: string,
//     price: string,
//     quantity: string,
//     total: string,
// }

export interface AddressType {
    cep: string,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
}


interface CoffeeContextProps {
    listCoffe: CoffeeType[],
    listBuyCoffee: CoffeeBuyType,
    handleSelectCoffee: (data: CoffeeType) => void
    handleUpdatedCoffeeQuantity: (data: any) => void
    deleteCoffee: (data: string) => void
    finishPurchase: (data: any) => void
}

export const CoffeeContext = createContext ({} as CoffeeContextProps)
interface CoffeeContextProviderProps {
    children: ReactNode
}

export function CoffeeContextProvider({children}: CoffeeContextProviderProps) {
    const [coffeList, dispatch] = useReducer(
        coffeeReducer,
        {
            listCoffe: [],
            listBuyCoffee: [],
        },
        () => {
            const storedStateAsJSON = localStorage.getItem(
                '@desafio-coffeetype:coffee-1.0.0',
            )

            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON)
            }
        },
    )

    
    const {listCoffe, listBuyCoffee} = coffeList;
    console.log(coffeList)
    
    useEffect(() => {
        const stateJSON = JSON.stringify(coffeList)
        
        localStorage.setItem('@desafio-coffeetype:coffee-1.0.0', stateJSON)
      }, [coffeList])
      
    function handleSelectCoffee(data: CoffeeType) {
        dispatch(addNewCoffeeCart(data))
    }

    function handleUpdatedCoffeeQuantity(data: CoffeeType) {
        dispatch(updateCoffeeCart(data))
    }

    function deleteCoffee(data: string) {
        dispatch(deleteCoffeeCart(data))
    }

    function finishPurchase(data: CoffeeBuyType){
        dispatch(finishPurchaseCoffee(data))
    }

    return (
        <CoffeeContext.Provider
            value={{
                listCoffe,
                listBuyCoffee,
                handleSelectCoffee,
                handleUpdatedCoffeeQuantity,
                deleteCoffee,
                finishPurchase,
            }}
        >
            {children}
        </CoffeeContext.Provider>
    )
}