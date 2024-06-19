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
import CommentInputSection from "./components/CommentInput";

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
            <CommentInputSection
              $isWriting={vm.isWriting}
              changeState={vm.setWriting}
              imageAddClick={vm.imageAddClick}
              handleImageChange={vm.handleImageChange}
            />
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
