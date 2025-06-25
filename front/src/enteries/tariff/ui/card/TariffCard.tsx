// импорт внутренних модулей React
import { useMemo } from 'react';

// импорт ui-компонентов
import Button from '@/shared/ui/button';
import TariffName from '@/shared/ui/tariff-name';
import TariffPoint from '@/shared/ui/tariff-point';

//импорт стилей для карточки
import styles from './TariffCard.module.scss';

// импорт помощников
import { values } from '@/shared/lib/helpers/index.js';

// импорт типов
import { tariffsTypes } from '@/shared/types/index.js';


// 1. Константа для перевода ключей в читаемые названия
const FEATURE_LABELS: Record<tariffsTypes.FeatureKey, string> = {
  symbols: "символы / месяц",
  images: "изображений / месяц",
  sounds: "голос в текст / месяц",
  templates: "Шаблоны Neoma",
  history: "История генерации",
  "gpt-3.5": "Чат GPT-3.5",
  "gpt-4": "Чат GPT-4",
  "dall-e": "Чат GPT-4 + DALL-E"
};


export const TariffCard = ({
  price,
  infoTariff,
  nameTariff,
  modelTariff,
  textBtn,
  isAllInclusive
}: tariffsTypes.TariffCardProps) => {
  
// 2. Мемоизируем рендер пунктов для оптимизации
  const tariffPoints = useMemo(() => (
    Object.entries(infoTariff).map(([key, value]) => {
      // 3. Проверка типа для безопасного преобразования
      const featureKey = key as tariffsTypes.FeatureKey;
      
      return (
        <TariffPoint
          key={featureKey} // Уникальный ключ на основе featureKey
          text={FEATURE_LABELS[featureKey]}
          value={value === 'true' || value === 'false' ? '' : value}
          status={values.getPointStatus(value)}
        />
      );
    })
  ), [infoTariff]);

  return (
    <div className={styles["tariff-card"]}>
      <div className={styles["tariff-card__wrapper"]}>
        
        {/* 4. Блок с названием и ценой */}
        <div className={styles["tariff-card__wrapper-tariff"]}>
          <TariffName 
            isAllInclusive={isAllInclusive} 
            name={nameTariff} 
            model={modelTariff} 
          />
          
          <p className={styles["tariff-card__price"]}>
            {price} ₽
          </p>
        </div>
        
        {/* 5. Блок с характеристиками */}
        <div className={styles["tariff-card__wrapper-points"]}>
          {tariffPoints}
        </div>
      </div>
      
      {/* 6. Кнопка выбора тарифа */}
      <Button>
        {textBtn}
      </Button>
    </div>
  );
};