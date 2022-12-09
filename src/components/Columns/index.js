//STYLES
import { Title, ContainerColumns, ColumnHeader } from "./styles";

//HOOKS
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

//COMPONENTS
import Cards from "../Cards";

function Columns({ children, color, idColumn, home = null }) {
  const { documents } = useFetchDocuments(`columns/${idColumn}/cards`);
  return (
    <ContainerColumns color={color}>
      <ColumnHeader home={home}>
        <Title>
          {<i className="fa-solid fa-circle"></i>}
          <h4>{children}</h4>
          {!home && <i className="fa-solid fa-circle"></i>}
        </Title>
        {home && <i className="fa-regular fa-hand-pointer"></i>}
      </ColumnHeader>
      {documents && documents.length > 0 && home && (
        <Cards
          home={home}
          color={color}
          date={documents[0].date}
          id={documents[0].id}
          hour={documents[0].hour}
          body={documents[0].bodyCard}
          cardTitle={documents[0].titleCard}
          progress={documents[0].progress}
          columnIndex={idColumn}
          createdAt={documents[0].createdAt}
        />
      )}

      {documents &&
        !home &&
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
              columnIndex={idColumn}
              createdAt={card.createdAt}
            />
          );
        })}
      {documents && home && documents.length > 1 && <span>...</span>}
    </ContainerColumns>
  );
}

export default Columns;
