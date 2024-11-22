import type { ButtonProps } from '../SketchButton/types';

export type AlertType = 'primary' | 'success' | 'danger';

export interface SketchAlertProps {
  type?: AlertType;
  closeable?: boolean;
  'on-close'?: () => void;
  options?: ButtonProps[];
  icon?: string;
}

export interface SketchAlertEmits {
  (e: 'close'): void;
}
