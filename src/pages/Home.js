import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Destaque from '../components/Destaque';
import Federados from '../components/Federados';
import Noticias from '../components/Noticias';
import Servicos from '../components/Servicos';
import ServicosFixo from '../components/ServicosFixos';

const Home = () => { 

  useEffect(() => {
    document.title = '::SETCAPP';
  }, []);

  return (
    <>
      <Banner />
      <Destaque />
      <Noticias />
      <ServicosFixo />
      <Servicos />
      <Federados />
    </>
  )
}


export default Home