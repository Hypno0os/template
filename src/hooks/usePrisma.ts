import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const usePrisma = () => {
  const getAnimals = async () => {
    try {
      return await prisma.animal.findMany({
        include: {
          behaviors: true,
        },
      });
    } catch (error) {
      console.error('Error fetching animals:', error);
      return [];
    }
  };

  const getAnimalById = async (id: string) => {
    try {
      return await prisma.animal.findUnique({
        where: { id },
        include: {
          behaviors: true,
        },
      });
    } catch (error) {
      console.error('Error fetching animal:', error);
      return null;
    }
  };

  const createAnimal = async (data: {
    name: string;
    species: string;
    description: string;
    imageUrl?: string;
    soundUrl?: string;
  }) => {
    try {
      return await prisma.animal.create({
        data,
        include: {
          behaviors: true,
        },
      });
    } catch (error) {
      console.error('Error creating animal:', error);
      throw error;
    }
  };

  const createBehavior = async (data: {
    name: string;
    description: string;
    animalId: string;
  }) => {
    try {
      return await prisma.behavior.create({
        data,
        include: {
          animal: true,
        },
      });
    } catch (error) {
      console.error('Error creating behavior:', error);
      throw error;
    }
  };

  return {
    getAnimals,
    getAnimalById,
    createAnimal,
    createBehavior,
  };
}; 