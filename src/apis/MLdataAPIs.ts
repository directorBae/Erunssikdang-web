import mockdata from "./MockData.json";

interface Tag {
  id: number;
  tag1: string;
  tag2: string;
  tag3: string;
}

const getTagPOI = (id: number | null): Promise<Tag> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockdata.tags);
    }, 100);
  });
};

export default getTagPOI;
