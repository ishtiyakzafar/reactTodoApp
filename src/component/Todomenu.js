import React from "react";

const Todomenu = (props) => {
  return (
    <>
      <div className="todoMenu">
        {props.isEditVal ? (
          <input
            type="text"
            maxLength="25"
            placeholder="Add task..."
            onChange={props.onChangeTwo}
            value={props.valueTwo}
          />
        ) : (
          <input
            onChange={props.onChange}
            type="text"
            maxLength="25"
            value={props.value}
            placeholder="Add items..."
            autoComplete="off"
          />
        )}
      </div>
      <div className="addBtn">
        {props.isEditVal ? (
          <button onClick={props.onClickTwo}>Add Task</button>
        ) : (
          <button onClick={props.onClick}>Add Task</button>
        )}
      </div>
    </>
  );
};
export default Todomenu;
