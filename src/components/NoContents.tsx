import React from "react";
import styled from "styled-components";
import img404 from "../assets/404.png";

interface NoContentsProps {
  page: string;
}

const NoSearchedContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 80vh;
`;

const NoContents = ({ page }: NoContentsProps) => {
  if (page === "search") {
    return (
      <NoSearchedContents>
        <h1>검색 결과가 없습니다.</h1>
        <h2>다른 검색어로 검색해보세요!</h2>
        {/* <h3>검색한 장소를 추가하시겠습니까?</h3> */}
      </NoSearchedContents>
    );
  }
  return <img width={"120%"} src={img404} alt="404" />;
};

export default NoContents;
