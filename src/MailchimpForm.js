import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";


const url = "https://gmail.us9.list-manage.com/subscribe/post?u=f781c1fc1510a1ae4a7684179&amp;id=d3e2eebd35";





// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />


export default SimpleForm;



