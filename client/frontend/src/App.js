import {useState} from 'react'
import './App.css';

import Account from './pages/account/account.js';
import Dashboard from './components/dashboard/dashboard.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [jump, setJump] = useState(1);
  return (
    <div > 
      <Router>
        <Routes>
          <Route exact path="/" element={<Account jump={jump} setJump={setJump}/>} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

