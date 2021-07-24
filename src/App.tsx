import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="container main-section">
        <Notes />
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
