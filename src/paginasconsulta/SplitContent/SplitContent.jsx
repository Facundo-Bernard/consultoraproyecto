import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SplitContent.css"; // animaciones

export default function SplitContent({ left = {}, right = {} }) {
  const leftWidth = left.width || "50%";
  const rightWidth = right.width || "50%";
  const leftType = left.type || "text";
  const rightType = right.type || "text";
  const leftContent = left.content || "";
  const rightContent = right.content || "";

  return (
    <div className="d-flex justify-content-between align-items-center w-100 split-container">
      {/* Lado izquierdo */}
      <div
        className="split-item"
        style={{
          flexBasis: leftWidth,
          transition: "all 0.5s ease",
        }}
      >
        {leftType === "text" ? (
          <p className="mb-0 split-text">{leftContent}</p>
        ) : (
          <img
            src={leftContent}
            alt="left"
            className="img-fluid split-image"
            style={{ maxWidth: "100%", transition: "all 0.5s ease" }}
          />
        )}
      </div>

      {/* Lado derecho */}
      <div
        className="split-item text-end"
        style={{
          flexBasis: rightWidth,
          transition: "all 0.5s ease",
        }}
      >
        {rightType === "text" ? (
          <p className="mb-0 split-text">{rightContent}</p>
        ) : (
          <img
            src={rightContent}
            alt="right"
            className="img-fluid split-image"
            style={{ maxWidth: "100%", transition: "all 0.5s ease" }}
          />
        )}
      </div>
    </div>
  );
}
