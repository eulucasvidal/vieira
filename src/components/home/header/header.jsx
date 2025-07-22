import React from 'react';
import styles from './header.module.css';
// import useMedia from '../../../hooks/useMedia';

import ImageLogo from '../../../assets/img/logo/logo-01.svg';

const Header = () => {
  const Menu = [
    {
      name:'home',
      link: '#'
    },
    {
      name:'produtos',
      link: '#'
    },
    {
      name:'sobre',
      link: '#'
    },
        {
      name:'faq',
      link: '#'
    },
  ]
  return (
    <header className={styles.header}>
      <img src={ImageLogo} alt="imagem logotipo" />
      <nav>
        <ul className={styles.menu}>
          {Menu.map((link, index)=>(
            <li key={index}><a href={link}>{link.name}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
