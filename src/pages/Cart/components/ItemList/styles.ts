import styled from "styled-components"

export const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 368px;
    gap: 20px;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${props => props.theme["gray-400"]};

    header {
        display: grid;
        width: 171px;
        gap: 12px;

        div {
            display: flex;
            gap: 12px;

            input {
                border 0;
                border-radius: 6px;
                background: ${props => props.theme["gray-400"]};
                padding: 0.5rem;
                width: 72px;
            }

            button {
                display: flex;
                align-items: center;
                font-size: 12px;
                border 0;
                border-radius: 6px;
                background: ${props => props.theme["gray-400"]};
                padding: 0.5rem;
                gap: 8px;
            }
            strong {
                
            }
        }
    }
    img {
        height: 64px;
    }
`
export const ItemDescript = styled.div`
    display: flex;
    gap: 20px;
`