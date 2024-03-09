import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { lazy } from 'react';
const Home = lazy(() => import('pages/Home'));
const Country = lazy(() => import('pages/Country'));
const SearchCountry = lazy(() => import('pages/SearchCountry'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/country" element={<SearchCountry />} />
        <Route path="/country/:countryId" element={<Country />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
