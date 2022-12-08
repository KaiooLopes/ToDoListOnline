import { Color, ColumnForm, Colors, CreateColumnContainer } from "./styles";

import { useState } from "react";
import { useInsertDocuments } from "../../hooks/useInsertDocuments";
import { useAuthValue } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CreateColumn = () => {
  const { user } = useAuthValue();
  const navigate = useNavigate();
  const { insertDocument } = useInsertDocuments("columns");

  const handleColor = (e) => {
    setColor(e.target.getAttribute("color"));
    setIdColor(e.target.getAttribute("id"));
  };

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

    navigate("/");
  };

  const [idColor, setIdColor] = useState(null);
  const [nameColumn, setNameColumn] = useState("");
  const [color, setColor] = useState("");

  return (
    <CreateColumnContainer>
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
          </div>
        </form>
      </ColumnForm>
    </CreateColumnContainer>
  );
};

export default CreateColumn;
