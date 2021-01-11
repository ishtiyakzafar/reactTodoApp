import React, { useEffect, useState } from "react";
import Todolist from "./component/Todolist";
import Todomenu from "./component/Todomenu";

const App = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState(() => {
    const localData = localStorage.getItem("items");
    return localData ? JSON.parse(localData) : [];
  });
  const [editval, setEditval] = useState(false);
  const [edititem, setedititem] = useState();

  const onchangeHandler = (e) => {
    setItem(e.target.value);
  };

  const onclickHandler = () => {
    if (item !== "") {
      setNewItem((preVal) => {
        return [...preVal, item];
      });

      setItem("");
    }
  };

  const onclickHandlerTwo = () => {
    if (edititem !== "") {
      setNewItem((preVal) => {
        return [...preVal, edititem];
      });

      setedititem("");
    }
  };

  const editTodoFun = (id) => {
    setEditval(true);
    setedititem(() => {
      return newitem.filter((items, ind) => {
        return ind === id;
      });
    });
    setNewItem(() => {
      return newitem.filter((items, ind) => {
        return ind !== id;
      });
    });
  };

  const onchangeHandlerTwo = (e) => {
    const newedit = e.target.value;
    setedititem(newedit);
  };

  const deleteitem = (id) => {
    setNewItem((oldVal) => {
      return oldVal.filter((items, ind) => {
        return ind !== id;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(newitem));
  });

  return (
    <>
      <div className="todoApp">
        <div className="todoAppDiv">
          <div className="innerDiv">
            <h1>ToDo-List</h1>
            <Todomenu
              isEditVal={editval}
              onChangeTwo={onchangeHandlerTwo}
              valueTwo={edititem}
              onChange={onchangeHandler}
              value={item}
              onClickTwo={onclickHandlerTwo}
              onClick={onclickHandler}
            />
            {newitem.map((item, ind) => {
              return (
                <Todolist
                  key={ind}
                  id={ind}
                  items={item}
                  editTodoitem={editTodoFun}
                  delete={deleteitem}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
