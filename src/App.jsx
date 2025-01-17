import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoadingBar from "./Components/LoadingBar";
import NavBar from "./Components/NavBar";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";

const App = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Map of paths
    const progressMap = {
      '/': 20,
      '/page2': 40,
      '/page3': 60,
      '/page4': 80,
      '/page5': 100,
    };

    setProgress(progressMap[location.pathname] || 0);
  }, [location]);

  return (
    <div className='bg-slate-400 bg-cover h-screen bg-site'>
      <NavBar />
      <LoadingBar progress={progress} />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="Page2" element={<Page2 />} />
        <Route path="Page3" element={<Page3 />} />
        <Route path="Page4" element={<Page4 />} />
        <Route path="Page5" element={<Page5 />} />
      </Routes>
    </div>
  );
};

export default App;
