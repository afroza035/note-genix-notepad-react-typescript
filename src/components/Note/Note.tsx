import React, { Fragment } from 'react';

interface IProps {
  id: string,
  title: string,
  description?: string,
  removeANote: (id: string) => void,
}

const Note = ({id, title, description= "N/A", removeANote}: IProps) => {
  return (
    <Fragment>
      <div className="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
        <div className="card my-3" style={{width: "100%"}}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button type="button" className="btn btn-outline-danger text-uppercase" onClick={() => removeANote(id)}>Remove</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Note;