// src/colors.ts
var background = {
  light: "#FFFFFF",
  dark: "#F8F8F8"
};
var gray = {
  primary: "#181818",
  secondary: "#5c5c5c",
  tertiary: "#747474",
  icon: "#7c7b7b",
  border: "#d7d7d7",
  divider: "#ededed",
  disabled: "#8a8a8a",
  white: "#FFFFFF",
  black: "#000000"
};
var blue = {
  primary: "#2d5bff",
  secondary: "#6284fd",
  tertiary: "#96ADFF",
  quaternary: "#ECF0FF",
  hover: "#1B4AF0",
  click: "#002ED0"
};
var violet = {
  primary: "#AF4BFE",
  secondary: "#BE74F9",
  tertiary: "#E2BDFF",
  quaternary: "#F5E8FF"
};

// src/spacing.ts
var spacing = {
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "20px",
  xl: "24px",
  "2xl": "32px",
  "3xl": "40px",
  "4xl": "48px",
  "5xl": "56px"
};

// src/shadows.ts
var shadows = {
  light: "0px 0px 10px rgba(131.75, 131.75, 131.75, 0.15)",
  medium: "0px 0px 20px rgba(131.75, 131.75, 131.75, 0.20)",
  dark: "0px 0px 30px rgba(131.75, 131.75, 131.75, 0.25)"
};

// src/typography.ts
var typography = {
  headline: {
    h1: {
      fontSize: "56px",
      fontFamily: "Mulish",
      fontWeight: "800",
      lineHeight: "62px"
    },
    h2: {
      fontSize: "48px",
      fontFamily: "Mulish",
      fontWeight: "800",
      lineHeight: "56px"
    },
    h3: {
      fontSize: "40px",
      fontFamily: "Mulish",
      fontWeight: "800",
      lineHeight: "48px"
    },
    subtitle1: {
      fontSize: "32px",
      fontFamily: "Mulish",
      fontWeight: "800",
      lineHeight: "40px"
    },
    subtitle2: {
      fontSize: "24px",
      fontFamily: "Mulish",
      fontWeight: "800",
      lineHeight: "30px"
    }
  },
  text: {
    largeBold: {
      fontSize: "18px",
      fontFamily: "Mulish",
      fontWeight: "700",
      lineHeight: "24px"
    },
    large: {
      fontSize: "18px",
      fontFamily: "Mulish",
      fontWeight: "400",
      lineHeight: "24px"
    },
    mediumBold: {
      fontSize: "16px",
      fontFamily: "Mulish",
      fontWeight: "700",
      lineHeight: "20px"
    },
    medium: {
      fontSize: "16px",
      fontFamily: "Mulish",
      fontWeight: "400",
      lineHeight: "20px"
    },
    smallBold: {
      fontSize: "14px",
      fontFamily: "Mulish",
      fontWeight: "700",
      lineHeight: "18px"
    },
    small: {
      fontSize: "14px",
      fontFamily: "Mulish",
      fontWeight: "400",
      lineHeight: "18px"
    },
    extraSmallBold: {
      fontSize: "12px",
      fontFamily: "Mulish",
      fontWeight: "700",
      lineHeight: "16px"
    },
    extraSmall: {
      fontSize: "12px",
      fontFamily: "Mulish",
      fontWeight: "400",
      lineHeight: "16px"
    }
  },
  link: {
    buttonLarge: {
      fontSize: "18px",
      fontFamily: "Mulish",
      fontWeight: "800",
      lineHeight: "24px",
      letterSpacing: "0.36px"
    },
    buttonMedium: {
      fontSize: "16px",
      fontFamily: "Mulish",
      fontWeight: "800",
      lineHeight: "24px",
      letterSpacing: "0.32px"
    },
    buttonSmall: {
      fontSize: "14px",
      fontFamily: "Mulish",
      fontWeight: "800",
      lineHeight: "16px",
      letterSpacing: "0.28px"
    }
  }
};
export {
  background,
  blue,
  gray,
  shadows,
  spacing,
  typography,
  violet
};
