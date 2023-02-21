import { NavLink } from 'react-router-dom';
import React from 'react';
import '../../dist/css/MainMenu.css';

const MainMenu = (props) => {
  const listItems = props.links.map((item) =>
      <li key={item.id}>
        <NavLink to={ item.path }>{ item.link }</NavLink>
      </li>
  );

  return (
      <nav>
        <ul>{ listItems }</ul>
      </nav>
  );
}

MainMenu.defaultProps = {
  links: [
    {
      id: 'm-def-1',
      link: "Link",
      path: "/"
    },
    {
      id: 'm-def-2',
      link: "Link",
      path: "/"
    },
  ]
}

export default MainMenu;