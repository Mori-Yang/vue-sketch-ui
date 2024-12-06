import type { Ref } from 'vue';
import useEvenetListener from './useEventListener';

export default function useMouseInAndOut(
  target: EventTarget | Ref<EventTarget | null | undefined>,
  inHandler: () => void,
  outHandler: () => void,
) {
  const enter = () => {
    inHandler();
  };

  const leave = () => {
    outHandler();
  };
  useEvenetListener(target, 'mouseenter', enter);
  useEvenetListener(target, 'mouseleave', leave);
}
