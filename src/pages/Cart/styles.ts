import styled from "styled-components";

export const CartContainer = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    top: 40px;
`

export const DeliveryContainer = styled.div`
    display: grid;
    gap: 12px;

    strong {
        font-family: 'baloo 2', sans-serif;
        font-size: 18px;
        line-height: 130%;
        color: ${props => props.theme["gray-900"]}
    }
`

export const DeliveryForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    width: 640px;
    padding: 0;

    background: ${props => props.theme["gray-200"]};
    border-radius: 6px;
    padding: 40px;

    ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    li {
        list-style: none;
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: space-between;
    }
    
    input {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        gap: 4px;

        background: ${props => props.theme["gray-300"]};
        border: 1px solid ${props => props.theme["gray-400"]};
        border-radius: 4px;
    }
`

export const HeaderCart = styled.header`
    display: flex;
    gap: 0.5rem;
    height: 44px;
    width: 640px;
    color: ${props => props.theme["gray-800"]};

    p {
        font-size: 14px
    }
`

export const CardForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    width: 640px;
    background: ${props => props.theme["gray-200"]};
    border-radius: 6px;
    padding: 40px;
    label {
        border: 1px solid;   
    }
    input:checked + label{
            background: ${props => props.theme["gray-400"]}
        }
`

export const CardStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 100%;
    
    ul {
        list-style: none;
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: space-between;
    }

    input {
        display: none;
    }

    label {
        font-family: 'Roboto', sans-serif;
        display: flex;
        justify-content: center;
        font-size: 12px;
        padding: 16px;
        border-radius: 6px;
        width: 179px;
        gap: 12px;
        white-space: nowrap;

        cursor: pointer;
    }
`

export const CoffeeCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    width: 448px;

    background: ${props => props.theme["gray-200"]};
    border-radius: 6px;
    padding: 40px;
`

export const ButtonForm = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    width: 368px;
    border: 0;
    border-radius: 6px;
    background: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["gray-100"]};
    cursor: pointer;

    transition: all 0.2s;

    &:hover{
        background-color: ${props => props.theme["yellow-500"]};
    }
`
export const SubTotal = styled.div `
    display: flex;
    flex-direction: column;
    width: 368px;
    gap: 12px;
    p{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        span{
            font-size: 16px;
        }
    }
    strong{
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        span{
            font-size: 20px;
        }
    }
`

