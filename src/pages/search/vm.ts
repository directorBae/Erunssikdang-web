import { makeAutoObservable } from "mobx";
import { routerStore } from "../../routes/routes";

class SearchViewModel {
  constructor() {
    makeAutoObservable(this);
  }

  query = "";
  data = null;

  setData = (data: any) => {
    this.data = data;
  };

  setQuery = (query: string) => {
    this.query = query;
  };

  submitSearch = () => {
    if (this.query === "") return;
    routerStore.push("/search?query=" + this.query);
    this.setQuery("");
  };

  moveTo = (id: number) => {
    routerStore.push("/detail?id=" + id);
  };
}

const SearchVM = new SearchViewModel();
export default SearchVM;
