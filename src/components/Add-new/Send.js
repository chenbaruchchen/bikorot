import { addArrayToNewSheet } from "../GoogleSheet/GoogleSheets";

const submitWrap = {
  boxSizing: "border-box",
  width: "100%",
  height: 59,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  margin: "10px"
};
const submit = {
  boxSizing: "border-box",
  width: 138,
  height: 59,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  boxShadow: "4px 4px 2px 0px rgba(0, 0, 0, 0.25)",
  backgroundColor: "#ddbea9",
  overflow: "visible",
  borderRadius: 36,
  border: "1px solid #F9D5A7"
};

export default function Send(props) {
  return (
    <div style={submitWrap}>
      <div
        onClick={() => {
          addArrayToNewSheet(props.answers);
          alert("add ");
        }}
        style={submit}
      >
        {/* <div onClick={() => console.log(props.answers)} style={submit}> */}
        בוצע
      </div>
    </div>
  );
}
