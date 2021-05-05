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
    state?: string;
    /**
     * update time
     */
    updatedAt?: Date;
  };
  /**
   * Optional click handler
   */
  onArchiveTask: (id: string) => {};
  /**
   * Optional click handler
   */
  onPinTask: (id: string) => {};
}

const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: Props) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          style={{ textOverflow: "ellipsis" }}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;
