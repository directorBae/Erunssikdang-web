import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { routerStore } from "./routes/routes";

import HomeView from "./pages/home/view";
import SearchView from "./pages/search/view";
import DetailView from "./pages/detail/view";
import "./App.css";

import HomeVM from "./pages/home/vm";
import SearchVM from "./pages/search/vm";
import DetailVM from "./pages/detail/vm";

function NavigationProvider() {
  const navigate = useNavigate();

  useEffect(() => {
    routerStore.setNavigator(navigate);
  }, [navigate]);

  return null; // 또는 라우팅 관련 컴포넌트 렌더링
}

function App() {
  return (
    <Router>
      <NavigationProvider />
      <Routes>
        <Route path="/" element={<HomeView vm={HomeVM} />} />
        <Route path="/search" element={<SearchView vm={SearchVM} />} />
        <Route path="/detail" element={<DetailView vm={DetailVM} />} />
      </Routes>
    </Router>
  );
}

export default App;
