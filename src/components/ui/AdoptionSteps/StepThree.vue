<script lang="ts" setup>
import FormInput from "@/components/ui/FormInput.vue";
import FormSelect from "@/components/ui/FormSelect.vue";
import FormRadio from "../FormRadio.vue";

const reasonOptions = [
  { value: "adopcion", label: "Adopción" },
  { value: "familiar", label: "Familiar" },
  { value: "regalo", label: "Regalo" },
  { value: "otro", label: "Otro" },
];

const defaultOptions = [
  { value: "si", label: "Sí" },
  { value: "no", label: "No" },
  { value: "no-aplica", label: "No aplica" },
];
</script>

<template>
  <FormRadio
    label="1. ¿Por qué quieres adoptar una mascota?"
    name="reason"
    type="checkbox"
    :options="reasonOptions"
  />
  <FormRadio
    label="2. ¿Tienes actualmente otra(s) mascotas(s)?"
    type="Radio"
    name="have-pets"
    :options="defaultOptions"
  />
  <FormInput
    placeholder=""
    type="text"
    label="Si respondiste afirmativamente la pregunta anterior, describe la(s) otra(s) mascota(s) que tengas* Detalla la especie, raza y edad de cada una de tus otras mascotas. Si respondiste que no en la pregunta anterior, escribe “No aplica” en esta pregunta."
    name="describe-pets"
  />
  <FormRadio
    name="sterilized"
    type="Radio"
    label="3. ¿Tus mascotas están esterilizadas?"
    :options="defaultOptions"
  />

  <FormInput
    type="text"
    label="Explica los motivos por los que tus mascotas están o no están esterilizadas"
    name="reason-sterilized"
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
