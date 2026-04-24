import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="container py-20 text-center">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="mt-4 text-slate-400">Ця сторінка в розробці...</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/price" element={<PlaceholderPage title="Розцінки" />} />
          <Route path="/blog" element={<PlaceholderPage title="Блог" />} />
          <Route path="/contact" element={<PlaceholderPage title="Контакти" />} />
          <Route path="/privacy-policy" element={<PlaceholderPage title="Політика конфіденційності" />} />
          <Route path="/cookie-policy" element={<PlaceholderPage title="Політика cookies" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
