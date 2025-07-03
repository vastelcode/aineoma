/*
информационный файл с данными о тарифах
*/
// 3. создание массива с данными о тарифах
export const tariffs_info = [
    // бесплатный
    {
        id: 'free',
        nameTariff: 'Бесплатный',
        modelTariff: 'GPT-3.5',
        textBtn: "Пробовать бесплатно",
        isAllInclusive: false,
        prices: {
            month: "0.00",
            halfYear: "0.00",
            year: "0.00"
        },
        infoTariff: {
            symbols: "1,000",
            images: "0",
            sounds: "0",
            templates: "true",
            history: "true",
            "gpt-3.5": "true",
            "gpt-4": "false",
            "dall-e": "false"
        }
    },
    // тестировка
    {
        id: 'testing',
        nameTariff: 'Я потестировать',
        modelTariff: 'GPT-4',
        textBtn: "Регистрация",
        isAllInclusive: false,
        prices: {
            month: "290.00",
            halfYear: "1450.00",
            year: "2900.00"
        },
        infoTariff: {
            symbols: "3,000",
            images: "5",
            sounds: "0",
            templates: "true",
            history: "true",
            "gpt-3.5": "true",
            "gpt-4": "true",
            "dall-e": "false"
        }
    },
    // стандарт
    {
        id: 'standart',
        nameTariff: 'Стандартный',
        modelTariff: 'GPT-4 + DALL-E',
        textBtn: "Регистрация",
        isAllInclusive: false,
        prices: {
            month: "590.00",
            halfYear: "2360.00",
            year: "4720.00"
        },
        infoTariff: {
            symbols: "10,000",
            images: "20",
            sounds: "1",
            templates: "true",
            history: "true",
            "gpt-3.5": "true",
            "gpt-4": "true",
            "dall-e": "true"
        }
    },
    // безлимитный
    {
        id: 'unlimited',
        nameTariff: 'Безлимитный',
        modelTariff: 'GPT-4 + DALL-E',
        textBtn: "Регистрация",
        isAllInclusive: true,
        prices: {
            month: "1290.00",
            halfYear: "3870.00",
            year: "7740.00"
        },
        infoTariff: {
            symbols: "∞",
            images: "∞",
            sounds: "10",
            templates: "true",
            history: "true",
            "gpt-3.5": "true",
            "gpt-4": "true",
            "dall-e": "true"
        }
    },
];
