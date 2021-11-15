import { Dropdown, Button } from "react-bootstrap";
import { miloeim, tash, sadir } from "../../../tables/table";

export default function DropDownElement(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        style={{ backgroundColor: "#eceeee", color: "black" }}
        variant="black"
        id="dropdown-basic"
      >
        סוג ביקורת
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          href="#"
          onClick={(e) => {
            props.setBikoretKind(sadir);
            console.log("clicked");
          }}
        >
          סדיר
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={(e) => {
            props.setBikoretKind(miloeim);
            console.log("clicked");
          }}
        >
          מילואים
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={(e) => {
            props.setBikoretKind(tash);
            console.log("clicked");
          }}
        >
          ת"ש
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
