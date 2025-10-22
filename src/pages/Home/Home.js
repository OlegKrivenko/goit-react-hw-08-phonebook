import css from './Home.module.css';

const Home = () => {
  return (
    <section className="section-page">
      <div className="container-page">
        <h1 className={css['home__h1']}>Wellcome to Your Contact !</h1>
        <h2 className={css['home__h2']}>
          Please Login or Register to continue
        </h2>
      </div>
    </section>
  );
};

export default Home;
