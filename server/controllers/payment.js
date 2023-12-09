// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const create_checkout_session = async (req, res) => {
//     try {
//         const { products } = req.body;
//     if (products.length < 1 || !products)
//       return res.send({
//         ok: false,
//         message: "Please select at least 1 product",
//       });


//     const line = products.map((item) => ({
//         price_data: {
//           currency: process.env.CURRENCY,
//           unit_amount: item.price * 100,
//           product_data: {
//             name: item.name,
//             description: item.description,
//           },
//         },
//         quantity: item.quantity,
//       }));

//     session = await stripe.checkout.sessions.create({
//         payment_method_types: process.env.PAYMENT_METHODS,
//         line_items: line,
//         mode: "payment",
//         customer_creation: "always",
//         // ?session_id={CHECKOUT_SESSION_ID} means session ID = query param
//         success_url: `${process.env.DOMAIN}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
//         cancel_url: `${process.env.DOMAIN}/`,
//       });
//       return res.send({ ok: true, sessionId: session.id });
//     } catch (error) {
//         console.log("ERROR =====>", error.raw.message);
//         return res.send({ ok: false, message: error.raw.message });
//       }
//     };


  
// const checkout_session = async (req, res) => {
//     try {
//       const { sessionId } = req.query;

//       const session = await stripe.checkout.sessions.retrieve(sessionId, {
//         expand: ["line_items", "customer"],
//       });

//   const customer = await stripe.customers.retrieve(session.customer.id);
//   return res.send({ ok: true, session, customer });
// } catch (error) {
//   console.log("ERROR =====>", error);
//   return res.send({ ok: false, message: error });
// }
// };
 

//     module.exports = {
//         create_checkout_session,
//         checkout_session,
//       };