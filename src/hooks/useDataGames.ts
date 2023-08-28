import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  setDataGames,
  setErrorGames,
  startFetchingGames,
} from "../store/slices/gamesSlice";
import TGame from "../types/Game";
import getSortName from "../utils/getSortName";

const useDataGames = () => {
  const { category, sort, platform } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const controller = new AbortController();
  let errorCouter = 0;

  useEffect(() => {
    const fetchData = () => {
      dispatch(startFetchingGames());
      axios
        .get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE__X_RapidAPI_Key,
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            "Cache-Control": "no-cache",
          },
          params: {
            "sort-by": getSortName(sort), // актуальность является сортировкой по умолчанию в API
            platform: platform === "Все" ? null : platform.toLocaleLowerCase(),
            category: category === "Все" ? null : category,
          },
          signal: controller.signal,
        })
        .then((res: { data: TGame[] }) => {
          dispatch(setDataGames(res.data));
          errorCouter = 0; // обнуляем счетчик при удачном запросе
        })
        .catch((err) => {
          dispatch(
            setErrorGames({
              message: err.message,
              status: err.response?.status,
            })
          );
          errorCouter++; // счетчик повторных запросов
          if (errorCouter <= 3) {
            fetchData();
          }
        });
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [category, sort, platform, dispatch]);
};

export default useDataGames;
