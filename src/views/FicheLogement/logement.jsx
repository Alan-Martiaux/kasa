import React from "react";

import { useParams } from "react-router-dom";
import ArrayLogements from "../../data/location.json";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import Equip from "../../components/Equipements/Equipements";
import Star from "../../components/Star/Star";
import Slider from "../../components/slider/slider";

function Logements() {
  const { id } = useParams();
  const LocationID = ArrayLogements.find((location) => location.id === id);

  const { equipments, tags, pictures } = LocationID;

  console.log(LocationID, equipments, pictures);

  return (
    <div className="ficheLogement">
      <h1>{LocationID.title}</h1>
      <Slider slides={pictures} />

      <div className="Tag">
        {tags.map((tag) => (
          <Tag nom={tag} />
        ))}
      </div>
      <Collapse title="Description" content={LocationID.description} />
      <div className="Rating">
        <Star Rate={LocationID.rating} />
      </div>
      <Collapse
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
    </div>
  );
}

export default Logements;
