import React from "react";

import { useParams, Navigate } from "react-router-dom";
import ArrayLogements from "../../data/location.json";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import Star from "../../components/Star/Star";
import Slider from "../../components/slider/slider";

function Logements() {
  const { id } = useParams();
  const LogLoc = ArrayLogements.find((location) => location.id === id);

  if (!LogLoc) {
    return <Navigate to="/Error" />;
  }

  document.title = `KASA -> ${LogLoc.title}`;

  const {
    equipments,
    tags,
    pictures,
    location,
    title,
    rating,
    description,
    host,
  } = LogLoc;

  return (
    <div className="ficheLogement">
      <Slider slides={pictures} />
      <section className="ficheLogement__PartOne">
        <div className="titleandLocation">
          <h1>{title}</h1>
          <h3>{location}</h3>
          <div className="Tag">
            {tags.map((tag) => (
              <Tag key={tag} className="TagItem" nom={tag} />
            ))}
          </div>
        </div>
        <div className="hostandRating">
          <div className="host">
            <p>{host.name} </p> <img src={host.picture} alt={host.name} />{" "}
          </div>
          <div className="Rating">
            <Star Rate={rating} />
          </div>
        </div>
      </section>

      <section className="ficheLogement__PartTwo">
        <Collapse
          className="collapse"
          title="Description"
          content={description}
        />
        <Collapse className="collapse" title="Equipements">
          <article className="Equipement">
            <ul className="EquipemetTitle">
              {equipments.map((equip, index) => (
                <li key={index}>
                  <div className="equip-container">
                    <span>{equip}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </Collapse>
      </section>
    </div>
  );
}

export default Logements;
