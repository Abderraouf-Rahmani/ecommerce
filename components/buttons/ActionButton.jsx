import Link from "next/link";
import React from "react";
import buttonStyles from "./ActionButton.module.css";

const ActionButton = ({ text, link }) => {
  return (
    <Link href={link}>
      <a className={buttonStyles.actionBtn}>{text}</a>
    </Link>
  );
};

export default ActionButton;
