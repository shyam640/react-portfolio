import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7o1vgjl','template_mz95oar',form.current,'b2gB8N2PlHRorrBK2').then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   });;
  }
  return (
    <section id='contact'>
      <h5>Get In Touch With Me!!</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h6>shyamvashishtha640@gmail.com</h6>
            <a href='mailto:shyamvashishtha640@gmail.com'>Send A Mail</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon'/>
            <h4>Whatsapp</h4>
            <h6>+91-8817719155</h6>
            <a href='https://api.whatsapp.com/send?phone=918817719155'>Send Whatsapp Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' reequired/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact