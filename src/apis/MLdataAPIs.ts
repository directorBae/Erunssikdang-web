import axios from "axios";
import { isDev } from "../configs/mode";

const baseUrl = isDev ? "http://localhost:5000" : "";

interface Tag {
  id: number;
  tag1: string;
  tag2: string;
  tag3: string;
}

const getTagPOI = async (id: number | null): Promise<Tag> => {
  let url = `${baseUrl}/api/place/search?id=${id}`;
  try {
    const res = await axios.get(encodeURI(url));
    const data = res.data.result;
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getTagPOI;
