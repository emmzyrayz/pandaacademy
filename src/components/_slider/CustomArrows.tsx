import React from "react";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

const CustomPrevArrow = (props: any) => {
  const {className, style, onClick} = props;
  return (
    <button
      className={className}
      style={{...style, display: "block"}}
      onClick={onClick}
    >
      <FaAngleLeft />
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const {className, style, onClick} = props;
  return (
    <button
      className={className}
      style={{...style, display: "block"}}
      onClick={onClick}
    >
      <FaAngleRight />
    </button>
  );
};

export {CustomPrevArrow, CustomNextArrow};