import NextIcon from "../../../assets/NextIcon";
import useWindowSize from "../../../hooks/useWindowSize";
import generateRandomString from "../../../utils/generateRandomString";
import styles from "./styles.module.scss";
import { useEffect, useState, useRef } from "react";

interface ISliderScreenshots {
  items: { image: string; id: number }[];
}

const SliderScreenshots: React.FC<ISliderScreenshots> = ({ items }) => {
  const [screenshotPage, setScreenshotPage] = useState<number>(0);
  const [wrapperWidth, setWrapperWidth] = useState<number>(1000);
  const { width } = useWindowSize();
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const widthBounding = wrapperRef.current?.getBoundingClientRect()
      ? wrapperRef.current?.getBoundingClientRect().width
      : 0;
    setWrapperWidth(widthBounding);

    if (width < 521) {
      setScreenshotPage(0);
    }
  }, [width]);

  const nextPageHandler = () => {
    setScreenshotPage((prev) => (prev === items.length - 1 ? prev : prev + 1));
  };

  const prevPageHandler = () => {
    setScreenshotPage((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <div className={styles.slider}>
      <h2 className={styles.slider__header}>Скриншоты</h2>
      <div className={styles.slider__container}>
        <button
          className={styles.slider__prevBtn}
          onClick={prevPageHandler}
          disabled={screenshotPage === 0}
        >
          <NextIcon color="#999999" />
        </button>
        <div ref={wrapperRef} className={styles.slider__wrapper}>
          <ul
            className={styles.slider__list}
            style={{
              transform: `translateX(-${wrapperWidth * screenshotPage}px)`,
            }}
          >
            {items &&
              items.map((item) => (
                <li
                  className={styles.slider__item}
                  key={generateRandomString()}
                >
                  <img
                    src={item.image}
                    alt={`скриншот игры`}
                    className={styles.slider__img}
                  />
                </li>
              ))}
          </ul>
        </div>
        <button
          className={styles.slider__nextBtn}
          onClick={nextPageHandler}
          disabled={screenshotPage === items.length - 1}
        >
          <NextIcon color="#999999" />
        </button>
      </div>
    </div>
  );
};

export default SliderScreenshots;
