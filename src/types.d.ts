import { pixelToRem } from ".";

export interface PixelToRemFn<> { 
  (px: number, pxBase?: number): string;
}