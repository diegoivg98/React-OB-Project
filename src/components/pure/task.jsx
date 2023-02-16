import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

/* Importing the stylesheet for the component. */
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

/* A function that receives a parameter called task and returns a div with the task information. */
const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    console.log("Tarea creada");
    return () => {
      console.log(`Tarea: ${task.name} va a desaparecer`);
    };
  }, [task]);

  /**
   * If the task level is normal, return a normal badge, if the task level is urgent, return an urgent
   * badge, if the task level is blocking, return a blocking badge, otherwise, do nothing.
   * @returns A function that returns a JSX element.
   */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );

      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );

        case LEVELS.BLOCKING:
          return (<h6 className="mb-0">
            <span className='badge bg-danger'>{ task.level }</span>
          </h6>)

      default:
        break;
    }
  }

  /**
   * If the task is completed, return a green checkmark, otherwise return a gray checkmark.
   * @returns the value of the if statement.
   */
  function taskIconCompleted() {
    if (task.completed) {
      return (<i onClick={ ()=> complete(task) } className="bi-toggle-on task-action" style={{ color: "green" }}></i>)
    }else{
      return (<i onClick={ ()=> complete(task) } className="bi-toggle-off task-action" style={{ color: "gray" }}></i>)
    }
  }

  const taskCompleted = {
    color: 'gray',
    fontWeight: 'bold',
    textDecoration: 'line-through'
  }

  const taskPending = {
    color: 'tomato',
    fontWeight: 'bold'
  }

  return (
    <tr className="fw-normal" style={ task.completed ? taskCompleted:taskPending}>
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span className="ms-2">{task.description}</span>
      </td>
      <td className="align-middle">
        { taskLevelBadge() }
      </td>
      <td className="align-middle">
      { taskIconCompleted() }
        <i className="bi-trash task-action" style={{ color: "tomato" }} onClick={()=> remove(task)}></i>
      </td>
    </tr>
  );
};

/* A validation of the props that the component receives. */
TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default TaskComponent;
