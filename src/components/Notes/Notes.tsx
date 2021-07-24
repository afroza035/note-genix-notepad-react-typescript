import React, { Fragment, useState } from 'react';
import Input from '../Input/Input';

interface ITask {
  id: string,
  title: string,
  description: string,
}

const Notes = () => {
  const [myTask, setMyTask] = useState<ITask[]>([]);
  // console.log(myTask);

  const removeANote = (id: string) => {
    const newTaskList = myTask.filter( (taskID) => taskID.id !== id );
    setMyTask(newTaskList)
  }

  return (
    <Fragment>
      <h1 className="text-center text-success my-5">Add a Note</h1>
      <Input myTask={myTask} setMyTask={setMyTask} />

      <h1 className="text-center text-primary my-5">Your Note(s)</h1>
      <div className="row m-0 p-0">
        {
          myTask.map( (task) => {
            // console.log(task)
            return (
              <Note id={task.id} title={task.title} description={task.description} key={task.id} removeANote={removeANote} />
            )
          } )
        }
      </div>
    </Fragment>
  );
};

export default Notes;