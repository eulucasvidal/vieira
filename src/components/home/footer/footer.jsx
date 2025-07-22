import React from "react";
import styles from './footer.module.css';

const Footer = () =>{
  const FooterMenu = [
    {
      name:'all',
      link: '#'
    },
    {
      name:'wines',
      link: '#'
    },
    {
      name:'whisky',
      link: '#'
    },
    {
      name:'vodka',
      link: '#'
    },
    {
      name:'acessories',
      link: '#'
    },
  ]
  return<nav>
      <ul className={styles.footerMenu}>
        {FooterMenu.map((links, index)=>(
          <li key={index}><a href={links.link}>{links.name}</a></li>
        ))}
      </ul>
  </nav>
}

export default Footer;