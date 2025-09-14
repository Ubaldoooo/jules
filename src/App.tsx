import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AdmissionsPage from './pages/AdmissionsPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main style={{ paddingTop: '80px', paddingBottom: '20px', minHeight: 'calc(100vh - 100px)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          {/* Add other routes here */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
