import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Gideon Adjei
          </div>
          <p className="text-gray-400 mb-4">DevOps Engineer & Software Developer</p>
          <p className="text-gray-500 text-sm">
            © 2024 Gideon Adjei. All rights reserved. Built with passion and modern web technologies.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
