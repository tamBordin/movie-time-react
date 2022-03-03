import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import { navbarFirstNavigate } from "../../utils/constant/navbar-constant";

const Navbar = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div id="main-header" className={styles.main__header}>
      <Link aria-label="MOVIE TIME" className={styles.logo} to="/main">
        MOVIE TIME
      </Link>
      <ul className={styles.first__navigation}>
        {navbarFirstNavigate.map((nav) => (
          <li key={nav.key}>
            <Link to={nav.link}>{t(`${nav.value}`)}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.second__navigation}>
        <div className={styles.search__box}>SearchBox</div>
        <div>Notifications</div>
        <div>AccountMenu</div>
      </div>
    </div>
  );
};

export default Navbar;
