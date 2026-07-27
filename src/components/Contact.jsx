import { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

const contactDetails = [
  { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FaPhoneAlt, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s+/g, '')}` },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'Connect with me', href: personalInfo.linkedin },
  { icon: FaGithub, label: 'GitHub', value: 'See my code', href: personalInfo.github },
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | success

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend is connected — this simply simulates a successful submission.
    // Replace with a real API call, or a service like Formspree / EmailJS as needed.
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900/40">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm">
            Let's talk
          </p>
          <h2 className="section-title mt-2">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          {/* Contact details */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card p-5 flex items-center gap-4 hover:-translate-y-1"
              >
                <span className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    {label}
                  </span>
                  <span className="block text-sm font-medium text-gray-800 dark:text-gray-100 break-all">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 card p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hello..."
                className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow duration-200 resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              <FaPaperPlane size={14} /> Send Message
            </button>

            {status === 'success' && (
              <p role="status" className="text-sm font-medium text-green-600 dark:text-green-400">
                ✓ Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
