import React from "react";
import styles from './paginaProduto.module.css'

import { useParams } from "react-router-dom";

import WineUm from '../../../../assets/img/products/wine-01.png';
import WineDois from '../../../../assets/img/products/wine-02.png';
import WineTres from '../../../../assets/img/products/wine-03.png';
import WineQuatro from '../../../../assets/img/products/wine-04.png';
import WineCinco from '../../../../assets/img/products/wine-05.png';
import WineSeis from '../../../../assets/img/products/wine-06.png';
import Plantacao from'../../../../assets/img/plantacao/plantacao.png';
const PaginaProduto = () =>{
const {slug} = useParams();

  const Wines = [
    {
      img:WineUm,
      nameWine:'riserva di sclafani',
      slug:'riserva-di-sclafani',
      description:' Riserva del Conte is a collectors wine produced onlyin the best vintages.',
      image:Plantacao,
      price:'R$ 699.99'
    },
    {
      img:WineDois,
      nameWine:'tefra',
      slug:'tefra',
      description:' Riserva del Conte is a collectors wine produced onlyin the best vintages.',
      image:Plantacao,
      price:'R$ 499.99'
    },
    {
      img:WineTres,
      nameWine:'ghiaia nera',
      slug:'ghiaia-nera',
      description:' Riserva del Conte is a collectors wine produced onlyin the best vintages.',
      image:Plantacao,
      price:'R$ 899.99'
    },
    {
      img:WineQuatro,
      nameWine:'la monaca',
      slug:'la-monaca',
      description:' Riserva del Conte is a collectors wine produced onlyin the best vintages.',
      image:Plantacao,
      price:'R$ 299.99'
    },
    {
      img:WineCinco,
      nameWine:'vigna san francesco chardonnay',
      slug:'vigna-san-francesco-chardonnay',
      description:' Riserva del Conte is a collectors wine produced onlyin the best vintages.',
      image:Plantacao,
      price:'R$ 399.99'
    },
    {
      img:WineSeis,
      nameWine:'vigna san francesco cabernet sauvignon',
      slug:'vigna-san-francesco-cabernet-sauvignon',
      description:' Riserva del Conte is a collectors wine produced onlyin the best vintages.',
      image:Plantacao,
      price:'R$ 659.99'
    }
  ]
  const wine = Wines.find(wine=> wine.slug === slug);
  return(
    <div className={styles.item}>
      <img src={wine.img} alt="" className={styles.imgWine} />
      <div>
        <h1>{wine.nameWine}</h1>
        <p>{wine.description}</p>
        <img src={wine.image} alt="" />
        <p>{wine.description}</p>
        <div>
          <span>{wine.price}</span>
          <button>adicionar item</button>
        </div>
      </div>
    </div>
  )
}

export default PaginaProduto;