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
    placeholder="Fernando"
    type="text"
    label="Primer nombre"
    name="name"
  />
  <FormInput
    placeholder="Zambrano"
    type="text"
    label="Primer apellido"
    name="lastname"
  />
  <FormInput
    placeholder="ejemplo@hotmail.com"
    type="email"
    label="Correo electrónico"
    name="email"
  />
  <FormInput type="date" label="Fecha de nacimiento" name="birthdate" />

  <FormSelect
    label="Estado civíl"
    name="civil_status"
    :options="selectOptions"
    placeholder="Selecciona tu estado civíl"
  />
  <FormInput
    type="tel"
    pattern="[0-9]*"
    label="Número de cédula/pasaporte"
    name="id"
  />
  <FormInput
    type="tel"
    pattern="[0-9]*"
    label="Número de celular"
    name="cellphone"
  />
  <FormInput
    type="tel"
    pattern="[0-9]*"
    label="Número de teléfono fijo"
    name="phone"
  />
  <FormInput
    placeholder="Zona Mz Villa"
    type="text"
    label="Dirección de domicilio"
    name="address"
  />
  <FormInput
    type="text"
    placeholder="@fercho123"
    label="Instagram, Facebook, Tiktok y demás redes sociales que utilices"
    name="social"
  />
</template>
