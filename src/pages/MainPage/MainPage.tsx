import useDataGames from "../../hooks/useDataGames";
import styles from "./styles.module.scss";
import Filter from "./Filter/Filter";
import GamesList from "./GamesList/GamesList";

const MainPage: React.FC = () => {
  useDataGames();
  return (
    <main className={styles.main}>
      <h1 className={styles.main__header}>Главная</h1>
      <Filter />
      <GamesList />
    </main>
  );
};

export default MainPage;
