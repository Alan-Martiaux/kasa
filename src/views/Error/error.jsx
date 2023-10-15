import { Link } from "react-router-dom";
import image_error from "../../asset/404.png";

function Error() {
  return (
    <div>
      <div className="error">
        <img className="img_error" src={image_error} alt="Banniere" />
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link className="error_link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default Error;
