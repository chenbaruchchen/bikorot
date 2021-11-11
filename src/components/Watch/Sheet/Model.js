import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { ArrowRightCircle, X, Check } from "react-feather";
import ReactStars from "react-rating-stars-component";

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

export default function Example(props) {
  const [show, setShow] = useState(props.openModel);
  const [values, setValues] = useState({
    rate: props.row._rawData[2],
    details: props.row._rawData[3],
    found: props.row._rawData[4]
  });

  const handleClose = () => props.setOpemModel(false);
  const handleShow = () => props.setOpemModel(true);

  return (
    <>
      <Modal style={style} show={props.openModel} onHide={handleClose}>
        {/* <Modal.Header closeButton> */}

        {/* <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}

        <Modal.Body>
          <X onClick={() => props.setOpemModel(false)} />

          <OpenQuatision
            row={props.row}
            setValues={setValues}
            values={values}
            setShow={setShow}
            setAnswers={props.setAnswers}
            answers={props.answers}
            quatsion={props.quatsion}
          />
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

function OpenQuatision(props) {
  const [rate, setRate] = useState("לא דורג");
  function ratingChanged(e, id) {
    setRate(e);
    let table = [...props.answers];

    table[id].rate = e;
    props.setAnswers(table);
    console.log(table[id]);
  }

  function update() {
    props.row.rate = props.values.rate; // update a value
    props.row.found = props.values.found; // update a value

    props.row.details = props.values.details; // update a value
    props.row.save().then(() => {
      alert("בוצע ");
    });
  }
  return (
    // <div style={after}>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center"
      }}
    >
      {console.log(props.answers)}
      <textarea
        value={props.values.details}
        // value={props.answers[props.quatision.index].details}
        onChange={(e) => {
          let valuesTemp = {
            details: e.target.value,
            found: props.values.found,
            rate: props.values.rate
          };
          props.setValues(valuesTemp);
        }}
        style={{
          backgroundColor: "rgb(242, 237, 237)",
          width: "80%",

          borderRadius: 23,
          textAlign: "center",
          margin: "5px"
        }}
        placeholder="פירוט"
        rows="5"
        cols="60"
      />

      <textarea
        value={props.values.found}
        onChange={(e) => {
          let valuesTemp = {
            details: props.values.details,
            found: e.target.value,
            rate: props.values.rate
          };
          props.setValues(valuesTemp);
        }}
        style={{
          backgroundColor: "rgb(242, 237, 237)",
          width: "60vw",
          borderRadius: 23,
          textAlign: "center",
          margin: "15px"
        }}
        placeholder="ממצאים"
        rows="5"
        cols="60"
        name="description"
      />

      <ReactStars
        value={props.values.rate}
        style={{ margin: "auto" }}
        count={6}
        // onChange={
        //   (e) => {
        //     ratingChanged(e, props.quatsion.index);
        //   }
        // ratingChanged,

        // setRateById(rate, props.id)
        // }

        onChange={(e) => {
          let valuesTemp = {
            details: props.values.details,
            found: props.values.found,
            rate: e
          };
          props.setValues(valuesTemp);
        }}
        size={24}
        activeColor="#ffd700"
      />

      {rate}

      <Check onClick={update} />
    </div>
  );
}
