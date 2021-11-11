import { useState, useEffect } from "react";
import { ArrowRightCircle, X, Edit } from "react-feather";
import { getSheets } from "../../GoogleSheet/GoogleSheets";
import Serch from "./Serch";
import Table from "./Table";
import EditOne from "./EditOne";
import DisplayQuatsion from "./DisplayQuatsion";

import quatsions from "../../../../table";

let color = "#ddbea9";

const stack = {
  width: "100%",
  height: "85%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  overflow: "visible"
};

const header = {
  boxSizing: "border-box",
  flexShrink: 0,
  width: "100%",
  height: "20%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "28px 80px 28px 80px",
  boxShadow: "4px 3px 2px 0px rgba(0, 0, 0, 0.25)",
  overflow: "visible",
  borderRadius: "0px 0px 20px 20px"
};

const round = {
  flexShrink: 0,
  width: 210,
  height: 46,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  boxShadow: "2px 2px 3px 1px rgba(0, 0, 0, 0.25)",
  overflow: "visible",
  borderRadius: 31
};

const headerInner = {
  flexShrink: 0,
  width: "100%",
  height: 33,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  overflow: "visible"
};

const displayQuatsionStyle = {
  flexShrink: 0,
  width: 304,
  height: 224,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  boxShadow: "inset 3px 3px 3px 3px rgba(0, 0, 0, 0.25)",
  overflow: "visible",
  borderRadius: 25
};

export default function Sheet(props) {
  const [rows, setRows] = useState(false);
  const [displayQuatsion, setDisplayQuatsion] = useState(false);

  useEffect(() => {
    function getRows() {
      getSheets().then((doc) => {
        const sheet = doc.sheetsByIndex[props.sheetIndex];
        sheet.getRows().then((res) => setRows(res));
      });
    }
    getRows();
  }, []);
  let listrows = <></>;
  if (rows !== false) {
    listrows = rows.map((row) => (
      <div style={round}>
        {" "}
        {row._rawData[2]} + {row._rawData[3]} + {row._rawData[4]}
        {/* {console.log(row._rawData)} */}
      </div>
    ));
  }

  const getQuatsionByIndex = () => {
    let text = "";
    quatsions.forEach((subject) => {
      subject.list.forEach((quatsion) => {
        if (quatsion.index === displayQuatsion) {
          text = quatsion.quatsion;
          console.log(text + "/");
        }
      });
    });
    return text;
  };

  let input = <></>;
  let addInput = () => {
    console.log("e");
    return <input />;
  };
  return (
    <div>
      {rows !== false && (
        <div style={stack}>
          <ArrowRightCircle
            onClick={() => props.setIsSheet(false)}
            // color="rgb(255, 255, 255)"
          />
          <div style={header}>
            <h2>שם הביקורת</h2>
            <div style={headerInner}>
              <p>
                {rows[0]._rawData[2]}
                {rows[0]._rawData[2]}-{rows[1]._rawData[2]}-
                {rows[3]._rawData[2]}
              </p>
            </div>
          </div>

          <EditOne rows={rows} />
          {/* <Serch setDisplayQuatsion={setDisplayQuatsion} /> */}

          {/* {displayQuatsion !== false && (
            <DisplayQuatsion
              rows={rows}
              index={displayQuatsion}
              rowData={rows[displayQuatsion]._rawData}
            /> */}
          {/* {displayQuatsion !== false && (
            <DisplayQuatsion
               rows={rows}
              index={displayQuatsion}
              rowData={rows[displayQuatsion]._rawData}
            />

            )} */}

          <Table rows={rows} />
        </div>
      )}

      {rows === false && (
        <p>
          משיג מידע
          {console.log("rows")}
        </p>
      )}
    </div>
  );
}
