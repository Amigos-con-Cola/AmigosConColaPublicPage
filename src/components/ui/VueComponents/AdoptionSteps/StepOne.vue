<script lang="ts" setup>
import FormInput from "@/components/ui/VueComponents/common/FormInput.vue";
import FormSelect from "@/components/ui/VueComponents/common/FormSelect.vue";

const selectOptions = [
  { value: "soltero", label: "Soltero" },
  { value: "casado", label: "Casado" },
  { value: "divorciado", label: "Divorciado" },
  { value: "viudo", label: "Viudo" },
];
</script>

<template>
  <FormInput
    label="Primer nombre"
    name="name"
    placeholder="Fernando"
    type="text"
  />
  <FormInput
    label="Primer apellido"
    name="lastname"
    placeholder="Zambrano"
    type="text"
  />
  <FormInput
    label="Correo electrónico"
    name="email"
    placeholder="ejemplo@hotmail.com"
    type="email"
  />
  <FormInput label="Fecha de nacimiento" name="birthdate" type="date" />

  <FormSelect
    :options="selectOptions"
    label="Estado civíl"
    name="civil_status"
    placeholder="Selecciona tu estado civíl"
  />
  <FormInput
    label="Número de cédula/pasaporte"
    name="id"
    pattern="[0-9]*"
    type="tel"
  />
  <FormInput
    label="Número de celular"
    name="cellphone"
    pattern="[0-9]*"
    type="tel"
  />
  <FormInput
    label="Número de teléfono fijo"
    name="phone"
    pattern="[0-9]*"
    type="tel"
  />
  <FormInput
    label="Dirección de domicilio"
    name="address"
    placeholder="Zona Mz Villa"
    type="text"
  />
  <FormInput
    label="Instagram, Facebook, Tiktok y demás redes sociales que utilices"
    name="social"
    placeholder="@fercho123"
    type="text"
  />
</template>
