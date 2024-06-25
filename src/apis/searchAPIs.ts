import axios from "axios";

interface Place {
  name: string;
  rate: number;
  erunScore: number;
  image: string;
  tags: string[];
}

const SearchAPI = (query: string | null): Promise<Place[]> => {
  let url = `http://localhost:5000/api/place/search?keyword=${query}`;
  return axios
    .get(encodeURI(url))
    .then((res) => {
      const data = res.data.result;
      return data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export default SearchAPI;
