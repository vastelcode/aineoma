// импорт модулей
import { createSlice } from "@reduxjs/toolkit";
// 2. Задаём начальное состояние
const initialState = {
    mode: 'light'
};
// 3. Создаём слайс
const themeSlice = createSlice({
    name: 'theme', // уникальное имя
    initialState, // начальное состояние
    reducers: {
        // 4. создаём action для переключения темы
        toggleTheme(state) {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        // 5. создаём action для установки конкретной темы
        setTheme(state, action) {
            state.mode = action.payload;
        },
    },
});
// 5. экспортируем actions
export const { toggleTheme, setTheme } = themeSlice.actions;
// 6. Экспортируем редюсер
export default themeSlice.reducer;
