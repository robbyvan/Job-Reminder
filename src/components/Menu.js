import { Component } from 'react'
import { Link } from 'react-router'

import HomeIcon from 'react-icons/lib/fa/home'
import ListIcon from 'react-icons/lib/fa/list-alt'
import PencilIcon from 'react-icons/lib/fa/pencil'

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-home">
        <Link to="/" activeClassName="selected">
          <HomeIcon />
        </Link>
      </div>
      <div className="menu-list">
        <Link to="/joblist" activeClassName="selected">
          <ListIcon />
        </Link>
      </div>
      <div className="menu-add">
        <Link to="/addjob" activeClassName="selected">
          <PencilIcon />
        </Link>
      </div>
    </div>
  );
}
