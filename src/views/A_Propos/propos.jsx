import Banner from "../../components/Banner/banner";
import banner_img from "../../asset/banner_Propos.png";

function Propos() {
  return (
    <>
      <Banner image={banner_img} text="" />
      <div className="gallery">
        <h1>👷🏼‍♂️ Comming Soon 🏗️ </h1>
        {/* Futrue boucle pour afficher les composant card X fois */}
      </div>
    </>
  );
}

export default Propos;
