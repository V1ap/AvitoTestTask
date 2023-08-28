import styles from "./styles.module.scss";

interface IError {
  message: string;
  status?: number;
}

const Error: React.FC<IError> = ({ status, message }) => {
  return (
    <div className={styles.error}>
      {status && <span className={styles.error__status}>code: {status}</span>}
      <span className={styles.error__message}>{message}</span>
    </div>
  );
};

export default Error;
