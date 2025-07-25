
import { FC } from 'react';
import { X } from 'lucide-react';

interface ResumeModalProps {
  showResume: boolean;
  setShowResume: (show: boolean) => void;
}

const ResumeModal: FC<ResumeModalProps> = ({ showResume, setShowResume }) => {
  if (!showResume) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white text-black rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={() => setShowResume(false)}
          className="absolute top-4 right-4 z-10 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
        >
          <X size={20} />
        </button>
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Revathi Nambi</h1>
            <p className="text-xl text-gray-600">Software Developer & Software Developer Instructor</p>
            <p className="text-gray-600">revathi.nambi.cse@gmail.com | GitHub: revathi-nambi | LinkedIn: revathi-nambi</p>
          </div>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              Enthusiastic software developer with extensive experience in full-stack development. 
              passionate about building Intuitive, performant user interfaces 
              and constantly learning new technologies. Currently mentoring learners as a Software Developer Instructor 
              while delivering real-world applications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Front-end Technologies</h3>
                <p className="text-gray-600">HTML5, CSS3, JavaScript</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Back-end Technologies</h3>
                <p className="text-gray-600">Python, Java</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Database</h3>
                <p className="text-gray-600">SQL</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Specializations</h3>
                <p className="text-gray-600">Data Structures & Algorithms, Machine Learning</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">Experience</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Software Developer Instructor</h3>
              <p className="text-gray-600 mb-2">Current Position</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Mentor learners in software development best practices</li>
                <li>Deliver real-world application development training</li>
                <li>Guide students through practical coding projects</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">E-Commerce Platform</h3>
                <p className="text-gray-600">Full-stack solution with user authentication and payment integration</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Task Management Application</h3>
                <p className="text-gray-600">Collaborative web application with real-time updates</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Weather Dashboard</h3>
                <p className="text-gray-600">Responsive application with detailed forecasts and maps</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">Publications</h2>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Modern Front-End Development Best Practices</h3>
              <p className="text-gray-600">Comprehensive guide on performance optimization and scalable architecture</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
