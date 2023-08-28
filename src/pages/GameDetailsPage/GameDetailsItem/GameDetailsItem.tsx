import styles from "./styles.module.scss";

interface IGameDetailsItem {
  header: string;
  text: string;
}

const GameDetailsItem: React.FC<IGameDetailsItem> = ({ header, text }) => {
  return (
    <li className={styles.gameDetails__infoItem}>
      <h3 className={styles.gameDetails__infoHeader}>{header}</h3>
      <p className={styles.gameDetails__infoText}>{text}</p>
    </li>
  );
};

export default GameDetailsItem;
