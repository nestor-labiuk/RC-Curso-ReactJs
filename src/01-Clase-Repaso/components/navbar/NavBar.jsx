import React from 'react';
import { MenuBar } from './MenuBar';
import { Search } from './Search';
import  dataMenu  from '../../data/Menu.json';

export const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-dark" >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <MenuBar data={dataMenu}/>
            <Search />
          </div>
        </div>
      </nav>
  )
}
