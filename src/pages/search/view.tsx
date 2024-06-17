import React from "react";
import MenuBar from "../../components/menubar";
import PlaceBox from "../../components/PlaceBox";
import ScrollBox from "../../components/scrollbox";

const SearchView = () => {
  return (
    <div>
      <MenuBar />
      <ScrollBox>
        <PlaceBox
          name="식당1"
          rate={4.8}
          erunscore={60.8}
          image="http://via.placeholder.com/170x170"
          tags={["해충 문제", "불친절", "높은 가격"]}
        />
        <PlaceBox
          name="식당1"
          rate={4.8}
          erunscore={60.8}
          image="http://via.placeholder.com/170x170"
          tags={["해충 문제", "불친절", "높은 가격"]}
        />
        <PlaceBox
          name="식당1"
          rate={4.8}
          erunscore={60.8}
          image="http://via.placeholder.com/170x170"
          tags={["해충 문제", "불친절", "높은 가격"]}
        />
        <PlaceBox
          name="식당1"
          rate={4.8}
          erunscore={60.8}
          image="http://via.placeholder.com/170x170"
          tags={["해충 문제", "불친절", "높은 가격"]}
        />
        <PlaceBox
          name="식당1"
          rate={4.8}
          erunscore={60.8}
          image="http://via.placeholder.com/170x170"
          tags={["해충 문제", "불친절", "높은 가격"]}
        />
        <PlaceBox
          name="식당1"
          rate={4.8}
          erunscore={60.8}
          image="http://via.placeholder.com/170x170"
          tags={["해충 문제", "불친절", "높은 가격"]}
        />
      </ScrollBox>
    </div>
  );
};

export default SearchView;
