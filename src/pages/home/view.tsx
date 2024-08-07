import React from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/search16.svg";
import { observer } from "mobx-react";

const TitleBox = styled.h1`
  font-family: "Pretendard";
  font-size: 4rem;

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SearchDiv = styled.div`
  display: flex;
  width: 80%;
  height: 65px;

  max-width: 600px;

  border: 0.5px solid rgba(114, 114, 114, 0.8);
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  padding: 1px;

  @media (max-width: 480px) {
    height: 40px;
  }
`;

const SearchContainer = styled.input`
  font-family: "Pretendard";
  background-color: transparent;
  border: none;
  outline: none;

  width: 100%;
  border-radius: 30px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  color: rgba(0, 0, 0, 0.7);
  margin-left: 15px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const IconImage = styled.img`
  justify-self: flex-end;
  align-self: center;
  width: 32px;
  height: 32px;

  margin-right: 15px;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }

  cursor: pointer;
`;

const Description = styled.div`
  margin-top: 40px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;

  white-space: pre-wrap;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-top: 20px;
  }
`;

interface SearchBoxProps {
  value: string;
  setValue: (value: string) => void;
  submit: () => void;
}

const SearchBox = ({ value, setValue, submit }: SearchBoxProps) => {
  return (
    <SearchForm onSubmit={submit}>
      <SearchDiv>
        <SearchContainer
          type="text"
          placeholder=" 검색어를 입력해주세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <IconImage src={SearchIcon} alt="search" onClick={submit} />
      </SearchDiv>
    </SearchForm>
  );
};

const Title = () => {
  return (
    <TitleBox>
      <div style={{ height: "30vh" }}></div>
      <span style={{ color: "#0066FF" }}>{"이"}</span>
      <span style={{ color: "#FF1100" }}>{"런"}</span>
      <span style={{ color: "#FFDD00" }}>{"씩"}</span>
      <span style={{ color: "#00A319" }}>{"당"}</span>
    </TitleBox>
  );
};

interface HomeViewProps {
  vm: any;
}

const HomeView = observer(({ vm }: HomeViewProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Title />
      <SearchBox
        value={vm.query}
        setValue={vm.setQuery}
        submit={vm.submitSearch}
      />
      <Description>
        {
          "리뷰의 신뢰성을 떨어뜨리는\n광고성 리뷰와 서비스 별점 올려치기.\n만연한 사기 속에서 정확한 정보를 얻고 싶다면...\n\n국내최초 마이너스 레이팅 시스템,\n착한 리뷰는 자동으로 밴 당합니다."
        }
      </Description>
    </div>
  );
});

export default HomeView;
