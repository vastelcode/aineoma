import { useEffect } from "react";
import { useSelector } from "react-redux";
// конфигурация цветовых схем
const THEME_CONFIG = {
    light: {
        '--color-bg': '#F0F1FB',
        '--color-text': '#212D31',
        '--color-input': '#CCDCFC',
        '--color-tabs': '#303030',
        '--color-hover': '#D8E3FB',
        '--color-window-chat': '#F9F9FF'
    },
    dark: {
        '--color-bg': '#212D31',
        '--color-text': '#F0F1FB',
        '--color-input': '#404A50',
        '--color-tabs': '#F3F5F8',
        '--color-hover': '#364145',
        '--color-window-chat': '#374245'
    }
};
// провайдер для темы
export const ThemeProvider = ({ children }) => {
    // получаем тему из хранилища
    const theme = useSelector((state) => state.theme.mode);
    useEffect(() => {
        // применяем CSS-переменные к корневому элементу
        const root = document.documentElement;
        // получаем соотвествующие переменные
        const themeVariables = THEME_CONFIG[theme];
        Object.entries(themeVariables).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
        // сохраняем тему в localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);
    return children;
};
