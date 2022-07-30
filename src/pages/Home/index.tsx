import { CatalogTitle, CoffeIconStyles, HomeContainer, IntroContainer, ItemsHome, List, ListContainer, LogoHome, PackageIconStyles, ShoppingCartIconStyles, TimerIconStyles, TitleHome } from "./styles";
import HomeCoffeLogo from '../../assets/HomeCoffe.svg';
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'
import { HomeCoffeList } from "./components/Catalog";
import { CoffeStore } from "../../data/Store";

export function Home() {
    return (
        <HomeContainer>
            <IntroContainer>
                <TitleHome>
                    <p>Encontre o café perfeito para qualquer hora do dia</p>
                    <p className='subtitle'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </TitleHome>
                <ItemsHome>
                    <p><ShoppingCartIconStyles><ShoppingCart weight="fill" /></ShoppingCartIconStyles> Compra simples e segura</p>
                    <p><PackageIconStyles><Package weight="fill" /></PackageIconStyles>Embalagem mantém o café intacto</p>
                    <p><TimerIconStyles><Timer weight="fill" /> </TimerIconStyles>Entrega rápida e restreada</p>
                    <p><CoffeIconStyles><Coffee weight="fill" /></CoffeIconStyles>O Café chega fresquinho até você</p>
                </ItemsHome>
                <LogoHome src={HomeCoffeLogo} alt="" />
            </IntroContainer>
            <ListContainer>
                <CatalogTitle>Nossos cafés</CatalogTitle>
                <List>
                    {CoffeStore.map(coffee => {
                        return (
                            <HomeCoffeList 
                                key={coffee.id}
                                image={coffee.coffe.image}
                                name={coffee.coffe.name}
                                coffetype={coffee.coffe.coffetype}
                                description={coffee.coffe.description}
                                price={coffee.coffe.price}
                            />
                        )
                    })}
                </List>
            </ListContainer>
        </HomeContainer>
    )
}