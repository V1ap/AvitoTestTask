import Select from "../../../components/Select/Select";
import { categories } from "../../../consts/categories";
import styles from "./styles.module.scss";
import { platforms } from "../../../consts/platforms";
import { sorts } from "../../../consts/sorts";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  setCategoryFilter,
  setPlatformFilter,
  setSortFilter,
} from "../../../store/slices/filterSlice";
import { useNavigate } from "react-router-dom";

const Filter: React.FC = () => {
  const { sort, category, platform } = useAppSelector((state) => state.filter);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  return (
    <ul className={styles.filter}>
      <li className={styles.filter__item}>
        <h2 className={styles.filter__name}>Фильтры</h2>
        <ul className={styles.filter__additionalList}>
          <li className={styles.filter__additionalItem}>
            <h3 className={styles.filter__additionalName}>Категории</h3>
            <Select
              items={categories}
              currentItem={category}
              setCurrentItem={(item) => {
                dispatch(setCategoryFilter(item));
                navigate("/games/1");
              }}
            />
          </li>
          <li className={styles.filter__additionalItem}>
            <h3 className={styles.filter__additionalName}>Платформа</h3>
            <Select
              items={platforms}
              currentItem={platform}
              setCurrentItem={(item) => {
                dispatch(setPlatformFilter(item));
                navigate("/games/1");
              }}
            />
          </li>
        </ul>
      </li>
      <li className={styles.filter__item}>
        <h2 className={styles.filter__name}>Сортировать</h2>
        <Select
          items={sorts}
          currentItem={sort}
          setCurrentItem={(item) => {
            dispatch(setSortFilter(item));
          }}
        />
      </li>
    </ul>
  );
};

export default Filter;
