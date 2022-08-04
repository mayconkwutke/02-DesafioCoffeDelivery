import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { ItemList } from "./components/ItemList";
import { ButtonForm, CardForm, CardStyled, CartContainer, CoffeeCard, DeliveryContainer, DeliveryForm, HeaderCart, SubTotal } from "./styles";
import {AddressType} from '../../context/CoffeeContext'
import { useNavigate } from "react-router-dom";

export function Cart() {
    const {listCoffe,finishPurchase}  = useContext(CoffeeContext)
    const [cartSelect, setCartSelect] = useState('')
    const [total, setTotal] = useState('')
    const [totalPrice, setTotalPrice] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {    
        let itemTotal = 0
        listCoffe?.map(data => {
            itemTotal += parseFloat(data.total)
        });
        setTotal(String(itemTotal))
        setTotalPrice(itemTotal === 0 ? "0,00" : String(itemTotal + 3))
    },[listCoffe])

    function selectCartOption(event: any) {
        setCartSelect(event.target.value)
    }

    function handeFinishBuy(event: any){
        event.preventDefault()
        setIsSubmit(true);
        const id = String(new Date().getTime())
        const address: AddressType = {
            cep: event.target.cep.value,
            rua: event.target.rua.value,
            numero: event.target.numero.value,
            complemento: event.target.complemento.value,
            bairro: event.target.bairro.value,
            cidade: event.target.cidade.value,
            uf: event.target.uf.value,
        }
        
        const coffeeBuy = {
            id,
            coffee: listCoffe,
            endereco: address,
            payment: cartSelect,
            totalPrice: totalPrice
        }
        finishPurchase(coffeeBuy)
        navigate ("/summary")
    }
    // useEffect(() => {
    //         if (isSubmit) {
    //             return (navigate('/summary'));
    //         }
    //     }, [isSubmit])

    return (
        <CartContainer onSubmit={handeFinishBuy}>
            <DeliveryContainer>
                <strong>Complete seu pedido</strong>
                <DeliveryForm>
                    <HeaderCart>
                        <MapPin />
                        <div>
                            <strong> Endereço de Entrega</strong>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </HeaderCart>
                    <ul>
                        <li>
                            <input id="cep" type="text" size={17} placeholder="CEP" required/>
                        </li>
                        <li>
                            <input id="rua" type="text" size={63} placeholder="Rua" required/>
                        </li>
                        <li>
                            <input id="numero" type="text" size={17} placeholder="Número" required/>
                            <input id="complemento" type="text" size={38} placeholder="Complemento" />
                        </li>
                        <li>
                            <input id="bairro" type="text" size={17} placeholder="Bairro" required/>
                            <input id="cidade" type="text" size={29} placeholder="Cidade" required/>
                            <input id="uf" type="text" size={1} placeholder="UF" required/>
                        </li>
                    </ul>
                </DeliveryForm>
                <CardForm>
                    <HeaderCart>
                        <CurrencyDollar />
                        <div>
                            <strong>Pagamento</strong>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </HeaderCart>
                    <CardStyled>
                        <ul>
                            <li>
                                <input type="radio" name="card" id="op1" value="Cartão de Credito" onChange={selectCartOption} />
                                <label htmlFor="op1"><CreditCard />CARTÃO DE CRÉDITO</label>
                            </li>
                            <li>
                                <input type="radio" name="card" id="op2" value="Cartão de Debito" onChange={selectCartOption} />
                                <label htmlFor="op2"><Bank />CARTÃO DE DÉBITO</label>
                            </li>
                            <li>
                                <input type="radio" name="card" id="op3" value="Dinheiro" onChange={selectCartOption} />
                                <label htmlFor="op3"><Money />DINHEIRO</label>
                            </li>
                        </ul>
                    </CardStyled>
                </CardForm>
            </DeliveryContainer>
            <DeliveryContainer>
                <strong>Cafés selecionados</strong>
                <CoffeeCard>
                    {listCoffe?.map(data => {
                        return (
                            <ItemList
                                key={data.id}
                                idItem={data.id}
                                image={data.image}
                                name={data.name}
                                price={data.price}
                                quantity={data.quantity}
                                total={data.total}
                            />
                        )
                    })}

                    <SubTotal>
                        <p>Total de itens <span>R$ {parseFloat(total).toFixed(2).toString().replace(".", ",")}</span></p>
                        <p>Frete <span>R$ 3,00</span></p>
                        <strong>Total <span>R$ {parseFloat(totalPrice).toFixed(2).toString().replace(".", ",")}</span></strong>
                    </SubTotal>
                    <ButtonForm type="submit">CONFIRMAR PEDIDO</ButtonForm>
                </CoffeeCard>
            </DeliveryContainer>
        </CartContainer >
    )
}