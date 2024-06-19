import React from "react";
import styled from "styled-components";
import Arrow from "../../../assets/ErunScoreBoxLine.svg";
import { observer } from "mobx-react";

const Container = styled.div<{ $show: boolean }>`
  width: 100%;
  flex-direction: row;
  align-items: center;

  display: ${({ $show }) => ($show ? "flex" : "none")};
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 700px;
  left: -80px;
  width: 172px;

  @media (max-width: 1600px) {
    display: none;
  }
`;

const ErunScoreContainer = styled.div`
  position: absolute;
  top: 640px;
  left: 100px;
  width: 172px;
  height: 190px;

  background: #ffffff;
  border: 1px solid rgba(36, 36, 36, 0.4);
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  padding: 10px 20px;

  color: #000000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;
const Context = styled.div`
  width: 100%;
  text-align: left;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  white-space: pre-wrap;
  line-height: 1.4;
`;

interface WhatIsErunScoreProps {
  show: boolean;
}

const WhatIsErunScore = ({ show }: WhatIsErunScoreProps) => {
  return (
    <Container $show={show}>
      <ArrowContainer>
        <img src={Arrow} alt="Arrow" />
      </ArrowContainer>

      <ErunScoreContainer>
        <Header>이런 Score란?</Header>
        <br />
        <Context>
          {
            "이런 Score는 사용자들의 리뷰와 전체 방문수 등을 분석하여 상대적으로 평가한 해당 식당의 종합 지표입니다. 점수가 높을수록 나쁜 리뷰를 많이 받은 식당임을 알 수 있습니다."
          }
        </Context>
      </ErunScoreContainer>
    </Container>
  );
};

export default WhatIsErunScore;
