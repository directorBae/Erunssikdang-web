import mockdata from "./MockData.json";
import axios from "axios";

interface Place {
  id: number;
  name: string;
  address: string;
  image: string;
  x: number;
  y: number;
  runtime: string;
  avg_rate: number;
  erunScore: number;
}

const getPlacePOI = (id: number | null): Promise<Place> => {
  return axios
    .get(`http://localhost:5000/api/place/get?id=${id}`)
    .then((res) => {
      const data = res.data.result;
      return data[0];
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export default getPlacePOI;
