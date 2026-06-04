declare const background: {
    light: string;
    dark: string;
};
declare const gray: {
    primary: string;
    secondary: string;
    tertiary: string;
    icon: string;
    border: string;
    divider: string;
    disabled: string;
    white: string;
    black: string;
};
declare const blue: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    hover: string;
    click: string;
};
declare const violet: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
};
declare const green: {
    primary: string;
};
declare const red: {
    primary: string;
};
declare const yellow: {
    primary: string;
};

declare const spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
};

declare const shadows: {
    light: string;
    medium: string;
    dark: string;
};

declare const typography: {
    headline: {
        h1: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
        h2: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
        h3: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
        subtitle1: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
        subtitle2: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
    };
    text: {
        largeBold: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
        large: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
        mediumBold: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
        medium: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
        smallBold: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
        small: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
        extraSmallBold: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
        extraSmall: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
    };
    link: {
        buttonLarge: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        buttonMedium: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        buttonSmall: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
    };
};

type Theme = {
    colors: {
        background: string;
        text: string;
        primary: string;
        secondary: string;
        success: string;
        error: string;
        warning: string;
        black: string;
        white: string;
        disabled: string;
    };
};
declare const lightTheme: Theme;
declare const darkTheme: Theme;
declare const defaultTheme: Theme;

export { type Theme, background, blue, darkTheme, defaultTheme, gray, green, lightTheme, red, shadows, spacing, typography, violet, yellow };
