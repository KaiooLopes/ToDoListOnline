import "./App.css";
import Columns from "./Components/Columns/Columns";

function App() {
  return (
    <div className="App-main">
      <h1>Kanban</h1>
      <div className="App-main-columns">
        <Columns
          card1={{ cardTitle: "Christmas Banner", label: "Label" }}
          card2={{ cardTitle: "Redo Portifolio", label: "Label" }}>
          🗒️ To do
        </Columns>
      </div>
    </div>
  );
}

export default App;
