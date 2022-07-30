import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme["gray-100"]};
    font-size: 14px;
    width: 1440px;
    margin-left: calc(50% - 1440px/2);
    
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 10rem;
    }

    nav {
        display: flex;
        gap: 0.5rem;

        .Location{ 
            display: flex;
            align-items: center;
            border-radius: 8px;
            background: ${props => props.theme["purple-100"]}; 
            padding: 8px;
            gap: 0.25rem;
            position: relative;
        }

        .Cart{
            display: flex;
            align-items: center;
            border-radius: 8px;
            background: ${props => props.theme["yellow-100"]}; 
            padding: 8px;
            position: relative;

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 20px;
                height: 20px;
                font-size: 12px;

                position: absolute;
                right: -8.35px;
                top: -8px;

                background: ${props => props.theme["yellow-300"]};
                border-radius: 1000px;
            }
        }
    }
`