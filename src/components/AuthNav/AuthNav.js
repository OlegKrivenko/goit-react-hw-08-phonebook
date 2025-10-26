import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css['auth-nav']}>
      <NavLink to="/register" className={css['auth-nav__link']}>
        Sign Up
      </NavLink>
      <NavLink to="/login" className={css['auth-nav__link']}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
