import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Uno from "./components/Uno.jsx";
import Dos from "./components/Dos.jsx";

const App = () => {
  return (
    <>
      <Router>
        <nav>
          <Link to="/uno">
            <button>Ir al uno</button>
          </Link>
          <Link to="/dos">
            <button>Ir al dos</button>
          </Link>
        </nav>
        <Routes>
          <Route path="/dos" element={<Dos />} />
          <Route path="/uno" element={<Uno />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
