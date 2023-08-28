import { Navigate, useParams } from "react-router-dom";
import Error from "../../../components/Error/Error";
import Spinner from "../../../components/Spinner/Spinner";
import { useAppSelector } from "../../../store/hooks";
import FooterPagination from "./FooterPagination/FooterPagination";
import GameCard from "./GameCard/GameCard";
import styles from "./styles.module.scss";
const GamesList: React.FC = () => {
  const { data, isLoading, error } = useAppSelector((state) => state.games);
  const { page } = useParams();

  return (
    <>
      {isLoading ? (
        <Spinner color="#999999" />
      ) : error?.message ? (
        <Error message={error?.message} status={error?.status} />
      ) : (
        <>
          <ul className={styles.gamesList}>
            {data[0] !== undefined ? (
              data[Number(page) - 1] !== undefined ? (
                data[Number(page) - 1].map((el) => (
                  <GameCard
                    name={el.title}
                    date={el.release_date}
                    publisher={el.publisher}
                    genre={el.genre}
                    img={el.thumbnail}
                    id={el.id}
                    key={el.id}
                  />
                ))
              ) : (
                <Navigate to={`../../games/${data.length}`} /> // Без данного условия может возникать ошибка конфликта параметров фильтра и прошлой страницы (когда прошлая страница была актуальна для других фильтров)
              )
            ) : (
              <li className={styles.gamesList__nothing}>Ничего не найдено</li>
            )}
          </ul>
          {data.length > 1 ? (
            <FooterPagination page={Number(page)} pages={data.length} />
          ) : null}
        </>
      )}
    </>
  );
};

export default GamesList;
