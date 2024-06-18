import { makeAutoObservable } from "mobx";

class SearchViewModel {
  constructor() {
    makeAutoObservable(this);
  }

  data = null;

  setData = (data: any) => {
    this.data = data;
  };
}

const SearchVM = new SearchViewModel();
export default SearchVM;
