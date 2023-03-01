import React, { FC } from 'react';
import { Link } from "gatsby";

import './style.sass';

const Header: FC = () => {
    return (
  
      <header className="header">
        <div className="wrapper">
          <div className="header-content">
            <nav className="header__navbar">
              <Link className="header__navbar-link page__subtitle" to="/">
                Ilia
                <span className="page_bold">Gromov</span>
              </Link>
              <div className="header__navbar-link">
                <a href="#skills"> Навыки</a>
              </div>
              <div className="header__navbar-link">
                <a href="#skills"> Проекты</a>
              </div>
              <div className="header__navbar-link">
                <a href="#skills"> Обо мне </a>
              </div>
            </nav>
          </div>
        </div>
       
      </header>

  );
}


export default Header;


