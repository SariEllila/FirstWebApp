// import React, { useEffect } from "react";
// import axios from "axios";

// const PaymentSuccess = () => {
//     useEffect(() => {
//       const getSessionData = async () => {
//         try {
//             debugger;
//             const sessionId = JSON.parse(localStorage.getItem("sessionId"));

//             const response = await axios.get(
//                 `http://localhost:4242/payment/checkout-session?sessionId=${sessionId}`
//               );

//               localStorage.removeItem("sessionId");

//               console.log("== response ==>", response);

//             } catch (error) {
//                 debugger;
//               }
//             };
//             getSessionData();
//           }, []);

//           return (
//             <div className="message_container">
//               <div style={{ border: "2px solid  #35BFDE" }} className="message_box">
//                 <div className="message_box_left">
//                 </div>
//                 <div style={{ color: "#35BFDE" }} className="message_box_right">
//                   Payment Successful
//                 </div>
//               </div>
//             </div>
//           );
//         };
        
//         export default PaymentSuccess;

