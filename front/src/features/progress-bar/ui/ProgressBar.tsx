import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  currentValue:number;
  maxValue: number;
  width:number;
}

export const ProgressBar = ({maxValue, width, currentValue} : ProgressBarProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <p className={`${styles.header}`}>Потрачено символов</p>
      <div className={`${styles.bar}`} style={{width:width + 'px'}}>
        <div className={`${styles.progress}`} style={{width:currentValue/maxValue * width + 'px'}}></div>
      </div>
      <p className={`${styles.text}`}>{currentValue}/{maxValue}</p>
    </div>
  );
}