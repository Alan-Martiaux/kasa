import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ title, cover, id }) {
  return (
    <article className="Card">
      <Link to={`/logement/${id}`}>
        <div className="ContainerCard">
          <img src={cover} alt="Location" className="img_location_card"></img>
          <div className="cardbackground"></div>
          <h1 className="cardTitle">{title}</h1>
        </div>
      </Link>
    </article>
  );
}

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

export default Card;
//  <img src={picture} alt="Img Location" />
