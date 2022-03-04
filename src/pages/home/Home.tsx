import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { ComingSoonService } from "../../services/coming-soon-service";
import styles from "./Home.module.css";
import {
  IResponseComingSoon,
  IComingSoon,
} from "../../models/coming-soon.model";
import { MostPopularMoviesService } from "../../services/most-popular-movie-service";
import {
  IMostPopularMovies,
  IResponseMostPopularMovies,
} from "../../models/most-popular-movie.model";

const Home = (): JSX.Element => {
  const [dataComingSoon, setDataComingSoon] = useState<IComingSoon[]>();
  const [dataMostPopularMovie, setDataMostPopularMovie] =
    useState<IMostPopularMovies[]>();

  useEffect(() => {
    window.addEventListener("scroll", pinHeader);

    return () => {
      window.removeEventListener("scroll", pinHeader);
    };
  });

  useEffect(() => {
    async function getComingSoon() {
      await ComingSoonService.getAll().then(
        (res: AxiosResponse<IResponseComingSoon>) => {
          if (res.status === 200) {
            setDataComingSoon(res?.data?.items);
          }
        }
      );
    }

    async function getMostPopularMovies() {
      await MostPopularMoviesService.getAll().then(
        (res: AxiosResponse<IResponseMostPopularMovies>) => {
          if (res.status === 200) {
            setDataMostPopularMovie(res?.data?.items);
          }
        }
      );
    }

    getComingSoon();
    getMostPopularMovies();
  }, []);

  const pinHeader = () => {
    const mainHeader = document.getElementById("main-header") as Element;
    if (window.pageYOffset > 0) {
      mainHeader.classList.add("pin");
    } else {
      mainHeader.classList.remove("pin");
    }
  };

  return (
    <div className={styles.main__view}>
      <div className={`${styles.lolomo} ${styles.is__fullbleed}`}>
        <div
          className={`${styles.lolomo__row} ${styles.lolomo__row__title__card}`}
        >
          <h2 className={styles.row__header}>
            <span className={styles.row__title}>
              <div className={styles.row__header__title}>New Releases</div>
            </span>
          </h2>
          <div
            className={`${styles.row__container} ${styles.row__container__title__card}`}
          >
            <div>
              <div className={styles.row__content}>
                <div className={styles.slider}>
                  <div
                    className={`${styles.slider__mask} ${styles.show__peek}`}
                  >
                    <div
                      className={`${styles.slider__content} ${styles.row__with__x__columns}`}
                    >
                      {dataComingSoon?.map((item) => (
                        <div
                          className={`${styles.box__art__size__16x9} ${styles.box__art__rounded}`}
                          key={item.id}
                        >
                          <img
                            className={styles.box__art__image}
                            src={item.image}
                            alt={item.fullTitle}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.lolomo__row} ${styles.lolomo__row__title__card}`}
        >
          <h2 className={styles.row__header}>
            <span className={styles.row__title}>
              <div className={styles.row__header__title}>
                Most Popular Movies
              </div>
            </span>
          </h2>
          <div
            className={`${styles.row__container} ${styles.row__container__title__card}`}
          >
            <div>
              <div className={styles.row__content}>
                <div className={styles.slider}>
                  <div
                    className={`${styles.slider__mask} ${styles.show__peek}`}
                  >
                    <div
                      className={`${styles.slider__content} ${styles.row__with__x__columns}`}
                    >
                      {dataMostPopularMovie?.map((item) => (
                        <div
                          className={`${styles.box__art__size__16x9} ${styles.box__art__rounded}`}
                          key={item.id}
                        >
                          <img
                            className={styles.box__art__image}
                            src={item.image}
                            alt={item.fullTitle}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
