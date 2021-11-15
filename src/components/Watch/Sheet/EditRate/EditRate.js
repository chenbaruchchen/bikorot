import { Edit, Check } from "react-feather";
import { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";

export default function App(props) {
  let index = -1;
  let listSubject = props.bikoretKind.map((subject) => (
    <Subject
      index={index++}
      rows={props.rows}
      bikoretKind={props.bikoretKind}
      subject={subject}
    />
  ));
  return (
    <div style={main}>
      edit
      {listSubject}
    </div>
  );
}

const main = {
  width: "80%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  boxShadow: "1px 1px 2px 0px rgba(0, 0, 0, 0.25)",
  overflow: "visible",

  borderRadius: 17
};

const subjectStyle = {
  flexShrink: 0,
  width: "100%",
  height: 108,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  overflow: "visible"
};
function Subject(props) {
  //
  const [editMode, setEditMode] = useState(false);
  const [currentUpdate, setCurrentUpdate] = useState(getFirstRate());
  // updateRate(props.bikoretKind, props.subject);
  // useEffect(()=>{
  //   let value=getFirstRate()
  //   console.log(value)
  //   console.log(props.index)
  //    },[])
  function getFirstRate() {
    let amount = 0;
    for (let index = 0; index <= props.index; index++) {
      amount = amount + props.bikoretKind[index].list.length;
    }
    let value = props.rows[amount]._rawData[2];

    let bikoretKind = props.bikoretKind;
    let subjectToFound = props.subjectToFound;
    let i = 0;
    var found = {
      start: i,
      length: bikoretKind[0].list.length
    };
    bikoretKind.forEach((subject) => {
      if (subject === subjectToFound) {
        found = {
          start: i,
          length: subject.list.length
        };
      }
      i = i + subject.list.length - 1;
      i++;
    });
    console.log(parseInt(value));
    return parseInt(value);
    // return props.rows[found.start]._rawData[2];
  }

  function updateRate(bikoretKind, subjectToFound) {
    console.log("found");
    let i = 0;
    let found;
    bikoretKind.forEach((subject) => {
      if (subject === subjectToFound) {
        found = {
          start: i,
          length: subject.list.length
        };
      }
      i = i + subject.list.length - 1;
      i++;
    });
    console.log(currentUpdate);
    console.log(found);

    for (let i = 0; i < found.length; i++) {
      props.rows[found.start + i]._rawData[2] = currentUpdate;
      props.rows[found.start + i]
        .save()
        .then((res) => {
          console.log(props.rows[found.start + i]._rawData.rate);
        })
        .catch((error) => {
          console.error("onRejected function called: " + error);
        });
    }
    // props.rows[start].save().then(() => {
    // alert("בוצע ");

    //    function update() {
    //   props.row.rate = props.values.rate; // update a value
    //   props.row.found = props.values.found; // update a value

    //   props.row.details = props.values.details; // update a value
    //   props.row.save().then(() => {
    //     alert("בוצע ");
    //   });
    // }
  }
  return (
    <div style={subjectStyle}>
      <div style={{ visibility: editMode ? "visible" : "hidden" }}>
        {" "}
        <Check
          onClick={() => {
            updateRate(props.bikoretKind, props.subject);
            setEditMode(false);
          }}
        />
        <ReactStars
          value={currentUpdate}
          count={6}
          // onChange={
          //   (e) => {
          //     ratingChanged(e, props.quatsion.index);
          //   }
          // ratingChanged,

          // setRateById(rate, props.id)
          // }

          onChange={(e) => {
            setCurrentUpdate(e);
          }}
          size={24}
          activeColor="#ffd700"
        />
      </div>
      <div style={{ visibility: editMode ? "hidden" : "visible" }}>
        {" "}
        <Edit onClick={() => setEditMode(true)} />
        <h5 style={{ visibility: editMode ? "hidden" : "visible" }}>
          {props.subject.name}
        </h5>
      </div>
    </div>
  );
}
