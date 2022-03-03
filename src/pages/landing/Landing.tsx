import React, { useEffect } from "react";
import styles from "./Landing.module.css";

const Landing = (): JSX.Element => {
  useEffect(() => {
    window.addEventListener("scroll", pinHeader);

    return () => {
      window.removeEventListener("scroll", pinHeader);
    };
  });

  const pinHeader = () => {
    const mainHeader = document.getElementById("main-header") as Element;
    if (window.pageYOffset > 0) {
      mainHeader.classList.add("pin");
    } else {
      mainHeader.classList.remove("pin");
    }
  };

  return <div className={styles.main__view}></div>;
};

export default Landing;
