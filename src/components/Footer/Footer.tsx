import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <div className="bg-light text-center">
        <p className="m-0 p-3"><small><i>Copyright &copy; {(new Date()).getFullYear()} NoteGenix. All Rights Reserved.</i></small></p>
      </div>
    </Fragment>
  );
};

export default Footer;