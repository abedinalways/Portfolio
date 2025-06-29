import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import messageAnimation from '../assets/message.json'; 

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'ser service_ksw9t5i',
        'template_9lcf0yq',
        'Egph4_8LTZE8ncx-7' 
      )
      .then(
        result => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        error => {
          alert('Failed to send message, please try again.');
          console.log(error.text);
        }
      );
  };

  return (
    <div id='contact'>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl md:text-5xl text-center font-bold mb-4 font-[sora] text-white"
      >
        Get in Touch—Let's Connect
      </motion.h2>
      <div className="font-[sora] text-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full bg-gray-950 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between"
        >
          <div className="w-full  p-6">
            <p className="text-gray-400 mb-6 text-center md:text-left">
              Send me a message and I'll get back to you at{' '}
              <a
                href="mailto:454250sorif@gmail.com"
                className="text-blue-400 hover:underline"
              >
                sheikh.minhajul1205045.com
              </a>
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-500 text-sm mb-6 text-center md:text-left"
            >
              Have questions or ideas? Let's talk! 📧
            </motion.p>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="What's your good name?"
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="What's your email address?"
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="How can I help you?"
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <motion.button
                type="submit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="w-full bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-md font-semibold transition duration-300"
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </div>

          {/* Banner Section with Lottie Animation */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="w-full h-64 bg-yellow-600 rounded-lg flex items-center justify-center"
            >
              <Lottie
                animationData={messageAnimation}
                loop={true}
                autoplay={true}
                style={{ width: '80%', height: '80%' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
