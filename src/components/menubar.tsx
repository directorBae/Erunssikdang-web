import React from "react";
import styled from "styled-components";
import SearchIcon from "../assets/search16.svg";
import useDevice from "../hooks/useDevice";
import { routerStore } from "../routes/routes";
import { observer } from "mobx-react";

const MenuBarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 75px;

  background-color: #f5f5f5;
  border-bottom: 1px solid #8c8c8c70;

  @media (max-width: 480px) {
    display: none;
  }
`;

const MenubarContent = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 400px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-family: "Pretendard";
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  margin-left: 10px;

  cursor: pointer;
`;

const SearchDiv = styled.div`
  display: flex;
  width: 250px;
  height: 30px;

  border: 0.5px solid rgba(114, 114, 114, 0.8);
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  padding: 1px;
`;

const SearchContainer = styled.input`
  font-family: "Pretendard";
  background-color: transparent;
  border: none;
  outline: none;

  width: 100%;
  border-radius: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  color: rgba(0, 0, 0, 0.7);
`;

const IconImage = styled.img`
  justify-self: flex-end;
  align-self: center;
  width: 16px;
  height: 16px;

  margin-right: 5px;

  cursor: pointer;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

interface SearchBoxProps {
  value: string;
  setValue: (value: string) => void;
  submit: () => void;
}

const SearchBox = ({ value, setValue, submit }: SearchBoxProps) => {
  return (
    <SearchDiv>
      <SearchContainer
        type="text"
        placeholder=" 검색어를 입력해주세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconImage src={SearchIcon} alt="search" onClick={submit} />
    </SearchDiv>
  );
};

const MobileContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

interface MenuBarProps {
  vm: any;
}

const MenuBar = observer(({ vm }: MenuBarProps) => {
  const device = useDevice();
  if (device === "mobile") {
    return (
      <MobileContainer>
        <SearchBox
          value={vm.query}
          setValue={vm.setQuery}
          submit={vm.submitSearch}
        />
        <div style={{ width: "3%" }} />
      </MobileContainer>
    );
  }
  return (
    <MenuBarBox>
      <MenubarContent>
        <Title onClick={() => routerStore.push("/")}>이런씩당</Title>
        <SearchBox
          value={vm.query}
          setValue={vm.setQuery}
          submit={vm.submitSearch}
        />
      </MenubarContent>
    </MenuBarBox>
  );
});

export default MenuBar;
