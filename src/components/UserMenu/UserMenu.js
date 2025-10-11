import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/auth/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <div>
      <p>Wellcome, {name}</p>
      <button tupe="button" className="" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
