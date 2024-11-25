import { type Placement } from '@popperjs/core';

export interface SketchToolTipProps {
  content?: string;
  trigger?: 'hover' | 'click';
  manual?: boolean;
  placement?: Placement;
  delay?: number;
}

export interface SketchToolTipEmits {
  (e: 'visible-change', value: boolean): void;
}

export interface SketchToolTipInstance {
  show: () => void;
  hide: () => void;
}
