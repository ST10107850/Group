import React from "react";

function Contact() {
  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="flex flex-wrap -mx-4">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                  id="message"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Location Map */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14320.2566982665!2d28.0318952!3d-26.1945906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c1b6c0d6957%3A0xfbe0d8fbd0b2ad62!2sTshimologong%20Precinct!5e0!3m2!1sen!2sza!4v1724407861146!5m2!1sen!2sza"
                width="100%"
                height="527"
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
                className="border-0 rounded shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
