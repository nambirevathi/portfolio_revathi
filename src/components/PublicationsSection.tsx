
import { FC } from 'react';
import { ExternalLink, Download, BookOpen, Award } from 'lucide-react';

const PublicationsSection: FC = () => {
  const publications = [
    {
      title: 'Neural Machine Translation Using Sequence Modeling',
      journal: 'International Journal for Research in Applied Science & Engineering Technology (IJRASET)',
      publishedIn: 'Volume 9, Issue VIII, August 2021',
      description: 'A comprehensive research paper exploring modern neural machine translation techniques using advanced sequence modeling approaches for improved language translation accuracy. This work contributes to the field of Natural Language Processing by proposing innovative methodologies for machine translation systems.',
      tech: ['Neural Networks', 'Machine Learning', 'NLP', 'Sequence Modeling', 'Deep Learning'],
      color: 'from-amber-400 to-orange-500',
      certificateUrl: '/certificate.pdf',
      highlights: [
        'Published in peer-reviewed international journal',
        'Focus on cutting-edge neural machine translation',
        'Advanced sequence modeling techniques',
        'Contribution to NLP research community'
      ]
    }
  ];

  return (
    <section id="publications" className="py-20 px-6 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in">
          <h2 className="text-3xl font-bold text-center mb-12 text-[hsl(var(--section-text))]">
            Research Publications
          </h2>
          <div className="grid grid-cols-1 max-w-5xl mx-auto">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="bg-[#c791c4] backdrop-blur-md rounded-2xl p-8 border border-border hover:scale-105 hover:shadow-lg transition-all duration-300 transform group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <BookOpen className="text-[hsl(var(--section-text))] mt-1 flex-shrink-0" size={32} />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-3 text-[hsl(var(--section-text))] transition-colors">
                      {publication.title}
                    </h3>
                    <div className="space-y-2 text-[hsl(var(--section-text))]/80 mb-4">
                      <p className="font-semibold text-md flex items-center gap-2">
                        <span className="text-[hsl(var(--section-text))]">📚</span>
                        Journal: {publication.journal}
                      </p>
                      <p className="font-medium text-md flex items-center gap-2">
                        <span className="text-[hsl(var(--section-text))]">📅</span>
                        Published in: {publication.publishedIn}
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-[hsl(var(--section-text))]/80 mb-6 leading-relaxed text-sm">
                  {publication.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-[hsl(var(--section-text))] mb-3">Research Highlights:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {publication.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-[hsl(var(--button-bg))] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-[hsl(var(--section-text))]/80 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {publication.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#ffffff] hover:bg-[hsl(var(--button-bg))]/80 px-3 py-2 rounded-full text-sm text-[hsl(var(--button-text))] font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="https://github.com/nambirevathi/Neural-Machine-Translation-Using-Sequence-Modeling/blob/main/MTech%20Research%20Paper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-[#ffffff] hover:bg-[hsl(var(--button-bg))]/90 text-[hsl(var(--button-text))] px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Read Publication
                  </a>
                  <a
                    href="https://www.ijraset.com/print-certificate.php?member=37687"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-[#ffffff] hover:bg-[hsl(var(--button-bg))]/90 text-[hsl(var(--button-text))] px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    <Award size={16} className="mr-2" />
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
