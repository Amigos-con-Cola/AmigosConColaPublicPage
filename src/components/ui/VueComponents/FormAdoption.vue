<script lang="ts" setup>
import StepOne from "@/components/ui/VueComponents/AdoptionSteps/StepOne.vue";
import StepTwo from "@/components/ui/VueComponents/AdoptionSteps/StepTwo.vue";
import StepThree from "@/components/ui/VueComponents/AdoptionSteps/StepThree.vue";
import NextButton from "@/components/ui/VueComponents/common/NextButton.vue";
import FormSection from "./common/FormSection.vue";
import { Form } from "vee-validate";
</script>
<template>
  <Form
    v-slot="{ values, isSubmitting }"
    as="form"
    class="max-w-[1300px] pt-10 px-5 flex flex-col w-full gap-x-3 gap-y-8"
  >
    <FormSection title="Datos Personales">
      <StepOne />
    </FormSection>

    <FormSection title="Trabajo y estudios">
      <StepTwo />
    </FormSection>

    <FormSection class="mb-1" title="Cuestionario general">
      <StepThree />
    </FormSection>

    <div class="flex justify-start">
      <NextButton />
    </div>
  </Form>
</template>
