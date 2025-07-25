
import { FC } from 'react';

const AboutSection: FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in">
          <h2 className="text-3xl font-bold text-center mb-12 text-[hsl(var(--section-text))]">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="bg-[#c9afdb] backdrop-blur-md rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-black">Passionate Educator & Developer</h3>
              <p className="text-md leading-relaxed text-[#964e3e] mb-4">
                A passionate educator and devoted developer, I am Revathi, a Software Developer Instructor with a Master's in Computer Science and Engineering. My journey blends deep technical expertise with a love for sharing knowledge.
              </p>
              <p className="text-md leading-relaxed text-[#964e3e] mb-4">
                I thrive on building meaningful web applications while mentoring others in mastering the art and science of full-stack development. As an instructor, I focus on simplifying complex ideas and nurturing a learning atmosphere that fosters curiosity, discipline, and innovation.
              </p>
              <p className="text-md leading-relaxed text-[#964e3e]">
                As a technologist, I am constantly learning and evolving with the digital world — carrying a torch not just for code, but for clarity, creativity, and connection.
              </p>
            </div>

            {/* Education Section */}
            <div className="bg-[#c9afdb] backdrop-blur-md rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-black">Education</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary/100 pl-4">
                  <h4 className="text-lg font-semibold text-[#2e122c]">M.Tech in Computer Science and Engineering</h4>
                  <p className="text-[#964e3e] text-sm font-sm">Chaithanya Bharathi Institute Of Technology (CBIT), OU, Hyderabad</p>
                  <p className="text-[#964e3e] text-sm font-sm">2019–2021 • GPA: 8.3/10</p>
                </div>
                
                <div className="border-l-4 border-primary/90 pl-4">
                  <h4 className="text-lg font-semibold text-[#2e122c]">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-[#964e3e] text-sm font-sm">SVS Group of Institutions (SVS), JNTUH</p>
                  <p className="text-[#964e3e] text-sm font-sm">2015–2019</p>
                </div>
                
                <div className="border-l-4 border-primary/80 pl-4">
                  <h4 className="text-lg font-semibold text-[#2e122c]">Intermediate Education</h4>
                  <p className="text-[#964e3e] text-sm font-sm">Prathibha Junior College, Warangal</p>
                  <p className="text-[#964e3e] text-sm">2013–2015</p>
                </div>
                
                <div className="border-l-4 border-primary/70 pl-4">
                  <h4 className="text-lg font-semibold text-[#2e122c]">10th Education</h4>
                  <p className="text-[#964e3e] text-sm font-sm">Vidhyodhaya High School, Jammikunta</p>
                  <p className="text-[#964e3e] text-sm">2012–2013 • GPA: 9.2/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
