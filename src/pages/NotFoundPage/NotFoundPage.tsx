import styles from "./styles.module.scss";
import Error from "../../components/Error/Error";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <Error message="По данной ссылке ничего не найдено" />
      <Link className={styles.notFound__link} to={"/"}>
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;
