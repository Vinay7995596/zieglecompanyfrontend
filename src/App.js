import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import HomePage from './component/Home';
import PassengerDetails from './component/passngerDetails';
import { BrowserRouter as Router, Routes,Route,  } from 'react-router-dom';

function App({}) {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={() => (
            <HomePage />
          )} />
          <Route path="/passengerddetails" Component={() => (
            <PassengerDetails />
          )} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
