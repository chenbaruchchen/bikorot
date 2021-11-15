import { Eye, Edit, Download, Percent } from "react-feather";
const style = {
  width: "100%",

  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  justifyContent: "space-evenly",
  margin: "25px",
  padding: "15px",
  backgroundColor: "#eceeee",
  borderRadius: "25px"
};

const circle = {
  padding: "4px",
  background: "#FFFEFE",
  borderRadius: "50%",

  border: "1px solid #000000",
  boxSizing: "border-box",
  opacity: 0.85
  // color: "red"
};
const chosen = {
  padding: "4px",
  background: "black",
  borderRadius: "50%",

  border: "1px solid #000000",
  boxSizing: "border-box",
  opacity: 1,
  color: "white"
};
export default function Tabs(props) {
  return (
    <div style={style}>
      <div
        onClick={() => {
          props.setTab("watch");
        }}
        style={circle && props.tab === "watch" ? chosen : circle}
      >
        <Eye />
      </div>
      <div
        onClick={() => {
          props.setTab("editOne");
        }}
        style={circle && props.tab === "editOne" ? chosen : circle}
      >
        <Edit />{" "}
      </div>
      <div
        onClick={() => {
          props.setTab("download");
        }}
        style={circle && props.tab === "download" ? chosen : circle}
      >
        <Download />
      </div>
      <div
        onClick={() => {
          props.setTab("percent");
        }}
        style={circle && props.tab === "percent" ? chosen : circle}
      >
        <Percent />
      </div>
    </div>
  );
}
