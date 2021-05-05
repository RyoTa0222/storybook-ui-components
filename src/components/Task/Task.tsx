import React from "react";

export interface Props {
  task: {
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
    state: string;
    /**
     * update time
     */
    updatedAt?: Date;
  };
  /**
   * Optional click handler
   */
  onArchiveTask: () => {};
  /**
   * Optional click handler
   */
  onPinTask: () => {};
}

const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: Props) => {
  return (
    <div className="list-item">
      <input
        type="text"
        value={title}
        readOnly={true}
        style={{ textOverflow: "ellipsis" }}
      />
    </div>
  );
};

export default Task;
