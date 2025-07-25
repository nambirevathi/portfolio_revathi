
import { FC } from 'react';
import { Code, Database, Brain, Settings, Users, Server } from 'lucide-react';

const SkillsSection: FC = () => {
  const skills = [
    { 
      category: 'Front-End', 
      items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'React JS', 'Sprint'], 
      icon: Code,
      color: 'from-violet-500 to-purple-600'
    },
    { 
      category: 'Back-End', 
      items: ['Node JS', 'DSA'], 
      icon: Server,
      color: 'from-violet-600 to-purple-700'
    },
    { 
      category: 'Programming Languages', 
      items: ['C', 'Java', 'Python'], 
      icon: Code,
      color: 'from-purple-500 to-violet-600'
    },
    { 
      category: 'Database', 
      items: ['SQL'], 
      icon: Database,
      color: 'from-violet-400 to-purple-500'
    },
    { 
      category: 'Developer Tools', 
      items: ['VS Code', 'Vercel', 'Git', 'GitHub'], 
      icon: Settings,
      color: 'from-purple-600 to-violet-700'
    },
    { 
      category: 'Soft Skills', 
      items: ['Communication', 'Team Collaboration', 'Problem Solving', 'Project Management'], 
      icon: Users,
      color: 'from-violet-500 to-purple-600'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 text-[hsl(var(--section-text))]">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-[#c9afdb] rounded-xl p-6 border border-border hover:scale-105 hover:shadow-lg transition-all duration-300 transform group"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-[hsl(var(--section-text))] mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                    <h3 className="text-lg font-semibold text-black">{skill.category}</h3>
                  </div>
                  <div className="space-y-1">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="inline-block bg-[#ffffff] hover:bg-[hsl(var(--button-bg))]/80 px-3 py-1 rounded-full text-sm mr-1 mb-1 text-[hsl(var(--button-text))] transition-all duration-300 transform hover:scale-105 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
