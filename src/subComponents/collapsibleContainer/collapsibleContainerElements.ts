import styled from "styled-components";
import {Plus} from '@styled-icons/bootstrap/Plus'
import {ChevronUp} from '@styled-icons/bootstrap/ChevronUp'
export interface IProps {
    open?: boolean;
    title: string;
}
  
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        &:first-child,
        :nth-of-type(2),
        :nth-of-type(3),
        :nth-of-type(4),
        :nth-of-type(5){
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 20px;
        }        
    }

`


export const TriggerButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
`

export const Title = styled.div`
    font-weight: bold;
    font-size: 20px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
    }
`
export const OptionWrapper = styled.div`
    display: flex;
    
`

export const OptionContainer = styled.div`
    display: flex;
    
`

export const ContentWrapper = styled.div``

export const ContentContainer = styled.div``

export const Content = styled.div`
    width: 500px;
    margin-top: 10px;
    margin-left: 20px;
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: 768px) {
        width: 90%;        
    }
`

export const OpenIcon = styled(Plus)`
    color: black;
    height: 20px;
    width: 20px;
    margin-left: 20px;
`

export const CloseIcon = styled(ChevronUp)`
    color: black;
    height: 20px;
    width: 20px;
    margin-left: 20px;
`