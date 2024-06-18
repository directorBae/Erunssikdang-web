import { makeAutoObservable } from "mobx";
import { routerStore } from "../../routes/routes";

class HomeViewModel {
  constructor() {
    makeAutoObservable(this);
  }

  keyword = "";

  setKeyword = (keyword: string) => {
    this.keyword = keyword;
  };

  submitSearch = () => {
    routerStore.push("/search?query=" + this.keyword);
    this.setKeyword("");
  };
}

const HomeVM = new HomeViewModel();

export default HomeVM;
