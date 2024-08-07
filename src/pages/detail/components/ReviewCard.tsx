import React from "react";
import styled from "styled-components";
import Skull from "../../../assets/skull.svg";
import { TagVertical } from "../../../components/Tag";
import iButton from "../../../assets/iBtn.svg";

const SkullBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;

  @media (max-width: 480px) {
    gap: 1px;
  }
`;

const SkullImage = styled.img`
  width: 30px;
  height: 30px;

  @media (max-width: 480px) {
    width: 12px;
    height: 12px;
  }
`;

const ReviewCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const ReviewHeader = styled.div`
  border-bottom: 1px solid rgba(25, 25, 25, 0.6);

  width: 100%;
  height: 60px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #000000;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    height: 40px;
  }
`;

const ReviewContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px 100px;

  height: 300px;
  border-bottom: 1px solid rgba(25, 25, 25, 0.6);

  @media (max-width: 1024px) {
    padding: 20px 40px;
  }

  @media (max-width: 480px) {
    padding: 20px 20px;
    height: 160px;
  }
`;

const SummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: rgba(243, 243, 243, 0.6);
  border: 1px solid rgba(25, 25, 25, 0.6);
  border-radius: 12px;

  width: 270px;
  height: 100%;

  @media (max-width: 1024px) {
    margin: 0 10px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0px 10px;
  }
`;

const AvgRating = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;

  display: flex;
  align-self: center;
  justify-self: center;

  justify-content: center;
  align-items: center;
  text-align: center;

  color: #ec0000;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const RateHeader = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;

  display: flex;
  align-self: center;
  justify-self: center;

  justify-content: center;
  align-items: center;
  text-align: center;

  color: #000000;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 10px;
    margin-bottom: 10px;
  }
`;

const TagCount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;
`;

const CountContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  flex-direction: column;
`;

const Count = styled.div`
  display: flex;
  position: relative;

  align-items: center;
  justify-content: center;

  height: 28px;

  @media (max-width: 480px) {
    height: 20px;
  }
`;

const GrayBar = styled.div`
  position: absolute;
  width: 140px;
  height: 5px;
  left: 0px;
  top: 0px;

  background: rgba(217, 217, 217, 0.6);
  border-radius: 2.5px;

  @media (max-width: 480px) {
    width: 70px;
    height: 2.5px;
  }
`;

const YellowBar = styled.div`
  position: absolute;
  width: 98px;
  height: 5px;

  left: 0px;
  top: 0px;

  background: #d2d200;
  border-radius: 2.5px;

  @media (max-width: 480px) {
    width: 49px;
    height: 2.5px;
  }
`;

const ErunScoreNumber = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #0066ff;
  margin-bottom: 20px;

  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  @media (max-width: 1400px) {
    cursor: default;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const NumberandIBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const IBtn = styled.div`
  cursor: pointer;

  align-self: flex-start;

  @media (max-width: 1400px) {
    display: none;
  }
`;

interface ReviewCardProps {
  rate: number | null;
  erunScore: number | null;
  tags: { tag1: string; tag2: string; tag3: string } | null;
  clickErunScore: () => void;
}

const ReviewCard = ({
  rate,
  erunScore,
  tags,
  clickErunScore,
}: ReviewCardProps) => {
  return (
    <ReviewCardContainer>
      <ReviewHeader>리뷰</ReviewHeader>
      <ReviewContent>
        <SummaryBox>
          {rate !== null ? (
            <AvgRating>{"-" + rate}</AvgRating>
          ) : (
            <AvgRating>평가 없음</AvgRating>
          )}
          <RateHeader>평균 평점</RateHeader>
          <SkullBox>
            <SkullImage src={Skull} />
            <SkullImage src={Skull} />
            <SkullImage src={Skull} />
            <SkullImage src={Skull} />
            <SkullImage src={Skull} />
          </SkullBox>
        </SummaryBox>
        {tags && (
          <SummaryBox>
            <TagCount>
              <TagVertical tag1={tags.tag1} tag2={tags.tag2} tag3={tags.tag3} />
              <CountContainer>
                <Count>
                  <GrayBar />
                  <YellowBar />
                </Count>
                <Count>
                  <GrayBar />
                  <YellowBar />
                </Count>
                <Count>
                  <GrayBar />
                  <YellowBar />
                </Count>
              </CountContainer>
            </TagCount>
            <NumberandIBtn>
              <ErunScoreNumber>{erunScore}</ErunScoreNumber>
              <IBtn onClick={clickErunScore}>
                <img src={iButton} alt="info" width={16} />
              </IBtn>
            </NumberandIBtn>

            <RateHeader>이런 Score</RateHeader>
          </SummaryBox>
        )}
      </ReviewContent>
    </ReviewCardContainer>
  );
};

export default ReviewCard;
