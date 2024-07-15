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

const getPlacePOI = async (id: number | null): Promise<Place> => {
  try {
    const res = await axios.get(`http://localhost:5000/api/place/get?id=${id}`);
    const data = res.data.result;
    return data[0];
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getPlacePOI;
