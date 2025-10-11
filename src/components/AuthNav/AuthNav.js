import { Navlink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <Navlink to="/register" className="">
        Register
      </Navlink>
      <Navlink to="/login" className="">
        Login
      </Navlink>
    </div>
  );
};

export default AuthNav;
