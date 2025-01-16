```javascript
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  useEffect(() => {
    console.log('Home component rendered with location:', location);
  }, [location]);
  return <div>Home</div>;
}

function About() {
  const location = useLocation();
  useEffect(() => {
    console.log('About component rendered with location:', location);
  }, [location]);
  return <div>About</div>;
}

export default App; 
```