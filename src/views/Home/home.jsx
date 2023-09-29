import React from "react";
import Banner from "../../components/Banner/banner";
import banner_img from "../../asset/banner_Home.png";

import logements from "../../data/logements.json";

function Home() {
  console.log(logements);

  return (
    <>
      <Banner image={banner_img} text="Chez vous, partout ailleurs" />
      <div className="gallery">
        <h1>👷🏼‍♂️ Comming Soon 🏗️ </h1>
        {/* Futrue boucle pour afficher les composant card X fois */}
      </div>
    </>
  );
}

export default Home;
