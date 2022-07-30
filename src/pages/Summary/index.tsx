import { IconStyledDoll, IconStyledMap, IconStyledTimer, SummaryContainer, SummaryHeader, SummaryMain } from "./styles";
import LogoDelivery from '../../assets/LogoDelivery.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";

export function Summary() {
    const {purcheseData} = useContext(CoffeeContext)
    return (
        <SummaryContainer>
            <SummaryHeader>
                <h1>Uhu! Pedido confirmardo</h1>
                <p>Agora é só aguardar e logo o café chegará até você</p>
            </SummaryHeader>
            <SummaryMain>
                <div>
                    <p><IconStyledMap><MapPin weight="fill"/></IconStyledMap> Entrega em <span>{purcheseData?.endereco.rua}</span><br /> {purcheseData?.endereco.bairro} - {purcheseData?.endereco.cidade}, {purcheseData?.endereco.uf}</p>
                    <p><IconStyledTimer><Timer weight="fill"/></IconStyledTimer> Previsão de entrega <br /> <span>20 min - 30 min</span></p>
                    <p><IconStyledDoll><CurrencyDollar weight="fill"/></IconStyledDoll> Pagamento da entrega <br /> <span>{purcheseData?.payment}</span></p>
                </div>
                <img src={LogoDelivery} alt="" />
            </SummaryMain>
        </SummaryContainer>
    )
}