import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommentBox from "./components/CommentsBox";
import MenuBar from "../../components/menubar";
import PlaceCard from "./components/PlaceCard";
import ReplyBox from "./components/ReplyBox";
import ReviewCard from "./components/ReviewCard";
import { useSearchParams } from "react-router-dom";
import getPlacePOI from "../../apis/placePOIAPIs";
import getTagPOI from "../../apis/MLdataAPIs";

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

  @media (max-width: 480px) {
    width: 280px;
    height: 30px;
    font-size: 10px;
    margin-right: 0px;
    margin-bottom: 5px;
  }
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

  @media (max-width: 480px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;

interface DetailViewProps {
  vm: any;
}

const DetailView = ({ vm }: DetailViewProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlaceData = async (id: number | null) => {
      const data = getPlacePOI(id);
      return data;
    };

    const fetchTagData = async (id: number | null) => {
      const tags = await getTagPOI(id);
      return tags;
    };

    const idString = searchParams.get("id");
    const id = idString ? parseInt(idString) : null;
    setLoading(true);

    Promise.all([fetchPlaceData(id), fetchTagData(id)])
      .then((results) => {
        vm.setData(results[0]);
        vm.setTags(results[1]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [searchParams, vm]);

  return (
    <div>
      <MenuBar vm={vm} />
      {loading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <div className="loader" />
        </div>
      ) : (
        <FullWidth>
          <ContentsSection>
            {vm.data && (
              <PlaceCard
                name={vm.data.name}
                rate={vm.data.avg_rate}
                x={vm.data.x}
                y={vm.data.y}
                address={vm.data.address}
                runtime={vm.data.runtime}
                image={vm.data.image}
              />
            )}
            {vm.data && vm.tags && (
              <ReviewCard
                rate={vm.data.avg_rate}
                erunScore={vm.data.erunScore}
                tags={vm.tags}
              />
            )}
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
      )}
    </div>
  );
};

export default DetailView;
