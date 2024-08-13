<!-- Haz un componente de input type Radio -->
<script setup lang="ts">
const props = defineProps<{
  label: string;
  name: string;
  type: string;
  options: { value: string; label: string }[];
}>();
</script>

<template>
  <fieldset class="border-none m-0 p-0 bg-transparent">
    <legend class="w-full">{{ props.label }}</legend>
    <div class="flex justify-start items-center gap-2">
      <template v-for="option in props.options">
        <div class="flex justify-start items-center gap-1">
          <input
            v-model="props.name"
            :id="option.value"
            :value="option.value"
            :type="props.type"
            :name="props.name"
            class="form-radio text-primary border-2 border-primary"
          />
          <label :for="option.value">{{ option.label }}</label>
        </div>
      </template>
    </div>
  </fieldset>
</template>
