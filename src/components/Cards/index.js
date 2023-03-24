//STYLES
import { Card, Date, CardHeader, CardBody, TitleAndCheck } from "./styles";

//HOOKS
import { useDeleteDocument } from "../../hooks/useDeleteDocument";
import { useState } from "react";
import Loading from "../../components/Loading";

function Cards({ home, date, hour, cardTitle, body, color, id, columnIndex }) {
  const { deleteDocument } = useDeleteDocument(`columns/${columnIndex}/cards`);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const handleDelete = async (id) => {
    setLoadingDelete(true);

    await deleteDocument(id);

    setLoadingDelete(false);
  };

  if (loadingDelete) {
    return <Loading />;
  }

  return (
    <Card>
      <CardHeader>
        <TitleAndCheck>
          <h3>{cardTitle}</h3>
        </TitleAndCheck>
        {!home && <button onClick={() => handleDelete(id)}>X</button>}
      </CardHeader>
      <CardBody color={color}>
        <p>{body}</p>
      </CardBody>
      <Date>
        <p>{date}</p>
        <p>{hour}</p>
      </Date>
    </Card>
  );
}

export default Cards;
