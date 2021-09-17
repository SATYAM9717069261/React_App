import "../componentStyles/form.css";
import Todocontent from "./Todocontent.js";
export default function TodoForm() {
  return (
    <>
      <div className="container">
        <table className="max-width">
          <thead className="border">
            <tr>
              <td className="flex2 center "> Title</td>
              <td className="flex2 center"> Description</td>
              <td className="flex1 center"></td>
            </tr>
          </thead>
          <tbody className="border">
            <Todocontent />
          </tbody>
        </table>
      </div>

      <div className="container">
        <button style={btn_style}>Add</button>
        <button style={btn_style}>Submit</button>
      </div>
    </>
  );
}
const btn_style = {
  float: "right",
  margin: 12
};
