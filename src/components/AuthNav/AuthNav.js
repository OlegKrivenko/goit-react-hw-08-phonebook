import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className="">
        Register
      </NavLink>
      <NavLink to="/login" className="">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
