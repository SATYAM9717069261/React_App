import Todo from "./Todo";
import React, { useState } from "react";
function Todos() {
  const [tododata, modifydata] = useState([
    {
      id: 1,
      title: "Todo Title",
      description: "Do Your Tack",
      completed: false
    }
  ]);

  function addtodo() {
    let newtodo = {
      id: tododata.length + 1,
      title: "Todo Title",
      description: "Do Your Tack me",
      completed: false
    };
    modifydata((previoustodo) => {
      return previoustodo.concat(newtodo);
    });
  }
  function reset() {
    let resettodo = {
      id: 1,
      title: "Todo1",
      description: "Do Your Tack me",
      completed: false
    };
    modifydata([resettodo]);
  }

  function updatetodo(id, completedorNot) {
    const update = tododata.map((data) =>
      data.id === id ? { ...data, completed: completedorNot } : data
    );
    modifydata([update]);
  }

  return (
    <div style={style.flexCol}>
      <div style={style.todos}>
        {tododata.map((data) => {
          return <Todo key={data.id} data={data} onUpdate={updatetodo} />;
        })}
      </div>
      <div style={style.flexRow}>
        <button type="submit" onClick={reset}>
          Reset
        </button>
        <button type="submit" onClick={addtodo}>
          Add
        </button>
      </div>
    </div>
  );
}

const style = {
  flexRow: { display: "flex", flexDirection: "row", padding: 10 },
  flexCol: { display: "flex", flexDirection: "column", padding: 10 },
  todos: { maxHeight: 300, overflow: "auto", border: "2px solid" }
};
export default Todos;
