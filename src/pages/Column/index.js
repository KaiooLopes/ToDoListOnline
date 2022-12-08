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
      {creating && <CreatingToDo></CreatingToDo>}
    </ColumnContainer>
  );
};

export default Column;
