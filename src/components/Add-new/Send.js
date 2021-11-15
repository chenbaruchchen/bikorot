import { addArrayToNewSheet } from "../GoogleSheet/GoogleSheets";
import setRateBySubject from "../../scripts/setRateOfObjects";
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
  backgroundColor: "#eceeee",
  overflow: "visible",
  borderRadius: 36,
  border: "1px solid white"
};

export default function Send(props) {
  return (
    <div style={submitWrap}>
      <div
        onClick={() => {
          console.log(props.headLine);
          addArrayToNewSheet(props.answers, props.headLine);
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
