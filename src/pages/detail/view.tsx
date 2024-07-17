import React, { useEffect } from "react";
import styled from "styled-components";
import CommentBox from "./components/CommentsBox";
import MenuBar from "../../components/menubar";
import PlaceCard from "./components/PlaceCard";
import ReplyBox from "./components/ReplyBox";
import ReviewCard from "./components/ReviewCard";
import { useSearchParams } from "react-router-dom";
import WhatIsErunScore from "./components/WhatIsErunScore";
import { observer } from "mobx-react";
import CommentInputSection from "./components/CommentInput";
import NoContents from "../../components/NoContents";

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

const ObservableCommentSection = observer(({ vm }: { vm: any }) => {
  useEffect(() => {
    vm.commentInitialize();
  }, [vm]);

  return (
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
            clickGood={vm.fetchGood}
            clickBad={vm.fetchBad}
          />
        ))}
    </CommentSection>
  );
});

const DetailView = observer(({ vm }: DetailViewProps) => {
  const [searchParams] = useSearchParams();
  const idString = searchParams.get("id");
  const id = idString ? parseInt(idString) : 0;
  useEffect(() => {
    vm.initialize(id);
  }, [vm, id]);

  return (
    <div>
      <MenuBar vm={vm} />
      {vm.loading ? (
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
            {vm.data ? (
              <>
                <PlaceCard
                  name={vm.data.name}
                  rate={vm.data.avg_rate}
                  x={vm.data.x}
                  y={vm.data.y}
                  address={vm.data.address}
                  runtime={vm.data.runtime}
                  image={vm.data.image}
                />

                <ReviewCard
                  rate={vm.data.avg_rate}
                  erunScore={vm.data.erunScore}
                  tags={vm.tags}
                  clickErunScore={() => vm.setWhatIsErunScore()}
                />

                <CommentInputSection
                  $isWriting={vm.isWriting}
                  givenRate={vm.givenRate}
                  changeState={vm.setWriting}
                  imageAddClick={vm.imageAddClick}
                  handleImageChange={vm.handleImageChange}
                  setGivenRate={vm.setGivenRate}
                  submitComment={() => vm.submitComment(id)}
                  commentValue={vm.writingComment}
                  setCommentValue={vm.setWritingComment}
                />
                <ObservableCommentSection vm={vm} />
              </>
            ) : (
              <NoContents page={"detail"} />
            )}
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
