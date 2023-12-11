import React from "react";

const PaymentError = (props) => {
  debugger
  return (
    <div className="message_container">
      <div style={{ border: "2px solid  #FF395B" }} className="message_box">
        <div className="message_box_left">
        </div>
        <div style={{ color: "#FF395B" }} className="message_box_right">
          Payment Error
        </div>
      </div>
    </div>
  );
};

export default PaymentError;
