import mockdata from "./MockData.json";

const getPlacePOI = (id: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockdata.place);
    }, 1000);
  });
};

export default getPlacePOI;
