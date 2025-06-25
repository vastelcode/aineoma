import styles from './Button.module.scss';


type ButtonsProps = {
  children: React.ReactNode,
  onClick?: () => void,
  className?:string
}

export default function Button({children, onClick = () => {}, className=''}:ButtonsProps) {
  return (
    <button
    className={`${styles.button} ${className}`}
    onClick={onClick}
    >
      {children}
    </button>
  );
}