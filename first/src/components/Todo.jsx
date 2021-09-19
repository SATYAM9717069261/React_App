import Description from "./Description";
import React, { useState } from "react";
function Todo({ data }) {
  const [titleClicked, changetitleClicked] = useState(false);
  const [editable, changeeditable] = useState(false);
  console.log(data.description);
  return (
    <>
      <div style={style.flexRow}>
        <label
          contentEditable={editable ? "true" : "false"}
          style={{ flex: 3 }}
          onClick={() => {
            titleClicked ? changetitleClicked(false) : changetitleClicked(true);
          }}
        >
          {data.title}
        </label>
        <div>
          <button style={style.buttonMargin} type="submit">
            Completed
          </button>
          <button
            style={style.buttonMargin}
            type="submit"
            onClick={() =>
              editable ? changeeditable(false) : changeeditable(true)
            }
          >
            Edit
          </button>
        </div>
      </div>
      {titleClicked ? (
        <Description description={data.description} editable={editable} />
      ) : (
        ""
      )}
    </>
  );
}

const style = {
  flexRow: { display: "flex", flexDirection: "row", padding: 10 },
  flexCol: { display: "flex", flexDirection: "column", padding: 10 },
  todos: { maxHeight: 300, overflow: "auto", border: "2px solid" },
  buttonMargin: { margin: 2, padding: 2 }
};
export default Todo;
