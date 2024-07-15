import React from "react";
import styled from "styled-components";
import KakaoMap from "../../../components/kakaomap";
import Skull from "../../../assets/skull.svg";

const PlaceCardContainer = styled.div`
  width: 100%;
  height: 440px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 40px;

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const PlaceImage = styled.img`
  height: 100%;
  width: 45%;
  object-fit: cover;

  margin-right: 5%;

  border-radius: 10px;
`;

const PlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  padding: 5px;

  align-items: center;
`;

const PlaceName = styled.div`
  width: 100%;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 28px;

  color: #000000;

  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;

  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const RateBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

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
    width: 15px;
    height: 15px;
  }
`;

const RateNumber = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;

  font-size: 20px;
  color: #ec0000;

  margin-left: 10px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const DetailInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10px;
`;

const DetailHead = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(25, 25, 25, 0.6);

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #000000;

  padding: 10px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const DetailContent = styled.div`
  width: 100%;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: #000000;
  margin-bottom: 5px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const LocationContainer = styled.div`
  width: 70%;
  height: 100%;
  padding: 10px;

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

interface PlaceCardProps {
  name: string;
  rate: number;
  x: number;
  y: number;
  address: string;
  runtime: string;
  image: string;
}

const PlaceCard = ({
  name,
  rate,
  x,
  y,
  address,
  runtime,
  image,
}: PlaceCardProps) => {
  return (
    <PlaceCardContainer>
      {image && <PlaceImage src={image} />}
      <PlaceInfo>
        <PlaceName>{name}</PlaceName>
        <RateBox>
          <SkullBox>
            <SkullImage src={Skull} />
            <SkullImage src={Skull} />
            <SkullImage src={Skull} />
            <SkullImage src={Skull} />
            <SkullImage src={Skull} />
          </SkullBox>
          {rate && <RateNumber>{"-" + rate}</RateNumber>}
        </RateBox>
        <DetailInfo>
          <DetailHead>상세정보</DetailHead>
          <DetailContent>{"위치 : " + address}</DetailContent>
          <DetailContent>{"영업시간 : " + runtime}</DetailContent>
        </DetailInfo>
        <LocationContainer>
          <KakaoMap lat={y} lng={x} />
        </LocationContainer>
      </PlaceInfo>
    </PlaceCardContainer>
  );
};

export default PlaceCard;
