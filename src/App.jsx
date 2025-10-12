import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/Home'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
