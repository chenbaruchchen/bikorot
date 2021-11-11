import { useState, useEffect } from "react";

import ListSheets from "./ListSheets";
import Sheet from "./Sheet/Sheet";

import { getSheets } from "../GoogleSheet/GoogleSheets";
let color = "#ddbea9";
// const choseSheet = {
//   boxSizing: "border-box",
//   width: "100%",
//   minHeight: 640,
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "flex-start",
//   alignItems: "center",
//   padding: "48px 22px 48px 22px",
//   boxShadow: "3px 3px 2px 0px rgba(0, 0, 0, 0.25)",
//   backgroundColor: color,
//   overflow: "hidden"
// };

const choseSheet = {
  borderRadius: 28,
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  boxShadow: "inset 3px 3px 3px 3px rgba(0, 0, 0, 0.25)",
  overflow: "visible"
};

export default function Watch() {
  const [isSheet, setIsSheet] = useState(false);

  if (isSheet !== false) {
    return <Sheet setIsSheet={setIsSheet} sheetIndex={isSheet} />;
  }

  return (
    <div>
      <div style={choseSheet}>
        <ListSheets setIsSheet={setIsSheet} />
      </div>
    </div>
  );
}
