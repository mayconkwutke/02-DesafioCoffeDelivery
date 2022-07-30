import styled from "styled-components";

export const SummaryContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    width: 1120px;
    left: calc(50% - 1120px/2);
    gap: 32px;
    top: 184px;
`
export const SummaryHeader = styled.header`
    display: flex;
    flex-direction: column;
    

    h1 {
        color: ${props => props.theme["yellow-500"]};
        font-weight: 800;
        font-size: 32px;
        font-family: 'Baloo 2', sans-serif;
        line-height: 130%;
    }
    p{
        font-size: 20px;
        line-height: 130%;
    }
`
export const SummaryMain = styled.main`
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 526px;
        padding: 40px;
        
        gap: 32px;

        border-radius: 6px 32px;
        border: 1px solid transparent;
        background: linear-gradient(white, white), radial-gradient(circle at top left, ${props => props.theme["yellow-300"]},${props => props.theme["purple-300"]});
        background-origin: border-box;
        background-clip: padding-box, border-box;
        p{
            font-size: 16px;
            line-height: 130%;

            span {
                font-weight: 700;
            }
        }
    };
`

const DefaultIconStyled = styled.span`
    width: 32px;
    height: 32px;
    padding: 8px;
    float: left;
    margin-right: 12px;
    border-radius: 9999px;
    color: ${props => props.theme["gray-100"]};
`
export const IconStyledMap = styled(DefaultIconStyled)`
    background: ${props => props.theme["purple-300"]};
`
export const IconStyledTimer = styled(DefaultIconStyled)`
    background: ${props => props.theme["yellow-300"]};
`
export const IconStyledDoll = styled(DefaultIconStyled)`
    background: ${props => props.theme["yellow-500"]};
`