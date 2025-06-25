import styles from './TariffPoint.module.scss';
import IconGreen from '@/shared/assets/icons/energy-green.svg';
import IconRed from '@/shared/assets/icons/energy-red.svg';

type TariffPointType = {
  text:string,
  value: string ,
  status: string
};

export default function TariffPoint ({text, value, status}: TariffPointType) {

  const baseClass = styles["tariff-point"];
  const wrapperClass = styles[`tariff-point__wrapper`];
  const iconBaseClass = styles["tariff-point__icon"];


  return (
    <div
    className={`${baseClass}`}
    >
      <div className={`${wrapperClass}`}>
      <img src={status == 'positive' ? IconGreen : IconRed} alt="пункт тарифа" className={`${iconBaseClass}`}/>
        <p>{text}</p>
      </div>
      <p>{value}</p>
    </div>
  );
};