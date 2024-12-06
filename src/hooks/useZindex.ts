import { computed, ref } from 'vue';

const zIndex = ref(0);
export default function useZIndex(initialValue = 3000) {
  const initialZIndex = ref(initialValue);
  const curZIndex = computed(() => zIndex.value + initialZIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return curZIndex.value;
  };

  return {
    curZIndex,
    initialZIndex,
    nextZIndex,
  };
}
