import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Notes from './components/Notes/Notes';

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
