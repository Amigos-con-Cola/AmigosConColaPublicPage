<script lang="ts" setup>
import StepOne from "@/components/ui/AdoptionSteps/StepOne.vue";
import StepTwo from "@/components/ui/AdoptionSteps/StepTwo.vue";
import StepThree from "@/components/ui/AdoptionSteps/StepThree.vue";
import NextButton from "@/components/ui/VueComponents/NextButton.vue";
import PreviusButton from "@/components/ui/VueComponents/PreviusButton.vue";
import { Form } from "vee-validate";
import Steper from "@/components/ui/VueComponents/Steper.vue";
import { ref } from "vue";

const step = ref(0);

const steps = [StepOne, StepTwo, StepThree];

const selectOptions = [
  { value: "soltero", label: "Soltero" },
  { value: "casado", label: "Casado" },
  { value: "divorciado", label: "Divorciado" },
  { value: "viudo", label: "Viudo" },
];

const previousStep = () => {
  if (step.value > 0) {
    step.value--;
  }
};

const nextStep = async (values: any) => {
  if (step.value === 2) {
    console.log(values);
    return;
  }
  if (step.value < steps.length - 1) {
    step.value++;
  }
};
</script>
<template>
  <main
    class="mt-10 min-h-screen pb-[100px] flex flex-col items-center bg-semibrown"
  >
    <h1
      class="text-6xl font-bold font-Bitcheese w-full border-b-2 text-center py-10 bg-primary"
    >
      Formulario de solicitud de adopción
    </h1>

    <Steper />
    <Form
      v-slot="{ values, isSubmitting }"
      class="max-w-[1300px] pt-10 px-5 md:grid flex flex-col w-full md:grid-cols-2 gap-x-3 gap-y-8"
      as="form"
      @submit="nextStep"
    >
      <template v-if="step === 0">
        <StepOne />
      </template>
      <template v-if="step === 1">
        <StepTwo />
      </template>
      <template v-if="step === 2">
        <StepThree />
      </template>

      <div class="col-span-2 mt-10 flex justify-end gap-2">
        <PreviusButton @click="previousStep" />
        <NextButton />
      </div>
    </Form>
  </main>
</template>
