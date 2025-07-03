import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../model/slice.js';
export const ThemeInitializer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // Восстанавливаем тему из localStorage или используем системную
        const savedTheme = localStorage.getItem('theme');
        const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
        dispatch(setTheme(initialTheme));
    }, [dispatch]); // Зависимость от dispatch
    return null; // Компонент не рендерит визуальных элементов
};
