
import React, { useState } from 'react';
import { init, sendForm } from 'emailjs-com';
init('3ovJY6M9_VImVPAu3');


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const templateParams = {
      first_name: name,
      from_email: email,
      msg: message,
    };
    
    // Send email using EmailJS
    sendForm('default_service', 'template_qsvtpv6', '#contact-form','3ovJY6M9_VImVPAu3', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });
  };


  return (
    <div  name="contact" className="bg-gray-900 py-8">
      <div className="max-w-screen-lg mx-auto px-4">
      <div className='text-center'>
        <h2 className="mt-2 text-3xl font-extrabold text-cyan-500 tracking-wide uppercase">Contact Me</h2>
     
        <p className="mt-2 mb-8 text-gray-300 font-semibold tracking-tight sm:text-base"></p>
        </div>
        <form id="contact-form" className="mx-auto max-w-md" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"
              rows="4"
              placeholder="How can I assist you?"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </div>
          <div className="text-center">
          <button
        type="submit"
        className="w-full px-4 py-3 rounded-lg shadow-lg text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline-gray transition-colors duration-300"
          >
        Submit
      </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
