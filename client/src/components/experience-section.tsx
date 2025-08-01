import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "DevOps Graduate Trainee",
      company: "Amalitech Ghana",
      period: "April 2025 – Present",
      color: "primary",
      achievements: [
        "Automates CI/CD pipelines using Jenkins and GitHub Actions",
        "Implements Infrastructure as Code (IaC) for AWS resources",
        "Configures monitoring systems using Prometheus and Grafana",
        "Automates IAM user provisioning and deprovisioning",
      ],
    },
    {
      title: "Data Annotator",
      company: "Amplify Ghana",
      period: "Sept 2024 – Oct 2024",
      color: "secondary",
      achievements: [
        "Manually tagged images, text, audio, and video with labels",
        "Followed detailed annotation protocols for consistency",
        "Maintained high accuracy and attention to detail",
        "Used specialized annotation tools and platforms",
      ],
    },
    {
      title: "Software Development Intern",
      company: "CRITAC Ghana",
      period: "Oct 2023 - Dec 2023",
      color: "accent",
      achievements: [
        "Researched new technologies and improvement opportunities",
        "Tested software for bugs and functionality issues",
        "Reviewed documentation on modern technology releases",
      ],
    },
    {
      title: "Biostatistician",
      company: "Adabraka Polyclinic",
      period: "Nov 2022 - Oct 2023",
      color: "success",
      achievements: [
        "Developed methodologies for data collection and analysis",
        "Interpreted results and disseminated findings",
        "Conducted periodic surveys",
      ],
    },
    {
      title: "Network Administration Intern",
      company: "Ghana Rubber Estates Limited",
      period: "Aug 2021 - Oct 2021",
      color: "primary",
      achievements: [
        "Performed routine maintenance on networking devices",
        "Maintained and troubleshot VMware environments",
        "Managed Windows and Linux servers",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-secondary"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between mb-12 ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {experience.title}
                  </h3>
                  <h4 className={`text-${experience.color} font-medium mb-3`}>
                    {experience.company}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4">{experience.period}</p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i}>• {achievement}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${experience.color} rounded-full border-4 border-slate-900`}></div>
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
