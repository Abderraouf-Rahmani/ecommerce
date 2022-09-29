import React from "react";
import ActionButton from "../components/buttons/ActionButton";

const canceled = () => {
  return (
    <>
      <div className="container cancel-container">
        <h2>🤔It looks like you&apos;ve canceled your order</h2>
        <ActionButton text="Keep Browsing" link="/category/all" />
      </div>
    </>
  );
};

export default canceled;
