import type { Instance, Placement } from '@popperjs/core';
import type { Ref } from 'vue';

export interface SketchToolTipProps {
  content?: string;
  trigger?: 'hover' | 'click';
  manual?: boolean;
  placement?: Placement;
  transition?: string;
  closeDelay?: number;
  hideAfterClick?: boolean;
}

export interface SketchToolTipEmits {
  (e: 'visible-change', value: boolean): void;
}

export interface SketchToolTipInstance {
  show?: () => void;
  hide?: (inner?: boolean) => void;
  isShow?: Ref<boolean>;
  popperInstance?: Ref<Instance | null>;
}
