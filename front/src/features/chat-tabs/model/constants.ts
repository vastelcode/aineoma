import { RoutePaths } from '@/app/providers/router/paths.js';
import iconMessageLight from '@/shared/assets/icons/icon-message-light.svg';
import iconMessageDark from '@/shared/assets/icons/icon-message-dark.svg';
import iconDriverLight from '@/shared/assets/icons/icon-driver-light.svg';
import iconDriverDark from '@/shared/assets/icons/icon-driver-dark.svg';
import iconGalleryLight from '@/shared/assets/icons/icon-gallery-light.svg';
import iconGalleryDark from '@/shared/assets/icons/icon-gallery-dark.svg';
import iconMicrophoneLight from '@/shared/assets/icons/icon-microphone-light.svg';
import iconMicrophoneDark from '@/shared/assets/icons/icon-microphone-dark.svg';
import iconRamLight from '@/shared/assets/icons/icon-ram-light.svg';
import iconRamDark from '@/shared/assets/icons/icon-ram-dark.svg';

export type TabKey = 'templates' | 'chats' | 'images' | 'sound' | 'history';

export interface TabConfig {
  key: TabKey;
  path: typeof RoutePaths[keyof typeof RoutePaths];
  label: string;
  iconLight: string;
  iconDark: string;
}

export const tabsConfig: TabConfig[] = [
  {
    key: 'templates',
    path: RoutePaths.CHAT_TEMPLATES,
    label: 'Шаблоны',
    iconLight: iconDriverLight,
    iconDark: iconDriverDark,
  },
  {
    key: 'chats',
    path: RoutePaths.CHAT_CHATS,
    label: 'Чаты',
    iconLight: iconMessageLight,
    iconDark: iconMessageDark,
  },
  {
    key: 'images',
    path: RoutePaths.CHAT_IMAGES,
    label: 'Изображения',
    iconLight: iconGalleryLight,
    iconDark: iconGalleryDark,
  },
  {
    key: 'sound',
    path: RoutePaths.CHAT_SOUND,
    label: 'Голос в текст',
    iconLight: iconMicrophoneLight,
    iconDark: iconMicrophoneDark,
  },
  {
    key: 'history',
    path: RoutePaths.CHAT_HISTORY,
    label: 'История',
    iconLight: iconRamLight,
    iconDark: iconRamDark,
  },
];