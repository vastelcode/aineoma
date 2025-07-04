// AboutPage.tsx
import styles from './AboutPage.module.scss';
import Button from '@/shared/ui/button/index.js';

import imgPeople from '@/shared/assets/images/image-people-in-a-box.webp';

import { FeaturesTabs } from '@/features/features-tabs/index.js';

import { tabs_content } from '@/features/features-tabs/model/data-tabs.js';


export function AboutPage() {
  return (
    <div className={`${styles.container} flex justify-center items-center flex-col`}>
      <div className={`${styles.content} flex`}>
        <div className={`${styles["text-content"]}`}>
          <p className={`${styles.header}`}>CHATGPT и не только</p>
          <p className={`${styles.text}`}>
            Без VPN, на русском и даже с телефона. <br />
            А еще...
          </p>
          <ul className={`${styles.ul}`}>
            <li className={`${styles.li}`}>генерация изображений DALL-E, Stable Diffusion</li>
            <li className={`${styles.li}`}>обработка фото в разных стилях</li>
            <li className={`${styles.li}`}>шаблоны контента для сайта/соцсетей/рекламы</li>
            <li className={`${styles.li}`}>море общения с chatGPT</li>
            <li className={`${styles.li}`}>и все, что вообразить невозможно</li>
          </ul>
          <Button className={`${styles.btn}`}>Попробовать бесплатно</Button>
        </div>

        <div className={`${styles.wrapper} flex flex-col justify-end`}>
          <img src={imgPeople} alt="" className={`${styles["img-people"]}`} />
          
        </div>
      </div>

      <div 
      className={`${styles.servises} flex flex-col`}>
        <p className={`${styles["servises__header"]}`}>один сервис - много возможностей</p>
        <FeaturesTabs tabs={tabs_content}/>
      </div>
    </div>
  );
}