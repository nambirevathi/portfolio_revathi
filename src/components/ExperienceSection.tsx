
import { FC } from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const ExperienceSection: FC = () => {
  const workExperience = [
    {
      title: 'Software Developer Instructor',
      company: 'NxtWave',
      duration: 'April 2025 – October 2025 (6 months)',
      description: 'Working as a Software Developer Instructor at NxtWave, empowering aspiring developers with comprehensive programming skills and industry-relevant knowledge. Focused on delivering high-quality education in full-stack development technologies.',
      responsibilities: [
        'Designed and delivered comprehensive curriculum for full-stack development',
        'Mentored students in modern web technologies including React, Node.js, and databases',
        'Conducted hands-on coding sessions and project-based learning',
        'Provided personalized guidance for career development and skill enhancement',
        'Created interactive learning materials and coding assignments',
        'Evaluated student progress and provided constructive feedback',
        'Organized coding competitions and technical workshops'
      ],
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Payroll HR',
      company: 'Artech Infosystems',
      client: 'Amazon',
      duration: 'January 2022 – March 2022 (3 months)',
      description: 'Worked as Payroll HR specialist at Artech Infosystems with Amazon as the client company. Managed comprehensive payroll operations, employee data management, and HR administrative functions for Amazon workforce.',
      responsibilities: [
        'Managed end-to-end payroll processing for Amazon employees',
        'Maintained accurate employee records and documentation',
        'Coordinated with HR teams for employee onboarding and offboarding',
        'Processed salary calculations, deductions, and tax compliance',
        'Generated payroll reports and maintained confidential employee data',
        'Resolved payroll discrepancies and employee queries efficiently',
        'Ensured compliance with labor laws and company policies'
      ],
      color: 'from-emerald-400 to-teal-500'
    }
  ];

  const workshops = [
    {
      title: 'DRONE Workshop',
      description: 'Gained hands-on experience with drone technology, flight control systems, and autonomous navigation for aerial robotics applications.',
      icon: '🚁',
      color: 'from-indigo-400 to-blue-500'
    },
    {
      title: 'IoT Workshop',
      description: 'Explored sensors and hardware-based automation, learning about Internet of Things implementation and smart device integration.',
      icon: '🔧',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'N8N Workshop',
      description: 'Learned automation and workflow building with no-code tools, focusing on process optimization and integration solutions.',
      icon: '⚡',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Generative AI (GenAI)',
      description: 'Gained comprehensive insights into modern AI content generation, machine learning models, and artificial intelligence applications.',
      icon: '🤖',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'CREW AI Workshop',
      description: 'Explored advanced AI agent collaboration frameworks, learning multi-agent systems and autonomous task coordination for complex workflow automation.',
      icon: '🚀',
      color: 'from-emerald-400 to-teal-500'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in">
          <h2 className="text-3xl font-bold text-center mb-12 text-[hsl(var(--section-text))]">
            Work Experience
          </h2>
          
          {/* Work Experience */}
          <div className="mb-16">
            
            {workExperience.map((experience, index) => (
              <div
                key={index}
                className="bg-[#c791c4] backdrop-blur-md rounded-xl p-8 border border-border hover:scale-105 hover:shadow-lg transition-all duration-300 transform group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Briefcase className="text-[hsl(var(--section-text))] mr-3" size={24} />
                    <div>
                      <h4 className="text-xl font-semibold text-[hsl(var(--section-text))] transition-colors">
                        {experience.title}
                      </h4>
                      <p className="text-xl text-[hsl(var(--section-text))]/80 font-medium">{experience.company}</p>
                      {experience.client && (
                        <p className="text-md text-[hsl(var(--section-text))]/80 font-semibold">Client: {experience.client}</p>
                      )}
                    </div>
                  </div>
                  <span className="bg-[hsl(var(--button-bg))] px-4 py-2 rounded-full text-sm text-[hsl(var(--button-text))] font-medium flex items-center gap-2">
                    <Calendar size={16} />
                    {experience.duration}
                  </span>
                </div>
                <p className="text-[hsl(var(--section-text))]/80 mb-6 leading-relaxed text-sm">
                  {experience.description}
                </p>
                <div>
                  <h5 className="text-md font-semibold text-[hsl(var(--section-text))] mb-3">Key Responsibilities:</h5>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start text-[hsl(var(--section-text))]/80 text-sm">
                        <span className="w-2 h-2 bg-[hsl(var(--button-bg))] rounded-full mt-2 mr-3 flex-shrink-0 text-sm"></span>
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Workshops Attended */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-[hsl(var(--section-text))] flex items-center justify-center gap-2">
              <GraduationCap className="text-[hsl(var(--section-text))]" size={24} />
              Workshops Attended
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workshops.map((workshop, index) => (
                <div
                  key={index}
                  className="bg-[#c791c4] backdrop-blur-md rounded-xl p-6 border border-border hover:scale-105 hover:shadow-lg transition-all duration-300 transform group"
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{workshop.icon}</div>
                    <h4 className="text-xl font-semibold text-[hsl(var(--section-text))] transition-colors">
                      {workshop.title}
                    </h4>
                  </div>
                  <p className="text-[hsl(var(--section-text))]/80 leading-relaxed text-center">
                    {workshop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Statement */}
          <div className="mt-16 text-center">
            <div className="bg-[#c791c4] backdrop-blur-md rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-semibold text-[hsl(var(--section-text))] mb-4">Impact & Growth</h3>
              <p className="text-lg text-[hsl(var(--section-text))]/80 leading-relaxed italic">
                "Developed deep understanding of software fundamentals and effective teaching methodologies, 
                combining technical expertise with educational excellence to empower the next generation of developers."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
