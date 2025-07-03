import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Button.module.scss';
export default function Button({ children, onClick = () => { }, className = '' }) {
    return (_jsx("button", { className: `${styles.button} ${className}`, onClick: onClick, children: children }));
}
