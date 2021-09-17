import "../componentStyles/main.css";
export default function TodoList() {
  return (
    <div className="container flex-col">
      <div className="container center marg pad">
        <label className="title-marg">Title</label>
        <button className="complete marg">Completed</button>
        <span> ^ </span>
      </div>
      <div className="container center marg pad">
        <label className="title-marg">Title</label>
        <button className="complete marg">Completed</button>
        <span> ^ </span>
      </div>
      <div className="container center marg pad">
        <label className="title-marg">Title</label>
        <button className="complete marg">Completed</button>
        <span> ^ </span>
      </div>
    </div>
  );
}
