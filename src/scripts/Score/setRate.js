import { sadir } from "../../../table";

let index = 0;
let quatsion = [];
sadir.forEach((subject) => {
  subject.list.forEach((q) => {
    quatsion.push(q);
  });
});

let sadirDivideByRate = [
  {
    start: 7,
    end: 23,
    precent: 0.4
  },
  {
    start: 24,
    end: 24,
    precent: 0.05,
    name: "שחרורים"
  },
  {
    start: 25,
    end: 25,
    precent: 0.1,
    name: "נפקדים"
  },
  {
    start: 25,
    end: 36,
    precent: 0.2,
    name: "ממשקי עבודה"
  },
  {
    start: 37,
    end: 43,
    precent: 0.15,
    name: "חניכה"
  },
  {
    start: 44,
    end: 46,
    precent: 0.05,
    name: "חירום"
  },
  {
    start: 47,
    end: 50,
    precent: 0.05,
    name: "הערכת מבקר"
  }
];

export {};
