import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Animal } from '../types';

interface AnimalCardProps {
  animal: Animal;
  index: number;
}

export const AnimalCard: React.FC<AnimalCardProps> = ({ animal, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getAnimalEmoji = (species: string) => {
    const emojiMap: Record<string, string> = {
      'chien': '🐕',
      'chat': '🐱',
      'cheval': '🐎',
      'oiseau': '🐦',
      'dauphin': '🐬',
      'éléphant': '🐘',
      'lion': '🦁',
      'tigre': '🐯',
      'ours': '🐻',
      'loup': '🐺',
      'renard': '🦊',
      'lapin': '🐰',
      'hamster': '🐹',
      'souris': '🐭',
      'rat': '🐀',
      'cochon': '🐷',
      'vache': '🐮',
      'mouton': '🐑',
      'chèvre': '🐐',
      'poule': '🐔',
      'canard': '🦆',
      'oie': '🦢',
      'cygne': '🦢',
      'perroquet': '🦜',
      'hibou': '🦉',
      'aigle': '🦅',
      'faucon': '🦅',
      'vautour': '🦅',
      'corbeau': '🦅',
      'pie': '🦅',
      'moineau': '🦅',
      'robin': '🦅',
      'cardinal': '🦅',
      'colibri': '🦅',
      'flamant': '🦩',
      'pélican': '🦅',
      'cormoran': '🦅',
      'goéland': '🦅',
      'mouette': '🦅',
      'sterne': '🦅',
      'albatros': '🦅',
      'pétrel': '🦅',
      'manchot': '🐧',
      'pingouin': '🐧',
      'phoque': '🦭',
      'otarie': '🦭',
      'morse': '🦭',
      'baleine': '🐋',
      'orque': '🐋',
      'béluga': '🐋',
      'narval': '🐋',
      'requin': '🦈',
      'raie': '🐠',
      'poisson': '🐠',
      'tortue': '🐢',
      'serpent': '🐍',
      'lézard': '🦎',
      'iguane': '🦎',
      'gecko': '🦎',
      'caméléon': '🦎',
      'grenouille': '🐸',
      'crapaud': '🐸',
      'salamandre': '🦎',
      'triton': '🦎',
      'axolotl': '🦎',
      'gerbille': '🐹',
      'chinchilla': '🐹',
      'cobaye': '🐹',
      'furet': '🦡',
      'hermine': '🦡',
      'belette': '🦡',
      'vison': '🦡',
      'loutre': '🦦',
      'blaireau': '🦡',
      'mouffette': '🦨',
      'raton': '🦝',
      'panda': '🐼',
      'koala': '🐨',
      'kangourou': '🦘',
      'wallaby': '🦘',
      'wombat': '🦘',
      'ornithorynque': '🦆',
      'échidné': '🦔',
      'hérisson': '🦔',
      'porc-épic': '🦔',
      'castor': '🦫',
      'marmotte': '🐿️',
      'gaufre': '🐿️',
      'tamia': '🐿️',
    };
    
    const lowerSpecies = species.toLowerCase();
    for (const [key, emoji] of Object.entries(emojiMap)) {
      if (lowerSpecies.includes(key)) {
        return emoji;
      }
    }
    return '🐾';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="animal-card group cursor-pointer"
    >
      {/* Image de l'animal */}
      <div className="relative aspect-square overflow-hidden rounded-t-2xl">
        {animal.imageUrl ? (
          <motion.img
            src={animal.imageUrl}
            alt={`${animal.name} - ${animal.species}`}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
            <motion.span
              animate={isHovered ? { scale: 1.2, rotate: 360 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="text-6xl"
            >
              {getAnimalEmoji(animal.species)}
            </motion.span>
          </div>
        )}
        
        {/* Overlay au survol */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/20 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            className="bg-white/90 backdrop-blur-sm rounded-full p-3"
          >
            <span className="text-2xl">🔊</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Contenu de la carte */}
      <div className="p-6">
        <motion.h3
          whileHover={{ color: '#0ea5e9' }}
          className="text-xl font-display font-semibold text-gray-900 mb-2"
        >
          {animal.name}
        </motion.h3>
        
        <motion.p
          whileHover={{ color: '#64748b' }}
          className="text-sm text-primary-600 font-medium mb-3"
        >
          {animal.species}
        </motion.p>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {animal.description}
        </p>

        {/* Comportements */}
        {animal.behaviors && animal.behaviors.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-700">Comportements :</h4>
            <div className="flex flex-wrap gap-2">
              {animal.behaviors.slice(0, 3).map((behavior) => (
                <motion.span
                  key={behavior.id}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                >
                  {behavior.name}
                </motion.span>
              ))}
              {animal.behaviors.length > 3 && (
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{animal.behaviors.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Bouton d'action */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-4 py-2 px-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
        >
          En savoir plus
        </motion.button>
      </div>
    </motion.div>
  );
}; 