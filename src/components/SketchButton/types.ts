export type ButtonType = 'primary' | 'success' | 'danger';
export type ButtonSize = 'large' | 'middle' | 'small';
export type NativeButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  dashed?: boolean;
  icon?: string;
  loading?: boolean;

  // navite props
  nativeType?: NativeButtonType;
  disabled?: boolean;
  autofocus?: boolean;
}

export interface ButtonInstance {
  ref: HTMLButtonElement | null;
}
