import { useEffect, useState } from "react";
import { useInsertDocuments } from "../../../../hooks/useInsertDocuments";
import { useFetchDocuments } from "../../../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../../../hooks/useDeleteDocument";
import Cards from "../Cards";
import {
  Help,
  Date,
  Title,
  ContainerColumns,
  ColumnHeader,
  ShowHelp,
  CreatingCard,
  RemoveColumn,
  CardInputs,
  CreateCard,
  CardContent,
} from "./styles";

function Columns({ children, color, columns, columnIndex, removingColumn }) {
  const [titleCard, setTitleCard] = useState("");
  const [bodyCard, setBodyCard] = useState("");
  const [creating, setCreating] = useState(false);
  const [help, setHelp] = useState(false);
  const [progress] = useState("dont started");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const { deleteDocument } = useDeleteDocument(`columns`);
  const { documents } = useFetchDocuments(
    `columns/${columns[columnIndex].id}/cards`
  );

  const { insertDocument } = useInsertDocuments(
    `columns/${columns[columnIndex].id}/cards`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    insertDocument({
      titleCard,
      bodyCard,
      date: formatDate(date),
      hour,
      progress,
    });
    setCreating(false);
    reset();
  };

  const reset = () => {
    setTitleCard("");
    setBodyCard("");
    setHour("");
    setDate("");
    setHelp(false);
  };

  const formatDate = (str) => {
    str = str.split("-");
    let newStr = str.reverse().join("/");
    return newStr;
  };

  const handleRemove = () => {
    deleteDocument(`${columns[columnIndex].id}`);
  };

  return (
    <ContainerColumns color={color} removingColumn={removingColumn}>
      <RemoveColumn removingColumn={removingColumn}>
        <button onClick={() => handleRemove()}>X</button>
      </RemoveColumn>
      <ColumnHeader creating={creating}>
        <Title>
          <i className="fa-solid fa-circle"></i>
          <h4>{children}</h4>
        </Title>
        <button
          onClick={() => {
            setCreating(!creating);
            if (!creating) {
              reset();
            }
            setHelp(false);
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </ColumnHeader>
      <CreatingCard creating={creating}>
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
          <Help help={help}>
            <button
              onClick={(e) => {
                e.preventDefault();
                setHelp(!help);
              }}
            >
              <i className="fa-solid fa-question"></i>
            </button>
          </Help>
        </CardContent>
      </CreatingCard>
      {documents &&
        documents.map((card, i) => {
          return (
            <Cards
              color={color}
              date={card.date}
              id={card.id}
              hour={card.hour}
              body={card.bodyCard}
              cardTitle={card.titleCard}
              progress={card.progress}
              key={i}
              columnIndex={columns[columnIndex].id}
              createdAt={card.createdAt}
            />
          );
        })}
    </ContainerColumns>
  );
}

export default Columns;
