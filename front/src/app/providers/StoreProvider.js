import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/index.js';
import { ThemeInitializer } from '@/features/theme/index.js';
export function StoreProvider({ children }) {
    return (_jsx(Provider, { store: store, children: _jsxs(PersistGate, { loading: null, persistor: persistor, children: [_jsx(ThemeInitializer, {}), " ", children] }) }));
}
;
