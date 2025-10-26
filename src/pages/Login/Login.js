import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prev => {
      switch (name) {
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
    dispatch(logIn(formData));
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <section className="section-page">
      <div className={css.box}>
        <h1 className={css.title}>Login to your account</h1>

        <form className={css.form} onSubmit={handleSubmit}>
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
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
