import { CoffeDescription, CoffeName, CoffeBuy, CoffeType, ItemsList, IconBuy } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { CoffeeContext } from "../../../../context/CoffeeContext";

interface coffeeStoreProps {
    image: string
    name: string;
    coffetype: string;
    description: string;
    price: string;
}

export function HomeCoffeList(data: coffeeStoreProps) {
    const {handleSelectCoffee} = useContext(CoffeeContext)

    function handleCreateNewCart(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        const id = String(new Date().getTime())
        const total = String((parseFloat(data.price) * parseInt(event.target.qtd.value)))
        const NewListCoffe = {
            id,
            image: data.image,
            name: data.name,
            price: data.price,
            quantity: event.target.qtd.value,
            total
        }
        handleSelectCoffee (NewListCoffe)
    }

    function HendleBuyCoffeChangeInvalid(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }
    return (
        <>
            <ItemsList onSubmit={handleCreateNewCart}>
                <img src={data.image} alt="" />
                <CoffeType>{data.coffetype}</CoffeType>
                <CoffeName>{data.name}</CoffeName>
                <CoffeDescription>{data.description}</CoffeDescription>
                <CoffeBuy>
                    <p>R$ <span>{(data.price).replace(".", ",")}</span></p>
                    <div>
                        <input
                            type="number"
                            id="qtd"
                            name="qtd"
                            step={1}
                            min={1}
                            defaultValue={1}
                            // onChange={HendleBuyCoffeChange}
                            onInvalid={HendleBuyCoffeChangeInvalid}
                            required
                        />
                        <IconBuy type="submit"><ShoppingCart weight="fill" /></IconBuy>
                    </div>
                </CoffeBuy>
            </ItemsList>
        </>
    )
}