//STYLES
import {
  Card,
  Date,
  CardHeader,
  CardBody,
  Completed,
  TitleAndCheck,
} from "./styles";

//HOOKS
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

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

  const handleProgress = (progress) => {
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
        {!home && <button onClick={() => deleteDocument(id)}>X</button>}
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
