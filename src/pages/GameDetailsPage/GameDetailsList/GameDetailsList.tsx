import { useAppSelector } from "../../../store/hooks";
import dateToString from "../../../utils/dateToString";
import GameDetailsItem from "../GameDetailsItem/GameDetailsItem";
import styles from "./styles.module.scss";

const GameDetailsList: React.FC = () => {
  const { data } = useAppSelector((state) => state.gameDetails);
  const release_date = data?.release_date ? new Date(data.release_date) : "";

  return (
    <ul className={styles.gameDetails__infoList}>
      <GameDetailsItem
        header="Дата релиза"
        text={
          typeof release_date === "object" &&
          release_date.toString() !== "Invalid Date" // приходили данные с ошибками например игра "Pocket Starships"
            ? dateToString(release_date)
            : "Не известна"
        }
      />
      <GameDetailsItem
        header="Жанр"
        text={data?.genre ? data.genre : "Не известен"}
      />
      <GameDetailsItem
        header="Разработчик"
        text={data?.developer ? data.developer : "-"}
      />
      <GameDetailsItem
        header="Издатель"
        text={data?.publisher ? data.publisher : "-"}
      />
    </ul>
  );
};

export default GameDetailsList;
