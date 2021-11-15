import { script_scoreSadir } from "../../../scripts/Score/CalaulateScoreSadir";
import { useState } from "react";
import "./table.css";
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

  let listQutsion = props.bikoretKind.map((subject) => {
    return subject.list.map((q) => <Quatsion row={rows[q.index]} q={q} />);
  });
  return (
    <div>
      <div>{listQutsion}</div>
      <button onClick={() => script_scoreSadir(rows)}>ציון</button>
      {table}
    </div>
  );
}

function Quatsion(props) {
  const [open, setOpen] = useState(false);

  let className = "box-2";
  if (open) {
    className = className + "open";
  }
  return (
    <div
      onClick={(e) => {
        setOpen(!open); 
        //  e.target.classList.add("open");
        // console.log(e.target.classList);
      }}
      className={className}
    >
      <div className="box-3"> 
      ({props.q.index} {props.q.quatsion}  </div>

      {/* <div className="box-3">({props.q.index}</div> */}

      {open ? <div className="box-3">{props.row._rawData[3]}</div> : <></>}
    </div>
  );
}
