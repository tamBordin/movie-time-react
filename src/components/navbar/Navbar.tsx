import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import {
  navbarFirstNavigate,
  navbarSecondNavigate,
} from "../../utils/constant/navbar-constant";
import { FaBell, FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

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
        {navbarSecondNavigate.map((nav) => (
          <div key={nav.key}>
            {nav.key === "1" && (
              <button className={styles.search__tab}>
                <FaSearch />
              </button>
            )}
            {nav.key === "2" && (
              <span>
                <FaBell />
              </span>
            )}
            {nav.key === "3" && (
              <div>
                <BsPersonFill />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
