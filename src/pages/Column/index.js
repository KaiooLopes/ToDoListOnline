import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import Columns from "../../components/Columns";
import {
  AddCard,
  ColumnContainer,
  CreatingToDo,
  CardContent,
  CardInputs,
  Date,
  ShowHelp,
  CreateCard,
  DivColumn,
  RemoveCard,
} from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInsertDocuments } from "../../hooks/useInsertDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";
import ButtonBack from "../../components/ButtonBack";

const Column = () => {
  const id = useParams();
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  const { document } = useFetchDocument("columns", id.id);
  const { insertDocument } = useInsertDocuments(`columns/${id.id}/cards`);
  const { deleteDocument } = useDeleteDocument(`columns`);

  const [titleToDo, setTitleToDo] = useState("");
  const [help, setHelp] = useState("");
  const [date, setDate] = useState("");
  const [toDoBody, setToDoBody] = useState("");
  const [hour, setHour] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await insertDocument({
      date,
      progress: "dont started",
      hour,
      bodyCard: toDoBody,
      titleCard: titleToDo,
    });
  };

  const removeColumn = async (e) => {
    e.preventDefault();
    await deleteDocument(id.id);
    navigate("/");
  };

  return (
    <ColumnContainer>
      <ButtonBack />
      <AddCard
        onClick={() => {
          setCreating(true);
        }}
      >
        Add Card
      </AddCard>
      <RemoveCard onClick={(e) => removeColumn(e)}>Remove Card</RemoveCard>
      {document && (
        <DivColumn>
          <Columns
            idColumn={id.id}
            color={document.color}
            children={document.nameColumn}
          ></Columns>
        </DivColumn>
      )}
      {creating && (
        <CreatingToDo>
          <CardContent onSubmit={handleSubmit}>
            <CardInputs>
              <label>
                <input
                  type="text"
                  required
                  name="title"
                  placeholder="Card Title"
                  value={titleToDo}
                  onChange={(e) => setTitleToDo(e.target.value)}
                />
              </label>
              <label>
                <input
                  type="textarea"
                  required
                  name="body"
                  value={toDoBody}
                  placeholder="Card Body"
                  onChange={(e) => setToDoBody(e.target.value)}
                />
              </label>
            </CardInputs>
            <Date>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="time"
                required
                value={hour}
                onChange={(e) => setHour(e.target.value)}
              />
            </Date>

            <ShowHelp help={help} onClick={() => setHelp(!help)}>
              <p>
                <span></span> nao iniciado
              </p>
              <p>
                <span></span> em andamento
              </p>
              <p>
                <span></span> concluido
              </p>
              <div></div>
            </ShowHelp>
            <CreateCard>
              <button>Create</button>
            </CreateCard>
          </CardContent>
        </CreatingToDo>
      )}
    </ColumnContainer>
  );
};

export default Column;
