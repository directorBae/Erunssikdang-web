import React from "react";
import styled from "styled-components";
import PersonIcon from "../../../assets/personicon.svg";
import SkullIcon from "../../../assets/skull.svg";
import { TagHorizontal } from "../../../components/Tag";
import GoodFinger from "../../../assets/good.svg";
import BadFinger from "../../../assets/bad.svg";

const CommentContainer = styled.div`
  box-sizing: border-box;

  max-width: 600px;

  width: 90%;
  height: auto;

  background: #ffffff;
  border: 1px solid rgba(36, 36, 36, 0.4);
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  padding: 15px 40px;

  @media (max-width: 480px) {
    padding: 10px 10px;
  }
`;

const CommentsHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 52px;

  @media (max-width: 480px) {
    height: 40px;
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

const SkullBox = styled.div`
  gap: 2px;

  @media (max-width: 480px) {
    gap: 1px;
  }
`;

const SkullImage = styled.img`
  width: 20px;
  height: 20px;

  @media (max-width: 480px) {
    width: 12px;
    height: 12px;
  }
`;

const CommentContext = styled.div`
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

const CommentImagesBox = styled.div`
  margin-top: 10px;
  width: 100%;
  padding: 10px 0px;
  display: flex;
  height: auto;
  gap: 10px;
`;

const CommentImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
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

const ReplyButtonContainer = styled.div`
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

const ReplyHead = styled.div`
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 16px;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

interface CommentProps {}

const CommentBox = ({}: CommentProps) => {
  return (
    <CommentContainer>
      <CommentsHeader>
        <WriterImage src={PersonIcon} />
        <WriterInfos>
          <WriterName>작성자</WriterName>
          <WriteDate>2021.07.27</WriteDate>
          <SkullBox>
            <SkullImage src={SkullIcon} />
            <SkullImage src={SkullIcon} />
            <SkullImage src={SkullIcon} />
            <SkullImage src={SkullIcon} />
            <SkullImage src={SkullIcon} />
          </SkullBox>
        </WriterInfos>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <TagHorizontal tag1="태그1" tag2="태그2" tag3="태그3" />
        </div>
      </CommentsHeader>
      <CommentContext>
        {
          "전설은 아니고 레전드급인 식당. 서비스부터 위생까지 엄청난 수준. 맛은 나쁘지 않았는데 내 생각엔 바퀴벌레 육수 맛일 듯. 식당에 바퀴벌레가 존나게 돌아다님. 호주인줄. 씨발 진짜 사장 불러서 음식에 수세미 나왔다고 따졌더니 돈 줄테니까 나가라고함. 대단한 앰뒤년."
        }
      </CommentContext>
      <CommentImagesBox>
        <CommentImage src="https://via.placeholder.com/150" />
        <CommentImage src="https://via.placeholder.com/150" />
        <CommentImage src="https://via.placeholder.com/150" />
      </CommentImagesBox>
      <BottomBar>
        <GoodButtonContainer>
          <FingerImage src={GoodFinger} alt="good" />
          <ReactionNumber>0</ReactionNumber>
        </GoodButtonContainer>
        <BadButtonContainer>
          <FingerImage src={BadFinger} alt="good" />
          <ReactionNumber>0</ReactionNumber>
        </BadButtonContainer>
        <div style={{ width: "40%" }}></div>
        <ReplyButtonContainer>
          <ReplyHead>대댓글</ReplyHead>
          <ReactionNumber>3</ReactionNumber>
        </ReplyButtonContainer>
      </BottomBar>
    </CommentContainer>
  );
};

export default CommentBox;
