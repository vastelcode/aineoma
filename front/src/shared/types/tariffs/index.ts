/* типы для работы с тарифами */

// поля для характеристик тарифа
export type FeatureKey = 
  | 'symbols' 
  | 'images' 
  | 'sounds' 
  | 'templates' 
  | 'history' 
  | 'gpt-3.5' 
  | 'gpt-4' 
  | 'dall-e';

// тип пропса карточки тарифа
export interface TariffCardProps {
  price: string;
  infoTariff: Record<FeatureKey, string>;
  nameTariff: string;
  modelTariff: string;
  textBtn: React.ReactNode;
  isAllInclusive: boolean;
};

// литералы периода
export type Period = 'month' | 'halfYear' | 'year';

// тип тарифа
export interface Tariff extends Omit<TariffCardProps, 'price'> {
  id: string;
  prices: Record<Period, string>;
}