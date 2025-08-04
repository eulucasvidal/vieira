import React from "react";
import styles from './paginaProduto.module.css'

import { useParams } from "react-router-dom";

import Button from "../../../common/buttons/button.jsx";
//Imagens dos Vinhos
import WineUm from '../../../../assets/img/products/wine-01.png';
import WineDois from '../../../../assets/img/products/wine-02.png';
import WineTres from '../../../../assets/img/products/wine-03.png';
import WineQuatro from '../../../../assets/img/products/wine-04.png';
import WineCinco from '../../../../assets/img/products/wine-05.png';
import WineSeis from '../../../../assets/img/products/wine-06.png';
//Imagens das Plantações
import PlantUm from '../../../../assets/img/plantacao/plant-01.png'
import PlantDois from '../../../../assets/img/plantacao/plant-02.png'
import PlantTres from'../../../../assets/img/plantacao/plant-03.png';
import PlantQuatro from'../../../../assets/img/plantacao/plant-04.png';
import PlantCinco from'../../../../assets/img/plantacao/plant-05.png';
import PlantSeis from'../../../../assets/img/plantacao/plant-06.png';

const PaginaProduto = () =>{
const {slug} = useParams();

  const Wines = [
    {
      img:WineUm,
      nameWine:'rosso del conte',
      slug:'rosso-del-conte',
      description:'San Lucio é a primeira "grande vigna" criada na Tenuta Regaleali em 1959, de onde nasceram a primeira e as edições seguintes do Rosso del Conte. Aqui, coexistem duas variedades: Perricone e Nero d`Avola. Elas têm um ciclo vegetativo semelhante: são uvas de maturação relativamente tardia, amadurecendo em média entre o final de setembro e o início de outubro. O Rosso del Conte é uma expressão fiel de seu terroir, lembrando as altas colinas do coração da Sicília. No nível aromático, o Rosso del Conte nunca exagera nas notas de sobrematuração, garantindo ao mesmo tempo plena maturidade fenólica. Um vinho exuberante, vibrante e energético na juventude, com o envelhecimento desenvolve um toque aveludado, sem perder a estrutura e o sabor. Em sua longa história, ela experimentou diversas abordagens de produção, particularmente em sua técnica de envelhecimento: barricas de castanho, carvalho eslavo, pequenos barris de carvalho francês. Mas, sempre mantendo sua identidade peculiar.',
      plantName:'Grande Vigna San Lucio',
      image:PlantUm,
      plantDescription:'O vinhedo mais antigo da Tenuta Regaleali abrange cerca de 7 hectares, dos quais 5,5 hectares foram plantados em 1959 com uma mistura de videiras Perricone e Nero d`Avola. O restante, cerca de 1,5 hectares, foi plantado em 1965 apenas com Nero d`Avola. A altitude é de 480 m, com exposição sul-sudeste. É cultivado utilizando o sistema de videiras arbustivas, a forma de cultivo mais antiga e difundida nas regiões semiáridas do Mediterrâneo. Como no passado, a densidade de videiras é de 4.400 por hectare, obtida pelo arranjo das videiras a uma distância de 1,5 metro umas das outras.',
      price:'R$ 699.99'
    },
    {
      img:WineDois,
      nameWine:'tefra',
      slug:'tefra',
      description:'O Nerello Mascalese, do Etna, é conhecido por produzir vinhos rosés de qualidade, graças à sua cor clara e vibrante. De um pequeno pedaço de vinhedo em Contrada Rampante, Tefra – do grego para "cinzas" – o conjunto de materiais piroclásticos gerados pela erupção vulcânica. Um verdadeiro Nerello Mascalese no nariz: delicado e limpo, mas muito dinâmico na boca, graças ao seu frescor e acidez.',
      plantName:'vineyard',
      image:PlantDois,
      plantDescription:'Uma mistura de uvas de diversas áreas de Tenuta Tascante, localizada na encosta norte do Etna, entre as cidades de Randazzo e Castiglione di Sicilia.',
      price:'R$ 499.99'
    },
    {
      img:WineTres,
      nameWine:'ghiaia nera',
      slug:'ghiaia-nera',
      description:'Resultado da interação entre Nerello Mascalese e os solos vulcânicos do Etna, este vinho é concebido em terraços cercados por bosques de castanheiros e carvalhos, em uma área rica em biodiversidade. Taninos macios, bom frescor e boa bebibilidade. Envelhecido em grandes barricas de carvalho eslavo não invasivas, exatamente como Nerello Mascalese exige.',
      plantName:'vineyard',
      image:PlantTres,
      plantDescription:'Um blend de todas as uvas Nerello Mascalese provenientes das diversas Contradas da Tenuta Tascante, localizada na encosta norte do Etna entre as cidades de Randazzo e Castiglione di Sicilia',
      price:'R$ 899.99'
    },
    {
      img:WineQuatro,
      nameWine:'la monaca',
      slug:'la-monaca',
      description:'Há anos, experimentamos com Syrah, uma variedade internacional que prospera nas condições ideais em nossas terras. La Monaca é a nossa interpretação única desta variedade de uva. O vinho leva o nome de uma colina de mesmo nome, que desempenha um papel crucial em nossa viticultura devido às suas ricas fontes de água naturais. Os recursos hídricos, juntamente com a brisa que vem do Golfo de Castellammare, permitem um amadurecimento consistente e completo, que se reflete no forte sabor mediterrâneo do vinho La Monaca.',
      plantName:'grande vigna la monaca',
      image:PlantQuatro,
      plantDescription:'A Vigna La Monaca, com dois hectares plantados em 2011 a uma altitude de 320 metros acima do nível do mar, tem uma exposição nordeste que proporciona boa luminosidade, além de proteção contra as altas temperaturas do verão. Isso significa que, em anos mais quentes e secos, as videiras sofrem menos, permitindo uma maturação consistente. O baixo vigor, a baixa produtividade e as características do solo são conducentes a uma maturação equilibrada e completa das uvas, mais adequada para vinhos tintos encorpados destinados ao envelhecimento em garrafa. O sistema de condução é em espaldeira, com poda guyot e uma densidade de 4.600 videiras por hectare.',
      price:'R$ 299.99'
    },
    {
      img:WineCinco,
      nameWine:'vigna san francesco chardonnay',
      slug:'vigna-san-francesco-chardonnay',
      plantName:'grande vigna san francesco',
      image:PlantCinco,
      description:'Em 1985, Lucio Tasca d`Almerita decidiu se aproximar da variedade de uva branca mais celebrada do mundo: a Chardonnay. Experimentando com videiras selecionadas diretamente da Borgonha, ele plantou cinco hectares de Chardonnay na parte baixa da colina de San Francesco.',
      plantDescription:'Na parte baixa da colina de San Francesco, a uma altitude de cerca de 500 m.a.s.l.',
      price:'R$ 399.99'
    },
    {
      img:WineSeis,
      nameWine:'vigna san francesco cabernet sauvignon',
      slug:'vigna-san-francesco-cabernet-sauvignon',
      description:'Assim como a Chardonnay, a Cabernet Sauvignon era uma variedade não reconhecida pelas normas italianas da época. Foi plantada pela primeira vez na Sicília, na Tenuta Regaleali, em 1979. A Cabernet Sauvignon é envelhecida em barricas novas de 225 litros de grãos finos e médios por 18 meses. Um vinho potente e austero, com um frescor típico de diferentes latitudes.',
      plantName:'grande vigna san francesco',
      image:PlantSeis,
      plantDescription:'No topo da colina de San Francesco, com exposição sudoeste, a uma altitude de cerca de 570 m.a.s.l.',
      price:'R$ 659.99'
    }
  ]
  const wine = Wines.find(wine=> wine.slug === slug);
  return(
    <section className={styles.sectionItem}>
      <div className={styles.item}>
      <div>
        <img src={wine.img} alt="" className={styles.imgWine} />
      </div>
      <div className={styles.info}>
        <h1 className={styles.titulo}>{wine.nameWine}</h1>
        <p className={styles.paragrafo}>{wine.description}</p>
        <h2 className={styles.subtitulo}>{wine.plantName}</h2>
        <img src={wine.image} alt="" />
        <p className={styles.paragrafo}>{wine.plantDescription}</p>
        <div className={styles.buttonDiv}>
          <span className={styles.preco}>{wine.price}</span>
          <Button text="adicionar item"/>
        </div>
      </div>
    </div>
    </section>

  )
}

export default PaginaProduto;