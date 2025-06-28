// все пути приложения в одном месте
export const RoutePaths = {
  ABOUT: '/',
  TARIFFS: '/tariffs',
  LOGIN: '/login',
  LOGUP: '/logup',
  MESSAGE: '/message/:type',
  NOT_FOUND:'*',
  CHAT_TEMPLATES:'/chat/',
  CHAT_CHATS:'/chat/chats',
  CHAT_IMAGES:'/chat/generation',
  CHAT_SOUND:'/chat/sound',
  CHAT_HISTORY:'/chat/history',
  CHAT_PROFILE:'/chat/profile'
}

// тип для TypeScript
export type AppRoutes = keyof typeof RoutePaths;