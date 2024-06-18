import { makeAutoObservable } from "mobx";

class RouterStore {
  constructor() {
    makeAutoObservable(this);
  }

  navigate: ((path: string) => void) | null = null;

  setNavigator(navigate: (path: string) => void) {
    this.navigate = navigate;
  }

  push = (path: string) => {
    if (this.navigate) {
      this.navigate(path);
    }
  };
}

export const routerStore = new RouterStore();
