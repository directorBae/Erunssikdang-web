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
            <WhatSearched>{`"${query}" 검색 결과`}</WhatSearched>
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
