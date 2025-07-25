
import { FC } from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection: FC = () => {
  const projects = [
    {
      title: 'Neural Machine Translation',
      description: 'Advanced neural machine translation system using deep learning techniques for accurate language translation. Implements sequence-to-sequence models with attention mechanisms for improved translation quality.',
      tech: ['Python', 'TensorFlow', 'Deep Learning', 'NLP'],
      color: 'from-emerald-400 to-teal-500',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      link: 'https://github.com/nambirevathi/Neural-Machine-Translation'
    },
    {
      title: 'Wedding Website',
      description: 'A beautiful and elegant wedding website featuring responsive design, event details, RSVP functionality, and photo galleries to celebrate special moments.',
      tech: ['React', 'CSS3', 'JavaScript'],
      color: 'from-pink-400 to-rose-500',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=300&fit=crop',
      link: 'https://github.com/nambirevathi/Wedding-Website'
    },
    {
      title: 'AI Code Generator',
      description: 'An intelligent code generation tool powered by AI that helps developers create boilerplate code, functions, and components based on natural language descriptions.',
      tech: ['Python', 'AI/ML', 'OpenAI API', 'React'],
      color: 'from-cyan-400 to-blue-500',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      link: 'https://github.com/nambirevathi/AI-Code-Generator'
    },
    {
      title: 'Doctor Appointment MERN',
      description: 'A comprehensive healthcare management system built with MERN stack featuring appointment scheduling, patient management, doctor profiles, and medical records.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      color: 'from-emerald-400 to-green-500',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      link: 'https://github.com/nambirevathi/Doctor-Appointment-Mern'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in">
          <h2 className="text-3xl font-bold text-center mb-12 text-[hsl(var(--section-text))]">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#c791c4] backdrop-blur-md rounded-xl overflow-hidden border border-border hover:scale-105 hover:shadow-lg transition-all duration-300 transform group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--section-text))] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[hsl(var(--section-text))]/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#ffffff] px-3 py-1 rounded-full text-xs text-[hsl(var(--button-text))] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-[#ffffff] hover:bg-[hsl(var(--button-bg))]/90 text-[hsl(var(--button-text))] px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      View Project <ExternalLink size={16} className="ml-2" />
                    </a>
                  ) : (
                    <button className="inline-flex items-center bg-[hsl(var(--button-bg))] hover:bg-[hsl(var(--button-bg))]/90 text-[hsl(var(--button-text))] px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                      View Project <ExternalLink size={16} className="ml-2" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
