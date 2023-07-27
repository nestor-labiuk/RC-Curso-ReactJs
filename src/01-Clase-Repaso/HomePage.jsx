import React from 'react';
import logo from '../assets/logo.png';
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
