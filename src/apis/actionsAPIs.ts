import mockdata from "./MockData.json";

interface Comments {
  id: number;
  writer: string;
  date: string;
  place_id: number;
  content: string;
  reply: number | null;
  image: string[] | null;
  rate: number | null;
  good: number;
  bad: number;
  num_reply: number | null;
}

const getComments = (id: number | null): Promise<Comments[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockdata.comment);
    }, 100);
  });
};

const getReply = (id: number | null): Promise<Comments[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockdata.comment);
    }, 100);
  });
};

export { getComments, getReply };
