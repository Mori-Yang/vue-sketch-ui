import { isRef, onBeforeUnmount, onMounted, unref, watch, type Ref } from 'vue';

export default function useEvenetListener(
  target: EventTarget | Ref<EventTarget | null | undefined>,
  event: string,
  handler: (e: Event) => unknown,
) {
  if (isRef(target)) {
    watch(target, (newTarget, oldTarget) => {
      newTarget?.addEventListener(event, handler);
      oldTarget?.removeEventListener(event, handler);
    });
  }
  onMounted(() => {
    if (!isRef(target)) {
      target.addEventListener(event, handler);
    }
  });
  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(event, handler);
  });
}
