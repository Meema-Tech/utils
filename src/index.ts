import { css, CSSProp, CSSObject } from "styled-components";

export interface ITheme {
  borderRadius: number;
  color: {
    primary: {
      extraLight?: string;
      light?: string;
      normal?: string;
      dark?: string;
    };
    secondary?: {
      extraLight?: string;
      light?: string;
      normal?: string;
      dark?: string;
    };
    tertiary?: {
      extraLight?: string;
      light?: string;
      normal?: string;
      dark?: string;
    };
    success?: {
      extraLight?: string;
      light?: string;
      normal?: string;
      dark?: string;
    };
    warning?: {
      extraLight?: string;
      light?: string;
      normal?: string;
      dark?: string;
    };
    error?: {
      extraLight?: string;
      light?: string;
      normal?: string;
      dark?: string;
    };
  };
  heading: {
    color: {
      primary: {
        extraLight?: string;
        light?: string;
        normal?: string;
        dark?: string;
      };
      secondary?: {
        extraLight?: string;
        light?: string;
        normal?: string;
        dark?: string;
      };
      tertiary?: {
        extraLight?: string;
        light?: string;
        normal?: string;
        dark?: string;
      };
    }
  };
  text: {
    color: {
      primary: {
        extraLight?: string;
        light?: string;
        normal?: string;
        dark?: string;
      };
      secondary?: {
        extraLight?: string;
        light?: string;
        normal?: string;
        dark?: string;
      };
      tertiary?: {
        extraLight?: string;
        light?: string;
        normal?: string;
        dark?: string;
      };
    }
  };
  font: {
    size: {
      _default?: number;
      h1?: number;
      h2?: number;
      p?: number;
      span?: number;
      button?: number;
    };
    family: {
      primary: {
        light?: string;
        thin?: string;
        book?: string;
        medium?: string;
        regular?: string;
        black?: string;
        blackItalic?: string;
        extraBlack?: string;
        bold?: string;
        boldItalic?: string;
        extraBold?: string;
      };
      secondary?: {
        light?: string;
        thin?: string;
        book?: string;
        medium?: string;
        regular?: string;
        black?: string;
        blackItalic?: string;
        extraBlack?: string;
        bold?: string;
        boldItalic?: string;
        extraBold?: string;
      };
      tertiary?: {
        light?: string;
        thin?: string;
        book?: string;
        medium?: string;
        regular?: string;
        black?: string;
        blackItalic?: string;
        extraBlack?: string;
        bold?: string;
        boldItalic?: string;
        extraBold?: string;
      };
      _default: {
        h1?: string;
        h2?: string;
        h3?: string;
        h4?: string;
        h5?: string;
        h6?: string;
        div?: string;
        p?: string;
        span?: string;
        button?: string;
      }
    };
  };
  header: {
    height: {
    desktop: {
      small: number;
      large: number;
    };
    mobile: {
      small: number;
      large: number;
    };
  };
  };
  footer: {
    height: {
      desktop: {
        small: number;
        large: number;
      };
      mobile: {
        small: number;
        large: number;
      };
    };
  };
  responsive: {
    desktop: {
      minWidth?: number;
    };
    tablet: {
      minWidth?: number;
      maxWidth?: number;
    };
    mobile: {
      maxWidth?: number;
    };
  };
}

export type CustomCSSType = CSSProp | CSSObject;
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
) => (
  css`
    @font-face {
      font-family: ${fontFamily};
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
      src: url(${src});
    }
  `
);

interface IsMobileFn<> {
  (): boolean;
}
export const isMobile:IsMobileFn = () => (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)
);

export const alignMiddle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface BackgroundImageFn<> {
  (src: string, backgroundColor?: string, size?: string, position?: string, repeat?: string): CustomCSSType;
}
export const backgroundImage: BackgroundImageFn = (
  src,
  backgroundColor = 'transparent',
  size = 'cover',
  position = 'center',
  repeat = 'no-repeat',
) => css`
  background-color: ${backgroundColor};
  background-image: url(${src});
  background-size: ${size};
  background-position: ${position};
  background-repeat: ${repeat};
`;
