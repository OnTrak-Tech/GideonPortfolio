import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/images/devops.jpg"
              alt="Modern tech office setup"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Professional Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Currently serving as a DevOps Graduate Trainee at Amalitech Ghana, I specialize in automating CI/CD pipelines, implementing Infrastructure as Code (IaC), and managing cloud resources on AWS. My journey in technology spans from network administration to software development and cybersecurity.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a strong foundation in Computer Science from Ghana Communication Technology University and hands-on experience across various roles, I bring a unique perspective to modern software development and infrastructure management.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <div className="text-2xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-300">Work Experiences</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <div className="text-2xl font-bold text-secondary mb-2">4+</div>
                <div className="text-gray-300">Certifications</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
