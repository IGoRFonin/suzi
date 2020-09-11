import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';

type ThemeContext = { mode: 'light' | 'dark' };

const ThemeContext = React.createContext<ThemeContext>({ mode: 'light' });

export const useThemeContext = React.useContext(ThemeContext);

const ThemeWrapper: React.FC = props => {
    return (
        <ThemeContext.Provider value={{ mode: 'light' }}>
            <ThemeProvider theme={theme('light')}>{props.children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeWrapper;
