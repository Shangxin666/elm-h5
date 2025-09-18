import { onUnmounted, ref, watch, type Ref, type UnwrapRef } from 'vue'
export function useDebounce<T>(value: Ref<T>, delay: number) {
  const debounceValue = ref(value.value)

  let timer: number | null = null

  const unwatch = watch(value, (nv) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      debounceValue.value = nv as UnwrapRef<T>
    }, delay)
  })

  onUnmounted(() => {
    unwatch()
  })

  return debounceValue
}
