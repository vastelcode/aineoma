// все пути приложения в одном месте
export const RoutePaths = {
  ABOUT: '/',
  TARIFFS: '/tariffs',
  LOGIN: '/login',
  LOGUP: '/logup',
  PROFILE:'/profile',
  PAYMENT_SUCCESS:'/payment/success',
  PAYMENT_ERROR:'/payment/error',
  NOT_FOUND:'*'
}

// тип для TypeScript
export type AppRoutes = keyof typeof RoutePaths;