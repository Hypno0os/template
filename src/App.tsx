import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SEO } from './components/SEO';
import { AnimatedSection, AnimatedCard, AnimatedButton } from './components/AnimatedSection';
import { useAccessibility } from './hooks/useAccessibility';
import { useEffect } from 'react';

function App() {
  const { runAccessibilityCheck } = useAccessibility();

  useEffect(() => {
    // Vérification d'accessibilité au chargement
    runAccessibilityCheck();
  }, [runAccessibilityCheck]);

  return (
    <HelmetProvider>
      <SEO
        title="Du Cœur à l'Âme - Communication Intuitive Animale"
        description="Découvrez les messages d'amour et de sagesse de vos animaux. Communication intuitive bienveillante pour votre évolution personnelle."
        keywords="communication intuitive animale, messages animaux, amour inconditionnel, évolution personnelle, bienveillance"
      />
      
      <div className="min-h-screen">
        <Header />
        <Hero />

        {/* Section Qui suis-je ? */}
        <section id="about" className="py-20 earth-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="gradient-text">Qui suis-je ?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                J'ai à cœur d'accompagner les Animaux & les Humains sur leurs chemins de vie, en étant à leur écoute.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 mb-6">
                    J'ai choisi de mettre en pratique ma <strong>passion</strong> et mon <strong>amour</strong> pour les animaux, 
                    en <strong>communiquant</strong> avec eux. Je leur offre un <strong>espace d'échange</strong> en toute 
                    <strong> bienveillance</strong> et <strong>sans jugement</strong>, afin qu'ils se sentent pleinement en 
                    <strong>sécurité</strong> pour transmettre leurs messages.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    J'ai à cœur de <strong>respecter le rythme de chacun</strong>, c'est pourquoi je laisse 
                    <strong>l'animal guider nos échanges</strong> pour qu'il puisse <strong>prendre toute sa place</strong>.
                  </p>
                  <blockquote className="border-l-4 border-primary-500 pl-6 italic text-gray-600">
                    « N'ayez pas peur du changement, la meilleure chose à faire c'est de l'accueillir avec douceur pour aller de l'avant sereinement. » - Z.
                  </blockquote>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="organic-card p-8">
                  <h3 className="text-2xl elegant-text font-bold mb-4 text-blue-700">
                    Mon Approche
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">💖</span>
                      <span>Communication intuitive bienveillante</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">🌟</span>
                      <span>Respect du rythme de chacun</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">🤗</span>
                      <span>Espace d'échange sans jugement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">✨</span>
                      <span>Accompagnement personnalisé</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Section Prestations */}
        <section id="services" className="py-20 warm-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Mes <span className="gradient-text">Prestations</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez mes services d'accompagnement pour vous et vos animaux
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Communication Animale */}
              <AnimatedCard delay={0.1} className="organic-card p-8">
                <div className="text-4xl mb-4">🐾</div>
                <h3 className="text-2xl elegant-text font-bold mb-4">Communication Animale</h3>
                <p className="text-gray-600 mb-4">
                  Nos compagnons de vie portent en eux beaucoup d'amour et de sagesse qu'ils choisissent de nous transmettre.
                </p>
                <p className="text-gray-600 mb-6">
                  Durant ces échanges, ils se mettent à nu pour exprimer leurs besoins et délivrer de précieux conseils.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 text-sm handwritten-text">
                  « Embrasser ses ombres fait partie du jeu, car cela nous permet d'accueillir notre propre lumière. » – Y
                </blockquote>
              </AnimatedCard>

              {/* Accompagnement fin de vie */}
              <AnimatedCard delay={0.2} className="organic-card p-8">
                <div className="text-4xl mb-4">🕊️</div>
                <h3 className="text-2xl elegant-text font-bold mb-4">Accompagnement fin de vie</h3>
                <p className="text-gray-600 mb-4">
                  La fin de vie de votre animal est une étape importante de sa vie.
                </p>
                <p className="text-gray-600 mb-6">
                  J'ai choisi de créer des accompagnements adaptés pour permettre à votre duo Humain-Animal de vivre au mieux cette étape.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 text-sm handwritten-text">
                  « Au-delà de la mort, se cache un beau voyage que nous sommes prêts à entamer, avec votre soutien et votre amour inconditionnel. » – F
                </blockquote>
              </AnimatedCard>

              {/* Communication animale défunts */}
              <AnimatedCard delay={0.3} className="organic-card p-8">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-2xl elegant-text font-bold mb-4">Communication animale défunts</h3>
                <p className="text-gray-600 mb-4">
                  Mon but est de permettre le dialogue et la connexion entre lui et vous, et ce même après son départ.
                </p>
                <p className="text-gray-600 mb-6">
                  La communication animale est unique car chaque âme animale est différente.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 text-sm handwritten-text">
                  « Faites nous confiance, nous avons toujours un message à vous transmettre. » – S
                </blockquote>
              </AnimatedCard>

              {/* Soins énergétiques */}
              <AnimatedCard delay={0.4} className="organic-card p-8">
                <div className="text-4xl mb-4">💫</div>
                <h3 className="text-2xl elegant-text font-bold mb-4">Soins énergétiques</h3>
                <p className="text-gray-600 mb-4">
                  Les soins énergétiques font partie intégrante de mon accompagnement holistique.
                </p>
                <p className="text-gray-600 mb-6">
                  Durant les séances, je travaille autour des besoins du patient, Humain ou Animal, pour accompagner chacun vers un bien-être et un apaisement mental, émotionnel et physique.
                </p>
              </AnimatedCard>

              {/* Urgences */}
              <AnimatedCard delay={0.5} className="organic-card p-8">
                <div className="text-4xl mb-4">🚨</div>
                <h3 className="text-2xl elegant-text font-bold mb-4">Urgences</h3>
                <p className="text-gray-600 mb-4">
                  Les situations d'urgence sont des événements stressants.
                </p>
                <p className="text-gray-600 mb-6">
                  Durant ces moments, je vous accompagne afin de veiller à votre bien-être et celui de votre compagnon.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Section Tarifs et réservation */}
        <section id="pricing" className="py-20 earth-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="gradient-text">Tarifs</span> et Réservation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez mes tarifs et réservez votre séance de communication intuitive
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                           <AnimatedCard delay={0.1} className="organic-card p-8">
                <h3 className="text-2xl elegant-text font-bold mb-4">Communication Animale</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">60€</div>
                 <p className="text-gray-600 mb-6">Séance de communication intuitive avec votre animal</p>
                 <AnimatedButton variant="primary" className="w-full">
                   Réserver
                 </AnimatedButton>
               </AnimatedCard>

                                           <AnimatedCard delay={0.2} className="organic-card p-8">
                <h3 className="text-2xl elegant-text font-bold mb-4">Accompagnement fin de vie</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">80€</div>
                 <p className="text-gray-600 mb-6">Accompagnement personnalisé pour cette étape importante</p>
                 <AnimatedButton variant="primary" className="w-full">
                   Réserver
                 </AnimatedButton>
               </AnimatedCard>

                                           <AnimatedCard delay={0.3} className="organic-card p-8">
                <h3 className="text-2xl elegant-text font-bold mb-4">Soins énergétiques</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">70€</div>
                 <p className="text-gray-600 mb-6">Séance de soins énergétiques pour vous ou votre animal</p>
                 <AnimatedButton variant="primary" className="w-full">
                   Réserver
                 </AnimatedButton>
               </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Section Témoignages */}
        <section id="testimonials" className="py-20 warm-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="gradient-text">Témoignages</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez les retours de mes clients sur leurs expériences
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedCard delay={0.1} className="organic-card p-8">
                <div className="text-4xl mb-4">💖</div>
                <p className="text-gray-600 mb-4 italic handwritten-text">
                  "Grâce à la communication intuitive, j'ai pu comprendre les besoins de mon chat et notre relation s'est transformée."
                </p>
                <div className="font-semibold text-blue-600">- Marie L.</div>
              </AnimatedCard>

              <AnimatedCard delay={0.2} className="organic-card p-8">
                <div className="text-4xl mb-4">🌟</div>
                <p className="text-gray-600 mb-4 italic handwritten-text">
                  "L'accompagnement fin de vie m'a permis de vivre cette étape avec plus de sérénité et d'amour."
                </p>
                <div className="font-semibold text-blue-600">- Pierre D.</div>
              </AnimatedCard>

              <AnimatedCard delay={0.3} className="organic-card p-8">
                <div className="text-4xl mb-4">✨</div>
                <p className="text-gray-600 mb-4 italic handwritten-text">
                  "Les soins énergétiques ont apporté un apaisement profond à mon chien et à moi-même."
                </p>
                <div className="font-semibold text-blue-600">- Sophie M.</div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section id="contact" className="py-20 earth-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Découvrez vos <span className="gradient-text">Messages</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Prêt à recevoir les messages d'amour et de sagesse de vos animaux ? 
                Contactez-moi pour une communication intuitive bienveillante.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <AnimatedCard delay={0.1}>
                  <div className="p-6">
                    <div className="text-3xl mb-4">📧</div>
                    <h3 className="text-xl font-display font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">contact@ducoeuralame.fr</p>
                  </div>
                </AnimatedCard>
                
                <AnimatedCard delay={0.2}>
                  <div className="p-6">
                    <div className="text-3xl mb-4">📱</div>
                    <h3 className="text-xl font-display font-semibold mb-2">Téléphone</h3>
                    <p className="text-gray-600">+33 6 12 34 56 78</p>
                  </div>
                </AnimatedCard>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-display font-bold mb-4">Du Cœur à l'Âme</h3>
                <p className="text-gray-400">
                  Communication intuitive animale bienveillante pour recevoir les messages d'amour de vos animaux.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-display font-semibold mb-4">Prestations</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Communication animale</li>
                  <li>Accompagnement fin de vie</li>
                  <li>Communication animale défunts</li>
                  <li>Soins énergétiques</li>
                  <li>Urgences</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-display font-semibold mb-4">Informations</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Code éthique</li>
                  <li>Tarifs & réservation</li>
                  <li>CGV</li>
                  <li>Mentions légales</li>
                  <li>Politique de confidentialité</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-display font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Email</li>
                  <li>Téléphone</li>
                  <li>Instagram</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Du Cœur à l'Âme - Communication Intuitive Animale. Tous droits réservés.</p>
              <p className="mt-2 text-sm">
                <em>Rappel : L'ensemble des accompagnements proposés en communication animale & soins énergétiques ne se substituent pas à un avis vétérinaire ou médical.</em>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
