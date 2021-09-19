function Description({ description, editable }) {
  return <div contentEditable={editable ? "true" : "false"}>{description}</div>;
}
export default Description;
