import { useNavigate } from "react-router-dom";
import Error from "../../components/Error/Error";
import Spinner from "../../components/Spinner/Spinner";
import useDetailsFromSpecificGame from "../../hooks/useDetailsFromSpecificGame";
import { useAppSelector } from "../../store/hooks";
import GameDetailsList from "./GameDetailsList/GameDetailsList";
import GameDetailsSystemRequirements from "./GameDetailsSystemRequirements/GameDetailsSystemRequirements";
import SliderScreenshots from "./SliderScreenshots/SliderScreenshots";
import styles from "./styles.module.scss";

const GameDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useAppSelector(
    (state) => state.gameDetails
  );
  useDetailsFromSpecificGame();

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <main className={styles.gameDetails}>
      <button onClick={backHandler} className={styles.gameDetails__backBtn}>
        Назад
      </button>

      {isLoading ? (
        <Spinner color="#999999" />
      ) : error?.message ? (
        <Error message={error?.message} status={error?.status} />
      ) : (
        <>
          <h1 className={styles.gameDetails__title}>{data?.title}</h1>
          <div className={styles.gameDetails__data}>
            <img
              src={data?.thumbnail}
              alt=""
              className={styles.gameDetails__img}
            />
            <div className={styles.gameDetails__moreDetails}>
              <GameDetailsList />
              <GameDetailsSystemRequirements />
              {data?.screenshots.length ? (
                <SliderScreenshots items={data.screenshots} />
              ) : null}
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default GameDetailsPage;
