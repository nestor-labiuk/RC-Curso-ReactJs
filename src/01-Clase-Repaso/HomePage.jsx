import React from 'react';
import { NavBar } from './components/navbar/NavBar';
import { Banner } from './components/banner/Banner';
import { Novedades } from './components/news/Novedades';

export const HomePage = () => {
  
  return (
    <>
      <NavBar />
      <Banner />
      <Novedades />
    </>
  )
}
