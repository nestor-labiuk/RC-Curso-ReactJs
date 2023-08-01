import React from 'react'
import { MenuItem } from './MenuItem'

export const MenuBar = ({ data }) => {

  
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      { data.map( (item) => (
        <li key={item.id} className="nav-item ">
            <MenuItem 
              id={item.id}
              linkName={item.name}
              colorText={item.color}
              disabled={item.active}
            />
        </li>
      ))}
      
    </ul>
  )
}
