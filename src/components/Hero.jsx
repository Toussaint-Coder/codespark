import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo.png'; // Update with your logo path


const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 dark:from-secondary-900 dark:via-secondary-800 dark:to-dark-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl opacity-20 rotate-45"
      ></motion.div>
      
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20"
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-primary-500/10 text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              🚀 {t('hero.title')}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              <span className="block">{t('hero.title')}</span>
              <span className="block bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                {t('hero.subtitle')}
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-200 flex items-center justify-center"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                {t('hero.learn')}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, 2, 0, -2, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="relative w-80 h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-3xl"></div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className=" rounded-xl flex items-center justify-center">
                      <img src={logo} alt="logo" className='w-20'/>
                    </div>
                    <div className="text-white/60 text-sm">Code Spark</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-4 bg-white/20 rounded-full"></div>
                    <div className="h-4 bg-white/15 rounded-full w-3/4"></div>
                    <div className="h-4 bg-white/10 rounded-full w-1/2"></div>
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Projects</span>
                      <span className="text-white font-semibold">50+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Clients</span>
                      <span className="text-white font-semibold">30+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Success Rate</span>
                      <span className="text-primary-400 font-semibold">100%</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute -top-8 -right-8 w-24 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-xl border border-blue-400/30 rounded-2xl"
              ></motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 7, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-8 -left-8 w-20 h-28 bg-gradient-to-br from-purple-400/20 to-purple-600/20 backdrop-blur-xl border border-purple-400/30 rounded-2xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-3 gap-8 text-center"
        >
          {[
            { number: '50+', label: t('stats.projects') },
            { number: '30+', label: t('stats.clients') },
            { number: '5+', label: t('stats.years') }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;