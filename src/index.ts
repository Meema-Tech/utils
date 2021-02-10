interface PixelToRemFn<> { 
  (px: number, pxBase?: number): string;
}
export const pixelToRem: PixelToRemFn = (px: number, pxBase = 16) => `${(px / pxBase)}rem`;


interface FontFaceFn<> { 
  (fontFamily: string, src: string, fontWeight?: number, fontStyle?: string): string;
}
export const fontFace: FontFaceFn = (
  fontFamily,
  src,
  fontWeight = 500,
  fontStyle = 'normal',
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