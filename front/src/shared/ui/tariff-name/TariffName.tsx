import styles from './TariffName.module.scss';

type TariffNameType = {
  name:string,
  model:string,
  isAllInclusive:boolean
};

export function TariffName ({name, model, isAllInclusive}:TariffNameType)  {
  const baseClass = styles["tariff-name"];
  const modifierClass = isAllInclusive ? styles["tariff-name--all-inclusive"] : "";
  return (
    <div
    className={`${baseClass} ${modifierClass}`}
    >
     {name} | {model}
    </div>
  );
};