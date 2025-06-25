import { motion } from "framer-motion";
import { Monitor, Smartphone, Settings, CreditCard } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Monitor,
      titleKey: "services.web.title",
      descKey: "services.web.desc",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-500/10 to-blue-600/10",
    },
    {
      icon: Smartphone,
      titleKey: "services.mobile.title",
      descKey: "services.mobile.desc",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-500/10 to-green-600/10",
    },
    {
      icon: Settings,
      titleKey: "services.system.title",
      descKey: "services.system.desc",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-500/10 to-purple-600/10",
    },
    {
      icon: CreditCard,
      titleKey: "services.payment.title",
      descKey: "services.payment.desc",
      gradient: "from-primary-500 to-primary-600",
      bgGradient: "from-primary-500/10 to-primary-600/10",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
              className="group bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t(service.titleKey)}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t(service.descKey)}
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className={`mt-6 h-1 bg-gradient-to-r ${service.gradient} rounded-full origin-left transition-all duration-300`}
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t("services.cta.title")}
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              {t("services.cta.desc")}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              {t("nav.getStarted")}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
