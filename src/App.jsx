import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoadingBar from "./Components/LoadingBar";
import NavBar from "./Components/NavBar";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import Last from './Components/Last';
import Pageno from './Components/Pageno';

const App = () => {
    const [number, setNumber] = useState(0);
    const [progress, setProgress] = useState(0);
    const location = useLocation();
    const isLastPage = location.pathname === '/Last';
    
    useEffect(() => {
      // Map of paths
      const progressMap = {
        '/': 20,
        '/page2': 40,
        '/page3': 60,
        '/page4': 80,
        '/page5': 100,
        '/Last': 100,
        '/pageno':100,
      };
      const numberMap = {
        '/': 1,
        '/page2': 2,
        '/page3': 3,
        '/page4': 4,
        '/page5': 5,
        '/Last': 5,
        '/pageno':5,
      };
      
      setProgress(progressMap[location.pathname] || 0);
      setNumber(numberMap[location.pathname] || 0);
  }, [location]);

  return (
    <div className='mybg'>
      <NavBar />
      {!isLastPage && <LoadingBar progress={progress} number={number} /> }
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="Page2" element={<Page2 />} />
        <Route path="Page3" element={<Page3 />} />
        <Route path="Page4" element={<Page4 />} />
        <Route path="Page5" element={<Page5 />} />
        <Route path="Last" element={<Last />} />
        <Route path="Pageno" element={<Pageno />} />
      </Routes>
    </div>
  );
};

export default App;
