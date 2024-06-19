import React from "react";
import styled from "styled-components";
import Skull from "../../../assets/skull.svg";
import imageAdd from "../../../assets/imageAdd.svg";
import { useSpring, animated } from "react-spring";

const CommentsInputContainer = styled.div`
  width: 600px;
  height: auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(25, 25, 25, 0.6);

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 70%;
    height: auto;
    padding: 15px 0px;
  }

  margin-bottom: 20px;
`;

const InputandButton = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const CommentsContainer = styled(animated.div)<{ $isWriting: boolean }>`
  width: 450px;
  height: 40px;

  box-sizing: border-box;

  border: 1px solid rgba(56, 56, 56, 0.9);
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  margin-right: 10px;
  padding: ${({ $isWriting }) => ($isWriting ? "10px 2px" : "0px")};

  @media (max-width: 480px) {
    width: 280px;
    height: 30px;
    margin-right: 0px;
    margin-bottom: 5px;
  }
`;

const CommentsInput = styled.textarea<{ $isWriting: boolean }>`
  width: 100%;
  height: ${({ $isWriting }) => ($isWriting ? "55%;" : "100%;")}

  border: none;
  background: none;

  box-sizing: border-box;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;

  resize: none;
  outline: none;

  text-align: left;
  padding: 10px;

  overflow-y: hidden;

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 5px;
  }
`;

const CommentsButton = styled.button`
  width: 140px;
  height: 40px;

  background: #00084d;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  /* identical to box height */

  color: #ffffff;

  @media (max-width: 480px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;

const SkullImage = styled.img`
  width: 30px;
  height: 30px;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

const RatingSelect = styled(animated.div)`
  display: flex;
  height: 20%;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;

  padding: 2px 0px 5px 10px;

  border-bottom: 0.5px solid rgba(128, 128, 128, 0.7);

  @media (max-width: 480px) {
    padding: 0px 0px 5px 5px;
    gap: 1px;
  }
`;

const RatingGuide = styled.div`
  width: 70%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;

  color: #828282;

  @media (max-width: 480px) {
    font-size: 8px;
  }
`;

const BottomBar = styled(animated.div)`
  display: flex;
  flex-direction: row;
  height: 20%;

  border-top: 1px solid rgba(25, 25, 25, 0.6);

  padding: 5px 0px 2px 10px;

  @media (max-width: 480px) {
    padding: 5px 0px 0px 5px;
  }

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ImageAdd = styled.img`
  width: 30px;
  height: 30px;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }

  cursor: pointer;
`;

const HiddenInput = styled.input`
  display: none;
`;

const ImageContainer = styled(animated.div)`
  width: 100%;
  height: 160px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  overflow-x: auto;
  overflow-y: hidden;

  padding: 5px 0px;

  @media (max-width: 480px) {
    height: 100px;
  }
`;

const AttachedImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;

  @media (max-width: 480px) {
    width: 90px;
    height: 90px;
  }
`;

// TODO: 사진 생기면 viewmodel에 있는 imageFile을 이용해서 이미지 보이도록 하고,
// 삭제 기능도 구현해야 함.
// 해골 실제로 칠하기

interface CommentInputSectionProps {
  $isWriting: boolean;
  changeState: (state: boolean) => void;
  imageAddClick: () => void;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommentInputSection = ({
  $isWriting,
  changeState,
  imageAddClick,
  handleImageChange,
}: CommentInputSectionProps) => {
  const expandStyles = useSpring({
    height: $isWriting ? 220 : 40,
    from: { height: 40 },
  });

  const fadeInStyles = useSpring({
    opacity: $isWriting ? 1 : 0,
    display: $isWriting ? "flex" : "none",
    from: { opacity: 0, display: "none" },
    delay: 300,
  });

  return (
    <CommentsInputContainer>
      <InputandButton>
        <CommentsContainer style={expandStyles} $isWriting={$isWriting}>
          <RatingSelect style={fadeInStyles}>
            <SkullImage src={Skull} alt="skull" />
            <SkullImage src={Skull} alt="skull" />
            <SkullImage src={Skull} alt="skull" />
            <SkullImage src={Skull} alt="skull" />
            <SkullImage src={Skull} alt="skull" />
            <div style={{ width: "5%" }} />
            <RatingGuide>나쁜 식당일수록 많은 해골을 주세요.</RatingGuide>
          </RatingSelect>
          <CommentsInput
            $isWriting={$isWriting}
            placeholder="리뷰를 작성해주세요. 좋은 리뷰는 등록이 자동 제한될 수 있습니다."
            onClick={() => changeState(true)}
            maxLength={140}
          />
          <BottomBar style={fadeInStyles}>
            <ImageAdd src={imageAdd} alt="imageAdd" onClick={imageAddClick} />
            <HiddenInput
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </BottomBar>
        </CommentsContainer>
        <CommentsButton>리뷰쓰기</CommentsButton>
      </InputandButton>
    </CommentsInputContainer>
  );
};

export default CommentInputSection;
