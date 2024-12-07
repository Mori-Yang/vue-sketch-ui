import { ref, type PropType, onMounted, nextTick, Transition, defineComponent } from 'vue';
import type { SketchMessageProps } from './types';
import './style.scss';
import AwesomeIcon from '../Icon/AwesomeIcon.vue';
import { getLastInstance } from './methods';
import useMouseInAndOut from '@/hooks/useMouseInAndOut';

export default defineComponent(
  (props, ctx) => {
    const messageRef = ref<HTMLElement>();
    const nextOffset = ref(0);
    const curOffset = ref(0);
    const visible = ref(false);
    const timer = ref<ReturnType<typeof setTimeout> | undefined>(undefined);
    const height = ref<number | undefined>(0);
    function handleClose() {
      visible.value = false;
    }
    function startTimer() {
      timer.value = setTimeout(() => {
        visible.value = false;
      }, props.duration);
    }
    function handleMouseIn() {
      if (props.duration !== 0) clearTimeout(timer.value);
    }
    function handleMouseOut() {
      if (props.duration !== 0) startTimer();
    }
    function destoryComponent() {
      if (!!props.destory) {
        props.destory(height.value as number);
      }
    }
    onMounted(() => {
      const prevInstance = getLastInstance();
      curOffset.value = prevInstance?.nextOffset.value || props.offset!;
      nextTick(() => {
        nextOffset.value = messageRef.value!.getBoundingClientRect().bottom + props.offset!;
        height.value = messageRef.value?.getBoundingClientRect().height;
      });
    });
    onMounted(() => {
      useMouseInAndOut(messageRef, handleMouseIn, handleMouseOut);
      visible.value = true;
      if (props.duration !== 0) {
        startTimer();
      }
    });

    ctx.expose({
      nextOffset,
      curOffset,
    });
    return () => {
      return (
        <Transition name="fade-up" onAfterLeave={destoryComponent}>
          {visible.value ? (
            <div
              class={{
                'sk-message': true,
                [`sk-message--${props.type}`]: true,
                'is-close': props.closeable,
              }}
              style={{
                top: `${curOffset.value}px`,
                'z-index': props?.zIndex, // 无效
              }}
              ref={messageRef}
            >
              <span class="sk-message_content">{props.message}</span>
              {props.closeable && (
                <span class="sk-message__close">
                  <AwesomeIcon icon="xmark" onClick={handleClose} clazz="sk-message__close_icon" />
                </span>
              )}
            </div>
          ) : (
            ''
          )}
        </Transition>
      );
    };
  },
  {
    props: {
      type: {
        type: String as PropType<SketchMessageProps['type']>,
        default: 'info',
      },
      message: {
        type: String,
        required: true,
      },
      closeable: {
        type: Boolean,
        default: false,
      },
      duration: {
        type: Number,
        default: 3000,
      },
      destory: {
        type: Function,
        default: () => {},
      },
      offset: {
        type: Number,
        default: 30,
      },
      zIndex: {
        type: Number,
        default: 3000,
      },
    },
    name: 'SketchMessage',
  },
);
