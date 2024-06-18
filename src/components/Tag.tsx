import React from "react";
import styled from "styled-components";

const TagContainerHorizontal = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  flex-direction: row;
`;

const Tag = styled.div`
  width: 70px;
  height: 28px;

  box-sizing: border-box;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 0.5px solid #000000;
  border-radius: 20px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 200;
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #000000;

  @media (max-width: 480px) {
    width: 36px;
    height: 20px;
    font-size: 8px;
  }
`;

const TagContainerVertical = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  flex-direction: column;
`;

interface TagProps {
  tag1: string | null;
  tag2: string | null;
  tag3: string | null;
}

const TagVertical = ({ tag1, tag2, tag3 }: TagProps) => {
  return (
    <TagContainerVertical>
      <Tag>{tag1}</Tag>
      <Tag>{tag2}</Tag>
      <Tag>{tag3}</Tag>
    </TagContainerVertical>
  );
};

const TagHorizontal = ({ tag1, tag2, tag3 }: TagProps) => {
  return (
    <TagContainerHorizontal>
      <Tag>{tag1}</Tag>
      <Tag>{tag2}</Tag>
      <Tag>{tag3}</Tag>
    </TagContainerHorizontal>
  );
};

export { TagVertical, TagHorizontal };
