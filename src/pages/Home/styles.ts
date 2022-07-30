import styled from "styled-components";
import { ShoppingCart } from 'phosphor-react';

export const HomeContainer = styled.main`
    position: relative;
`

export const IntroContainer = styled.div`
    height: 544px;
    left: 0px;
    right: 0px;
    top: 104px;
`

export const TitleHome = styled.div`
font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        color: ${props => props.theme["gray-900"]};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
        gap: 1rem;

        position: absolute;
        width: 588px;
        height: 192px;

        left: calc(50% - 588px/2 - 266px);
        top: calc(50% - 192px/2 - 82px);

        font-size:48px;
        
    .subtitle {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 130%;
    }
`

export const ItemsHome = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    width: 567px;
    height: 84px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    left: calc(50% - 567px/2 - 276.5px);
    top: calc(50% - 84px/2 + 122px);

    p {
        display: flex;
        gap: 1rem;
        white-space: nowrap;
        align-items: center;
    }
`;

// ShoppingCart, Timer, Coffee, Package
const DefaultItemsStyles = styled.span`
    height: 2rem;
    width: 2rem;
    border-radius: 9999px;
    color: ${props => props.theme["gray-100"]};
    padding: 0.5rem;
`
export const ShoppingCartIconStyles = styled(DefaultItemsStyles)`
    background: ${props => props.theme["yellow-500"]};
`
export const TimerIconStyles = styled(DefaultItemsStyles)`
    background: ${props => props.theme["yellow-300"]};
`
export const PackageIconStyles = styled(DefaultItemsStyles)`
    background: ${props => props.theme["gray-700"]};
    `
export const CoffeIconStyles = styled(DefaultItemsStyles)`
    background: ${props => props.theme["purple-300"]};
`
export const LogoHome = styled.img`
    display: flex;
    align-items: left;
    left: calc(50% - 476px/2 + 322px);
    top: calc(50% - 360px/2);
    position: absolute;
    top: 94px;
`
export const ListContainer = styled.div`
    width: 100%;
    left: 0;
    right: 0;
    top: 648px;
    position: absolute;
`
export const CatalogTitle = styled.p`
    position: absolute;
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    left: calc(50% - 1120px/2);
    top: 32px;
`

export const List = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    left: calc(50% - 1120px/2);
    top: 128px;
    gap: 1rem;
`

