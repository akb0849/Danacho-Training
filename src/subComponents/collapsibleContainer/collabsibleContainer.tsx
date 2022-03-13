import React, { useState } from 'react'
import { IProps, Wrapper,Content,ContentContainer,ContentWrapper,OptionContainer,OptionWrapper,Title,TriggerButton, OpenIcon, CloseIcon } from './collapsibleContainerElements';
const CollapsibleContainer: React.FC<IProps> = ({ open, children, title }) => {
    const [isOpen, setIsOpen] = useState(open);
  
    const handleFilterOpening = () => {
      setIsOpen((prev) => !prev);
    };
  return (
    <>
      <Wrapper>
        <OptionWrapper>
        <Title>{title}</Title>
          <OptionContainer>
            <TriggerButton onClick={handleFilterOpening}>
              {!isOpen ? (
                <OpenIcon />
              ) : (
                <CloseIcon />
              )}
            </TriggerButton>
          </OptionContainer>
        </OptionWrapper>

        <ContentWrapper className="border-bottom">
          <ContentContainer>{isOpen && <Content>{children}</Content>}</ContentContainer>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export default CollapsibleContainer