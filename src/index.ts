import { PixelToRemFn } from "./types";

export const pixelToRem: PixelToRemFn = (px: number, pxBase = 16) => `${(px / pxBase)}rem`;
