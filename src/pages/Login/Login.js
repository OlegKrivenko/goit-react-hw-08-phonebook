import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(formData));
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h1 className="">Login to your account</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="email"
          name="email"
          value={formData.email}
          className=""
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          className=""
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit" className="">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
