import { makeAutoObservable } from "mobx";
import { routerStore } from "../../routes/routes";

class HomeViewModel {
  constructor() {
    makeAutoObservable(this);
  }

  query = "";

  setQuery = (query: string) => {
    this.query = query;
  };

  submitSearch = () => {
    if (this.query === "") return;
    routerStore.push("/search?query=" + this.query);
    this.setQuery("");
  };
}

const HomeVM = new HomeViewModel();

export default HomeVM;
