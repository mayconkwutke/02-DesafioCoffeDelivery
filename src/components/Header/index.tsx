import { NavLink } from 'react-router-dom';
import logoCoffeDelivery from '../../assets/Logo.svg';
import { HeaderContainer } from './styles';
import { MapPin, MapPinLine, ShoppingCart, Trash } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { CoffeeContext } from '../../context/CoffeeContext';

export function Header() {
    const {listCoffe}  = useContext(CoffeeContext)
    const [itemCart, setItemCart] = useState(0)
    useEffect(() => {    
        let itemCart = 0
        listCoffe?.map(data => {
            itemCart += parseInt(data.quantity)
        });
        setItemCart(itemCart)
    },[listCoffe])
    return (
        <HeaderContainer>
            <div>
                <img src={logoCoffeDelivery} alt="" />
                <nav>
                    <NavLink className="Location" to="/"><MapPin color="#8047F8" weight="fill" /> Porto Alegre, RS</NavLink>
                    <NavLink className="Cart" to="/carrinho"><ShoppingCart color="#C47F17" weight="fill" /><span>{itemCart}</span></NavLink>
                </nav>
            </div>
        </HeaderContainer>
    )
}