import {
  ContainerHome,
  HomeColumns,
  AddColumnBtn,
  RemoveColumnBtn,
  Buttons,
  ColumnForm,
  Colors,
  Color,
} from "./styles";
import { useEffect, useState } from "react";
import Columns from "./Components/Columns";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocuments } from "../../hooks/useInsertDocuments";
import { RemoveColumn } from "./Components/Columns/styles";
import { useRef } from "react";

const Home = () => {
  const [idColor, setIdColor] = useState(null);
  const ref = useRef(null);
  const [creating, setCreating] = useState(false);
  const [nameColumn, setNameColumn] = useState("");
  const [removingColumn, setRemovingColumn] = useState(false);
  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocuments("columns");
  const {
    documents: columns,
    loading,
    error,
  } = useFetchDocuments("columns", user.uid);

  const [color, setColor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!color) {
      return;
    }
    await insertDocument({
      nameColumn,
      uid: user.uid,
      createdBy: user.displayName,
      color,
    });
    setCreating(false);
    setIdColor(null);
    setColor("");
  };

  const createColumn = (e) => {
    e.preventDefault();
    setNameColumn("");
    setCreating(true);
    setIdColor(null);
    setColor("");
    setRemovingColumn(false);
  };

  const cancelCreateColumn = (e) => {
    e.preventDefault();
    setNameColumn("");
    setCreating(false);
    setIdColor(null);
    setColor("");
  };

  const handleColor = (e) => {
    setColor(e.target.getAttribute("color"));
    setIdColor(e.target.getAttribute("id"));
  };

  return (
    <ContainerHome>
      <h1>To Do List</h1>
      <Buttons>
        <AddColumnBtn onClick={(e) => createColumn(e)}>Add Column</AddColumnBtn>
        {creating && (
          <ColumnForm>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="columnName"
                  required
                  placeholder="Name Column"
                  value={nameColumn}
                  onChange={(e) => setNameColumn(e.target.value)}
                  maxLength="18"
                />
              </label>
              <label>
                <span>Color Column</span>
                <Colors idColor={idColor} color={color}>
                  <Color
                    id="1"
                    color="#B4B529"
                    onClick={(e) => handleColor(e)}
                  ></Color>
                  <Color
                    id="2"
                    color="#4E61D2"
                    onClick={(e) => handleColor(e)}
                  ></Color>
                  <Color
                    id="3"
                    color="#EA4A4A"
                    onClick={(e) => handleColor(e)}
                  ></Color>
                  <Color
                    id="4"
                    color="#6BC461"
                    onClick={(e) => handleColor(e)}
                  ></Color>
                </Colors>
              </label>
              <div>
                <button>Create</button>
                <button onClick={(e) => cancelCreateColumn(e)}>Cancel</button>
              </div>
            </form>
          </ColumnForm>
        )}
        <RemoveColumnBtn onClick={() => setRemovingColumn(!removingColumn)}>
          Remove Column
        </RemoveColumnBtn>
      </Buttons>
      <HomeColumns ref={ref}>
        {columns &&
          columns.map((column, i) => {
            return (
              <Columns
                removingColumn={removingColumn}
                key={i}
                color={column.color}
                columns={columns}
                columnIndex={i}
              >
                {column.nameColumn}
              </Columns>
            );
          })}
      </HomeColumns>
    </ContainerHome>
  );
};

export default Home;
