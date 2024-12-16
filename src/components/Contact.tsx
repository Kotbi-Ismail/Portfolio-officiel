import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    emailjs
      .send(
        'service_c30bpbc',
        'template_yhqrkv8',
        {
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'SLzoeBNo0zxfTlEP6'
      )
      .then(
        (response) => {
          console.log('Message sent successfully:', response);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error sending message:', error);
          setStatus('Failed to send message. Please try again.');
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-200 mb-12">
          Contact Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-200">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-900 dark:text-gray-200">kotbi.ismail1@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-900 dark:text-gray-200">+212 615524195</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-900 dark:text-gray-200">Mohammedia, Maroc</span>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                  placeholder="Your message..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          {status && (
            <p
              className={`text-center mt-4 ${
                status.includes('success') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
