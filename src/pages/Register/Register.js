import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

import css from './Register.module.css';

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
      switch (name) {
        case 'name':
          const nameRegex = /^[a-zA-Zа-яА-ЯёЁіїєІЇЄ' -]*$/;
          if (!nameRegex.test(value)) {
            return prev;
          }
          break;

        case 'email':
          const emailRegex = /^[a-zA-Z0-9@._+-]*$/;
          if (!emailRegex.test(value)) {
            return prev;
          }
          break;

        case 'password':
          const passwordRegex = /^[A-Za-z\d!@#$%^&*()\-_=+]*$/;
          if (!passwordRegex.test(value)) {
            return prev;
          }
          break;

        default:
          break;
      }

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
    <section className="section-page">
      <div className={css.box}>
        <h1 className={css.title}>Sign up for an account</h1>

        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css['input-container']}>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder=" "
              className={css.input}
              onChange={handleChange}
              value={formData.name}
            />
            <label htmlFor="name" className={css.label}>
              Name
            </label>
            <div className={css.underline}></div>
          </div>

          <div className={css['input-container']}>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder=" "
              className={css.input}
              onChange={handleChange}
              value={formData.email}
            />
            <label htmlFor="email" className={css.label}>
              Email
            </label>
            <div className={css.underline}></div>
          </div>

          <div className={css['input-container']}>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder=" "
              className={css.input}
              onChange={handleChange}
              value={formData.password}
            />
            <label htmlFor="password" className={css.label}>
              Password
            </label>
            <div className={css.underline}></div>
          </div>

          <button type="submit" className={css.button}>
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
