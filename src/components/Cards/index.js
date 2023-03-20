//STYLES
import {
  Card,
  Date,
  CardHeader,
  CardBody,
  Loading,
  Completed,
  TitleAndCheck,
} from "./styles";

//HOOKS
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";
import { useState } from "react";

function Cards({
  home,
  date,
  hour,
  cardTitle,
  body,
  progress,
  color,
  id,
  columnIndex,
  createdAt,
}) {
  const { updateDocument } = useUpdateDocument(`columns/${columnIndex}/cards`);
  const { deleteDocument } = useDeleteDocument(`columns/${columnIndex}/cards`);
  const [loadingg, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const handleProgress = async (progress) => {
    setLoading(true);
    if (home) {
      return;
    }
    let statusCard = progress;
    if (progress === "dont started") {
      statusCard = "in progress";
    } else if (progress === "in progress") {
      statusCard = "finished";
    } else if (progress === "finished") {
      statusCard = "dont started";
    }

    await updateDocument(id, {
      bodyCard: body,
      createdAt,
      date,
      hour,
      titleCard: cardTitle,
      progress: statusCard,
    });
    setLoading(false);
  };

  const handleDelete = async (id) => {
    setLoadingDelete(true);

    await deleteDocument(id);

    setLoadingDelete(false);
  };

  return (
    <Card>
      <CardHeader>
        <TitleAndCheck>
          <Completed progress={progress} loadingg={loadingg}>
            <div onClick={() => handleProgress(progress)}></div>
          </Completed>
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
      <Loading>{loadingDelete && <p>Loading...</p>}</Loading>
    </Card>
  );
}

export default Cards;
