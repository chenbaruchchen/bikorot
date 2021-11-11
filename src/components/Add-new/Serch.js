import React from "react";
import Quatsion from "../../../table";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function App(props) {
  function getItems() {
    let items = [];
    let i = 0;
    Quatsion.forEach((subject) => {
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
  let items = [
    {
      id: 0,
      name: "Cobol"
    },
    {
      id: 1,
      name: "JavaScript"
    },
    {
      id: 2,
      name: "Basic"
    },
    {
      id: 3,
      name: "PHP"
    },
    {
      id: 4,
      name: "Java"
    }
  ];
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

    let quatsion = {
      quatsion: item.name,
      index: item.id
    };
    props.setChosen(quatsion);
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
