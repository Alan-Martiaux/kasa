import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const down = <FontAwesomeIcon icon={faChevronDown} />;
const up = <FontAwesomeIcon icon={faChevronUp} />;

const Collapse = (props) => {
  const [openTab, setOpenTab] = useState(false);

  const openTabHandler = () => {
    setOpenTab((openTab) => !openTab);
  };

  return (
    <>
      <div
        onClick={openTabHandler}
        className="collapse_header"
        style={{ transform: `translateX(-{30}px)` }}
      >
        <h2 className="collapse_header_title">{props.title}</h2>
        {!openTab ? (
          <i className="collapse_header_icon fa-solid fa-chevron-down">
            {down}
          </i>
        ) : (
          <i className="collapse_header_icon">{up}</i>
        )}
      </div>
      {openTab && <div className="collapse_content">{props.content}</div>}
    </>
  );
};

export default Collapse;
