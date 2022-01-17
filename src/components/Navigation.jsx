import React from "react";
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";

function Navigation() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
          i18n.changeLanguage(lng);
    };
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/Home">
            LOGO
          </NavLink>
          <div className="menu-item">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                {t('welcome')}
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                {t('about')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="lang-btn">
            <button onClick={() => changeLanguage("zh-tw")}>繁體</button>
            <button onClick={() => changeLanguage("en-us")}>English</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;