import useOnClickOutside from "../../hooks/useOnClickOutside";
import generateRandomString from "../../utils/generateRandomString";
import styles from "./styles.module.scss";
import { useState, useRef } from "react";

interface ISelect {
  items: string[];
  currentItem: string;
  setCurrentItem: (item: string) => void;
}

const Select: React.FC<ISelect> = ({ items, setCurrentItem, currentItem }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [toTop, setToTop] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  const closeSelectHandler = () => {
    setIsOpen(false);
  };

  const toggleSelectHandler = () => {
    setIsOpen((prev) => !prev);
    let bottom = divRef.current?.getBoundingClientRect()
      ? divRef.current?.getBoundingClientRect().bottom
      : 0;
    let height;
    if (items.length > 6) {
      height = 300;
    } else {
      height = (items.length - 1) * 50;
    }

    setToTop(window.innerHeight - bottom < height);
  };

  const selectItemHandler = (item: string) => {
    setIsOpen(false);
    setCurrentItem(item);
  };

  useOnClickOutside(divRef, closeSelectHandler);

  return (
    <div ref={divRef} className={styles.select__container}>
      <button onClick={toggleSelectHandler} className={styles.select__btn}>
        {currentItem}
      </button>
      {isOpen && (
        <ul className={`${styles.select__list} ${toTop && styles.toTop}`}>
          {items.map((item) => {
            if (item !== currentItem) {
              return (
                <li
                  className={styles.select__item}
                  key={generateRandomString()}
                >
                  <button
                    onClick={() => selectItemHandler(item)}
                    className={styles.select__itemBtn}
                  >
                    {item}
                  </button>
                </li>
              );
            } else return null;
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
