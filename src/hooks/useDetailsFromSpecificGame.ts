import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import {
  setDataGameDetails,
  setErrorGameDetails,
  startFetchingGameDetails,
} from "../store/slices/gameDetailsSlice";
import TGameDetails from "../types/GameDetails";

const useDetailsFromSpecificGame = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const controller = new AbortController();
  let errorCounter = 0;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://free-to-play-games-database.p.rapidapi.com/api/game", {
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE__X_RapidAPI_Key,
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            "Cache-Control": "no-cache",
          },
          params: {
            id: id,
          },
          signal: controller.signal,
        })
        .then((res: { data: TGameDetails }) => {
          errorCounter = 0;
          dispatch(setDataGameDetails(res.data));
          localStorage.setItem(
            `${id}`,
            JSON.stringify({ data: res.data, time: new Date() })
          );
        })
        .catch((err) => {
          dispatch(
            setErrorGameDetails({
              message: err.message,
              status: err.response.status,
            })
          );
          errorCounter++; // счетчик повторных запросов
          if (errorCounter <= 3) {
            dispatch(startFetchingGameDetails());
            fetchData();
          }
        });
    };

    dispatch(startFetchingGameDetails());
    if (localStorage.getItem(`${id}`)) {
      let localStorageData = JSON.parse(localStorage.getItem(`${id}`) || "");
      if (
        Number(new Date()) - Number(new Date(localStorageData.time)) <
        1000 * 60 * 5
      ) {
        dispatch(setDataGameDetails(localStorageData.data));
      } else {
        localStorage.removeItem(`${id}`);
        fetchData();
      }
    } else {
      fetchData();
    }

    return () => {
      controller.abort();
    };
  }, [id, dispatch]);
};

export default useDetailsFromSpecificGame;
