import { Plus, Eye } from "react-feather";
import { motion } from "framer-motion";
import { useState } from "react";

let yellow = "#ddbea9";

const menu = {
  boxSizing: "border-box",
  width: "100%",
  height: 96,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "12px 56px 12px 56px",
  boxShadow: "3px 3px 2px 0px rgba(0, 0, 0, 0.25)",
  // backgroundColor: "#e8ed4a",
  // backgroundColor: yellow,
  backgroundColor: "#eceeee",

  overflow: "visible"
};

const menuItemA = {
  backgroundColor: "white",

  boxSizing: "border-box",
  flexShrink: 0,
  width: "45%",
  height: 72,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "0px 6px 0px 6px",
  boxShadow: "2px 3px 2px 0px rgba(0, 0, 0, 0.25)",
  // backgroundColor: "#ffffff",
  overflow: "visible",
  borderRadius: 43
};

const menuItemB = {
  backgroundColor: "white",

  boxSizing: "border-box",
  flexShrink: 0,
  width: "45%",
  height: 72,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px 6px 4px 6px",
  boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.25)",
  // backgroundColor: "#ffffff",
  overflow: "visible",
  borderRadius: 43
};

export default function App(props) {
  return (
    <div style={menu} className="App">
      <motion.div
        onClick={() => props.setTab(false)}
        whileTap={{ scale: 1.4 }}
        style={menuItemA}
        className="App"
      >
        <Plus width="100%" />
      </motion.div>

      <motion.div
        onClick={() => props.setTab(true)}
        whileTap={{ scale: 1.4 }}
        style={menuItemB}
        className="App"
      >
        <Eye width="100%" />
      </motion.div>
    </div>
  );
}
