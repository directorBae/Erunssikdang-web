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
import { getComments } from "../../apis/actionsAPIs";
import WhatIsErunScore from "./components/WhatIsErunScore";
import { observer } from "mobx-react";

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

const CommentSection = styled.div`
  position: relative;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 20px;
`;

const ReplySectionContainer = styled.div`
  width: 25%;
  min-width: 300px;
  position: absolute;

  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 20px;

  @media (max-width: 1400px) {
    display: none;
  }
`;

const ReplyBoxHolder = styled.div<{ top: number }>`
  width: 100%;
  position: absolute;

  max-height: 60vh;
  overflow-y: auto;

  ${({ top }) => `top: ${top}px;`}
`;

interface ReplySectionProps {
  index: number;
}

const ReplySection = ({ index }: ReplySectionProps) => {
  return (
    <ReplyBoxHolder top={1130 + index * 380}>
      <ReplyBox />
    </ReplyBoxHolder>
  );
};

interface DetailViewProps {
  vm: any;
}

const DetailView = observer(({ vm }: DetailViewProps) => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  // TODO: 스크롤이 위치했을 때 API Fetch 후 댓글창이 나타나게 하기
  // TODO: 대댓글 버튼 누르면 해당 id에 해당하는 대댓글 API Fetch 후
  // 대댓글창이 나타나게 하기
  // TODO: 대댓글 작성 섹션
  // TODO: 태그 정렬

  useEffect(() => {
    const fetchPlaceData = async (id: number | null) => {
      const data = getPlacePOI(id);
      return data;
    };

    const fetchTagData = async (id: number | null) => {
      const tags = await getTagPOI(id);
      return tags;
    };

    const fetchCommentData = async (id: number | null) => {
      const comments = await getComments(id);
      return comments;
    };

    const idString = searchParams.get("id");
    const id = idString ? parseInt(idString) : null;
    setLoading(true);

    Promise.all([fetchPlaceData(id), fetchTagData(id), fetchCommentData(id)])
      .then((results) => {
        vm.setData(results[0]);
        vm.setTags(results[1]);
        vm.setComments(results[2]);
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
                clickErunScore={() => vm.setWhatIsErunScore()}
              />
            )}
            <CommentsInputContainer>
              <InputandButton>
                <CommentsInput placeholder=" 리뷰를 작성해주세요. 좋은 리뷰는 등록이 자동 제한될 수 있습니다." />
                <CommentsButton>리뷰쓰기</CommentsButton>
              </InputandButton>
            </CommentsInputContainer>
            <CommentSection>
              {vm.comments &&
                (vm.comments as any[]).map((comment) => (
                  <CommentBox
                    key={comment.id}
                    id={comment.id}
                    writer={comment.writer}
                    date={comment.date}
                    content={comment.content}
                    image={comment.image}
                    rate={comment.rate}
                    good={comment.good}
                    bad={comment.bad}
                    num_reply={comment.num_reply}
                  />
                ))}
            </CommentSection>
          </ContentsSection>
          <ReplySectionContainer>
            <WhatIsErunScore show={vm.whatIsErunScore} />
          </ReplySectionContainer>
        </FullWidth>
      )}
    </div>
  );
});

export default DetailView;
