import { h, render } from 'vue';
import type { MessageInstance, SketchMessageProps } from './types';
import SketchMessage from './SketchMessage';
import useZIndex from '@/hooks/useZindex';

let message_id = 1;
const messageInstances: MessageInstance[] = [];

export const moveAfterDeleteMessage = (idx: number, height: number) => {
  const deleteMessage = messageInstances[idx];
  const deleteOffset: number = (deleteMessage.vm?.props?.offset as number) + (height || 0);

  messageInstances.forEach((instance, index) => {
    if (index <= idx) {
      return;
    }
    const offset = instance.vnode.component?.exposed?.curOffset;
    if (offset && deleteOffset) {
      offset.value -= deleteOffset;
    }
  });
  const lastInstance = getLastInstance();
  lastInstance.nextOffset.value -= deleteOffset;
};

export const getLastInstance = () => {
  return messageInstances[messageInstances.length - 1];
};

export const createMessage = (props: SketchMessageProps): MessageInstance => {
  const { nextZIndex } = useZIndex();
  const container = document.createElement('div');
  const id = `message_${message_id++}`;
  props = {
    ...props,
    zIndex: nextZIndex(),
    destory: (height: number) => {
      const index = messageInstances.findIndex((instance) => instance.id === id);
      if (index === -1) return;
      moveAfterDeleteMessage(index, height);
      messageInstances.splice(index, 1);
      render(null, container);
    },
  };
  const vnode = h(SketchMessage, props);
  render(vnode, container);

  document.body.appendChild(container.firstChild!);
  const nextOffset = vnode.component?.exposed?.nextOffset;
  const instance: MessageInstance = {
    id: id,
    vnode: vnode,
    vm: vnode.component!,
    props: props,
    nextOffset: nextOffset,
  };
  messageInstances.push(instance);

  return instance;
};
