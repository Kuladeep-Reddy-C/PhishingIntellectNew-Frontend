// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import HomePage from './pages/HomePage';
import DetectPage from './pages/DetectPage';
import ReportPage from './pages/ReportPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/detect"
          element={
            <MainLayout>
              <DetectPage />
            </MainLayout>
          }
        />
        <Route
          path="/report"
          element={
            <MainLayout>
              <ReportPage />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
