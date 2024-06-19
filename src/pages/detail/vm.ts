import { makeAutoObservable } from "mobx";
import { routerStore } from "../../routes/routes";

class DetailViewModel {
  constructor() {
    makeAutoObservable(this);
  }

  query = "";
  data = null;
  tags = null;
  comments = null;

  whatIsErunScore = false;
  replyBarShow = false;
  replyData = false;

  setData = (data: any) => {
    this.data = data;
  };

  setTags = (tags: any) => {
    this.tags = tags;
  };

  setComments = (comments: any) => {
    this.comments = comments;
  };

  setQuery = (query: string) => {
    this.query = query;
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
}

const DetailVM = new DetailViewModel();

export default DetailVM;
