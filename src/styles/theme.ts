import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    primary: {
      700: '#996DFF'
    },
    secondary: {
      700: '#FBA94C'
    },
    cyan: {
      700: '#0e7490',
      500: '#06b6d4',
      300: '#67e8f9',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6'
    },
    white: '#FFFFFF'
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56
  }
});