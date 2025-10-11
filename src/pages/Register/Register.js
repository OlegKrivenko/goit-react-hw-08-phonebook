import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    dispatch(register(formData));
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h1 className="">Sign up for an account</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          value={formData.name}
          className=""
          placeholder="Name"
          onChange={handleChange}
        />
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
