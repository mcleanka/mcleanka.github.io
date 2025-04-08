import React from "react";
import { scrollToTop } from "../helpers/scroll";
import { FaArrowUp } from "react-icons/fa";

const GoTopButton = ({ visible = true }) => (
  <div
    className={`back-to-top-btn ${visible && "back-to-top-btn--visible"}`}
    onClick={scrollToTop}
  >
    <FaArrowUp />
  </div>
);

export default GoTopButton;
