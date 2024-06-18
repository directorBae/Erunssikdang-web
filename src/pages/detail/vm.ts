import { makeAutoObservable } from "mobx";

class DetailVM {
  constructor() {
    makeAutoObservable(this);
  }
}

export default DetailVM;
