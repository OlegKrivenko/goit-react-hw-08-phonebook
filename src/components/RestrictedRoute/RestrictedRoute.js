import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoading = useSelector(selectIsLoggedIn);

  return isLoading ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
