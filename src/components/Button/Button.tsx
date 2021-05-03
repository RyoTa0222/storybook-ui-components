import React from "react";

interface Props {
  task: {
    id: string;
    title: string;
    state: string;
  };
  onArchiveTask: () => {};
  onPinTask: () => {};
}

const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: Props) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
};

export default Task;
