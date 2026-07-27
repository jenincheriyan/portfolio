import { FaGraduationCap } from 'react-icons/fa'
import { education } from '../data/portfolioData'

const Education = () => {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm">
            My background
          </p>
          <h2 className="section-title mt-2">Education</h2>
        </div>

        <div className="mt-14 relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent-400 to-secondary-400 sm:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {education.map((item, idx) => (
              <li
                key={item.id}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 ${
                  idx % 2 === 1 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-950 border-4 border-primary-500 shadow z-10" />

                <div className="hidden sm:block sm:w-1/2" />

                <div className="card p-6 w-full sm:w-1/2 pl-12 sm:pl-6">
                  <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-2">
                    <FaGraduationCap />
                    {item.year}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.degree}</h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                    {item.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Education
