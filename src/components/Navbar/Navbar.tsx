import React, { Fragment } from 'react';

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">NoteGenix</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav justify-content-end w-100">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/">Clear All Notes</a>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;