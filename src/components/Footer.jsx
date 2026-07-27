import { FaArrowUp } from 'react-icons/fa'
import { personalInfo, socialLinks } from '../data/portfolioData'

const Footer = () => {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-400 text-center sm:text-left">
          © {year} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target={url.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={name}
              className="p-2.5 rounded-full bg-gray-800 hover:bg-primary-600 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-gray-800 hover:bg-primary-600 hover:text-white transition-colors duration-200"
        >
          <FaArrowUp size={12} /> Back to top
        </button>
      </div>
    </footer>
  )
}

export default Footer
