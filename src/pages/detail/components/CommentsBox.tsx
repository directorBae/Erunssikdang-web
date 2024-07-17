import React from "react";
import styled from "styled-components";
import PersonIcon from "../../../assets/personicon.svg";
import SkullIcon from "../../../assets/skull.svg";
import SkullFilled from "../../../assets/skullFilled.svg";
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
    width: 100%;
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

  @media (max-width: 1024px) {
    display: none;
  }

  cursor: pointer;
`;

const FingerImage = styled.img`
  width: 16px;
  height: 16px;

  @media (max-width: 480px) {
    width: 12px;
    height: 12px;
  }
  cursor: pointer;
`;

const ReplyHead = styled.div`
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 16px;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

interface CommentProps {
  id: number;
  writer: string;
  date: string;
  content: string;
  image: string[] | null;
  rate: number;
  good: number;
  bad: number;
  num_reply: number;
  clickGood: (id: number) => void;
  clickBad: (id: number) => void;
}

const CommentBox = ({
  id,
  writer,
  date,
  content,
  image,
  rate,
  good,
  bad,
  num_reply,
  clickGood,
  clickBad,
}: CommentProps) => {
  const filledSkulls = Array(rate).fill(<SkullImage src={SkullFilled} />);
  const emptySkulls = Array(5 - rate).fill(<SkullImage src={SkullIcon} />);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  return (
    <CommentContainer>
      <CommentsHeader>
        <WriterImage src={PersonIcon} />
        <WriterInfos>
          <WriterName>{writer}</WriterName>
          <WriteDate>{formatDate(date)}</WriteDate>
          <SkullBox>
            {filledSkulls}
            {emptySkulls}
          </SkullBox>
        </WriterInfos>
      </CommentsHeader>
      {content && <CommentContext>{content}</CommentContext>}
      <CommentImagesBox>
        {image &&
          image.map((img, index) => <CommentImage key={index} src={img} />)}
      </CommentImagesBox>
      <BottomBar>
        <GoodButtonContainer>
          <FingerImage
            src={GoodFinger}
            alt="good"
            onClick={() => clickGood(id)}
          />
          <ReactionNumber>{good}</ReactionNumber>
        </GoodButtonContainer>
        <BadButtonContainer>
          <FingerImage
            src={BadFinger}
            alt="good"
            onClick={() => clickBad(id)}
          />
          <ReactionNumber>{bad}</ReactionNumber>
        </BadButtonContainer>
        <div style={{ width: "40%" }}></div>
        {/* <ReplyButtonContainer>
          <ReplyHead>대댓글</ReplyHead>
          <ReactionNumber>{num_reply}</ReactionNumber>
        </ReplyButtonContainer> */}
      </BottomBar>
    </CommentContainer>
  );
};

export default CommentBox;
