import { css, CSSProp, CSSObject } from "styled-components";
export type CustomCSSType = CSSProp | CSSObject;

export interface IElement {
  customCss?: CustomCSSType;
}

interface PixelToRemFn<> { 
  (px: number, pxBase?: number): string;
}
export const pixelToRem: PixelToRemFn = (px: number, pxBase = 16) => `${(px / pxBase)}rem`;

interface FontFaceFn<> { 
  (fontFamily: string, src: string, fontWeight?: number, fontStyle?: string): CustomCSSType;
}
export const fontFace: FontFaceFn = (
  fontFamily,
  src,
  fontWeight = 500,
  fontStyle = 'normal',
) => {
  return css`
    @font-face {
      font-family: ${fontFamily};
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
      src: url(${src});
    }
  `
};

interface IsMobileFn<> {
  (): boolean;
}
export const isMobile: IsMobileFn = () => (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)
);