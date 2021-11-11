import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import Quatision from "./Quatsion";
import { ArrowRightCircle, X } from "react-feather";
import ReactStars from "react-rating-stars-component";

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

export default function Example(props) {
  const [show, setShow] = useState(props.openModel);

  const handleClose = () => props.setOpemModel(false);
  const handleShow = () => props.setOpemModel(true);

  return (
    <>
      <Modal style={style} show={props.openModel} onHide={handleClose}>
        {/* <Modal.Header closeButton> */}
        <X onClick={() => props.setOpemModel(false)} />

        {/* <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}

        <Modal.Body>
          <OpenQuatision
            setShow={setShow}
            setAnswers={props.setAnswers}
            answers={props.answers}
            quatsion={props.quatsion}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
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
      <p>{props.quatsion.quatsion}</p>
      <p>{props.quatsion.index}</p>

      {console.log(props.answers)}
      <textarea
        value={props.answers[props.quatsion.index].details}
        // value={props.answers[props.quatision.index].details}
        onChange={(e) => {
          let table = [...props.answers];
          table[props.quatsion.index].details = e.target.value;
          props.setAnswers(table);
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
        value={props.answers[props.quatsion.index].found}
        onChange={(e) => {
          let table = [...props.answers];
          table[props.quatsion.index].found = e.target.value;

          props.setAnswers(table);
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
        value={props.answers[props.quatsion.index].rate}
        style={{ margin: "auto" }}
        count={6}
        onChange={
          (e) => {
            ratingChanged(e, props.quatsion.index);
          }
          // ratingChanged,

          // setRateById(rate, props.id)
        }
        size={24}
        activeColor="#ffd700"
      />

      {rate}
    </div>
  );
}
