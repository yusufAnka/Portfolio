import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css';
import { MdMarkEmailRead } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('vksnMNJVjS7WoET2zVLV0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id= 'contact'>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdMarkEmailRead className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yusufanka54@gmail.com</h5>
            <a href="mailto:yusufanka54@gmail.com">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+234 7068284460</h5>
            <a href="https://api.whatsapp.com/send?phone+23407068284460">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}
export default Contact;
