import Description from "./Description";
import React, { useState, useEffect } from "react";
function Todo({ data, onUpdate,oncomplete }) {
  const [titleClicked, changetitleClicked] = useState(false);
  const [editable, changeeditable] = useState(true);

  useEffect(() => {
    if (editable == false) {
      data.title = document.getElementById('title').value ? document.getElementById('title').value : "No Title Added";
      data.description = document.getElementById('description').value? document.getElementById('description').value:"No Description Added";
      data.completed=false;
      onUpdate(data.id, data)
    }
  }, [editable]);  // track editable

  return (
    <>
      <div style={style.flexRow}>
        <input style={data.completed?style.sucess:style.alert} type="text" placeholder={data.title} id="title"
          disabled={editable ? false : true}
          onClick={() => {
            titleClicked ? changetitleClicked(false) : changetitleClicked(true);
          }}
        />
        <div>
          <button style={style.buttonMargin} type="submit" onClick={()=>oncomplete(data.id)}>
            Completed
          </button>
          <button style={style.buttonMargin} type="submit" onClick={() => changeeditable(editable ? false : true)}>
            {editable?"Save":"Edit"}
          </button>
        </div>
      </div>
      {titleClicked ? (<Description description={data.description} editable={editable} />) : ""}
    </>
  );
}

const style = {
  flexRow: { display: "flex", flexDirection: "row", padding: 10 },
  flexCol: { display: "flex", flexDirection: "column", padding: 10 },
  todos: { maxHeight: 300, overflow: "auto", border: "2px solid" },
  buttonMargin: { margin: 2, padding: 2 },
  alert:{borderRadius:4,border:"2px solid red", flex: 3},
  sucess:{borderRadius:4,border:"2px solid green",flex: 3}
};
export default Todo;
