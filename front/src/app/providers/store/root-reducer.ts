import { combineReducers } from '@reduxjs/toolkit';
// Импортируем редюсеры из разных слоев
// пока что их нет

// тестовый редюсер для смены темы
import themeReducer from '@/features/theme/model/slice.js';

const rootReducer = combineReducers({
  theme: themeReducer
});

export default rootReducer;