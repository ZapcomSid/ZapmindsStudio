import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { ProjectDetail } from './components/ProjectDetail';
import { Preloader } from './components/Preloader';
import './styles/globals.css';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage theme={theme} onToggleTheme={toggleTheme} />} />
          <Route path="/project/:id" element={<ProjectDetail theme={theme} onToggleTheme={toggleTheme} />} />
        </Routes>
      </Router>
    </>
  );
}