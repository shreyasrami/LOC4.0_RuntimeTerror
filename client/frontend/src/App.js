import {useState} from 'react'
import './App.css';

import Account from './pages/account/account.js';
import Dashboard from './components/dashboard/dashboard.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/landingpage/landingpage.js';
import IndividualCards from './components/individualcards/individualcards';
import HomePage from './pages/homepage/homepage.js'
import DonorPage from './pages/donorpage/donorpage.js'
import LaunchEvent from './components/forms/launchevents.js'



function App() {
  const [jump, setJump] = useState(1);
  return (
      // {/* <Router>
      //   <Routes>
      //     <Route exact path="/" element={<Account jump={jump} setJump={setJump}/>} />
      //     <Route exact path="/landingpage" element={<LandingPage />} />
      //   </Routes>
      // </Router> */}
      // <LandingPage/>
      // <ButtonCard/>
      // <IndividualCards/>
      // <HomePage/>
      // home page import not workingggggggggggggggggggg stuppid app js not loading when called
      // <DonorPage/>
      <LaunchEvent/>
    

    

  );
}

export default App;

