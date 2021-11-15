import QuatsionList from "./QuatsionList";
import { miloeim, tash, sadir } from "../../tables/table";
import { useState, useEffect } from "react";
import Send from "./Send";
import Serch from "./Serch";
import DropDownChoseSubject from "./DropDownChoseSubject.js/DropDownChoseSubject";
import firstQList from "../../tables/firstQ";
export default function Add() {
  const [bikoretKind, setBikoretKind] = useState(sadir);

  const [answers, setAnswers] = useState(getEmptyAns());
  useEffect(() => {
    setAnswers(getEmptyAns());
  }, [bikoretKind]);

  function headlineFunction() {
    let headLine = "";

    ///reder proper kind of bikoret base on dropDown
    if (bikoretKind === miloeim) {
      headLine = "מילואים";
    }
    if (bikoretKind === tash) {
      headLine = 'ת"ש';
    }
    if (bikoretKind === sadir) {
      headLine = "סדיר";
    }

    return headLine;
  }

  function getEmptyAns() {
    let table = [];

    if (bikoretKind !== miloeim) {
      bikoretKind.forEach((subject) => {
        subject.list.forEach((quatsion) => {
          table.push({ rate: "rate", details: "details", found: "found" });
        });
      });
    }
    if (bikoretKind === miloeim) {
      bikoretKind.forEach((subject) => {
        subject.list.forEach((quatsion) => {
          table.push({ rate: "rate", details: quatsion.value, found: "found" });
        });
      });
    }

    return table;
  }

  // headlineFunction()
  return (
    <div>
      <DropDownChoseSubject setBikoretKind={setBikoretKind} />
      <h2>שאלון למבקר בתחום ה{headlineFunction()} </h2>
      <br />
      <QuatsionList
        bikoretKind={bikoretKind}
        answers={answers}
        setAnswers={setAnswers}
      />
      <br />
      <Send headLine={headlineFunction()} answers={answers} />
    </div>
  );
}
