import { FaBullseye, FaBookOpen, FaHeart } from 'react-icons/fa'
import { aboutData } from '../data/portfolioData'

const InfoCard = ({ icon: Icon, title, children }) => (
  <div className="card p-6 h-full">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white mb-4 shadow-md">
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    {children}
  </div>
)

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900/40">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm">
            Get to know me
          </p>
          <h2 className="section-title mt-2">About Me</h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-10 items-start">
          {/* Biography */}
          <div className="lg:col-span-2 space-y-4">
            {aboutData.bio.map((paragraph, idx) => (
              <p key={idx} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            <InfoCard icon={FaBullseye} title="Career Goals">
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {aboutData.goals}
              </p>
            </InfoCard>

            <InfoCard icon={FaBookOpen} title="Currently Learning">
              <div className="flex flex-wrap gap-2 mt-2">
                {aboutData.currentlyLearning.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-secondary-50 dark:bg-secondary-500/10 text-secondary-600 dark:text-secondary-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </InfoCard>

            <InfoCard icon={FaHeart} title="Interests" >
              <div className="flex flex-wrap gap-2 mt-2">
                {aboutData.interests.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-accent-50 dark:bg-accent-500/10 text-accent-600 dark:text-accent-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </InfoCard>

            <div className="card p-6 flex flex-col justify-center bg-gradient-to-br from-primary-600 to-accent-600 text-white">
              <p className="text-3xl font-extrabold">2+ yrs</p>
              <p className="text-sm text-white/80 mt-1">Hands-on development experience across web & mobile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
