import React, { useEffect, useState } from "react";
import MenuBar from "../../components/menubar";
import PlaceBox from "../../components/PlaceBox";
import ScrollBox from "../../components/scrollbox";
import { useSearchParams } from "react-router-dom";
import SearchAPI from "../../apis/searchAPIs";
import { observer } from "mobx-react";
import styled from "styled-components";

interface SearchViewProps {
  vm: any;
}

const WhatSearched = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 60px;

  font-size: 20px;
  font-family: "Pretendard";
  font-style: normal;

  @media (max-width: 480px) {
    font-size: 12px;
    height: 40px;
  }
`;

const SubBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlaceAddButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #f5f5f5;
  border: 1px solid #999999;
  border-radius: 10px;
  font-size: 16px;
  font-family: "Pretendard";
  font-style: normal;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 12px;
    width: 100px;
    height: 40px;
  }
`;

const SearchView = observer(({ vm }: SearchViewProps) => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await SearchAPI(query);
      vm.setData(data);
      setLoading(false);
    };

    fetchData();
  }, [searchParams, vm, query]);

  return (
    <div>
      <MenuBar vm={vm} />
      <ScrollBox>
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
          <div>
            <SubBar>
              <WhatSearched>{`"${query}" 검색 결과`}</WhatSearched>
              <PlaceAddButton>장소 추가</PlaceAddButton>
            </SubBar>

            {vm.data &&
              vm.data.map((place: any) => (
                <ScrollBox>
                  <PlaceBox
                    id={place.id}
                    key={place.name}
                    name={place.name}
                    rate={place.rate}
                    erunscore={place.erunScore}
                    image={place.image}
                    tags={place.tags}
                    moveTo={vm.moveTo}
                  />
                </ScrollBox>
              ))}
          </div>
        )}
      </ScrollBox>
    </div>
  );
});

export default SearchView;
