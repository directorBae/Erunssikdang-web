import axios from "axios";

interface Comments {
  id: number;
  writer: string;
  date: string;
  place_id: number;
  content: string;
  reply: number | null;
  image: string | ArrayBuffer | null | undefined;
  rate: number | null;
  good: number;
  bad: number;
  num_reply: number | null;
}

const getComments = async (id: number | null): Promise<Comments[]> => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/comment/get?id=${id}`
    );
    const data = res.data;
    return data.result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getReply = (id: number | null): Promise<Comments[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {}, 100);
  });
};

const postCommentData = async (comment: Comments) => {
  try {
    const res = await axios.post(
      `http://localhost:5000/api/comment/post?id=${comment.place_id}`,
      {
        data: comment,
      }
    );
    const data = res.data;
    return data.result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { getComments, getReply, postCommentData };
export type { Comments };
