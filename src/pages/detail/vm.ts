import { makeAutoObservable } from "mobx";
import { routerStore } from "../../routes/routes";

class DetailViewModel {
  constructor() {
    makeAutoObservable(this);
  }

  query = "";
  data = null;
  tags = null;

  setData = (data: any) => {
    this.data = data;
  };

  setTags = (tags: any) => {
    console.log(tags);
    this.tags = tags;
  };

  setQuery = (query: string) => {
    this.query = query;
  };

  submitSearch = () => {
    if (this.query === "") return;
    routerStore.push("/search?query=" + this.query);
    this.setQuery("");
  };
}

const DetailVM = new DetailViewModel();

export default DetailVM;
