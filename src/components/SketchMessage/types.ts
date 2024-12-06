import type { ComponentInternalInstance, Ref, VNode } from 'vue';

export interface SketchMessageProps {
  type?: 'success' | 'warn' | 'info' | 'error';
  message: string | VNode;
  closeable?: boolean;
  duration?: number;
  offset?: number;
  destory?: (height: number) => void;
  zIndex?: number;
}

export interface MessageInstance {
  id: string | number;
  vnode: VNode;
  vm: ComponentInternalInstance;
  props: SketchMessageProps;
  nextOffset: Ref<number>;
}
