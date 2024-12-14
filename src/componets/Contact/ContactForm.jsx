import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className="text-center" id="ContactForm">
        <h1 className="font-bold text-4xl md:text-7xl mb-10">Hire Me.</h1>
        <p className="md:px-80  text-xl text-gray-500">
          I am available for freelance work. Connect with me via phone:{' '}
          <span className="text-red-400"> 01606 081657 </span>or email:{' '}
          <span className="text-red-400">sahadat.hossen143515@gmail.com</span>
        </p>
      </div>
      <div className="lg:flex lg:flex-row-reverse ">
      <div className="basis-2/4  flex items-center ">
          
          <img className='rounded-[40px] w-[80%] h-[440px] mx-auto ' src="public/images/IMG20240809181924-removebg-preview (1).png" alt="" />
        </div>
        <div className="w-[90%] lg:basis-1/2 mx-auto bg-white p-8 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        
      </div>
    </>
  );
}

export default ContactForm;
