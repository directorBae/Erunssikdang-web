import React from "react";
import styled from "styled-components";
import Skull from "../assets/skull.svg";
import { TagHorizontal } from "./Tag";

const PlaceBoxContainer = styled.div`
  width: 700px;
  height: 170px;

  background: #ffffff;
  border: 1px solid rgba(36, 36, 36, 0.4);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  flex-direction: row;

  align-self: center;
  justify-self: center;

  @media (max-width: 480px) {
    width: 90%;
    height: 100px;
  }
`;

const PlaceBoxImage = styled.img`
  width: 140px;
  height: 140px;

  border-radius: 7px;
  align-self: center;
  margin-left: 20px;

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    margin-left: 10px;
  }
`;

const PlaceBoxContent = styled.div`
  display: flex;
  width: 60%;
  height: 70%;

  align-self: center;

  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 480px) {
    width: 50%;
    height: 70%;
    padding: 10px;
  }
`;

const PlaceName = styled.div`
  height: 25%;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const RatingBox = styled.div`
  display: flex;
  flex-direction: row;

  height: 25%;
`;

const SkullImage = styled.img`
  width: 30px;
  height: 30px;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

const RateNumber = styled.div`
  font-family: "Pretendard";
  height: 100%;

  font-style: normal;
  font-weight: 800;
  font-size: 20px;

  text-align: center;

  color: #ec0000;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const ErunScore = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 480px) {
    width: 20%;
    height: 100%;
    margin-right: 20px;
  }
`;

const ErunScoreText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;

  display: flex;
  align-items: center;

  color: #000000;

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const ErunScoreNumber = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
  margin-bottom: 5px;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

interface PlaceBoxProps {
  name: string | null;
  rate: number | null;
  erunscore: number | null;
  image: string | null;
  tags: string[] | null;
}

const PlaceBox = ({ name, rate, erunscore, image, tags }: PlaceBoxProps) => {
  return (
    <PlaceBoxContainer>
      <PlaceBoxImage
        src={image ? image : "http://via.placeholder.com/300x300"}
        alt="place"
      />
      <PlaceBoxContent>
        <PlaceName>{name}</PlaceName>
        <RatingBox>
          <SkullImage src={Skull} alt="skull" />
          <SkullImage src={Skull} alt="skull" />
          <SkullImage src={Skull} alt="skull" />
          <SkullImage src={Skull} alt="skull" />
          <SkullImage src={Skull} alt="skull" />
          <div style={{ width: "2.5%" }}></div>
          <RateNumber>{"-" + rate}</RateNumber>
        </RatingBox>
        {tags ? (
          <TagHorizontal tag1={tags[0]} tag2={tags[1]} tag3={tags[2]} />
        ) : (
          <div className="loader">Loading...</div>
        )}
      </PlaceBoxContent>
      <ErunScore>
        <ErunScoreNumber>{erunscore}</ErunScoreNumber>
        <ErunScoreText>이런 Score</ErunScoreText>
      </ErunScore>
    </PlaceBoxContainer>
  );
};

export default PlaceBox;
