<script lang="ts" setup>
import FormInput from "@/components/ui/FormInput.vue";
import FormSelect from "@/components/ui/FormSelect.vue";

const selectOptions = [
  { value: "soltero", label: "Soltero" },
  { value: "casado", label: "Casado" },
  { value: "divorciado", label: "Divorciado" },
  { value: "viudo", label: "Viudo" },
];
</script>

<template>
  <FormInput
    placeholder="Abogado"
    type="text"
    label="Ocupación"
    name="ocupacion"
  />
  <FormInput type="text" label="Lugar de Trabajo" name="lugar-trabajo" />
  <FormInput type="text" label="Cargo" name="cargo" />

  <FormInput type="tel" label="Teléfono de trabajo" name="phone-work" />
  <FormInput type="text" label="Dirección de trabajo" name="address-work" />
  <FormInput type="text" label="Lugar de estudios y curso" name="study" />
  <FormInput type="time" label="Hora de salida de tu hogar" name="hour-out" />
  <FormInput
    type="time"
    label="Hora de regreso a tu hogar"
    name="hour-return"
  />
  <!-- <FormInput
    placeholder="Abogado"
    type="text"
    label="Ocupación"
    name="ocupacion"
  />
  <FormSelect label="df" name="df" :options="selectOptions" placeholder="df" />
  <FormInput type="text" label="Lugar de Trabajo" name="lugar-trabajo" />
  <FormInput type="text" label="Cargo" name="cargo" />
  <FormInput type="tel" label="Teléfono de trabajo" name="phone-work" />
  <FormInput type="text" label="Dirección de trabajo" name="address-work" />
  <FormInput type="text" label="Lugar de estudios y curso" name="study" />
  <FormInput type="time" label="Hora de salida de tu hogar" name="hour-out" />
  <FormInput
    type="time"
    label="Hora de regreso a tu hogar"
    name="hour-return"
  /> -->
</template>
