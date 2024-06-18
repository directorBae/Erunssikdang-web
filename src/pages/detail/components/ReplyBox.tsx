import React from "react";
import styled from "styled-components";
import PersonIcon from "../../../assets/personicon.svg";
import GoodFinger from "../../../assets/good.svg";
import BadFinger from "../../../assets/bad.svg";

const ReplyContainer = styled.div`
  box-sizing: border-box;

  width: 300px;
  height: auto;

  background: #ffffff;
  border: 1px solid rgba(36, 36, 36, 0.4);
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  padding: 15px 40px;

  @media (max-width: 480px) {
    width: 80%;
    padding: 10px 10px;
  }
`;

const CommentsHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 45px;

  @media (max-width: 480px) {
    height: 35px;
  }
`;

const WriterInfos = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 30%;
  }
`;

const WriterImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const WriterName = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #000000;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const WriteDate = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;

  display: flex;
  align-items: center;
  text-align: center;

  color: rgba(56, 56, 56, 0.7);

  margin-bottom: 3px;

  @media (max-width: 480px) {
    font-size: 8px;
  }
`;

const ReplyContext = styled.div`
  width: 90%;
  height: auto;
  margin-top: 20px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;

  color: #000000;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 15px;
    width: 100%;
  }
`;

const BottomBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
`;

const ReactionNumber = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  margin-left: 7px;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const GoodButtonContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BadButtonContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FingerImage = styled.img`
  width: 16px;
  height: 16px;

  @media (max-width: 480px) {
    width: 12px;
    height: 12px;
  }
`;

interface ReplyProps {}

const ReplyBox = ({}: ReplyProps) => {
  return (
    <ReplyContainer>
      <CommentsHeader>
        <WriterImage src={PersonIcon} />
        <WriterInfos>
          <WriterName>작성자</WriterName>
          <WriteDate>2021.07.27</WriteDate>
        </WriterInfos>
      </CommentsHeader>
      <ReplyContext>
        {
          "음식의 맛이 전반적으로 매우 실망스러웠습니다. 주문한 스테이크는 과도하게 익혀져서 질겼고, 샐러드는 신선하지 않은 재료로 만들어져 맛이 없었습니다. "
        }
      </ReplyContext>
      <BottomBar>
        <GoodButtonContainer>
          <FingerImage src={GoodFinger} alt="good" />
          <ReactionNumber>0</ReactionNumber>
        </GoodButtonContainer>
        <BadButtonContainer>
          <FingerImage src={BadFinger} alt="good" />
          <ReactionNumber>0</ReactionNumber>
        </BadButtonContainer>
      </BottomBar>
    </ReplyContainer>
  );
};

export default ReplyBox;
