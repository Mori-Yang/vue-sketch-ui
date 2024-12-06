import type { VNode } from 'vue';
import type {
  SketchToolTipEmits,
  SketchToolTipInstance,
  SketchToolTipProps,
} from './../SketchToolTip/types';

type key = string | number;
export interface MenuOption {
  label: string | VNode;
  key: key;
  disabled?: boolean;
}
export interface SketchDropdownProps extends SketchToolTipProps {
  menuOptions: MenuOption[];
  hideAfterClick?: boolean;
}

export interface SketchDropdownEmits extends SketchToolTipEmits {
  (e: 'select', value: key): void;
}

export type SketchDropdownInstance = Partial<Pick<SketchToolTipInstance, 'show' | 'hide'>>;
