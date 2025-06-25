export type MessagePageType =
    | '404'
    | 'in-progress'
    | 'payment-success'
    | 'payment-error';

export interface MessageContent {
  title:string;
  imageSrc: string;
  buttonText: string;
};