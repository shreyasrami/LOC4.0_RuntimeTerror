import {useState} from 'react'
import './App.css';

import Account from './pages/account/account.js';
import Dashboard from './components/dashboard/dashboard.js';
import FundRaiserPage from './pages/fundraiserpage/fundraiserpage.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/landingpage/landingpage.js';

import IndividualCards from './components/individualcards/individualcards';
import HomePage from './pages/homepage/homepage.js'
import DonorPage from './pages/donorpage/donorpage.js'
import LaunchEvent from './components/forms/launchevents.js'
import { connect } from "react-redux";
import NavBarComponent from './components/navbar/navbar'
import AttendEvents from './components/forms/attendevent';
import LaunchEvents from './components/forms/launchevents.js';
import Donate from './components/forms/donate';
import Raise from './components/forms/raise'

function App({user}) {
  const [jump, setJump] = useState(1);
  const {isAuthenticated} = user;
  console.log(isAuthenticated)
  return (
       <Router>
        <Routes>
          <Route exact path="/Account" element={<Account jump={jump} setJump={setJump}/>} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/donorpage" element={isAuthenticated?<DonorPage />:<LandingPage/>} />
          <Route exact path="/fundraiserpage" element={isAuthenticated?<FundRaiserPage/>:<LandingPage/>} />
          <Route exact path="/homepage" element={isAuthenticated?<HomePage />:null} />
          <Route exact path ='/attendevents' element={isAuthenticated?<AttendEvents/>: <AttendEvents/>} />
          <Route exact path ='/launchevents' element={<LaunchEvents />} />
          <Route exact path ='/donate' element={isAuthenticated?<Donate/>: <Donate/>} />
          <Route exact path ='/raise' element={isAuthenticated?<Raise/>: <Raise/>} />
          <Route exact path ='/individualCard' element={isAuthenticated?<IndividualCards/>: <IndividualCards/>} />
        </Routes>
      </Router> 
      
      
      // <ButtonCard/>
      // <IndividualCards/>
      // <HomePage/>
      // home page import not workingggggggggggggggggggg stuppid app js not loading when called
      // <DonorPage/>
      // <LaunchEvent/>
      // <AttendEvents/>
      // <Donate/>
      // <Raise/>
  );
}
const mapStateToProps = (state) => ({
  user : state.user,
})

export default connect(mapStateToProps,null)(App);

