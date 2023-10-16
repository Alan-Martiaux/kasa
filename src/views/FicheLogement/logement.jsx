import React from "react";

import { useParams } from "react-router-dom";
import ArrayLogements from "../../data/location.json";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import Equip from "../../components/Equipements/Equipements";
import Star from "../../components/Star/Star";
import Slider from "../../components/slider/slider";

import Error from "../Error/error";

function Logements() {
  const { id } = useParams();
  const LogLoc = ArrayLogements.find((location) => location.id === id);

  if (!LogLoc) {
    return <Error />;
  }
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
              <Tag className="TagItem" nom={tag} />
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
        <Collapse
          className="collapse"
          title="Equipements"
          content={equipments.map((equip) => (
            <article className="Equipement">
              <ul className="EquipemetTitle">
                <li>
                  <Equip nom={equip} />
                </li>
              </ul>
            </article>
          ))}
        />
      </section>
    </div>
  );
}

export default Logements;
