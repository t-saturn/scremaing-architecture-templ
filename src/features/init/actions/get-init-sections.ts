'use server';

import { initSections } from '../data/sections';
import { Section } from '../types/interface';

export const getInitSections = async (): Promise<Section[]> => {
  // aquí podrías simular latencia, lógica, etc.
  await new Promise((r) => setTimeout(r, 300));

  return initSections;
};
