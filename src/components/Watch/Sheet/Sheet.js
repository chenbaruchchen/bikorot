import { useState, useEffect } from "react";
import { ArrowRightCircle, X, Edit } from "react-feather";
import { getSheets } from "../../GoogleSheet/GoogleSheets";
import Table from "./Table";
import EditOne from "./EditOne";
import EditRate from "./EditRate/EditRate";
import Tabs from "./tabs/Main";
import Download from "./Download";

import { sadir, tash, miloeim } from "../../../tables/table";

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

export default function Sheet(props) {
  const [rows, setRows] = useState(false);
  const [displayQuatsion, setDisplayQuatsion] = useState(false);
  const [sheetTitle, setSheetTitle] = useState("");
  const [bikoretKind, setBikoretKind] = useState("");
  const [tab, setTab] = useState("watch");
  const [sheetId, setSheetId] = useState("");

  useEffect(() => {
    function getRows() {
      getSheets().then((doc) => {
        const sheet = doc.sheetsByIndex[props.sheetIndex];
        sheet.getRows().then((res) => setRows(res));
        setSheetTitle(sheet.title);
        setSheetId(sheet._rawProperties.sheetId);
      });
    }
    getRows();
  }, []);
  useEffect(() => {
    ///chack kind of bikoret to render
    let str = sheetTitle;
    if (str.match(/סדיר/g) !== null) {
      str = "סדיר";

      setBikoretKind(sadir);
      // let fun=  ()=>setBikoretKind(sadir)
      //  fun()
    } else if (str.match(/ת"ש/g) !== null) {
      str = 'ת"ש';
      setBikoretKind(tash);
    } else if (str.match(/מילואים/g) !== null) {
      str = "מילואים";
      setBikoretKind(miloeim);
    }
  });

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
    bikoretKind.forEach((subject) => {
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

  var displayTab;

  return (
    <div>
      {rows !== false && (
        <div style={stack}>
          <ArrowRightCircle
            onClick={() => props.setIsSheet(false)}
            // color="rgb(255, 255, 255)"
          />
          <div style={header}>
            <h2>{sheetTitle}</h2>
            <div style={headerInner}>
              <p>
                {rows[0]._rawData[2]}
                {rows[0]._rawData[2]}-{rows[1]._rawData[2]}-
                {rows[3]._rawData[2]}
              </p>
            </div>
          </div>
          <Tabs tab={tab} setTab={setTab} />
          {tab}
          {tab === "watch" ? (
            (displayTab = <Table bikoretKind={bikoretKind} rows={rows} />)
          ) : (
            <></>
          )}
          {tab === "percent" ? (
            (displayTab = <EditRate bikoretKind={bikoretKind} rows={rows} />)
          ) : (
            <></>
          )}
          {tab === "editOne" ? (
            (displayTab = <EditOne bikoretKind={bikoretKind} rows={rows} />)
          ) : (
            <></>
          )}

          {/* {tab === "editOne" ? (displayTab = <Table rows={rows} />) : <></>} */}
          {tab === "download" ? (
            (displayTab = <Download sheet={sheetId} />)
          ) : (
            <></>
          )}
        </div>
      )}

      {rows === false && <p>משיג מידע</p>}
    </div>
  );
}
