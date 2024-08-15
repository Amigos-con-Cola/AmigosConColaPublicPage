<!-- Haz un componente de input type Radio -->
<script setup lang="ts">
import { Field } from "vee-validate";
const props = defineProps<{
  label: string;
  name: string;
  type: string;
  options: string[];
}>();
</script>

<template>
  <fieldset class="border-none m-0 p-0 bg-transparent">
    <legend class="w-full">{{ props.label }}</legend>
    <template v-for="option in props.options">
      <div class="flex justify-start items-center gap-1">
        <Field
          :value="option"
          :type="props.type"
          :name="props.name"
          class="form-radio text-primary border-2 border-primary"
        />
        <label :for="option">{{ option }}</label>
      </div>
    </template>
  </fieldset>
</template>
