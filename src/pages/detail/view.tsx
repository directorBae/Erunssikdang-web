import React from "react";
import styled from "styled-components";
import CommentBox from "./components/CommentsBox";
import MenuBar from "../../components/menubar";
import PlaceCard from "./components/PlaceCard";
import ReplyBox from "./components/ReplyBox";
import ReviewCard from "./components/ReviewCard";

const FullWidth = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsSection = styled.div`
  position: relative;
  width: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const CommentsInputContainer = styled.div`
  width: 600px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(25, 25, 25, 0.6);

  @media (max-width: 480px) {
    width: 90%;
    height: 50px;
  }

  margin-bottom: 20px;
`;

const InputandButton = styled.div`
  display: flex;
  flex-direction: row;
`;

const CommentsInput = styled.input`
  width: 450px;
  height: 40px;

  box-sizing: border-box;

  border: 1px solid rgba(56, 56, 56, 0.9);
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;

  margin-right: 10px;
`;

const CommentsButton = styled.button`
  width: 140px;
  background: #00084d;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  /* identical to box height */

  color: #ffffff;
`;

const DetailView = () => {
  return (
    <div>
      <MenuBar />
      <FullWidth>
        <ContentsSection>
          <PlaceCard />
          <ReviewCard />
          <CommentsInputContainer>
            <InputandButton>
              <CommentsInput placeholder=" 리뷰를 작성해주세요. 좋은 리뷰는 등록이 자동 제한될 수 있습니다." />
              <CommentsButton>리뷰쓰기</CommentsButton>
            </InputandButton>
          </CommentsInputContainer>
          <CommentBox />
          <ReplyBox />
        </ContentsSection>
      </FullWidth>
    </div>
  );
};

export default DetailView;
