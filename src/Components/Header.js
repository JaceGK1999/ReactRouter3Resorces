import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/workshops">
            Workshops
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/bunnies">
            Bunnies
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/todos">
            Todos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
