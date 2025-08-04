import React from "react";
import styles from './produtos.module.css';
import { Link } from "react-router-dom";
import WineUm from '../../../../assets/img/products/wine-01.png';
import WineDois from '../../../../assets/img/products/wine-02.png';
import WineTres from '../../../../assets/img/products/wine-03.png';
import WineQuatro from '../../../../assets/img/products/wine-04.png';
import WineCinco from '../../../../assets/img/products/wine-05.png';
import WineSeis from '../../../../assets/img/products/wine-06.png';

const Produtos = () =>{

  const Wines = [
    {
      img:WineUm,
      brand:'tenuta regaleali',
      nameWine:'rosso del conte',
      grape:'doc contea di sclafani',
      slug:'rosso-del-conte',
    },
    {
      img:WineDois,
      brand:'tenuta tascante',
      nameWine:'tefra',
      grape:'doc etna',
      slug:'tefra',

    },
    {
      img:WineTres,
      brand:'tenuta tascante',
      nameWine:'ghiaia nera',
      grape:'doc etna',
      slug:'ghiaia-nera',
    },
    {
      img:WineQuatro,
      brand:'tenuta sallier de la tour',
      nameWine:'la monaca',
      grape:'doc monreale',
      slug:'la-monaca',
      
    },
    {
      img:WineCinco,
      brand:'tenuta regaleali',
      nameWine:'vigna san francesco chardonnay',
      grape:'doc sicilia',
      slug:'vigna-san-francesco-chardonnay',
    },
    {
      img:WineSeis,
      brand:'tenuta regaleali',
      nameWine:'vigna san francesco cabernet sauvignon',
      grape:'doc sicilia',
      slug:'vigna-san-francesco-cabernet-sauvignon',
    }
  ]

  return <section>
    <ul>
      {Wines.map((wine, index)=>(
      <li key={index} className={styles.item}>
        <Link to={`/produto/${wine.slug}`}>
          <img src={wine.img} alt="Imagem da garrafa de vinho" />
          <div>
            <span className={styles.wineBrand}>{wine.brand}</span>
            <h1 className={styles.wineName}>{wine.nameWine}</h1>
            <span className={styles.wineGrape}>{wine.grape}</span>
          </div>
        </Link>
      </li>
      ))}
  </ul>
  </section>

}
export default Produtos;