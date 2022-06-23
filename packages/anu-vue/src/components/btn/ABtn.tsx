import { useLayer, useProps as useLayerProps } from '@/composables/useLayer'
import { defineComponent } from 'vue'

export const ABtn = defineComponent({
  name: 'ABtn',
  props: {
    ...useLayerProps({
      color: {
        default: 'primary',
      },
      variant: {
        default: 'fill',
      },
      states: {
        default: true,
      },
    }),
    icon: {
      type: String,
    },
    iconOnly: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { slots }) {
    const { getLayerClasses } = useLayer()

    return () => <button class={[props.iconOnly ? 'btn-icon-only' : 'btn', 'inline-flex justify-center items-center', ...getLayerClasses(props)]}>
      {props.icon ? <i class={props.icon}></i> : null}{slots.default?.()}
    </button>
  },
})

export type ABtn = InstanceType<typeof ABtn>
