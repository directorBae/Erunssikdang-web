import mockdata from "./MockData.json";

interface Place {
  name: string;
  rate: number;
  erunScore: number;
  image: string;
  tags: string[];
}

const SearchAPI = (query: string | null): Promise<Place[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockdata.search);
    }, 1000);
  });
};

export default SearchAPI;
