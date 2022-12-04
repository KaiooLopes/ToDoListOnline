import { useState } from "react";
import { useUpdateDocument } from "../../../../hooks/useUpdateDocument";
import { useDeleteDocument } from "../../../../hooks/useDeleteDocument";
import {
  Card,
  Date,
  CardHeader,
  CardBody,
  Completed,
  TitleAndCheck,
  ButtonRemove,
  ConfirmRemove,
} from "./styles";

function Cards({
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
  const { deleteDocument } = useDeleteDocument(`columns/${columnIndex}/cards`);
  const [confirmRemove, setConfirmRemove] = useState();
  const { updateDocument } = useUpdateDocument(`columns/${columnIndex}/cards`);

  const handleProgress = (progress) => {
    let statusCard = progress;
    if (progress === "dont started") {
      statusCard = "in progress";
    } else if (progress === "in progress") {
      statusCard = "finished";
    } else if (progress === "finished") {
      statusCard = "dont started";
    }

    updateDocument(id, {
      bodyCard: body,
      createdAt,
      date,
      hour,
      titleCard: cardTitle,
      progress: statusCard,
    });
  };

  const handleRemove = () => {
    deleteDocument(id);
    setConfirmRemove(false);
  };

  return (
    <Card>
      <CardHeader>
        <TitleAndCheck>
          <Completed progress={progress}>
            <div onClick={() => handleProgress(progress)}></div>
          </Completed>
          <h3>{cardTitle}</h3>
        </TitleAndCheck>
        <ButtonRemove>
          <button onClick={() => setConfirmRemove(true)}>X</button>
        </ButtonRemove>
      </CardHeader>
      <CardBody color={color}>
        <p>{body}</p>
      </CardBody>
      <Date>
        <p>{date}</p>
        <p>{hour}</p>
      </Date>
      <ConfirmRemove confirmRemove={confirmRemove}>
        <p>Você deseja mesma excluir?</p>
        <div>
          <button onClick={() => handleRemove()}>Sim</button>
          <button onClick={() => setConfirmRemove(false)}>Não</button>
        </div>
      </ConfirmRemove>
    </Card>
  );
}

export default Cards;
