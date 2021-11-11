import QuatsionList from "./QuatsionList";
import subjects from "../../../../table";
import { useState } from "react";
import Send from "./Send";
import Serch from "./Serch";
function getEmptyAns() {
  let table = [];
  subjects.forEach((subject) => {
    subject.list.forEach((quatsion) => {
      table.push({ rate: "rate", details: "details", found: "found" });
    });
  });
  return table;
}
export default function Add() {
  const [answers, setAnswers] = useState(getEmptyAns());

  return (
    <div>
      <h2>שאלון למבקר בתחום הסדיר</h2>

      <br />

      <QuatsionList answers={answers} setAnswers={setAnswers} />
      <br />
      <Send answers={answers} />
    </div>
  );
}
