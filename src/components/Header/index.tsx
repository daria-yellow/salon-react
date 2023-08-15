import type React from 'react';
import { useEffect, useMemo, useState } from 'react';
import Charlie from '../../images/Charlie.png';
import Burger from '../../images/Burger.svg';
import { navigationRoutes } from './NavigationRoutes';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  const renderButtons = useMemo(() => {
    return (
      <div className="header__buttons">
        {navigationRoutes.map((route) => {
          return (
            <Link
              to={route.path}
              key={route.path}
              className={`${
                location === route.path ? 'header__buttons-selected' : ''
              }`}
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              <div className="text__t2">{route.name}</div>
            </Link>
          );
        })}
      </div>
    );
  }, [location]);

  return (
    <div className="header">
      <Link
        to="./"
        onClick={() => {
          setMenuOpened(false);
        }}
      >
        <img src={Charlie} alt="logo" id="logo"></img>
      </Link>
      {renderButtons}
      <img
        src={Burger}
        alt="logo"
        id="burger"
        className="header__burger"
        onClick={() => {
          setMenuOpened(!menuOpened);
        }}
      ></img>
      {menuOpened && (
        <div className="header-opened">
          <div className="header">
            <Link
              to="./"
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              <img src={Charlie} alt="logo" id="logo"></img>
            </Link>
            <img
              src={Burger}
              alt="logo"
              id="burger"
              className="header__burger"
              onClick={() => {
                setMenuOpened(!menuOpened);
              }}
            ></img>
          </div>
          {renderButtons}
        </div>
      )}
    </div>
  );
};
