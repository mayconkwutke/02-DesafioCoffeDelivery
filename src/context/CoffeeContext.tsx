import {createContext, ReactNode} from 'react';
import { useState } from 'react';

interface CoffeeType {
    id: string,
    image: string,
    name: string,
    price: string,
    quantity: string,
    total: string,
}

export interface AddressType {
    cep: string,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
}

interface coffeeBuyType {
    id: string
    coffee: CoffeeType[],
    endereco: AddressType,
    payment: string,
    totalPrice: string
}

interface CoffeeContextProps {
    purcheseData?: coffeeBuyType,
    listCoffe: CoffeeType[],
    handleSelectCoffee: (data: CoffeeType) => void
    handleUpdatedCoffeeQuantity: (data: any) => void
    deleteCoffee: (data: string) => void
    finishPurchase: (data: coffeeBuyType) => void
}

export const CoffeeContext = createContext ({} as CoffeeContextProps)

interface CoffeeContextProviderProps {
    children: ReactNode
}

export function CoffeeContextProvider({children}: CoffeeContextProviderProps) {
    const [listCoffe, setListCoffe] = useState<CoffeeType[]>([])
    const [purcheseData, setPurcheseData] = useState<coffeeBuyType> ()
    console.log(purcheseData)

    function handleSelectCoffee(data: CoffeeType) {
        const coffeeCheck = listCoffe.findIndex(item => {
            return item.name === data.name
        })
        if (coffeeCheck < 0){
            console.log("Não Registrado")
            setListCoffe([...listCoffe, data]);
        }else {
            console.log("Registrado")
            const prevItem = [...listCoffe];
            prevItem[coffeeCheck].quantity = String(parseInt(prevItem[coffeeCheck].quantity) + parseInt(data.quantity));
            prevItem[coffeeCheck].total = String((parseFloat(prevItem[coffeeCheck].price) * parseInt(prevItem[coffeeCheck].quantity)));
            setListCoffe(prevItem)
        }
        
    }

    function handleUpdatedCoffeeQuantity(data: any) {
        console.log(data)
        const itemUpdate = listCoffe.findIndex(item => {
            return item.id === data.idItem
        })
        const prevItem = [...listCoffe];
        prevItem[itemUpdate].quantity = data.quantity;
        prevItem[itemUpdate].total = String((parseFloat(prevItem[itemUpdate].price) * parseInt(data.quantity)));
        setListCoffe(prevItem)
    }

    function deleteCoffee(data: string) {
        const itemDelete = listCoffe.filter(item => {
            return item.id !== data
        })
        setListCoffe(itemDelete)
    }

    function finishPurchase(data: coffeeBuyType){
        console.log("cheguei")
        setPurcheseData(data)
        setListCoffe([])
    }

    return (
        <CoffeeContext.Provider
            value={{
                purcheseData,
                listCoffe,
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