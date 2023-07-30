import React from 'react';
import { NavBar } from './NavBar';
import { Banner } from './Banner';
import { Novedades } from './Novedades';

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Novedades />
    </>
  )
}
