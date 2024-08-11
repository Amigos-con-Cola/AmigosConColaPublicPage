<script lang="ts" setup>
import StepOne from "@/components/ui/AdoptionSteps/StepOne.vue";
import StepTwo from "@/components/ui/AdoptionSteps/StepTwo.vue";
import StepThree from "@/components/ui/AdoptionSteps/StepThree.vue";
import NextButton from "@/components/ui/VueComponents/NextButton.vue";
import PreviusButton from "@/components/ui/VueComponents/PreviusButton.vue";
import FormSection from "./VueComponents/FormSection.vue";
import { Form } from "vee-validate";

const selectOptions = [
  { value: "soltero", label: "Soltero" },
  { value: "casado", label: "Casado" },
  { value: "divorciado", label: "Divorciado" },
  { value: "viudo", label: "Viudo" },
];
</script>
<template>
  <Form
    v-slot="{ values, isSubmitting }"
    class="max-w-[1300px] pt-10 px-5 flex flex-col w-full gap-x-3 gap-y-8"
    as="form"
  >
    <FormSection title="Datos Personales">
      <StepOne />
    </FormSection>

    <FormSection title="Trabajo y estudios">
      <StepTwo />
    </FormSection>

    <FormSection title="Cuestionario general">
      <StepThree />
    </FormSection>

    <div class="col-span-2 mt-10 flex justify-end gap-2">
      <NextButton />
    </div>
  </Form>
</template>
