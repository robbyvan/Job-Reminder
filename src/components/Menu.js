import { Component } from 'react'
import { Link } from 'react-router'

import HomeIcon from 'react-icons/lib/fa/home'
import ListIcon from 'react-icons/lib/fa/list-alt'
import PencilIcon from 'react-icons/lib/fa/pencil'

export const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">
        <HomeIcon />
      </Link>
      <Link to="/job-list">
        <ListIcon />
      </Link>
      <Link to="/add-job">
        <PencilIcon />
      </Link>
    </div>
  );
}
