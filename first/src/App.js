import logo from './logo.svg';
import './App.css';

function App() {

  const todos = [
    { id: 1, text: "Task1", done: false },
    { id: 2, text: "Task2", done: false },
    { id: 3, text: "Task3", done: false }
  ]

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

function TodoList(props) {
  return (
    <ul>
      { props.todos.map(todos => (
        <li> Todo Items</li>
      ))}
    </ul>
  );
}

export default App;
