import { skillCategories } from '../data/portfolioData'

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm">
            What I work with
          </p>
          <h2 className="section-title mt-2">Skills & Technologies</h2>
          <p className="section-subtitle mx-auto">
            A snapshot of the languages, frameworks, and tools I use to build robust applications.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ category, skills }) => (
            <div key={category} className="card p-6">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.map(({ name, icon: Icon }) => (
                  <span key={name} className="badge">
                    <Icon size={16} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
