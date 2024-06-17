import React from "react";
import styled from "styled-components";

const FullWidthContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ScrollBoxContainer = styled.div`
  width: 800px;

  align-self: center;
  justify-self: center;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
  padding: 20px 0px;
  gap: 20px;

  @media (max-width: 480px) {
    width: 95%;
    gap: 8px;
    padding: 15px 0px;
  }
`;

interface ScrollBoxProps {
  children: React.ReactNode;
}

const ScrollBox = ({ children }: ScrollBoxProps) => {
  return (
    <FullWidthContainer>
      <ScrollBoxContainer>{children}</ScrollBoxContainer>
    </FullWidthContainer>
  );
};

export default ScrollBox;
