# 🐾 Communication Animale

Une application web moderne et interactive dédiée à la découverte de la communication animale. Cette plateforme permet d'explorer le monde fascinant des interactions entre les espèces avec des animations fluides et une interface utilisateur époustouflante.

## ✨ Fonctionnalités

- **Interface moderne** : Design responsive avec Tailwind CSS
- **Animations fluides** : Animations avec Framer Motion
- **Accessibilité** : Conforme aux standards WCAG avec axe-core
- **SEO optimisé** : Métadonnées complètes et structure sémantique
- **Base de données** : Prisma avec SQLite pour le développement
- **Performance** : Optimisé pour un score Lighthouse > 90
- **Mobile-first** : Design responsive pour tous les appareils

## 🚀 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Git

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone <url-du-repo>
   cd animal-communication
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer l'environnement**
   ```bash
   cp .env.example .env
   ```
   
   Modifiez le fichier `.env` avec vos configurations :
   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. **Initialiser la base de données**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

L'application sera accessible à l'adresse : `http://localhost:5173`

## 🛠️ Scripts disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement
npm run build        # Construit l'application pour la production
npm run preview      # Prévisualise la build de production

# Base de données
npm run db:generate  # Génère le client Prisma
npm run db:push      # Pousse le schéma vers la base de données
npm run db:studio    # Ouvre Prisma Studio

# Tests et qualité
npm run lint         # Vérifie le code avec ESLint
npm run type-check   # Vérifie les types TypeScript
```

## 📁 Structure du projet

```
animal-communication/
├── src/
│   ├── components/          # Composants React réutilisables
│   │   ├── Header.tsx       # Navigation principale
│   │   ├── Hero.tsx         # Section d'accueil
│   │   ├── AnimalCard.tsx   # Carte d'animal
│   │   ├── AnimatedSection.tsx # Composants d'animation
│   │   └── SEO.tsx          # Optimisation SEO
│   ├── hooks/               # Hooks personnalisés
│   │   ├── useAccessibility.ts # Hook d'accessibilité
│   │   └── usePrisma.ts     # Hook pour la base de données
│   ├── types/               # Types TypeScript
│   │   └── index.ts         # Définitions des types
│   ├── utils/               # Utilitaires
│   │   └── animations.ts    # Animations Framer Motion
│   ├── assets/              # Ressources statiques
│   ├── App.tsx              # Composant principal
│   └── index.css            # Styles globaux
├── prisma/                  # Configuration Prisma
│   └── schema.prisma        # Schéma de base de données
├── public/                  # Fichiers publics
├── tailwind.config.js       # Configuration Tailwind
├── postcss.config.js        # Configuration PostCSS
└── package.json             # Dépendances et scripts
```

## 🎨 Technologies utilisées

### Frontend
- **React 19** : Framework JavaScript moderne
- **TypeScript** : Typage statique pour la robustesse
- **Vite** : Outil de build rapide
- **Tailwind CSS** : Framework CSS utilitaire
- **Framer Motion** : Bibliothèque d'animations

### Backend & Base de données
- **Prisma** : ORM moderne pour TypeScript
- **SQLite** : Base de données légère pour le développement

### Outils de développement
- **ESLint** : Linting du code
- **axe-core** : Tests d'accessibilité
- **react-helmet-async** : Gestion des métadonnées

## 🎭 Animations

L'application utilise Framer Motion pour créer des animations fluides et engageantes :

### Types d'animations
- **Fade In** : Apparition en fondu
- **Slide Up** : Glissement vers le haut
- **Scale** : Effets de zoom
- **Stagger** : Animations séquentielles
- **Hover** : Interactions au survol

### Configuration
Les animations sont configurées dans `src/utils/animations.ts` et respectent les préférences de réduction de mouvement des utilisateurs.

## ♿ Accessibilité

L'application est conçue pour être accessible à tous :

### Fonctionnalités d'accessibilité
- **Navigation au clavier** : Tous les éléments sont navigables au clavier
- **Contraste** : Ratios de contraste conformes aux standards WCAG
- **Textes alternatifs** : Images avec descriptions appropriées
- **Structure sémantique** : Utilisation correcte des balises HTML
- **Réduction de mouvement** : Respect des préférences utilisateur

### Tests d'accessibilité
```bash
# Lancer les tests d'accessibilité
npm run accessibility-check
```

## 🔍 SEO

L'application est optimisée pour les moteurs de recherche :

### Métadonnées
- Balises title et description dynamiques
- Open Graph pour les réseaux sociaux
- Twitter Cards
- Schema.org pour le SEO structuré

### Performance
- Images optimisées et lazy loading
- Code splitting automatique
- Compression des assets
- Cache optimisé

## 📱 Responsive Design

L'application est conçue mobile-first avec des breakpoints pour :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Connecter le repository**
   ```bash
   vercel --prod
   ```

2. **Configurer les variables d'environnement**
   - `DATABASE_URL` : URL de votre base de données de production

### Netlify

1. **Build command**
   ```bash
   npm run build
   ```

2. **Publish directory**
   ```
   dist
   ```

### Autres plateformes

L'application peut être déployée sur n'importe quelle plateforme supportant les applications React statiques.

## 🧪 Tests

### Tests de performance
```bash
# Lancer Lighthouse
npm run lighthouse
```

### Tests d'accessibilité
```bash
# Lancer axe-core
npm run accessibility
```

## 📊 Métriques de performance

L'application vise à atteindre les scores suivants sur Lighthouse :
- **Performance** : > 90
- **Accessibilité** : > 95
- **Bonnes pratiques** : > 90
- **SEO** : > 95

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou problème :
- 📧 Email : contact@communication-animale.fr
- 📱 Téléphone : +33 1 23 45 67 89
- 🐛 Issues : [GitHub Issues](https://github.com/votre-repo/issues)

## 🙏 Remerciements

- [Unsplash](https://unsplash.com) pour les images d'animaux
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [Tailwind CSS](https://tailwindcss.com) pour le framework CSS
- [Prisma](https://www.prisma.io) pour l'ORM

---

**Développé avec ❤️ pour la communication animale**
