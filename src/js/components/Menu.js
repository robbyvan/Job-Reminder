import { Component } from 'react'

import HomeIcon from 'react-icons/lib/fa/home'
import ListIcon from 'react-icons/lib/fa/list-alt'
import PencilIcon from 'react-icons/lib/fa/pencil'

const Menu = () => {
  return (

    <div className="menu">

      <div className="menu-home">
        <HomeIcon />
      </div>

      <div className="menu-list">
        <ListIcon />
      </div>

      <div className="menu-add">
        <PencilIcon />
      </div>

    </div>

  );
} 

export default Menu