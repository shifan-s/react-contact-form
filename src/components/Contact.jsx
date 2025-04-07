
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
const Contact = () => { 
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_pz6i1pc', 'template_zop7tb7', form.current, {
          publicKey: 'fB-usc7ZWrsbw4ckv',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert ("Message send")
            e.target.reset()
          },
          (error) => {
            console.log('FAILED...', error.text); 
            alert ("Something went Wrong ! ",error.text)
          },
        );
    };
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-8">
      <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-semibold text-blue-600 mb-6 sm:text-3xl">Leave your message here</h1>
        <form className="space-y-6 " ref={form} onSubmit={sendEmail}>
          <div>
          <input
              type="text"
              name='name'
              placeholder="Enter your name"
              className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            required/>
          </div>
          <div>
            <input
              type="email"   
              name ="email"
              placeholder="Enter your email"
              className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            required/>
          </div>
          <div>
            <textarea
              name='message'
              placeholder="Enter your message"
              rows="6"
              className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
           required />
          </div>

          <div>
            <button 
              type="submit"
              className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-md shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            >
              Let's Talk
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;



  