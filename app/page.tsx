"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Code, Database, Smartphone, Award, Calendar, ChevronRight, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    interface MousePosition {
      x: number;
      y: number;
    }

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    programming: ['Java', 'C++', 'Python', 'Kotlin', 'HTML/CSS', 'JavaScript', 'PHP'],
    tools: ['Android Studio', 'Git', 'MySQL', 'Figma', 'Qt Designer', 'Microsoft Office'],
    concepts: ['UI/UX Design', 'Web Development', 'Database Management', 'Mobile Development', 'Web Programming']
  };

  const experiences = [
    {
      title: 'Desktop GUI Developer Intern',
      company: 'North Carolina State University',
      period: 'April 2025 – May 2025',
      description: 'Designed responsive desktop GUIs using Qt and Python, collaborating with engineers for seamless hardware-software integration.',
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'Web Developer & Secretary',
      company: 'Google Developer Student Club',
      period: 'Sep 2023 – May 2024',
      description: 'Developed responsive website for Faculty of Engineering, managed project proposals and coordinated operations.',
      icon: <Database className="w-5 h-5" />
    },
    {
      title: 'C++ Teaching Assistant',
      company: 'Sampoerna University',
      period: 'Mar 2023',
      description: 'Guided high school students in C++ programming and chatbot development, fostering engaging learning environment.',
      icon: <Code className="w-5 h-5" />
    }
  ];

  const projects = [
    {
      title: 'NeoEmployee',
      description: 'Comprehensive employee management mobile app with attendance tracking, task management, and HR automation.',
      tech: ['Kotlin', 'Java', 'Laravel', 'Android Studio'],
      period: 'Aug 2024 - Dec 2024',
      type: 'Mobile App',
      icon: <Smartphone className="w-6 h-6" />,
      link: 'https://github.com/Jennifernwaa/neoemployeeapp' 
    },
    {
      title: 'myBookSpace',
      description: 'Personalized, AI-integrated web app for book lovers. Users can log and track their reads, get intelligent book recommendations, and connect with fellow readers through community features like friends and activity feeds.',
      tech: ['HTML&CSS', 'Javascript', 'Firebase Firestore', 'Tailwind CSS', 'Groq AI', 'Open Library API'],
      period: 'May 2025 - Today',
      type: 'Website',
      icon: <Smartphone className="w-6 h-6" />,
      link: 'https://get-nerdy-book-web.vercel.app/' 
    },
    {title: 'MoodBite',
      description: 'Food recommendations based on your mood and craving. Food recommended food items with appealing visuals and descriptions',
      tech: ['React', 'Vite', 'TailwindCSS', 'ESLint', 'Javascript'],
      period: 'June 2025 - Today',
      type: 'Website',
      icon: <Smartphone className="w-6 h-6" />,
      link: 'https://youarewhatyoueat-v1.mgx.world'
    },
    {
      title: 'ScholaCash E-Wallet',
      description: 'Award-winning FinTech prototype for teenage financial literacy with QRIS payments and learning modules.',
      tech: ['Figma', 'UI/UX Design'],
      period: 'Jul 2024',
      type: 'UI/UX Design',
      icon: <Award className="w-6 h-6" />,
      link: 'https://www.figma.com/design/iezorcjInDsZUp3k2qNtkN/CyberComp?node-id=77-2&t=GxMp3TAaFdavSb2J-1'
    },
    {
      title: 'Just for Fun Games',
      description: 'Fun Simple Games that shows my creative side in programming. Games include ',
      tech: ['FastHTML', 'Javascript', 'Python'],
      period: 'June 2025 - Present',
      type: 'Website',
      icon: <Award className="w-6 h-6" />,
      link: 'https://html-python-nu.vercel.app'
    },
    {
      title: 'TrendyClosets Database',
      description: 'Robust database management system integrating MySQL with Excel, reducing errors by 80%.',
      tech: ['MySQL', 'Excel', 'Database Design'],
      period: 'Dec 2024',
      type: 'Database',
      icon: <Database className="w-6 h-6" />,
      link: 'https://jennysweb.vercel.app'
    }
  ];

  const achievements = [
    {
      title: '1st Winner UI/UX Fintech Prototype',
      issuer: 'Cyber University',
      description: 'Led team to victory among 10 competing teams with innovative E-wallet app design'
    },
    {
      title: 'Merit Scholarship Awardee',
      issuer: 'Sampoerna University',
      description: 'Recognized for academic excellence with CGPA 3.90/4.0'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{
            left: `${mousePosition.x / 10}px`,
            top: `${mousePosition.y / 10}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{
            right: `${mousePosition.x / 15}px`,
            bottom: `${mousePosition.y / 15}px`,
            transition: 'all 0.5s ease-out'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Jennifer NW
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    const section = document.getElementById(item.toLowerCase());
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-purple-300 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-4 py-2 space-y-2">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    const section = document.getElementById(item.toLowerCase());
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  className="block w-full text-left py-2 hover:text-purple-300 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Jennifer Nwachinaemere
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Innovative Computer Science Student & Aspiring Developer
            </p>
            <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
              Passionate about front-end development, UI/UX design, and creating user-friendly digital solutions. 
              Experienced in mobile app development, database management, and automated testing.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="mailto:jennifernwachinaemere@gmail.com"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-colors"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a
                href="https://github.com/Jennifernwaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-purple-400 hover:bg-purple-400/10 px-6 py-3 rounded-full transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>

            <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Jakarta, Indonesia
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                087842066617
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronRight className="w-6 h-6 rotate-90" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm a Computer Science student pursuing a dual degree program at the University of Arizona 
                and Universitas Sampoerna, with a strong focus on front-end development and UI/UX design.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                My journey in tech has been marked by hands-on experience in creating responsive web applications, 
                mobile apps, and database systems. I've had the privilege of working with prestigious organizations 
                like North Carolina State University and leading projects at Google Developer Student Club.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-purple-900/30 px-4 py-2 rounded-full border border-purple-500/30">
                  🎓 CGPA: 3.90/4.0
                </div>
                <div className="bg-cyan-900/30 px-4 py-2 rounded-full border border-cyan-500/30">
                  🏆 Award Winner
                </div>
                <div className="bg-pink-900/30 px-4 py-2 rounded-full border border-pink-500/30">
                  💼 Internship Experience
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <span key={skill} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-pink-300">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.concepts.map((skill) => (
                    <span key={skill} className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm border border-pink-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-full group-hover:bg-purple-500/30 transition-colors">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <span className="text-purple-300 text-sm">{exp.period}</span>
                    </div>
                    <p className="text-cyan-300 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all group hover:transform hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className="text-sm text-purple-300">{project.type}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech?.map((tech) => (
                    <span key={tech} className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs border border-cyan-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{project.period}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-yellow-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                    <p className="text-purple-300 font-medium">{achievement.issuer}</p>
                  </div>
                </div>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-12">
              I'm always excited to discuss new opportunities, collaborate on projects, or just chat about technology and innovation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a
                href="mailto:jennifernwachinaemere@gmail.com"
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all group"
              >
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400 text-sm">jennifernwachinaemere@gmail.com</p>
              </a>
              
              <a
                href="https://www.linkedin.com/in/jennifernw/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-400 text-sm">Connect with me</p>
              </a>
              
              <a
                href="https://github.com/Jennifernwaa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-pink-500/30 transition-all group"
              >
                <Github className="w-8 h-8 text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <p className="text-gray-400 text-sm">Check out my code</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Jennifer Nwachinaemere. Crafted with passion and coffee.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;