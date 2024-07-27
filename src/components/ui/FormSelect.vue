<script lang="ts" setup>
interface Option {
  value: string;
  label: string;
}

const props = defineProps<{
  options: Option[];
  name: string;
  label: string;
  placeholder: string;
  disabled?: boolean;
  tipo_edad?: string;
}>();
</script>

<template>
  <div class="border-none">
    <label :for="props.name">{{ props.label }}</label>
    <select
      class="block w-full text-base font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary p-2.5"
      v-bind="$attrs"
      :disabled="props.disabled"
      :tipo_edad="props.tipo_edad"
      :name="props.name"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :selected="props.tipo_edad === option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
