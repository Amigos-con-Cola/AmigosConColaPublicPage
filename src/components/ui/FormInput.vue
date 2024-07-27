<script setup lang="ts">
const props = defineProps<{
  label: string;
  name: string;
}>();
</script>

<template>
  <div class="border-none m-0 p-0 bg-transparent">
    <label class="w-full" :for="props.name">{{ props.label }}</label>
    <input
      class="block w-full text-base font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary p-2.5"
      autocomplete="off"
      v-bind="$attrs"
    />
  </div>
</template>
