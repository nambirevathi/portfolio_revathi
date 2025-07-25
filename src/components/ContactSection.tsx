
import { FC } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Twitter } from 'lucide-react';

const ContactSection: FC = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'revathi.nambi.cse@gmail.com',
      href: 'mailto:revathi.nambi.cse@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6281543962',
      href: 'tel:+91XXXXXXXXX',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/nambirevathi',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/revathi-nambi-9664a930a/',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/home',
      color: 'from-sky-500 to-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in">
          <h2 className="text-3xl font-bold text-center mb-12 text-[hsl(var(--section-text))]">
            Get In Touch
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-lg text-[hsl(var(--section-text))]/80 leading-relaxed max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, and mentoring opportunities. 
              Whether you're looking for collaboration, have questions about software development, or want to connect 
              with a passionate educator, I'd love to hear from you. Let's build something amazing together!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-center text-[hsl(var(--section-text))] mb-8">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex flex-col items-center p-6 bg-[#c791c4] backdrop-blur-md rounded-xl border border-border hover:shadow-lg transition-all duration-300 transform hover:scale-105 group text-center"
                      >
                        <IconComponent className="text-[hsl(var(--section-text))] mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                        <div>
                          <p className="text-sm text-[hsl(var(--section-text))]/80 font-medium mb-2">{contact.label}</p>
                          <p className="text-[hsl(var(--section-text))] font-semibold">{contact.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold text-center text-[hsl(var(--section-text))] mb-8">Connect With Me</h3>
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-16 h-16 bg-[hsl(var(--button-bg))] text-[hsl(var(--button-text))] rounded-full hover:scale-110 transition-all duration-300 transform shadow-lg hover:shadow-xl"
                      >
                        <IconComponent size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
