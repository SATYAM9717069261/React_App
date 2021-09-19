function Header() {
  return (
    <div style={headerstyle.main}>
      <h1 style={headerstyle.left}>Todo Application</h1>
      <span style={headerstyle.right}>
        <span>
          <label style={headerstyle.floatLeft}>Total Todo: </label>
          <span style={headerstyle.floatRight}>10</span>
        </span>
        <span>
          <label style={headerstyle.floatLeft}>Completed Todo: </label>
          <span style={headerstyle.floatRight}>10</span>
        </span>
        <span>
          <label style={headerstyle.floatLeft}>InComplete Todo: </label>
          <span style={headerstyle.floatRight}>10</span>
        </span>
      </span>
    </div>
  );
}

const headerstyle = {
  main: { display: "flex", flexDirection: "row", padding: 10 },
  left: { flex: 2 },
  right: { flex: 1, display: "flex", flexDirection: "column" },
  floatRight: { float: "right" },
  floatLeft: { float: "left" }
};

export default Header;
