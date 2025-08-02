import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiLinkedin, SiGithub } from "react-icons/si";

const ContactSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Gideon_Adjei_CV.pdf';
    link.download = 'Gideon_Adjei_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "adjeigideon911@gmail.com",
      href: "mailto:adjeigideon911@gmail.com",
      color: "from-primary to-secondary",
    },
    {
      icon: Phone,
      title: "Mobile",
      value: "0245960652",
      href: "tel:0245960652",
      color: "from-secondary to-accent",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "P.O. Box KT204, Ghana",
      href: null,
      color: "from-accent to-success",
    },
  ];

  const socialLinks = [
    {
      icon: SiLinkedin,
      href: "https://linkedin.com/in/gideon-adjei",
      color: "from-primary to-secondary",
    },
    {
      icon: SiGithub,
      href: "https://github.com/gideon-adjei",
      color: "from-secondary to-accent",
    },
    {
      icon: Mail,
      href: "mailto:adjeigideon911@gmail.com",
      color: "from-accent to-success",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how my DevOps and software development expertise can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional developer workspace"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center mr-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{contact.title}</h4>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-gray-300 hover:text-primary transition-colors duration-300"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300 px-6 py-3 rounded-full text-white font-semibold"
              >
                <a href="mailto:adjeigideon911@gmail.com">Send Email</a>
              </Button>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                className="glass-effect border-white/20 hover:bg-white/20 transition-all duration-300 px-6 py-3 rounded-full text-white font-semibold"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
