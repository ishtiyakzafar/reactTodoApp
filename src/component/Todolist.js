import React from "react";

const Todolist = (props) => {
  const onclickHandlerTwo = () => {
    props.delete(props.id);
  };
  const onclickHandler = () => {
    props.editTodoitem(props.id);
  };

  return (
    <>
      <div className="todoList">
        <ul className="tasklist">
          <li>{props.items}</li>
        </ul>
        <div className="lidt_icon">
          <i className="fas fa-edit " onClick={onclickHandler}></i>
          <i
            className="fas fa-trash delete_icon"
            onClick={onclickHandlerTwo}
          ></i>
        </div>
      </div>
    </>
  );
};
export default Todolist;
