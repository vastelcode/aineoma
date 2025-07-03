import { jsxs as _jsxs } from "react/jsx-runtime";
import styles from './TariffName.module.scss';
export function TariffName({ name, model, isAllInclusive }) {
    const baseClass = styles["tariff-name"];
    const modifierClass = isAllInclusive ? styles["tariff-name--all-inclusive"] : "";
    return (_jsxs("div", { className: `${baseClass} ${modifierClass}`, children: [name, " | ", model] }));
}
;
