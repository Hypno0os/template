# 🚀 Guide de Déploiement - Communication Animale

Ce guide vous accompagne dans le déploiement de l'application Communication Animale sur différentes plateformes.

## 📋 Prérequis

Avant de déployer, assurez-vous d'avoir :

- ✅ Code source complet et fonctionnel
- ✅ Tests d'accessibilité passés
- ✅ Score Lighthouse > 90
- ✅ Variables d'environnement configurées
- ✅ Base de données de production prête

## 🎯 Plateformes de déploiement recommandées

### 1. Vercel (Recommandé)

Vercel est la plateforme idéale pour les applications React avec des performances optimales.

#### Étapes de déploiement :

1. **Installation de Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Connexion à Vercel**
   ```bash
   vercel login
   ```

3. **Déploiement initial**
   ```bash
   vercel --prod
   ```

4. **Configuration des variables d'environnement**
   ```bash
   vercel env add DATABASE_URL
   vercel env add VITE_APP_NAME
   vercel env add VITE_APP_URL
   ```

5. **Configuration automatique**
   - Build Command : `npm run build`
   - Output Directory : `dist`
   - Install Command : `npm install`

#### Avantages Vercel :
- ⚡ Déploiement automatique depuis Git
- 🌍 CDN global
- 📊 Analytics intégrés
- 🔄 Preview deployments
- 🛡️ SSL automatique

### 2. Netlify

Netlify offre une excellente alternative avec des fonctionnalités similaires.

#### Étapes de déploiement :

1. **Connexion via Git**
   - Connectez votre repository GitHub/GitLab
   - Sélectionnez la branche principale

2. **Configuration du build**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Variables d'environnement**
   - Allez dans Site settings > Environment variables
   - Ajoutez vos variables d'environnement

4. **Déploiement**
   - Netlify détecte automatiquement les changements
   - Déploiement automatique à chaque push

### 3. GitHub Pages

Pour un déploiement gratuit et simple.

#### Étapes de déploiement :

1. **Configuration Vite**
   ```javascript
   // vite.config.ts
   export default defineConfig({
     base: '/animal-communication/',
     // ... autres configurations
   })
   ```

2. **Action GitHub**
   Créez `.github/workflows/deploy.yml` :
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## 🗄️ Configuration de la base de données

### Développement (SQLite)
```env
DATABASE_URL="file:./dev.db"
```

### Production (PostgreSQL recommandé)
```env
DATABASE_URL="postgresql://user:password@host:port/database"
```

### Options de base de données :

1. **Supabase** (Recommandé)
   - Base de données PostgreSQL gérée
   - Interface d'administration intuitive
   - API REST automatique

2. **PlanetScale**
   - Base de données MySQL serverless
   - Branches de développement
   - Scaling automatique

3. **Railway**
   - Déploiement simple
   - Base de données PostgreSQL
   - Intégration Git

## 🔧 Configuration de production

### Variables d'environnement requises :

```env
# Base de données
DATABASE_URL="postgresql://..."

# Application
VITE_APP_NAME="Communication Animale"
VITE_APP_URL="https://votre-domaine.com"

# Optionnel
VITE_GOOGLE_ANALYTICS_ID="GA_MEASUREMENT_ID"
VITE_SENTRY_DSN="https://..."
```

### Optimisations de production :

1. **Compression des assets**
   ```bash
   npm run build
   # Vite optimise automatiquement
   ```

2. **Cache et CDN**
   - Configurez un CDN pour les assets statiques
   - Utilisez les headers de cache appropriés

3. **Monitoring**
   - Configurez Sentry pour le monitoring d'erreurs
   - Ajoutez Google Analytics pour les métriques

## 🧪 Tests de déploiement

### Checklist avant déploiement :

- [ ] Tests d'accessibilité passés
- [ ] Score Lighthouse > 90
- [ ] Responsive design vérifié
- [ ] Variables d'environnement configurées
- [ ] Base de données migrée
- [ ] Images optimisées
- [ ] Métadonnées SEO complètes

### Tests post-déploiement :

1. **Test de performance**
   ```bash
   lighthouse https://votre-domaine.com
   ```

2. **Test d'accessibilité**
   ```bash
   axe-core https://votre-domaine.com
   ```

3. **Test de responsive**
   - Testez sur différents appareils
   - Vérifiez les breakpoints

## 🔄 Déploiement continu (CI/CD)

### GitHub Actions

```yaml
name: Deploy
on:
  push:
    branches: [ main ]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📊 Monitoring et maintenance

### Métriques à surveiller :

1. **Performance**
   - Temps de chargement
   - Core Web Vitals
   - Score Lighthouse

2. **Erreurs**
   - Erreurs JavaScript
   - Erreurs de base de données
   - Erreurs 404/500

3. **Utilisation**
   - Nombre de visiteurs
   - Pages les plus visitées
   - Temps de session

### Maintenance régulière :

- Mise à jour des dépendances
- Sauvegarde de la base de données
- Vérification des performances
- Tests d'accessibilité

## 🆘 Dépannage

### Problèmes courants :

1. **Erreur de build**
   ```bash
   npm run build
   # Vérifiez les erreurs TypeScript
   npm run type-check
   ```

2. **Problèmes de base de données**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. **Problèmes de performance**
   - Optimisez les images
   - Vérifiez le bundle size
   - Activez la compression

## 📞 Support

Pour toute question sur le déploiement :
- 📧 Email : contact@communication-animale.fr
- 📚 Documentation : [Lien vers la documentation]
- 🐛 Issues : [GitHub Issues]

---

**Bon déploiement ! 🚀** 