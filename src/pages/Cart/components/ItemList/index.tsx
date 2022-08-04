import { ItemDescript, ListItem } from "./styles";
import { Trash } from "phosphor-react";
import { ChangeEvent, useContext } from "react";
import { CoffeeContext } from "../../../../context/CoffeeContext";

interface ItemListProps {
    idItem: string,
    image: string,
    name: string,
    price: string,
    quantity: string,
    total: string
}

export function ItemList(data: ItemListProps) {
    const { handleUpdatedCoffeeQuantity, deleteCoffee } = useContext(CoffeeContext)

    function updateQuantityItem(event: ChangeEvent<HTMLInputElement>) {
        const itemUpdateData = {
            idItem: data.idItem,
            quantity: event.target.value
        }
        handleUpdatedCoffeeQuantity(itemUpdateData)
    }

    return (
        <ListItem>
            <ItemDescript>
                <img src={data.image} alt="" />
                <header>
                    <p>{data.name}</p>
                    <div>
                        <input type="number" onChange={updateQuantityItem} step="1" defaultValue={data.quantity} />
                        <button onClick={() => deleteCoffee(data.idItem)}><Trash /> Remover</button>
                    </div>
                </header>
            </ItemDescript>
            <strong>R$ {parseFloat(data.total).toFixed(2).toString().replace(".", ",")}</strong>
        </ListItem>
    )
}
