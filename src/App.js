import Home from './home/Home'
import Inuyasha from './inuyasha/Inuyasha';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './common/common.sass'
function App() {
  const location = useLocation();
  return (
    <div className="App">
      
      <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/inuyasha" element={<Inuyasha />} />
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
