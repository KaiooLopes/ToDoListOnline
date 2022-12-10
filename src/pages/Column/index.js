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
  CreateCard,
  DivColumn,
  RemoveCard,
  ConfirmRemove,
  ConfirmText,
  Btns,
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
  const [confirmRemove, setConfirmRemove] = useState(false);
  const { document } = useFetchDocument("columns", id.id);
  const { insertDocument } = useInsertDocuments(`columns/${id.id}/cards`);
  const { deleteDocument } = useDeleteDocument(`columns`);

  const [titleToDo, setTitleToDo] = useState("");
  const [date, setDate] = useState("");
  const [toDoBody, setToDoBody] = useState("");
  const [hour, setHour] = useState("");

  const reset = () => {
    setTitleToDo("");
    setDate("");
    setToDoBody("");
    setHour("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await insertDocument({
      date,
      progress: "dont started",
      hour,
      bodyCard: toDoBody,
      titleCard: titleToDo,
    });
    setCreating(false);
    reset();
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
          if (confirmRemove) {
            return;
          }
          setCreating(true);
        }}
      >
        Add Card
      </AddCard>
      <RemoveCard
        onClick={(e) => {
          if (creating) {
            return;
          }
          setConfirmRemove(true);
        }}
      >
        Remove Column
      </RemoveCard>
      <ConfirmRemove confirmRemove={confirmRemove}>
        <ConfirmText>
          <h3>Are you sure you want to delete?</h3>
          <p>This will clear all your cards from this column.</p>
        </ConfirmText>
        <Btns>
          <button onClick={(e) => removeColumn(e)}>Yes</button>
          <button onClick={() => setConfirmRemove(false)}>No</button>
        </Btns>
      </ConfirmRemove>
      {document && (
        <DivColumn>
          <Columns
            idColumn={id.id}
            color={document.color}
            children={document.nameColumn}
          ></Columns>
        </DivColumn>
      )}
      <CreatingToDo creating={creating}>
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
          <CreateCard>
            <button>Create</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setCreating(false);
                reset();
              }}
            >
              Cancel
            </button>
          </CreateCard>
        </CardContent>
      </CreatingToDo>
    </ColumnContainer>
  );
};

export default Column;
