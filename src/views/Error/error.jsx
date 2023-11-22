import { Link } from "react-router-dom";

function Error() {
  document.title = `KASA -> Erreur `;
  return (
    <div>
      <div className="error">
        <h1>404</h1>
        <p className="desktop">Oups! La page que vous demandez n'existe pas.</p>
        <div className="responsive">
          <p>Oups! La page que</p>
          <p>vous demandez n'existe pas.</p>
        </div>

        <Link className="error_link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default Error;
