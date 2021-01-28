// import { PixelToRemFn } from "./types";
export interface PixelToRemFn<> { 
  (px: number, pxBase?: number): string;
}

export const pixelToRem: PixelToRemFn = (px: number, pxBase = 16) => `${(px / pxBase)}rem`;

export const fontFace = (
  fontFamily: string,
  src: string,
  fontWeight: number = 500,
  fontStyle: string = 'normal',
) => {
  return `
    @font-face {
      font-family: ${fontFamily};
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
      src: url(${src});
    }
  `
};