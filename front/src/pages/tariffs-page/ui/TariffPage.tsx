/* необходжимые хуки */
import { useState, useCallback, useMemo } from 'react';

/* стилизация */
import styles from './TariffPage.module.scss';

/* карточка тарифа */
import { TariffCard } from '@/enteries/tariff/ui/card/index.js';

/* информация о тарифах */
import { tariffs_info } from '@/enteries/tariff/model/tariffs-data.js';

/* типы тарифов */
import { tariffsTypes } from '@/shared/types/index.js';

/* компонент аккордеона */
import { Accordion } from '@/shared/ui/accordion/index.js';

/* информация о FAQ */
import { accordion_info } from '@/shared/ui/accordion/index.js';

export function TariffPage() {
  // состояние активного периода
  const [activePeriod, setActivePeriod] = useState<tariffsTypes.Period>('month');

  // Мемоизированная функция смены периода
  const changePeriod = useCallback((newPeriod: tariffsTypes.Period) => {
    setActivePeriod(newPeriod);
  }, []);

  // Мемоизированный список тарифных карточек
  const tariffCards = useMemo(() => {
    return tariffs_info.map((elem, index) => (
      <TariffCard 
        key={`${elem.nameTariff}_${index}`}
        nameTariff={elem.nameTariff}
        modelTariff={elem.modelTariff}
        textBtn={elem.textBtn}
        isAllInclusive={elem.isAllInclusive}
        infoTariff={elem.infoTariff}
        price={elem.prices[activePeriod]}
      />
    ));
  }, [activePeriod]); // Зависит только от activePeriod

  return (
    <div className={`${styles.container} flex justify-center items-center flex-col`}>

      {/* блок с тарифами */}
      <div className={`${styles.tariffs} flex flex-col items-center`}>
        <p className={`${styles.header}`}>тарифы</p>
        
        {/* Компонент табов с мемоизированными обработчиками */}
        <div className={`${styles["tariffs__tabs"]} flex justify-between`}>
          {(['month', 'halfYear', 'year'] as tariffsTypes.Period[]).map(period => (
            <TabButton
              key={period}
              period={period}
              activePeriod={activePeriod}
              onClick={changePeriod}
            />
          ))}
        </div>

        <div className={`${styles["tariffs__wrapper"]}`}>
          {tariffCards}
        </div>
      </div>

      {/* блок с частыми вопросами */}
      <div 
      className={`${styles.faq} flex flex-col items-center gap-28`}>
        <p className={`${styles.header}`}>Вопросы</p>
        {/* аккордеон */}
        <Accordion  items={accordion_info} className={`${styles.accordion}`}/>
      </div>
    </div>
  );
}

// Вынесенный компонент для кнопок таба
const TabButton = ({
  period,
  activePeriod,
  onClick
}: {
  period: tariffsTypes.Period;
  activePeriod: tariffsTypes.Period;
  onClick: (period: tariffsTypes.Period) => void;
}) => {
  const periodLabels = {
    month: '1 месяц',
    halfYear: '6 месяцев',
    year: '1 год'
  };

  return (
    <div 
      className={`${styles["tariffs__tab"]} ${activePeriod === period ? `${styles["tariffs__tab_active"]}` : ''}`}
      onClick={() => onClick(period)}
    >
      {periodLabels[period]}
    </div>
  );
};