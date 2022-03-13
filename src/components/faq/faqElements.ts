import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    width: 100vw;
    background-color: #FBEDB1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 576px) {
        width: 100%;        
    }
    
`
export const CollapsibleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media (max-width: 576px) {
        width: 100%;        
    }
`
export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`