import React from 'react';

export const themes = {
  home: {
    primary: '#0E8C7F',
  },
  circuit: {
    primary: '#B33951',
  },
  frequency: {
    primary: '#4F359B',
  },
  error: {
    primary: '#0E8C7F',
  },
};

export const ThemeContext = React.createContext(  
  themes.home
);

