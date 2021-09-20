function Description({ description, editable }) {
  return <textarea type="text" id="description" disabled={editable ? false : true} placeholder={description} />
}
export default Description;
