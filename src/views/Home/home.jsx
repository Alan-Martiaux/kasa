import React from "react";
import Banner from "../../components/Banner/banner";
import banner_img from "../../asset/banner_Home.png";
import ArrayLogements from "../../data/location.json";
import Card from "../../components/Card/Card";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    <link rel="shortcut icon" type="image/png" href="/LOGO.png" />;

    document.title = `KASA -> Accueil`;
  });
  return (
    <>
      <Banner image={banner_img} text="Chez vous, partout ailleurs" />

      <section className="gallery">
        {ArrayLogements.map((location, index) => (
          <Card
            key={index}
            cover={location.cover}
            title={location.title}
            id={location.id}
          />
        ))}
      </section>
    </>
  );
}

export default Home;
