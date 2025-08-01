import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MessageSquare, Puzzle, Clock, RotateCcw } from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: "Java & Spring Boot", level: 90, color: "from-primary to-secondary" },
    { name: "Linux Administration", level: 85, color: "from-secondary to-accent" },
    { name: "AWS & Cloud Computing", level: 80, color: "from-accent to-success" },
    { name: "CI/CD & DevOps", level: 88, color: "from-success to-primary" },
    { name: "Infrastructure as Code", level: 82, color: "from-primary to-secondary" },
    { name: "Git Version Control", level: 92, color: "from-secondary to-accent" },
  ];

  const softSkills = [
    { name: "Communication", icon: MessageSquare, color: "primary" },
    { name: "Problem Solving", icon: Puzzle, color: "secondary" },
    { name: "Time Management", icon: Clock, color: "accent" },
    { name: "Adaptability", icon: RotateCcw, color: "success" },
  ];

  const techStack = [
    "Java", "Spring Boot", "Python", "PHP", "Bash Scripting", "AWS", "Jenkins", "Docker", "Terraform", 
    "Linux", "Git", "Prometheus", "Grafana"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={skillsRef}>
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Cloud computing visualization"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div
                      className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {softSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect p-4 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <IconComponent className={`w-8 h-8 text-${skill.color} mx-auto mb-2`} />
                    <div className="text-white font-medium">{skill.name}</div>
                  </motion.div>
                );
              })}
            </div>

            <h4 className="text-xl font-semibold mb-6 text-center">Tech Stack</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full text-sm font-medium cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
