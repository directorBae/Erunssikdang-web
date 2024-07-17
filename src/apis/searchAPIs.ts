import axios from "axios";
import { isDev } from "../configs/mode";

const baseUrl = isDev ? "http://localhost:5000" : "";

interface Place {
  name: string;
  rate: number;
  erunScore: number;
  image: string;
  tags: string[];
}

const SearchAPI = async (query: string | null): Promise<Place[] | null> => {
  let url = `${baseUrl}/api/place/search?keyword=${query}`;
  try {
    const res = await axios.get(encodeURI(url));
    const data = res.data.result;
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default SearchAPI;
