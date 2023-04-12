import React from "react";
import { BsEnvelopeAt, BsWhatsapp,  } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact () {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bn8x0xh', 'template_a8afgnm', form.current, 'VQdGujISWRdBbnz6a')
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


    return (
        <div id="contact" className="contact_1">
            <h3 className="slideh3">Get in touch</h3>
            <h1>Contact</h1>
        <div className="contact_2">
        <div className="contact_3">    
        <div className="contact_4">
          <BsEnvelopeAt className="contact_icon" />
         <h2>Email</h2>
         <p>dareisrael4@gmail.com</p>
         <a href="mailto:dareisrael@gmail.com">send message</a>
        </div>
        <div className="contact_4">
         <RiMessengerLine className="contact_icon" />
         <h2>Messenger</h2>
         <p>Dare Israel</p>
         <a href="http://m.me/unique.ben.568">send message</a>

        </div>
        <div className="contact_4">
        <BsWhatsapp className="contact_icon" />
         <h2>WHatsApp</h2>
         <p>+234 70 306 610 43</p>
         <a href="http://api.whatsapp.com/?phone=+2347030661043">send message</a>

        </div>
        

        
        </div>
         <div className="contact5">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Full Name"></input>
                <input type="text"  name="email" placeholder="Your Email"></input>
                <textarea   name="message" placeholder="Your Message" ></textarea>
                <button type="submit">Send message</button>
            </form>
         </div>
        </div>
        </div>
    )
}

export default Contact;