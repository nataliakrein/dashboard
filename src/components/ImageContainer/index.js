import React from "react";
import "./style.scss";

export const ImageContainer = ({ reference, src }) => {
  const ref = React.useRef(null);
  return (
    <img
      className="image-container"
      ref={reference}
      src={src}
      alt={"Imagem referente a empresa cadastrada ou a ser cadastrada"}
    />
  );
};
