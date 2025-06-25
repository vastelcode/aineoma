import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import rootReducer from './root-reducer.js'; // Импорт корневого редюсера

// Конфигурация для redux-persist
const persistConfig = {
  key: 'root', // Ключ для localStorage
  storage,     // Тип хранилища (localStorage)
  whitelist: ['theme'], // Какие части состояния сохранять
};

// Создаем персистентный редюсер
// persistReducer оборачивает rootReducer для сохранения состояния
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Создаем хранилище Redux
export const store = configureStore({
  reducer: persistedReducer, // Передаем наш обернутый редюсер
  
  // Настройка middleware
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        // Игнорируем действия redux-persist, т.к. они не сериализуемы
        ignoredActions: ['persist/PERSIST'],
      }
    })
  },
});

// Создаем персистор для управления сохранением состояния
export const persistor = persistStore(store);

// Типы для TypeScript:
// RootState - тип всего состояния хранилища
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch - тип функции dispatch нашего хранилища
export type AppDispatch = typeof store.dispatch;