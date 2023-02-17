import Main from './pages/Main'

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './common/common.sass'
import CharacterPage from './pages/character-page/CharacterPage';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      
      <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
