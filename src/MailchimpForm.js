import React from 'react';

import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://gmail.us9.list-manage.com/subscribe/post?u=f781c1fc1510a1ae4a7684179&amp;id=d3e2eebd35";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />

// use the render prop and your custom form
// const CustomForm = () => (
//   <MailchimpSubscribe
//     url={url}
//     render={({ subscribe, status, message }) => (
//       <div>
//         <MyForm onSubmitted={formData => subscribe(formData)} />
//         {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//         {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
//         {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
//       </div>
//     )}
//   />
// )

export default SimpleForm;



