import React from 'react';
import styles from './item.module.css';
import WineUm from '../../../assets/img/products/wine-01.png';
import Plantacao from '../../../assets/img/plantacao/plantacao.png';

const Item = () => {
  const Wines = [
    {
      img: WineUm,
      brand: 'tenuta regaleali',
      nameWine: 'rosso del conte',
      grape: 'doc contea di sclafani',
      link: '#item',
    },
  ];

  return (
    <div className={styles.item}>
      <img src={WineUm} alt="" />
      <div className={styles.itemInfo}>
        <h1 className={styles.itemTitle}>rosso del conte</h1>
        <p>
          Riserva del Conte is a collector’s wine produced only in the best
          vintages. A tribute to the challenge that Count Giuseppe Tasca
          d’Almerita set himself in 1959: the creation of a Sicilian wine to
          compete with the top wines of the world. The 2016 edition, a vintage
          that was perfect from an analytical and organoleptic point of view,
          comes from of a blend of Perricone and Nero d’Avola from the historic
          San Lucio bush-trained vineyard. In homage to its origins, it is aged
          in 500-liter chestnut barrels
        </p>
        <h2>grande vigna san lucio</h2>
        <img src={Plantacao} alt="" />
        <p>
          Riserva del Conte is a collector’s wine produced only in the best
          vintages. A tribute to the challenge that Count Giuseppe Tasca
          d’Almerita set himself in 1959: the creation of a Sicilian wine to
          compete with the top
        </p>
        <div>
          <span>R$ 699,00</span>
          <button>Adicionar item</button>
        </div>
        <div>
          <ul>
            <li>bandeiras de cartao de credito</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Item;
