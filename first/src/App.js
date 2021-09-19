import "./styles.css";
import Header from "./components/Header";
import Todos from "./components/Todos";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Todos />
    </div>
  );
}
