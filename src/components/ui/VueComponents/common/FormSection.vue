<script lang="ts" setup>
const props = defineProps<{
  title: string;
  class?: string;
}>();
</script>

<template>
  <div
    :class="
      props.class +
      ' ' +
      'px-10 py-10 flex flex-col gap-8 border-[3px] border-gray-700 relative mb-10'
    "
  >
    <h2 class="absolute text-2xl px-5 py-5 bg-primary w-max -top-10">
      {{ props.title }}
    </h2>
    <slot />
  </div>
</template>
