import { motion } from 'framer-motion';
import { Target, Eye, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"></div>
            <div className="relative bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-3xl p-8 border border-primary-200 dark:border-primary-800">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6"
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('mission.title')}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {t('mission.text')}
              </p>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center text-primary-600 dark:text-primary-400 font-semibold cursor-pointer"
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6"
              >
                <Eye className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('vision.title')}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {t('vision.text')}
              </p>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center text-blue-600 dark:text-blue-400 font-semibold cursor-pointer"
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Completed', color: 'text-primary-400' },
              { number: '30+', label: 'Happy Clients', color: 'text-blue-400' },
              { number: '100%', label: 'Success Rate', color: 'text-green-400' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;