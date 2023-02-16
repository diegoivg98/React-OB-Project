import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

/* Importing the stylesheet for the component. */
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example 1",
    "description 1",
    true,
    LEVELS.NORMAL
  );

  const defaultTask2 = new Task(
    "Example 2",
    "description 2",
    false,
    LEVELS.URGENT
  );

  const defaultTask3 = new Task(
    "Example 3",
    "description 3",
    false,
    LEVELS.BLOCKING
  );

  //Estado del componente
  const [tasks, settasks] = useState([defaultTask, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  //Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Modificacion de tareas");
    setTimeout(() => {
      setLoading(false);
    },2000);
    return () => {
      console.log("TaskListComponent va a desaparecer");
    };
  }, [tasks]);

  /**
   * When the user clicks on a task, the task's completed property is toggled to the opposite of what
   * it was before.
   */
  function completeTask(task) {
    console.log('complete this task: ', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    settasks(tempTasks);
  }

  function deleteTask(task) {
    console.log('delete this task: ', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    settasks(tempTasks);
  }

  function addTask(task) {
    //const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    settasks(tempTasks);

  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* A map function that is iterating over the tasks array and returning a TaskComponent
        for each task. */}
          {tasks.map((task, index) => {
            return (
              <TaskComponent key={index} task={task} complete={completeTask} remove={deleteTask}></TaskComponent>
            );
          })}
        </tbody>
      </table>
    )
  }

  let tasksTable = <Table></Table>

  if (tasks.length > 0) {
    tasksTable = <Table></Table>
  } else {
    tasksTable = (
      <div>
        <h3>There are no tasks to show</h3>
        <h4>Please, create one</h4>
      </div>)
  }

  const loadingStyle = {
    color: 'grey',
    fontSize: '30px',
    fontWeight: 'bold'
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card header (title) */}
          <div className="card-header p-3">
            <h5>Your Tasks:</h5>
          </div>
          {/* Card body (content) */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}>
            {loading ? (<p style={loadingStyle}>Loading tasks...</p>):tasksTable}
          </div>
        </div>
      </div>
      <TaskForm add={addTask} length={tasks.length}></TaskForm>
    </div>
  );
};

export default TaskListComponent;
