import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const down = <FontAwesomeIcon icon={faChevronDown} />;
const up = <FontAwesomeIcon icon={faChevronUp} />;

const Collapse = ({ title, content, children }) => {
  const [openTab, setOpenTab] = useState(false);

  const openTabHandler = () => {
    setOpenTab((openTab) => !openTab);
  };

  return (
    <section className="collapse">
      <div onClick={openTabHandler} className="collapse_header">
        <h2 className="collapse_header_title">{title}</h2>

        {!openTab ? (
          <i className="collapse_header_icon arrowUp">{up}</i>
        ) : (
          <i className="collapse_header_icon arrowDown">{down}</i>
        )}
      </div>

      {openTab && (
        <div className="collapse_content">
          {content}
          {children}
        </div>
      )}
    </section>
  );
};

export default Collapse;
