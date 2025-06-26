import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/index.js";


// типы для CSS-переменных
type ThemeVariables = {
  '--color-bg':string;
  '--color-text':string;
  '--color-input':string;
  '--color-tabs':string;
};

// конфигурация цветовых схем
const THEME_CONFIG: Record<'light' | 'dark', ThemeVariables> = {
  light : {
    '--color-bg':'#F0F1FB',
    '--color-text':'#212D31',
    '--color-input':'#CCDCFC',
    '--color-tabs':'#303030'
  },
  dark: {
    '--color-bg': '#212D31',
    '--color-text': '#F0F1FB',
    '--color-input': '#404A50',
    '--color-tabs': '#F3F5F8'
  }
};
// провайдер для темы
export const ThemeProvider = ({ children } : { children: React.ReactNode }) => {
  // получаем тему из хранилища
  const theme = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    // применяем CSS-переменные к корневому элементу
    const root = document.documentElement;
    // получаем соотвествующие переменные
    const themeVariables = THEME_CONFIG[theme];

    Object.entries(themeVariables).forEach(([key,value]) => {
      root.style.setProperty(key, value);
    });

    // сохраняем тему в localStorage
    localStorage.setItem('theme',theme);

  },[theme]);

  return children;
}