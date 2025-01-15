import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useState } from 'react';
import { FiPhone } from 'react-icons/fi'
const Contact = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate sending the email using a server or third-party service
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Failed to send the message.');
    }
  };

  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="mx-auto h-full flex flex-col justify-center items-center">
        <motion.h2
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={fadeIn('down', 0.4)}
          className="h2 text-4xl"
        >
          Get In <span className="text-accent">Touch</span>
        </motion.h2>

        <motion.div
          className="mt-2 w-full max-w-md "
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={fadeIn('up', 0.4)}
        >
          <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-y-2 p-2 rounded-lg shadow-md"
              >
              <input
              type="text"
              placeholder="Name"
              className="p-1 border border-gray-300 rounded-lg text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              />
              <input
              type="email"
              placeholder="Email"
              className="p-1 border border-gray-300 rounded-lg text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
              <textarea
              placeholder="Message"
              className="p-1 border border-gray-300 rounded-lg text-black"
              rows="2" // Reduced rows for a smaller textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              ></textarea>
              <button
              type="submit"
              className="bg-accent text-white py-1 mt-2 px-8 rounded-lg mx-auto text-center hover:bg-accent/90 transition-all"
              >
              Send
              </button>
          </form>

        </motion.div>

        <motion.div
          className="mt-6 text-lg"
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={fadeIn('up', 0.4)}
        >
          <p>Contact me directly</p>
          <p className="text-accent flex items-center justify-center gap-2">
    <FiPhone className="text-xl" /> +880 01841313444
  </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
