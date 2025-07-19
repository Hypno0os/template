import { motion } from 'framer-motion';
import { AnimatedButton } from './AnimatedSection';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Arrière-plan organique */}
      <div className="absolute inset-0 warm-bg nature-pattern">
        <div className="absolute inset-0 leaf-pattern opacity-30"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-element"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-40 right-20 w-96 h-96 bg-sky-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-element"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-element"
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl elegant-text font-bold leading-tight"
          >
            <span className="gradient-text">Communication</span>
            <br />
            <span className="text-gray-900">Intuitive</span>
            <br />
            <span className="gradient-text">Animale</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed handwritten-text"
          >
            Découvrez les messages d\'amour et de sagesse que vos animaux partagent avec vous. 
            Une connexion profonde et bienveillante pour votre évolution personnelle.
          </motion.p>

          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <AnimatedButton variant="primary" className="text-lg px-8 py-4">
              Découvrir les Messages
            </AnimatedButton>
            <AnimatedButton variant="secondary" className="text-lg px-8 py-4">
              Prendre Rendez-vous
            </AnimatedButton>
          </motion.div>

          {/* Statistiques */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
          >
            {[
              { number: '15+', label: 'Années d\'expérience' },
              { number: '1000+', label: 'Communications réalisées' },
              { number: '100%', label: 'Bienveillance garantie' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl elegant-text font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Indicateur de défilement */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}; 