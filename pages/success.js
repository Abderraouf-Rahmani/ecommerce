import React, { useEffect } from "react";
import ActionButton from "../components/buttons/ActionButton";
import notify from "../util/util";
const Success = () => {
  useEffect(() => {
    notify("Your order is confirmed 👍");
  }, []);
  return (
    <div className="container cancel-container">
      <h2>Thank you for your order! 🙏</h2>
      <ActionButton text="Keep Browsing" link="/category/all" />
    </div>
  );
};

export default Success;
