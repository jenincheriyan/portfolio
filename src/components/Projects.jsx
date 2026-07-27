import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'
import { projects } from '../data/portfolioData'

const ProjectCard = ({ project }) => (
  <div className="card group flex flex-col overflow-hidden">
    {/* Image placeholder */}
    <div className="h-44 sm:h-48 w-full bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover"
        />
      ) : (
        <FaCode className="text-white/80 group-hover:scale-110 transition-transform duration-300" size={44} />
      )}
    </div>

    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100 dark:border-gray-800">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source code on GitHub`}
          className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-full py-2.5 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <FaGithub /> Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View live demo of ${project.title}`}
          className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-full py-2.5 text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-200"
        >
          <FaExternalLinkAlt size={12} /> Live Demo
        </a>
      </div>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900/40">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm">
            My work
          </p>
          <h2 className="section-title mt-2">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of projects that demonstrate my skills across the full stack.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
