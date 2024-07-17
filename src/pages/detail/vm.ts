import { makeAutoObservable } from "mobx";
import { routerStore } from "../../routes/routes";
import getPlacePOI from "../../apis/placePOIAPIs";
import {
  getComments,
  postCommentData,
  pushGood,
  pushBad,
} from "../../apis/actionsAPIs";
import { Comments } from "../../apis/actionsAPIs";

class DetailViewModel {
  constructor() {
    makeAutoObservable(this);
  }

  query = "";
  data: any = null;
  tags = null;
  comments = "";
  isWriting = false;
  givenRate = 0;

  whatIsErunScore = false;
  replyBarShow = false;
  replyData = false;

  writingComment = "";
  imageFile: string | ArrayBuffer | null | undefined = undefined;
  loading = false;

  setLoading = (state: boolean) => {
    this.loading = state;
  };

  setData = (id: number) => {
    const fetchPlaceData = async (id: number | null) => {
      const data = getPlacePOI(id);
      return data;
    };

    // const fetchTagData = async (id: number | null) => {
    //   const tags = await getTagPOI(id);
    //   return tags;
    // };

    const fetchCommentData = async (id: number | null) => {
      const comments = await getComments(id);
      return comments;
    };

    this.setLoading(true);

    Promise.all([fetchPlaceData(id), fetchCommentData(id)])
      .then((results) => {
        this.data = results[0];
        this.setComments(results[1]);
        this.setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        this.setLoading(false);
      });
  };

  setTags = (tags: any) => {
    this.tags = tags;
  };

  setComments = (comments: any) => {
    this.comments = comments;
  };

  setWriting = (state: boolean) => {
    this.isWriting = state;
  };

  setWritingComment = (comment: string) => {
    this.writingComment = comment;
  };

  setQuery = (query: string) => {
    this.query = query;
    console.log(this.query);
  };

  setWhatIsErunScore = () => {
    this.whatIsErunScore = !this.whatIsErunScore;
  };

  setReplyBar = (commentId: number) => {
    this.replyBarShow = true;
  };

  setReplyBarOff = () => {
    this.replyBarShow = false;
  };

  submitSearch = () => {
    if (this.query === "") return;
    routerStore.push("/search?query=" + this.query);
    this.setQuery("");
  };

  imageAddClick = () => {
    const input = document.getElementById("imageInput");
    input?.click();
  };

  setGivenRate = (rate: number) => {
    this.givenRate = rate;
  };

  handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageFile = e.target?.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  submitComment = (id: number) => {
    if (this.givenRate === 0) return;

    const comment: Comments = {
      id: 0,
      content: this.writingComment,
      good: 0,
      bad: 0,
      rate: this.givenRate,
      image: this.imageFile,
      reply: null,
      writer: "",
      date: "",
      place_id: id,
      num_reply: 0,
    };

    postCommentData(comment);
    this.setWriting(false);
    this.setWritingComment("");
    this.setGivenRate(0);
    this.initialize(id);
  };

  initialize = (id: number) => {
    this.setData(id);
  };

  fetchGood = async (id: number) => {
    const res = await pushGood(id);
    this.commentInitialize();
    return res;
  };

  fetchBad = async (id: number) => {
    const res = await pushBad(id);
    this.commentInitialize();
    return res;
  };

  setCommentData = async (id: number) => {
    const comments = await getComments(id);
    return comments;
  };

  commentInitialize = async () => {
    this.setComments(await this.setCommentData(this.data.id));
  };
}

const DetailVM = new DetailViewModel();

export default DetailVM;
