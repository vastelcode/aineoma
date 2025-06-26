import { AccordionItem } from "./accordion-item/AccordionItem.js";

interface AccordionProps {
  items: {
    title: string;
    content: string;
  }[];
  className?:string;
};

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  return (
    <div 
    className={`${className}`}>
      {items.map((item,index) => (
        <AccordionItem
        key={index}
        title={item.title}
        content={item.content}
        />
      ))}
    </div>
  );
}