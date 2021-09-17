import "../componentStyles/form.css";
import Todocontent from "./Todocontent.js";
import React from "react";

export default function TodoForm() {
  const [form_data, set_form_data] = useState({
    title: "",
    Description: ""
  });
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
            {
              form_data.map(data => {

                <Todocontent />
              })
            }

          </tbody>
        </table>
      </div>

      <div className="container">
        <button style={btn_style} onClick={add}>Add</button>
        <button style={btn_style}>Submit</button>
      </div>
    </>
  );
}
const btn_style = {
  float: "right",
  margin: 12
};

function add() {
  alert("call Sucessfull")
}
