import { useEffect } from 'react';
import axe from 'axe-core';

export const useAccessibility = () => {
  useEffect(() => {
    // Configuration d'axe-core pour l'accessibilité
    axe.configure({
      rules: [
        { id: 'color-contrast', enabled: true },
        { id: 'button-name', enabled: true },
        { id: 'image-alt', enabled: true },
        { id: 'heading-order', enabled: true },
        { id: 'landmark-one-main', enabled: true },
        { id: 'list', enabled: true },
        { id: 'listitem', enabled: true },
        { id: 'region', enabled: true },
      ],
    });
  }, []);

  const runAccessibilityCheck = async () => {
    try {
      const results = await axe.run();
      console.log('Accessibility violations:', results.violations);
      return results;
    } catch (error) {
      console.error('Error running accessibility check:', error);
      return null;
    }
  };

  return { runAccessibilityCheck };
}; 