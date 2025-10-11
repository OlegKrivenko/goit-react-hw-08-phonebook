import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" className="">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className="">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
