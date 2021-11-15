import React from "react";
import { sadir } from "../../../tables/table";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function App(props) {
  function getItems() {
    let items = [];
    let i = 0;
    props.bikoretKind.forEach((subject) => {
      subject.list.forEach((quatsion) => {
        items.push({
          id: i,
          name: quatsion.quatsion
        });
        i++;
      });
    });
    return items;
  }

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    props.setSelected(item);
    console.log(item.id);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return item;
    // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            width: "70vw",
            margin: "10px",
            marginTop: "40px",
            marginBottom: "40px"
          }}
        >
          <ReactSearchAutocomplete
            items={getItems()}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
