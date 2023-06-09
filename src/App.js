import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Outlet } from 'react-router-dom';
const date_made = new Date();
const date_year = date_made.getFullYear();

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer
        name="Paloma Valdez-Marsh"
        copyright_year={`copyright ${date_year}`}
      />
    </div>
  );
}

export default App;

