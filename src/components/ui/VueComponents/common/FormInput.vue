<script setup lang="ts">
import { Field } from "vee-validate";
const props = defineProps<{
  label: string;
  name: string;
  type: string;
}>();
</script>

<template>
  <div class="border-none m-0 p-0 bg-transparent">
    <label class="w-full" :for="props.name">{{ props.label }}</label>
    <Field
      :id="props.name"
      :type="props.type"
      class="block w-full text-base font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary p-2.5"
      :name="props.name"
      v-bind="$attrs"
    />
  </div>
</template>
