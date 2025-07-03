import { jsx as _jsx } from "react/jsx-runtime";
import { AccordionItem } from "./accordion-item/AccordionItem.js";
;
export const Accordion = ({ items, className = '' }) => {
    return (_jsx("div", { className: `${className}`, children: items.map((item, index) => (_jsx(AccordionItem, { title: item.title, content: item.content }, index))) }));
};
