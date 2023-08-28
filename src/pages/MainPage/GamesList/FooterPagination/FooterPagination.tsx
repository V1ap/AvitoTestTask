import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

interface IFooterPaginationProps {
  page: number;
  pages: number;
}

const FooterPagination: React.FC<IFooterPaginationProps> = ({
  page,
  pages,
}) => {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <button
        disabled={page - 1 < 1}
        onClick={() => navigate(`/games/${page - 1}`)}
        className={styles.footer__prevBtn}
      >
        назад
      </button>
      {page > 4 && page === pages ? (
        <>
          <button
            className={styles.footer__digitPage}
            onClick={() => navigate(`/games/${page - 4}`)}
          >
            {page - 4}
          </button>
          <button
            className={styles.footer__digitPage}
            onClick={() => navigate(`/games/${page - 3}`)}
          >
            {page - 3}
          </button>
          <button
            className={styles.footer__digitPage}
            onClick={() => navigate(`/games/${page - 2}`)}
          >
            {page - 2}
          </button>
          <button
            className={styles.footer__digitPage}
            onClick={() => navigate(`/games/${page - 1}`)}
          >
            {page - 1}
          </button>
        </>
      ) : page > 3 && (page === pages || page === pages - 1) ? (
        <>
          <button
            className={styles.footer__digitPage}
            onClick={() => navigate(`/games/${page - 3}`)}
          >
            {page - 3}
          </button>
          <button
            className={styles.footer__digitPage}
            onClick={() => navigate(`/games/${page - 2}`)}
          >
            {page - 2}
          </button>
          <button
            className={styles.footer__digitPage}
            onClick={() => navigate(`/games/${page - 1}`)}
          >
            {page - 1}
          </button>
        </>
      ) : page > 2 ? (
        <>
          <button
            className={styles.footer__digitPage}
            onClick={() => navigate(`/games/${page - 2}`)}
          >
            {page - 2}
          </button>
          <button
            className={styles.footer__digitPage}
            onClick={() => navigate(`/games/${page - 1}`)}
          >
            {page - 1}
          </button>
        </>
      ) : page > 1 ? (
        <button
          className={styles.footer__digitPage}
          onClick={() => navigate(`/games/${page - 1}`)}
        >
          {page - 1}
        </button>
      ) : null}
      <button className={styles.footer__curDigitPage}>{page}</button>
      {page + 1 <= pages && (
        <button
          className={styles.footer__digitPage}
          onClick={() => navigate(`/games/${page + 1}`)}
        >
          {page + 1}
        </button>
      )}
      {page + 2 <= pages && (
        <button
          className={styles.footer__digitPage}
          onClick={() => navigate(`/games/${page + 2}`)}
        >
          {page + 2}
        </button>
      )}
      {page + 3 <= pages && (page === 1 || page === 2) && (
        <button
          className={styles.footer__digitPage}
          onClick={() => navigate(`/games/${page + 3}`)}
        >
          {page + 3}
        </button>
      )}
      {page + 4 <= pages && page === 1 && (
        <button
          className={styles.footer__digitPage}
          onClick={() => navigate(`/games/${page + 4}`)}
        >
          {page + 4}
        </button>
      )}
      <button
        disabled={page + 1 > pages}
        onClick={() => navigate(`/games/${page + 1}`)}
        className={styles.footer__nextBtn}
      >
        вперед
      </button>
    </footer>
  );
};

export default FooterPagination;
