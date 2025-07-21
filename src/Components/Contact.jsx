import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import messageAnimation from '../assets/message.json';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const sendEmail = e => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    emailjs
      .sendForm(
        'service_ksw9t5i', // Replace with your EmailJS service ID
        'template_9lcf0yq', // Replace with your EmailJS template ID
        form.current,
        'OyANE5F6WMAMvRsX_' // Replace with your EmailJS public key
      )
      .then(
        result => {
          setSendStatus({
            success: true,
            message: 'Message sent successfully!',
          });
          form.current.reset();
        },
        error => {
          setSendStatus({
            success: false,
            message: `Failed to send: ${error.text}`,
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div id="contact" className="bg-gray-900">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl md:text-5xl text-center font-bold py-10 font-[sora] text-white"
      >
        Get in Touch—Let's Connect
      </motion.h2>

      <div className="font-[sora] text-white pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl w-full bg-gray-800 border border-gray-700 p-6 md:p-8 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-4 md:p-6">
            <p className="text-gray-300 mb-6 text-center md:text-left">
              Send me a message and I'll get back to you at{' '}
              <a
                href="mailto:your-email@example.com"
                className="text-blue-400 hover:underline"
              >
                your-email@example.com
              </a>
            </p>

            {sendStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 p-3 rounded-md ${
                  sendStatus.success
                    ? 'bg-green-900 text-green-200'
                    : 'bg-red-900 text-red-200'
                }`}
              >
                {sendStatus.message}
              </motion.div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="What's your good name?"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="What's your email address?"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="How can I help you?"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full ${
                  isSending
                    ? 'bg-gray-600'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                } text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-lg`}
              >
                {isSending ? 'SENDING...' : 'SEND MESSAGE'}
              </motion.button>
            </form>
          </div>

          {/* Animation Section */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="w-full h-full min-h-[300px] rounded-lg overflow-hidden"
            >
              <Lottie
                animationData={messageAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
