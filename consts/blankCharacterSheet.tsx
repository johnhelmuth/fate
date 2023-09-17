import { defaultColorPalette } from './defaultColorPalette';
import { CharacterSheetT } from '@/schemas/sheet';

export const blankSheet: Omit<CharacterSheetT, '_id' | 'colorPalette' | 'skills'> = {
  colorPalette: defaultColorPalette,
  name: {
    text: '',
    visibleIn: [],
  },
  description: {
    text: '',
    visibleIn: [],
  },
  aspects: [],
  skills: {},
  stunts: [],
  extras: [],
  stress: {
    physical: {
      boxes: [false, false],
      visibleIn: [],
    },
    mental: {
      boxes: [false, false],
      visibleIn: [],
    },
  },
  consequences: {
    mild: {
      name: '',
      visibleIn: [],
    },
    moderate: {
      name: '',
      visibleIn: [],
    },
    severe: {
      name: '',
      visibleIn: [],
    },
  },
  public: false,
  visibleTo: [],
  controlledBy: '',
};
