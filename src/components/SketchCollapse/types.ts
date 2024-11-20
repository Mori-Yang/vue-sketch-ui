import type { InjectionKey, Ref } from 'vue';

export type NameType = string | number;

export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseProps {
  modelValue: NameType[];
  accordion?: boolean;
}
export const CollapseConetxtKey: InjectionKey<CollapseConetxt> = Symbol('CollapseConetxtKey');
export interface CollapseConetxt {
  activeNames: Ref<NameType[]>;
  handleItemClick: (item: NameType) => void;
}

export type CollapseChangeParam = NameType[];
export interface CollapseEmits {
  (e: 'update:modelValue', values: CollapseChangeParam): void;
  (e: 'change', values: CollapseChangeParam): void;
}
