import { useState } from "react";
import up from "../../asset/up.png";
import down from "../../asset/down.png";

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
          <img
            src={up}
            alt="Flêche UP"
            className="collapse_header_icon arrowUp"
          />
        ) : (
          <img
            src={down}
            alt="Flêche down"
            className="collapse_header_icon arrowDown"
          />
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
