import React from 'react';

const NavItem = ({icon, text, path,}) => {
  return (
    <li class="nav-item">
      <a href={path} class="nav-link active" aria-current="page">
          {icon}
          <span>{text}</span>
      </a>
    </li>
  )
}

export default NavItem;