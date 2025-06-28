import styles from './Tab.module.scss';


interface TabProps {
  children: React.ReactNode;
  icon:string;
  isActive?: boolean;
};


export const Tab = ({ children, icon, isActive = false } : TabProps) => {
  return (
    <div 
    className={`${styles.tab} pl-10 flex items-center gap-2.5 ${isActive ? `${styles["tab_active"]}` : ''}`}
    >
      <img src={icon} alt="" className={`${styles.icon}`} />
      {children}
    </div>
  );
}