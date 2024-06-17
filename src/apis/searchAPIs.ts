import mockdata from "./MockData.json";

const SearchAPI = (query: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockdata.search);
    }, 1000);
  });
};

export default SearchAPI;
