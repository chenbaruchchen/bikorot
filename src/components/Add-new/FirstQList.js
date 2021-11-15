import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import Quatision from "./Quatsion";
import { ArrowRightCircle, X } from "react-feather";
import ReactStars from "react-rating-stars-component";
import firstQLst from "../../tables/firstQ";

const wrapStyle = {
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.25)",
  backgroundColor: "#eceeee",
  overflow: "visible",
  borderRadius: 28,
  border: "1px solid #b0b0b0"
};
const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const styleTitle = {
  padding: 15,
  boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.25)",
  backgroundColor: "#eceeee",
  overflow: "visible",
  borderRadius: 28,
  border: "1px solid #b0b0b0",
  margin: 15
};
const inputStyle = {
  backgroundColor: "rgb(242, 237, 237)",
  width: "60vw",
  borderRadius: 23,
  textAlign: "center",
  margin: "15px"
};
export default function Example(props) {
  // const [show, setShow] = useState(props.openModel);

  const handleClose = () => props.setOpemModel(false);
  const handleShow = () => props.setOpemModel(true);

  const list = firstQLst.list.map((quatsion) => (
    <div>
      <h4>{quatsion.quatsion}</h4>
      <input
        value={props.answers[quatsion.index].details}
        onChange={(e) => {
          let table = [...props.answers];
          table[quatsion.index].details = e.target.value;

          props.setAnswers(table);
        }}
        style={inputStyle}
        placeholder={quatsion.quatsion}
      />
    </div>
  ));
  return (
    <>
      <h4 onClick={handleShow} style={styleTitle}>
        {" "}
        מבקרים
      </h4>
      <Modal style={wrapStyle} show={props.openModel} onHide={handleClose}>
        {/* <Modal.Header closeButton> */}
        <X onClick={() => props.setOpemModel(false)} />

        {/* <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header> */}

        <Modal.Body>
          {list}
          {/* <OpenQuatision
              setShow={setShow}
              setAnswers={props.setAnswers}
              answers={props.answers}
              quatsion={props.quatsion}
            /> */}
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
