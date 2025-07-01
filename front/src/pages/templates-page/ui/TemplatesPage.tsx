// стили
import styles from './TemplatesPage.module.scss';

// хуки
import { useState, useCallback, useMemo } from 'react';

// карточка шаблона UI
import { TemplateCard } from '@/shared/ui/template-card/index.js';

// типы для страницы с шаблонами
import { typesTemplates } from '../model/index.js';

// информационный объект
import { templates_info } from '../model/templates-info.js';
import { categoryTabs } from '../model/templates-info.js';


export const TemplatesPage = () => {

  const [activeCategory, setActiveCategory] = useState<typesTemplates.categoriesType>('content');

  const changeCategory = useCallback((newCategory: typesTemplates.categoriesType) => {
    setActiveCategory(newCategory);
  },[]);

  
  // мемоизированный список карточкек
  const templatesCards = useMemo(() => {
    return templates_info[activeCategory].map((elem,index) => {
      return (
        <TemplateCard header={elem.header} text={elem.text} key={index} color={categoryTabs[activeCategory].color}/>
      );
    })
  },[activeCategory])


  return (
    <div 
    className={`${styles.container} flex items-center flex-col gap-7 pt-6`}
    >
      <div className={`${styles["categories__tabs"]} flex justify-between`}>
        {
          (['content','site','marketing','social'] as typesTemplates.categoriesType[]).map(category => {
            return (
              <TabButton
              key={category}
              category={category}
              activeCategory={activeCategory}
              onClick={changeCategory}
              />
            );
          })
        }
      </div>
      <div 
      className={`flex-col flex gap-5`}
      >
        <div className={`${styles["category__tab"]} ${styles[`category__tab_${categoryTabs[activeCategory].color}`]} inline-flex justify-center items-center`}>
          {categoryTabs[activeCategory].text}
        </div>
        <div 
        className={`${styles.grid}`}
        key={activeCategory}
        >
          {templatesCards}
        </div>
      </div>
    </div>
  );
}

// Вынесенный компонент для кнопок таба
const TabButton = ({
  category,
  activeCategory,
  onClick
}: {
  category: typesTemplates.categoriesType;
  activeCategory: typesTemplates.categoriesType;
  onClick: (category: typesTemplates.categoriesType) => void;
}) => {
  const categoryLabels = {
    content: `Контент ${templates_info.content.length}`,
    site: `Сайт ${templates_info.site.length}`,
    marketing: `Маркетинг ${templates_info.marketing.length}`,
    social: `Соцсети ${templates_info.social.length}`
  };

  return (
    <div 
      className={`${styles["categories__tab"]} ${activeCategory === category ? `${styles["categories__tab_active"]}` : ''}`}
      onClick={() => onClick(category)}
    >
      {categoryLabels[category]}
    </div>
  );
};