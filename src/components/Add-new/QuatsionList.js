import subjects from "../../../../table";
import first from "../../../../first";
import Quatsion from "./Quatsion";
import Serch from "./Serch";
import FirstQList from "./FirstQList";

import { useState } from "react";
const styleList = {
  boxSizing: "border-box",
  width: "100%",
  minHeight: 356,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 29,
  boxShadow: "inset 3px 3px 3px 3px rgba(0, 0, 0, 0.25)",
  overflow: "visible",
  borderRadius: 28
};

const styleSubject = {
  padding: 15,
  boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.25)",
  backgroundColor: "#eceeee",
  overflow: "visible",
  borderRadius: 28,
  border: "1px solid #b0b0b0",
  margin: 15
};

export default function QuatsionList(props) {
  const [chosen, setChosen] = useState(false);
  const [openFirstQlist, setOpenFirstQlist] = useState(false);

  let Qlist = subjects.map((subject) => (
    <div style={styleSubject}>
      <h3>{subject.name}</h3>
      <br />
      {subject.list.map((quatsion) => (
        <>
          <Quatsion
            answers={props.answers}
            setAnswers={props.setAnswers}
            quatsion={quatsion}
          />
        </>
      ))}
    </div>
  ));
  return (
    <div style={styleList}>
      <Serch setChosen={setChosen} />
      {chosen !== false && (
        <>
          {console.log(chosen)}

          {/* {console.log(getQuatsionByIndex(chosen))} */}

          <Quatsion
            answers={props.answers}
            setAnswers={props.setAnswers}
            quatsion={chosen}
          />
        </>
      )}
      <FirstQList
        answers={props.answers}
        setAnswers={props.setAnswers}
        quatsion={chosen}
        setOpemModel={setOpenFirstQlist}
        openModel={openFirstQlist}
      />
      {Qlist}
    </div>
  );
}
