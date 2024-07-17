import { makeAutoObservable } from "mobx";
import { routerStore } from "../../routes/routes";
import SearchAPI from "../../apis/searchAPIs";

class SearchViewModel {
  constructor() {
    makeAutoObservable(this);
  }

  query = "";
  data: any = null;
  loading = false;

  setData = (keyword: string) => {
    const fetchData = async () => {
      this.loading = true;
      await SearchAPI(keyword)
        .then((res) => {
          this.data = res;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    };

    fetchData();
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

  initialize = (keyword: string) => {
    this.setData(keyword);
  };
}

const SearchVM = new SearchViewModel();
export default SearchVM;
