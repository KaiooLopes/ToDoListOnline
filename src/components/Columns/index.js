//STYLES
import { Title, ContainerColumns, ColumnHeader } from "./styles";

//HOOKS
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

//COMPONENTS
import Cards from "../Cards";

function Columns({ children, color, columnsId }) {
  const { documents } = useFetchDocuments(`columns/${columnsId}/cards`);
  return (
    <ContainerColumns color={color}>
      <ColumnHeader>
        <Title>
          <i className="fa-solid fa-circle"></i>
          <h4>{children}</h4>
        </Title>
      </ColumnHeader>
      {documents &&
        documents.map((card, i) => {
          return (
            <Cards
              key={i}
              color={color}
              date={card.date}
              id={card.id}
              hour={card.hour}
              body={card.bodyCard}
              cardTitle={card.titleCard}
              progress={card.progress}
              columnIndex={columnsId}
              createdAt={card.createdAt}
            />
          );
        })}
    </ContainerColumns>
  );
}

export default Columns;
