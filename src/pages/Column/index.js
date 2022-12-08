import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import Columns from "../../components/Columns";
import { AddCard, ColumnContainer, CreatingToDo } from "./styles";
import { useState } from "react";

const Column = () => {
  const id = useParams();
  const [creating, setCreating] = useState(false);
  const { document } = useFetchDocument("columns", id.id);

  return (
    <ColumnContainer>
      <AddCard
        onClick={() => {
          setCreating(true);
        }}
      >
        Add Card
      </AddCard>
      {document && (
        <Columns
          idColumn={id.id}
          color={document.color}
          children={document.nameColumn}
        ></Columns>
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
                  value={titleCard}
                  onChange={(e) => setTitleCard(e.target.value)}
                />
              </label>
              <label>
                <input
                  type="textarea"
                  required
                  name="body"
                  value={bodyCard}
                  placeholder="Card Body"
                  onChange={(e) => setBodyCard(e.target.value)}
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

            <ShowHelp help={help}>
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
