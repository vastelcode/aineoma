/**
 * Определяет статус для пункта тарифа на основе значения
 * @param value - Значение из информации о тарифе
 * @returns 'positive' или 'negative' статус
 */


export  function getPointStatus (value: string): 'positive' | 'negative' {
  if (value === 'true') return 'positive';
  if (value === 'false') return 'negative';
  if (value === '0') return 'negative';
  return 'positive';
};