import React from "react";
import Banner from "../../components/Banner/banner";
import banner_img from "../../asset/banner_Home.png";
import ArrayLogements from "../../data/location.json";
import Card from "../../components/Card/Card";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    <link rel="shortcut icon" type="image/png" href="/LOGO.png" />;

    document.title = `KASA`;
  });
  return (
    <>
      <Banner image={banner_img} text="Chez vous, partout ailleurs" />
      {/* <div className="centerPages"> */}
      <section className="gallery">
        {ArrayLogements.map((location) => (
          <Card
            cover={location.cover}
            title={location.title}
            id={location.id}
          />
        ))}
      </section>
      {/* Futrue boucle pour afficher les composant card X fois */}
      {/* </div> */}
    </>
  );
}

export default Home;
//<h1>👷🏼‍♂️ Comming Soon 🏗️ </h1>
