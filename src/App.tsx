import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PersonalInfoComponent from './components/PersonalInfoComponent';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='personalinfo' element={<PersonalInfoComponent />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
