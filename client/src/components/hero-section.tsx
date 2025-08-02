import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github, Code } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleDownloadResume = () => {
    // Direct link to resume file
    const link = document.createElement('a');
    link.href = '/Gideon_Adjei_CV(1).pdf';
    link.download = 'Gideon_Adjei_CV(1).pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/devops.jpeg"
          alt="Professional developer workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800/90 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Headshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative animate-float">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-primary to-secondary p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-8xl text-gray-400">
                    <img 
                          src="/images/newimage.jpeg" 
                          alt="Gideon Adjei" 
                          className="w-full h-full object-cover"
                        />
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-accent to-success rounded-full flex items-center justify-center"
              >
                <Code className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-white">Hello, I'm</span>
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gideon Adjei
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-6 font-light">
              DevOps Graduate Trainee & Software Developer
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              Disciplined, fast-learning, and hardworking professional with a strong background in Computer Science
              and DevOps Engineering. Known for an elevated level of professionalism, accuracy, and respectful
              communication. Skilled in problem-solving and paying attention to detail, with a proven ability to support
              operational efficiency in dynamic environments. Seeking a Junior DevOps Engineer role to contribute to
              the reliability and scalability of infrastructure while supporting the organization's mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold"
              >
                Get In Touch
              </Button>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                className="glass-effect border-white/20 hover:bg-white/20 transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/gideon-adjei-49b353296/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary text-2xl transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/OnTrak-Tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary text-2xl transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:adjeigideon911@gmail.com"
                className="text-gray-400 hover:text-primary text-2xl transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
