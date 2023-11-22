import React from "react";

function Tag({ nom }) {
  return (
    <div className="tag-container">
      <span>{nom}</span>
    </div>
  );
}

export default Tag;
