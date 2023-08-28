import { useAppSelector } from "../../../store/hooks";
import GameDetailsItem from "../GameDetailsItem/GameDetailsItem";
import styles from "./styles.module.scss";

const GameDetailsSystemRequirements: React.FC = () => {
  const { data } = useAppSelector((state) => state.gameDetails);
  return (
    <>
      {data?.minimum_system_requirements && (
        <div className={styles.systemRequirements}>
          <h2 className={styles.systemRequirements__header}>
            Минимальные системные требования
          </h2>
          <ul className={styles.systemRequirements__list}>
            <GameDetailsItem
              header="Операционная система"
              text={
                data.minimum_system_requirements.os !== "?" &&
                data.minimum_system_requirements.os
                  ? data.minimum_system_requirements.os
                  : "-"
              }
            />
            <GameDetailsItem
              header="Процессор"
              text={
                data.minimum_system_requirements.processor !== "?" &&
                data.minimum_system_requirements.processor
                  ? data.minimum_system_requirements.processor
                  : "-"
              }
            />
            <GameDetailsItem
              header="ОЗУ"
              text={
                data.minimum_system_requirements.memory !== "?" &&
                data.minimum_system_requirements.memory
                  ? data.minimum_system_requirements.memory
                      .replace("RAM", "")
                      .trim()
                  : "-"
              }
            />
            <GameDetailsItem
              header="Видеокарта"
              text={
                data.minimum_system_requirements.graphics !== "?" &&
                data.minimum_system_requirements.graphics
                  ? data.minimum_system_requirements.graphics
                  : "-"
              }
            />
            <GameDetailsItem
              header="Места на диске"
              text={
                data.minimum_system_requirements.storage !== "?" &&
                data.minimum_system_requirements.storage
                  ? data.minimum_system_requirements.storage
                      .replace("available space", "")
                      .trim()
                  : "-"
              }
            />
          </ul>
        </div>
      )}
    </>
  );
};

export default GameDetailsSystemRequirements;
