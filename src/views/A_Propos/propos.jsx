import Banner from "../../components/Banner/banner";
import banner_img from "../../asset/banner_Propos.png";
import "../../sass/style.css";
import Collapse from "../../components/Collapse/Collapse";

function Propos() {
  return (
    <>
      <Banner image={banner_img} text="" />
      <div className="centerPages">
        <section className="about_collapses">
          <div className="about_collapses_content">
            <Collapse
              title="Fiabilité"
              content="Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et toutes les informations 
                    sont régulièrement vérifiées par nos équipes."
            />
            <Collapse
              title="Respect"
              content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
          perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse
              title="Service"
              content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
          perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse
              title="Sécurité"
              content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
          correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
          locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos hôtes."
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Propos;
