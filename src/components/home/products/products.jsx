import React from "react";
import styles from './products.module.css';
import WineUm from '../../../assets/img/products/wine-01.png';
import WineDois from '../../../assets/img/products/wine-02.png';
import WineTres from '../../../assets/img/products/wine-03.png';
import WineQuatro from '../../../assets/img/products/wine-04.png';
import WineCinco from '../../../assets/img/products/wine-05.png';
import WineSeis from '../../../assets/img/products/wine-06.png';

const Products = () =>{

  const Wines = [
    {
      img:WineUm,
      brand:'tenuta regaleali',
      nameWine:'riserva di sclafani',
      grape:'doc contea di sclafani',
      link:'#item',
    },
    {
      img:WineDois,
      brand:'tenuta tascante',
      nameWine:'tefra',
      grape:'doc etna'
    },
    {
      img:WineTres,
      brand:'tenuta tascante',
      nameWine:'ghiaia nera',
      grape:'doc etna'
    },
    {
      img:WineQuatro,
      brand:'tenuta sallier de la tour',
      nameWine:'la monaca',
      grape:'doc monreale'
    },
    {
      img:WineCinco,
      brand:'tenuta regaleali',
      nameWine:'vigna san francesco chardonnay',
      grape:'doc sicilia'
    },
    {
      img:WineSeis,
      brand:'tenuta regaleali',
      nameWine:'vigna san francesco cabernet sauvignon',
      grape:'doc sicilia'
    }
  ]

  return <section>
    <ul>
      {Wines.map((wine, index)=>(
      <li key={index} className={styles.item}>
        <a href="#item">
          <img src={wine.img} alt="Imagem da garrafa de vinho" />
          <div>
            <span className={styles.wineBrand}>{wine.brand}</span>
            <h1 className={styles.wineName}>{wine.nameWine}</h1>
            <span className={styles.wineGrape}>{wine.grape}</span>
          </div>
        </a>
      </li>
      ))}
  </ul>
  </section>

}
export default Products;