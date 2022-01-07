import './App.css';
import Home from './Home';
import CheckOut from './CheckOut';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />}>
            
          </Route>
          <Route exact path="/checkout" element={<CheckOut />}>

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
