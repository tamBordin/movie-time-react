import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  footerLinks,
  footerSocialLinks,
} from "../../utils/constant/footer-constant";
import styles from "./Footer.module.css";

const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      <div className={styles.social__links}>
        {footerSocialLinks.map((link) => (
          <a key={link.key} href={link.value} rel="noreferrer" target="_blank">
            {link.key === "1" && <FaFacebookF />}
            {link.key === "2" && <FaInstagram />}
            {link.key === "3" && <FaTwitter />}
            {link.key === "4" && <FaYoutube />}
          </a>
        ))}
      </div>
      <ul className={styles.links}>
        {footerLinks.map((link) => (
          <li key={link.key}>
            <Link to={`#${link.key}`}>
              <span>{t(`${link.value}`)}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.service}>
        <button>{t("footer.serviceCode")}</button>
      </div>
      <div className={styles.copy__right}>
        <span>© 2022 Movie Time.</span>
      </div>
    </div>
  );
};

export default Footer;
