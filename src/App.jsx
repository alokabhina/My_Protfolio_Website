import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Project } from './components/sections/Project';
import { Contact } from './components/sections/Contact';
import './index.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {isLoaded && (
        <div className="min-h-screen bg-black text-gray-100 transition-opacity duration-700 opacity-100">
          <Navbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
          <MobileMenu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
          <Home />
          <About />
          <Project />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
