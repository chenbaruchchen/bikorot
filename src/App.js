import "./styles.css";

import { useState } from "react";
import Menu from "./components/TabBar";

import Watch from "./components/Watch/Watch";

import AddNew from "./components/Add-new/Add";

let yellow = "#e8ed4a";
export default function App() {
  const [tab, setTab] = useState(true);
  return (
    <div className="App">
      <Menu setTab={setTab} />
      <br />
      <br />
      {/* {tab === "watch" && console.log(1)}
      {tab === "add" && console.log(2)}

  */}
      {/* {tab ? <Watch /> : <Add2 />}{" "} */}
      {tab ? <Watch /> : <AddNew />}{" "}
    </div>
  );
}
