import dateToString from "../../../../utils/dateToString";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

interface IGameCard {
  name: string;
  date: string;
  publisher: string;
  genre: string;
  img: string;
  id: number;
}

const GameCard: React.FC<IGameCard> = ({
  name,
  date,
  publisher,
  genre,
  img,
  id,
}) => {
  const newDate = new Date(date);

  return (
    <li>
      <Link to={`/game/${id}`} className={styles.gameCard}>
        <>
          <img src={img} alt="Постер игры" className={styles.gameCard__img} />
          <div className={styles.gameCard__data}>
            <h3 className={styles.gameCard__name}>{name}</h3>
            <p className={styles.gameCard__date}>{dateToString(newDate)}</p>
            <h4 className={styles.gameCard__publisher}>{publisher}</h4>
            <div className={styles.gameCard__genre}>{genre.trim()}</div>
          </div>
        </>
      </Link>
    </li>
  );
};

export default GameCard;
