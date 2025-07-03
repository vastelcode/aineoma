import image404 from '@/shared/assets/images/image-404.webp';
import imageInProgress from '@/shared/assets/images/image-in-progress.webp';
import imagePaymentSuccess from '@/shared/assets/images/image-payment-success.webp';
import imagePaymentError from '@/shared/assets/images/image-payment-error.webp';
export const MESSAGE_CONTENT = {
    '404': {
        title: 'Страница не найдена',
        imageSrc: image404,
        buttonText: 'На главную'
    },
    'in-progress': {
        title: 'Ой, эта страница в разработке',
        imageSrc: imageInProgress,
        buttonText: 'На главную'
    },
    'payment-success': {
        title: 'Оплата прошла успешно!',
        imageSrc: imagePaymentSuccess,
        buttonText: 'Скорее начать!'
    },
    'payment-error': {
        title: 'Ой, оплата не прошла',
        imageSrc: imagePaymentError,
        buttonText: 'Попробовать ещё'
    }
};
