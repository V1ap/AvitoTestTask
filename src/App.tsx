import { Routes, Route, Navigate, useBeforeUnload } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import GameDetailsPage from "./pages/GameDetailsPage/GameDetailsPage";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  setCategoryFilter,
  setPlatformFilter,
  setSortFilter,
} from "./store/slices/filterSlice";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const dispatch = useAppDispatch();
  const { platform, category, sort } = useAppSelector((state) => state.filter);

  useEffect(() => {
    if (localStorage.getItem("platform")) {
      dispatch(setPlatformFilter(localStorage.getItem("platform") || ""));
    }

    if (localStorage.getItem("category")) {
      dispatch(setCategoryFilter(localStorage.getItem("category") || ""));
    }

    if (localStorage.getItem("sort")) {
      dispatch(setSortFilter(localStorage.getItem("sort") || ""));
    }
  }, [dispatch]);

  useBeforeUnload(() => {
    localStorage.setItem("platform", platform);
    localStorage.setItem("category", category);
    localStorage.setItem("sort", sort);
  });

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/games/1" />} />
      <Route path="/games/:page" element={<MainPage />} />
      <Route path="/game/:id" element={<GameDetailsPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
