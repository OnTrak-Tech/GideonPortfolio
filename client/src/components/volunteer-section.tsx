import { motion } from "framer-motion";
import { Shield, Search, TrendingUp, Network } from "lucide-react";

const VolunteerSection = () => {
  const activities = [
    {
      title: "Research & Development",
      description: "Researching and developing methodologies and modern technologies for cybercrime investigations",
      icon: Search,
      color: "from-accent to-success",
    },
    {
      title: "Data Analysis",
      description: "Collecting, analyzing, and interpreting data to retrieve meaningful conclusions for investigations",
      icon: TrendingUp,
      color: "from-success to-primary",
    },
    {
      title: "Network Monitoring",
      description: "Working with team members to monitor and analyze network traffic to detect malicious activities",
      icon: Network,
      color: "from-primary to-secondary",
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Cybersecurity digital art"
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Volunteer Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-6"
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  CRITAC Forensics and Cybercrime Investigation Unit
                </h3>
                <p className="text-primary font-medium">ACM Chapter Ghana</p>
                <p className="text-gray-400">Oct 2023 – Present</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${activity.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{activity.title}</h4>
                    <p className="text-gray-400 text-sm">{activity.description}</p>
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

export default VolunteerSection;
