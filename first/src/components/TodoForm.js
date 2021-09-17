import "../componentStyles/form.css";
import Todocontent from "./Todocontent.js";
import React from "react";

export default function TodoForm() {
  const [form_data, set_form_data] = React.useState([
    {
      title: "",
      Description: ""
    }
  ]);
  function add() {
    set_form_data((prev) => {
      return prev.concat({
        title: "",
        Description: ""
      })
    })
  }
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
              form_data.map((data) => {
                return <Todocontent />
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


