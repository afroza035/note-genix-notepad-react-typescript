import React, { Fragment, useState } from 'react';

interface IProps {
  myTask: INote[],
  setMyTask?: any,
}

interface IObject {
  target: {
    value: string,
    name: string,
  },
}

interface INote {
  id: string,
  title: string,
  description: string,
}

interface IKeyCode {
  keyCode: number,
}

const Input = ({ myTask, setMyTask }: IProps) => {

  let randomString: string = Math.random() * 100000000000000000 + "";

  const [task, setTask] = useState<INote>({
    id: '',
    title: '',
    description: '',
  });

  const onChangeHandler = (event: IObject) => {
    // task.title && console.log(task.title, task.description);
    
    event.target.name === "title" && setTask({
      ...task,
      id: randomString,
      title: event.target.value,
    })
    event.target.name === "description" && setTask({
      ...task,
      id: randomString,
      description: event.target.value,
    })
  }
  
  const onClickHandler = async () => {
    // await console.log(task, randomString);
    await setMyTask([
      ...myTask,
      task,
    ]);

    setTask({
      ...task,
      title: '',
      description: '',
    })
  }

  const keyDownHandler = (event: IKeyCode) => {
    event.keyCode === 13 && onClickHandler()
  }

  const onClickRemoveHandler = () => {
    setTask({
      ...task,
      title: '',
      description: '',
    })
  }

  // console.log();

  const isFilled = task.title.length > 0 && task.description.length > 0;

  return (
    <Fragment>
      <form className="row m-0 p-0">
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="title" name="title" placeholder="My Title" onChange={onChangeHandler} onKeyDown={keyDownHandler} value={task.title} />
            <label htmlFor="title">Title</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="description" name="description" placeholder="My description..." onChange={onChangeHandler} onKeyDown={keyDownHandler} value={task.description} />
            <label htmlFor="description">Description</label>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <button type="button" className="btn btn-outline-danger btn-lg mb-3 text-uppercase px-5 me-2" onClick={onClickRemoveHandler}>Clear</button>
          {
            isFilled && <button type="button" className="btn btn-success btn-lg mb-3 text-uppercase px-5" onClick={onClickHandler}>Save</button>
          }
          {
            !isFilled && <button type="button" className="btn btn-success btn-lg mb-3 text-uppercase px-5 disabled">Save</button>
          }
        </div>
      </form>
    </Fragment>
  );
};

export default Input;