import { Check, Edit } from "react-feather";
import quatsions from "../../../../table";
import { useState, useEffect } from "react";
import { getSheets } from "../../GoogleSheet/GoogleSheets";
import ReactStars from "react-rating-stars-component";

const round = {
  textAlign: "center",
  flexShrink: 0,
  minWidth: 210,
  minHeight: 46,
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
  minWidth: 304,
  MinHeight: 224,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  boxShadow: "inset 3px 3px 3px 3px rgba(0, 0, 0, 0.25)",
  overflow: "visible",
  borderRadius: 25
};

export default function Display(props) {
  const [watch, setWatch] = useState(true);
  const [values, setValues] = useState({
    details: props.rowData[3],
    found: props.rowData[4],
    rate: props.rowData[2]
  });

  useEffect(() => {
    // Update the document title using the browser API
    console.log(values);
  });

  const getQuatsionByIndex = () => {
    let text = "";
    quatsions.forEach((subject) => {
      subject.list.forEach((quatsion) => {
        if (quatsion.index === props.index) {
          text = quatsion.quatsion;
          console.log(text + "/");
        }
      });
    });
    return text;
  };

  if (watch) {
    return (
      <div style={displayQuatsionStyle}>
        <h5>{getQuatsionByIndex()} </h5>
        <div onClick={() => {}} style={round}>
          {props.rowData[2]}
        </div>

        <div style={round}>{props.rowData[3]}</div>
        <div style={round}>{props.rowData[4]}</div>

        <Edit onClick={() => setWatch(false)} />
      </div>
    );
  } else {
    function update() {
      props.rows[props.index].rate = values.rate; // update a value
      props.rows[props.index].found = values.found; // update a value

      props.rows[props.index].details = values.details; // update a value
      props.rows[props.index].save().then(() => {
        console.log("done");
      });
    }

    // function ratingChanged(e) {
    //   let valuesTemp = {};
    //   valuesTemp.rate = e.target.value;
    //   valuesTemp.details = values.details;
    //   valuesTemp.found = values.found;

    //   setValues(valuesTemp);
    // }
    return (
      <div style={displayQuatsionStyle}>
        <h5>{getQuatsionByIndex()} </h5>
        <ReactStars
          value={values.rate}
          style={{ margin: "auto" }}
          count={6}
          onChange={
            (e) => {
              let valuesTemp = {};
              valuesTemp.rate = e;
              valuesTemp.details = values.details;
              valuesTemp.found = values.found;

              setValues(valuesTemp);
            }
            // ratingChanged,

            // setRateById(rate, props.id)
          }
          size={24}
          activeColor="#ffd700"
        />
        <textarea
          rows="5"
          cols="60"
          style={round}
          value={values.rate}
          onChange={(e) => {
            let valuesTemp = {};
            valuesTemp.rate = e.target.value;
            valuesTemp.details = values.details;
            valuesTemp.found = values.found;

            setValues(valuesTemp);
            console.log(values);
          }}
          placeholder={props.rowData[2]}
        />
        <textarea
          rows="5"
          cols="60"
          value={values.found}
          onChange={(e) => {
            let valuesTemp = {};
            valuesTemp.rate = values.rate;

            valuesTemp.details = values.details;
            valuesTemp.found = e.target.value;

            setValues(valuesTemp);
            console.log(values);
          }}
          style={round}
          placeholder={props.rowData[4]}
        />{" "}
        <br />
        <Check
          style={{ color: "green" }}
          onClick={() => {
            update();
            setWatch("עודכן");
            console.log(watch);
          }}
        />
      </div>
    );
  }
}
