import mockdata from "./MockData.json";

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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockdata.place);
    }, 1000);
  });
};

export default getPlacePOI;
