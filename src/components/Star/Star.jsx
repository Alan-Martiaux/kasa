import solidStar from "../../../src/asset/solidStar.png";
import emptyStar from "../../asset/emptyStar.png";

function Star(props) {
  const Rate = props.Rate;
  const nbStar = [1, 2, 3, 4, 5];

  return (
    <div>
      {nbStar.map((star) =>
        Rate >= star ? (
          <img src={solidStar} alt="solidStar" />
        ) : (
          <img src={emptyStar} alt="emptyStar" />
        )
      )}
    </div>
  );
}

export default Star;
