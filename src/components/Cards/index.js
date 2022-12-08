//STYLES
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

//HOOKS
import { useState } from "react";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

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

  return (
    <Card>
      <CardHeader>
        <TitleAndCheck>
          <Completed progress={progress}>
            <div onClick={() => handleProgress(progress)}></div>
          </Completed>
          <h3>{cardTitle}</h3>
        </TitleAndCheck>
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