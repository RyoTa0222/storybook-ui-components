import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { archiveTask, pinTask } from "../lib/redux";

export interface TaskProps {
  /**
   * Is this the principal call to action on the page?
   */
  id: string;
  /**
   * What background color to use
   */
  title: string;
  /**
   * How large should the button be?
   */
  state?: string;
  /**
   * update time
   */
  updatedAt?: Date;
}

export interface Props {
  /**
   * How large should the button be?
   */
  loading?: boolean;
  /**
   * How large should the button be?
   */
  tasks: TaskProps[];
  /**
   * Optional click handler
   */
  onArchiveTask: (id: string) => {};
  /**
   * Optional click handler
   */
  onPinTask: (id: string) => {};
}

export function PureTaskList({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}: Props) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const tasksInOrder = [
    ...tasks.filter((t) => t.state === "TASK_PINNED"),
    ...tasks.filter((t) => t.state !== "TASK_PINNED"),
  ];
  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

const TaskList = connect(
  ({ tasks }: any) => ({
    tasks: tasks.filter(
      (t: any) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
    ),
  }),
  (dispatch) => ({
    onArchiveTask: (id: string) => dispatch(archiveTask(id)),
    onPinTask: (id: string) => dispatch(pinTask(id)),
  })
)(PureTaskList);

export default TaskList;
