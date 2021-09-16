import "../componentStyles/form.css";
import Todocontent from "./Todocontent.js";
export default function TodoForm() {
  return (
    <form>
      <table>
        <thead>
          <tr>
            <th>Todo Title</th>
            <th>Todo Description </th>
            <th>
              <button>Add</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <Todocontent />
        </tbody>
      </table>
      <button type="submit">Submit</button>
    </form>
  );
}
