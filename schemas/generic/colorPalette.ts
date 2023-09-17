

import { InferSchemaType, Schema } from 'mongoose';
import { defaultColorPalette } from '@/consts/defaultColorPalette';

export const colorPalette = new Schema({
  primary: { type: String, required: true, default: defaultColorPalette.primary },
  secondary: { type: String, required: true, default: defaultColorPalette.secondary },
  tertiary: { type: String, required: true, default: defaultColorPalette.tertiary },
});

export type ColorPaletteT = {
  _id: string;
} & InferSchemaType<typeof colorPalette>;

