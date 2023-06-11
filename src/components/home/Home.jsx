import React, { useEffect } from 'react';
import Heroe from './contenido/Heroe';
import Cards from './contenido/cards/Cards';
import ReadMore from './contenido/ReadMore';
import Services from './contenido/Services';
import TheStore from './contenido/TheStore';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='home__container'>
      <TheStore />
      <Cards />
      <Heroe />
      {/* <ReadMore /> */}
      <Services />
    </section>
  )
}

export default Home