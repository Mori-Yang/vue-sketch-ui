import type { Placement } from '@popperjs/core';
import { computed, defineComponent, Fragment, type PropType, ref } from 'vue';
import type { MenuOption } from './types';
import SketchToolTip from '../SketchToolTip/SketchToolTip.vue';
import type { SketchToolTipInstance } from '../SketchToolTip/types';

export default defineComponent({
  name: 'DropdownJSX',
  props: {
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover',
    },
    manual: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'hover',
    },
    menuOptions: {
      type: Array as PropType<MenuOption[]>,
      default: () => [],
      required: true,
    },
    hideAfterClick: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  emits: ['visible-change', 'select'],
  setup(props, { slots, emit, expose }) {
    const tooltipRef = ref<SketchToolTipInstance | null>(null);
    const handleClick = (item: MenuOption) => {
      if (item.disabled) {
        return;
      }
      emit('select', item.key);
      if (props.hideAfterClick) {
        tooltipRef.value?.hide?.();
      }
    };
    const visibleChange = (isShow: boolean): void => {
      emit('visible-change', isShow);
    };
    const optionItems = computed(() => {
      return props.menuOptions.map((item) => {
        return (
          <Fragment key={item.key}>
            <li
              id={`menu-item-${item.key}`}
              class={{
                'sk-dropdown__item': true,
                'is-disabled': item.disabled,
              }}
              onClick={() => {
                handleClick(item);
              }}
            >
              {item.label}
            </li>
          </Fragment>
        );
      });
    });
    expose({
      show: () => tooltipRef.value?.show?.(),
      hide: () => tooltipRef.value?.hide?.(),
    });
    return () => (
      <div class="sk-dropdown">
        <SketchToolTip
          trigger={props.trigger}
          placement={props.placement}
          ref={tooltipRef}
          onVisible-change={visibleChange}
        >
          {{
            default: () => slots.default && slots.default(),
            content: () => <ul class="sk-dropdown__menu">{optionItems.value}</ul>,
          }}
        </SketchToolTip>
      </div>
    );
  },
});
