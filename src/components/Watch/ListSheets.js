import { getSheets } from "../GoogleSheet/GoogleSheets";
import { useEffect, useState } from "react";
// const sheet = {
//   width: "100%",
//   flexShrink: 0,
//   height: 106,
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-evenly",
//   alignItems: "center",
//   boxShadow: "4px 4px 2px 0px rgba(0, 0, 0, 0.25)",
//   backgroundColor: "#ffffff",
//   overflow: "visible",
//   borderRadius: 36,
//   margin: 10
// };

const sheet = {
  margin: 12,
  boxSizing: "border-box",
  flexShrink: 0,
  maxWidth: "79%",
  height: "31%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "29px 92px 29px 92px",
  boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.25)",
  overflow: "visible",
  borderRadius: 42,
  border: "1px solid rgba(34, 34, 34, 0.26)"
};

export default function ListSheets(props) {
  const [sheetsMeta, setSheetsMeta] = useState(null);
  useEffect(() => {
    let sheets = [];
    getSheets().then((res) => {
      for (var key in res._rawSheets) {
        if (res._rawSheets.hasOwnProperty(key)) {
          let sheet = {
            title: res._rawSheets[key]._rawProperties.title,
            index: res._rawSheets[key]._rawProperties.index
          };
          sheets.push(sheet);
        }
      }
      setSheetsMeta(sheets);
    });
  }, []);

  if (sheetsMeta !== null) {
    const listSheets = sheetsMeta.map((item) => (
      <div
        onClick={() => props.setIsSheet(item.index)}
        key={item.index.toString()}
        style={sheet}
      >
        <h3>
          {" "}
          {item.title}={item.index}
        </h3>
      </div>
    ));
    return (
      <>
        <br />
        {listSheets}
      </>
    );
  }
  return <p>try to get info</p>;
}
