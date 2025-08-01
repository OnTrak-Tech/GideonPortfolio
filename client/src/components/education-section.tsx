import { motion } from "framer-motion";
import { GraduationCap, Tag, Wrench, Award, Shield, Monitor } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "BSc. Computer Science",
      institution: "Ghana Communication Technology University",
      date: "Aug 2024",
      icon: GraduationCap,
      color: "primary",
      type: "Bachelor's Degree",
    },
    {
      degree: "HND Information Technology",
      institution: "Takoradi Technical University",
      date: "Sept 2022",
      icon: Tag,
      color: "secondary",
      type: "Higher National Diploma",
    },
    {
      degree: "Advanced Professional System Administration",
      institution: "IPMC (College of Technology)",
      date: "July 2016",
      icon: Wrench,
      color: "accent",
      type: "Professional Tag",
    },
  ];

  const certifications = [
    {
      name: "ALX Certified Virtual Assistant",
      date: "Oct 2024",
      icon: Award,
      color: "from-primary to-secondary",
    },
    {
      name: "Occupational Health and Safety",
      date: "Jan 2021",
      icon: Shield,
      color: "from-secondary to-accent",
    },
    {
      name: "MCITP Enterprise Administration",
      date: "July 2016",
      icon: Monitor,
      color: "from-accent to-success",
    },
    {
      name: "Microsoft Network Essentials Plus",
      date: "July 2014",
      icon: Monitor,
      color: "from-success to-primary",
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{item.degree}</h4>
                        <p className={`text-${item.color} font-medium`}>{item.institution}</p>
                      </div>
                      <span className="text-gray-400 text-sm">{item.date}</span>
                    </div>
                    <div className="flex items-center">
                      <IconComponent className={`w-5 h-5 text-${item.color} mr-2`} />
                      <span className="text-gray-300">{item.type}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect p-4 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-sm">{cert.name}</h4>
                    <p className="text-gray-400 text-sm">{cert.date}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
