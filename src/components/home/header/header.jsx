import React from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
// import useMedia from '../../../hooks/useMedia';

import ImageLogo from '../../../assets/img/logo/logo-01.svg';

const Header = () => {
  const Menu = [
    {
      name: 'home',
      link: '/',
    },
    {
      name: 'produtos',
      link: 'produtos',
    },
    {
      name: 'sobre',
      link: 'sobre',
    },
    {
      name: 'faq',
      link: 'faq',
    },
  ];
  return (
    <header className={styles.header}>
      <img src={ImageLogo} alt="imagem logotipo" />
      <nav>
        <ul className={styles.menu}>
          {Menu.map((link, index) => (
            <li key={index}>
              <NavLink to={link.link} className={({isActive}) => isActive ? styles.active: ''}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
