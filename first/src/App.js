import "./styles.css";

import React from "react";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Task1", done: false },
    { id: 2, text: "Task2", done: false },
    { id: 3, text: "Task3", done: false }
  ]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList setTodos={setTodos} todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

function TodoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done
          }
        : t
    );
    setTodos(updatedTodos);
  }

  if (!todos.length) {
    return <p> No To Left!</p>;
  }

  return (
    <ul style={{ listStyle: "none" }}>
      {todos.map((todo) => (
        <li
          onDoubleClick={() => handleToggleTodo(todo)}
          style={{
            textDecoration: todo.done ? "line-through" : "",
            borderBlockStyle: "solid",
            margin: 2
          }}
          key={todo.id}
        >
          {todo.text}
          <DeleteTodo todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}

function DeleteTodo({ todo, setTodos }) {
  function handleDeleteTodo() {
    const confirmed = window.confirm("Do You Want to delete this ? ");
    if (confirmed) {
      setTodos((prevTodos) => {
        return prevTodos.filter((t) => t.id !== todo.id);
      });
    }
  }
  return (
    <span
      role="button"
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 10
      }}
    >
      X
    </span>
  );
}

function AddTodo({ setTodos }) {
  const inputRef = React.useRef();
  const numRef = React.useRef();

  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    console.log("Check Box value=> ", event.target.elements.numTodo.value);

    if (event.target.elements.numTodo.value === 0) {
      text.split(",").map((val) => {
        const newtodo = {
          id: 5,
          text: val,
          done: false
        };
        //setTodos(newtodo);
        setTodos((prevTodos) => {
          return prevTodos.concat(newtodo);
        });
      });
      //console.log(text.split(','));
    } else {
      const todo = {
        id: 4,
        text,
        done: false
      };
      setTodos((prevTodos) => {
        return prevTodos.concat(todo);
      });
    }
    /**
    const todo ={
      id:4,
      text,
      done:false
    };
    setTodos( (prevTodos) => {
      return prevTodos.concat(todo)
    });
    */
    inputRef.current.value = "";
    numRef.current.value = 0;
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input name="numTodo" id="multipletodo" type="checkbox" ref={numRef} />
      <label for="multipletodo">Add Multiple Todos</label>
      <input name="addTodo" placeholder="Type Todo Content..." ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
