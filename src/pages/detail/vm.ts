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
  isWriting = false;

  whatIsErunScore = false;
  replyBarShow = false;
  replyData = false;

  imageFile: string | ArrayBuffer | null | undefined = undefined;

  setData = (data: any) => {
    this.data = data;
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

  imageAddClick = () => {
    const input = document.getElementById("imageInput");
    input?.click();
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
}

const DetailVM = new DetailViewModel();

export default DetailVM;
