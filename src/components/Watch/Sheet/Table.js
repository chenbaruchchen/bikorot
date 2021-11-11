const rowStyle = {
  boxSizing: "border-box",
  flexShrink: 0,

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "#f6f8f8",
  overflow: "visible",
  borderColor: "#222",
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderLeftWidth: 0,
  borderRightWidth: 0
};

export default function Table(props) {
  let rows = props.rows;
  let table = rows.map((row) => (
    <ul style={rowStyle}>
      <li>{row._rawData[2]}</li>
      <li>{row._rawData[3]}</li>
      <li>{row._rawData[4]}</li>
    </ul>
  ));

  return <div>{table}</div>;
}
