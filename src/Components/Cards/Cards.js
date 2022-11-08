import "./Cards.css";
import image from "../Cards/images/FemalecardPic-img.png";

function Cards(props) {
  const { cardTitle, label } = props;
  return (
    <div className="card">
      <p className="card-title">{cardTitle}</p>
      <div className="card-info">
        <img className="card-info-img" alt="Foto de perfil" src={image} />
        <p className="card-info-label">{label}</p>
      </div>
    </div>
  );
}

export default Cards;
