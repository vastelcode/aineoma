// импорт модулей
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// 1. опрелеляем тип темы
type ThemeMode = "light" | "dark"; 

// 2. определеям тип для состояния
interface ThemeState {
  mode: ThemeMode;
}

// 2. Задаём начальное состояние
const initialState: ThemeState = {
  mode: 'light'
};


// 3. Создаём слайс
const themeSlice = createSlice({
  name:'theme', // уникальное имя
  initialState, // начальное состояние
  reducers: {
    // 4. создаём action для переключения темы
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    // 5. создаём action для установки конкретной темы
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
     },
  },
});

// 5. экспортируем actions
export const { toggleTheme, setTheme } = themeSlice.actions;

// 6. Экспортируем редюсер
export default themeSlice.reducer;