import React, { useEffect, useState } from "react";
import MenuBar from "../../components/menubar";
import PlaceBox from "../../components/PlaceBox";
import ScrollBox from "../../components/scrollbox";
import { useSearchParams } from "react-router-dom";
import SearchAPI from "../../apis/searchAPIs";
import { observer } from "mobx-react";

interface SearchViewProps {
  vm: any;
}

const SearchView = observer(({ vm }: SearchViewProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const query = searchParams.get("query");
      const data = await SearchAPI(query);
      vm.setData(data);
      setLoading(false);
    };

    fetchData();
  }, [searchParams, vm]);

  return (
    <div>
      <MenuBar />
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
          vm.data &&
          vm.data.map((place: any) => (
            <PlaceBox
              key={place.name}
              name={place.name}
              rate={place.rate}
              erunscore={place.erunScore}
              image={place.image}
              tags={place.tags}
            />
          ))
        )}
      </ScrollBox>
    </div>
  );
});

export default SearchView;
