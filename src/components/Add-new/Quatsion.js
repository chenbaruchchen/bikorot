import { useState } from "react";
import Model from "./Model";
const quatsionStyle = {
  backgroundColor: "white",

  margin: "10px",
  padding: "10px",
  width: "70vw" /* 841px */,
  height: "auto" /* 19px */,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.3)",
  overflow: "hidden",
  borderRadius: 21,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};

export default function Quatsion(props) {
  const [openModel, setOpemModel] = useState(false);
  return (
    <>
      {openModel && (
        <Model
          setOpemModel={setOpemModel}
          openModel={openModel}
          quatsion={props.quatsion}
          answers={props.answers}
          setAnswers={props.setAnswers}
        />
      )}
      <div
        onClick={() => {
          setOpemModel(true);
        }}
        style={quatsionStyle}
      >
        <h5
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap"
          }}
        >
          {props.quatsion.quatsion}/{props.quatsion.index}
        </h5>
      </div>
    </>
  );
}
