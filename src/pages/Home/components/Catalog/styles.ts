import styled from "styled-components";

export const ItemsList = styled.form`
    position: relative;
    width: 256px;
    height: 310px;
    left: 0;
    top: 0;

    border-radius: 6px 36px;
    background: ${props => props.theme["gray-200"]};

    img {
        width: 120px;
        position: absolute;
        margin-top: -20px;
        left: calc(50% - 120px/2);
    }
`

export const CoffeType = styled.p`
    width: 81px;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    padding: 4px 8px;
    position: absolute;
    top: 112px;
    
    left: calc(50% - 81px/2);

    border-radius: 8px;
    background: ${props => props.theme["yellow-100"]};
`
export const CoffeName = styled.p`
    position: absolute;
    width: 256px;
    display: flex;
    justify-content: center;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    margin-top: 149px;
`

export const CoffeDescription = styled.p`
    position: absolute;
    width: 216px;
    display: flex;
    text-align: center;
    font-size: 14px;
    line-height: 130%;
    right: 20px;
    left: 20px;
    top: 183px;
`

export const CoffeBuy = styled.div`
    width: 208px;
    height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    bottom: 20px;
    left: calc(50% - 208px/2);
    font-size: 12px;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
    div input {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        /* gap: 4px; */

        width: 72px;
        height: 38px;

        background: #E6E5E5;
        border-radius: 6px;
    }
    p {
        gap: 0.25rem;
    }
    p span {
        font-family: 'Baloo 2', sans-serif;
        weight: 800;
        font-size: 1.5rem;
    }
`

export const IconBuy = styled.button`
    background-color: ${props => props.theme["purple-500"]};
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: 8px;
    cursor: pointer;

    border-radius: 6px;
    border: 0;

    transition: all 0.2s;

    &:hover {
        background: ${props => props.theme["purple-300"]};
    }
`

