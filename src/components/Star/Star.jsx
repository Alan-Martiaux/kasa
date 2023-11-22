import solidStar from "../../../src/asset/solidStar.png";
import emptyStar from "../../asset/emptyStar.png";

function Star(star) {
  const Rate = star.Rate;
  const nbStar = [1, 2, 3, 4, 5];

  return (
    <div>
      {nbStar.map((star, index) =>
        Rate >= star ? (
          <img key={index} src={solidStar} alt="solidStar" />
        ) : (
          <img key={index} src={emptyStar} alt="emptyStar" />
        )
      )}
    </div>
  );
}

export default Star;
