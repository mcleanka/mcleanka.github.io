import React from "react";
import Button from "react-bootstrap/Button";
import { scrollToTop } from "../helpers/scroll";
import { FaArrowUp } from "react-icons/fa";
import './GoTopButton.scss'

const GoTopButton = ({ visible = true }) => (
	<Button
		className={`back-to-top-btn ${visible && 'back-to-top-btn--visible'}`}
		onClick={scrollToTop}
		variant="primary"
	>
		<FaArrowUp />
	</Button>
);

export default GoTopButton;
