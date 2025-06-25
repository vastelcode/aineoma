import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/index.js';
import { ThemeInitializer } from '@/features/theme/index.js';

interface StoreProviderProps {
  children: React.ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeInitializer /> {/* Инициализатор темы */}
        {children}
      </PersistGate>
    </Provider>
  );
};