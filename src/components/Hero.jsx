import { FaDownload, FaEnvelope } from 'react-icons/fa'
import { personalInfo, socialLinks } from '../data/portfolioData'

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const initials = personalInfo.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-primary-400/30 dark:bg-primary-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-accent-400/30 dark:bg-accent-600/20 rounded-full blur-3xl animate-float [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 sm:w-80 sm:h-80 bg-secondary-400/20 dark:bg-secondary-600/10 rounded-full blur-3xl animate-float [animation-delay:4s]" />
      </div>

      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="order-2 md:order-1 text-center md:text-left animate-fade-in-up">
          <p className="inline-block text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base tracking-wide bg-primary-50 dark:bg-primary-900/30 px-4 py-1.5 rounded-full mb-5">
            👋 Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300">
            {personalInfo.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
            {personalInfo.tagline}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href={personalInfo.resumeUrl} download className="btn-primary w-full sm:w-auto">
              <FaDownload /> Download Resume
            </a>
            <a href="#contact" onClick={scrollToContact} className="btn-secondary w-full sm:w-auto">
              <FaEnvelope /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target={url.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={name}
                className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-md hover:shadow-lg hover:text-primary-600 dark:hover:text-primary-400 hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Profile picture placeholder */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 via-accent-500 to-secondary-500 rounded-full blur-2xl opacity-40 animate-gradient bg-300%" />
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1.5 bg-gradient-to-tr from-primary-500 via-accent-500 to-secondary-500 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                {personalInfo.avatar ? (
                  <img
                    src={personalInfo.avatar}
                    alt={`Portrait of ${personalInfo.name}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-6xl sm:text-7xl font-extrabold text-gray-400 dark:text-gray-500">
                    {initials}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
