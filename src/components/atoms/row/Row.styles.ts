import styled from "styled-components";

interface IStyledProps {
    justifyContent?: React.CSSProperties["justifyContent"];
}


export const Container = styled.div<IStyledProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props)=> props.justifyContent || "flex-start"};
`