import { useState } from "react";
import Serch from "./Serch";

import quatsions from "../../../../table";
import { X, Check, Edit } from "react-feather";
import Model from "./Model";
export default function EditOne(props) {
  const [selected, setSelected] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  if (selected === null) {
    return <Serch setSelected={setSelected} />;
  } else {
    return (
      <div style={displayQuatsionStyle}>
        <X onClick={() => setSelected(null)} />

        <h5>{selected.id}</h5>
        {selected.name}

        <div style={round}>
          דירוג
          <br />
          {props.rows[selected.id]._rawData[2]}
        </div>

        <div style={round}>
          פירוט
          <br />
          {props.rows[selected.id]._rawData[3]}
        </div>

        <div style={round}>
          ממצאים
          <br />
          {props.rows[selected.id]._rawData[4]}
        </div>
        <Edit onClick={() => setOpenModel(true)} />

        <Model
          quatsion={selected.name}
          row={props.rows[selected.id]}
          openModel={openModel}
          setOpemModel={setOpenModel}
        />
      </div>
    );
  }
}

const displayQuatsionStyle = {
  flexShrink: 0,
  minWidth: 304,
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  boxShadow: "inset 3px 3px 3px 3px rgba(0, 0, 0, 0.25)",
  overflow: "visible",
  borderRadius: 25,
  margin: "14px",
  padding: "6px"
};
const round = {
  margin: "4px",
  padding: "2px",
  textAlign: "center",
  flexShrink: 0,
  minWidth: 210,
  minHeight: 46,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  boxShadow: "2px 2px 3px 1px rgba(0, 0, 0, 0.25)",
  overflow: "visible",
  borderRadius: 31
};
