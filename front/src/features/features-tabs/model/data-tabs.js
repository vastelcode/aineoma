// иконки для табов
import iconPhoto from '@/shared/assets/icons/photo-icon.svg';
import iconChat from '@/shared/assets/icons/chat-icon.svg';
import iconWrite from '@/shared/assets/icons/write-icon.svg';
import iconSettings from '@/shared/assets/icons/settings-icon.svg';
import iconImg from '@/shared/assets/icons/img-icon.svg';
import iconSound from '@/shared/assets/icons/sound-icon.svg';
export const tabs = [
    {
        text: 'Обработка фото',
        icon: iconPhoto,
        id: 'processing-img'
    },
    {
        text: 'Общение с ChatGPT',
        icon: iconChat,
        id: 'communication'
    },
    {
        text: 'История',
        icon: iconWrite,
        id: 'history'
    },
    {
        text: 'Готовые шаблоны',
        icon: iconSettings,
        id: 'templates'
    },
    {
        text: 'Генерация изображений',
        icon: iconImg,
        id: 'generation'
    },
    {
        text: 'Голос в текст',
        icon: iconSound,
        id: 'sound'
    }
];
// изображения для табов
import imgSound from '@/shared/assets/images/image-sound.webp';
import imgTemplates from '@/shared/assets/images/image-templates.webp';
import imgGeneration from '@/shared/assets/images/image-generation.webp';
import imgHistory from '@/shared/assets/images/image-history.webp';
export const tabs_content = [
    {
        id: 'processing-img',
        title: 'Превратите свои фотографии в произведения искусства за считанные секунды!',
        description: 'Наш онлайн-сервис использует технологии машинного обучения для преобразования ваших фото в разные художественные стили и эффекты: картина маслом, графический рисунок, акварель, аниме и множество других фильтровю',
        image: imgTemplates
    },
    {
        id: 'communication',
        title: 'Удивитесь, как быстро проходит время в беседе с искусственным интеллектом!',
        description: 'ChatGPT умеет анализировать тексты и отвечать на сложные вопросы, поддерживать беседу на различные темы, рассказывать интересные факты, давать советы рекомендации.',
        image: imgGeneration
    },
    {
        id: 'history',
        title: 'Все результаты генераций и чатов под рукой!',
        description: 'В любой момент найдите нужный вам результат на вкладке "История"',
        image: imgHistory
    },
    {
        id: 'templates',
        title: 'Не подбирайте запросы, просто выберете то, что нужно!',
        description: 'Нужно быстро сдать статью? Или придумать описание для тоовара? А может нужно наполнить весь сайт контентом? Эти и многие другие шаблоны помогут быстро решить вашу задачу.',
        image: imgTemplates
    },
    {
        id: 'generation',
        title: 'Создавайте уникальные изображения по вашему запросу за секунды!',
        description: `Просто введите любое текстовое описание, и наша система на основе нейросетей мгновенно сгенерирует изображение по заданным параметрам.

    Создавайте космические пейзажи, футуристические города, пришельцев и роботов, фэнтезийных существ, места для путешествий, аватарки и персонажей. И все, что только представить не можете`,
        image: imgGeneration
    },
    {
        id: 'sound',
        title: 'Не тратьте время на расшифровку аудиозаписей!',
        description: `Просто загрузите аудиофайл в нужном формате – и искусственныq интеллект мгновенно распознает речь с самой высокой точностью. Вы получите готовый текстовый документ со всем произнесённым в записи.

    Теперь не нужно тратить часы на расшифровку важной встречи, лекции или интервью! Один клик – и вы получите текст со всей информацией.`,
        image: imgSound
    },
];
