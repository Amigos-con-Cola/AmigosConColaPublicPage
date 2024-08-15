<script lang="ts" setup>
import FormInput from "@/components/ui/VueComponents/common/FormInput.vue";
import FormRadio from "../common/FormRadio.vue";

const reasonOptions = [
  "Adopción",
  "Regalo",
  "Otro"
];

const defaultOptions = [
  "Sí",
  "No",
  "No aplica"
];

const YesNoAnswere = [
  "Sí",
  "No"
];

const dontKnow = [
  "Sí",
  "No",
  "No se"
];

const houseType = [
  "Propia",
  "Alquilada",
];

const allowPets = [
  "Sí",
  "No",
  "No se ha mencionado el tema",
  "No aplica",
];


const animalLife = [
  "1-3",
  "4-7",
  "8-11",
  "12-15",
  "16-19",
];

const petSleepOptions = [
  "En mi habitación",
  "Habitación propia de otra casa",
  "En el lugar que él elija dentro de la casa",
  "En el patio",
  "En la terraza o balcón",
  "En la calle",
  "Otro",
];

const monthlyExpenseOptions = [
  "$10 a $20",
  "$20 a $50",
  "$50 a $100",
  "$100 a $200",
  "+ de $200",
]

const petCareOptions = [
  "Visitas periódicas al veterinario",
  "Desparasitación",
  "Vacunación",
  "Uso de collar con placa de identificación",
  "Limpieza diaria de arenero (gatos)",
  "Renovación diaria de agua para beber",
  "Alimentación con balanceado",
  "Alimentación con sobras de mi comida",
  "Alimentación con comida preparada especialmente para ella",
  "Otros",
];
</script>

<template>
  <FormRadio label="1. ¿Por qué quieres adoptar una mascota?" name="reason" type="checkbox" :options="reasonOptions" />
  <FormRadio label="2. ¿Tienes actualmente otra(s) mascotas(s)?" type="Radio" name="have-pets"
    :options="YesNoAnswere" />
  <FormInput placeholder="" type="text"
    label="Si respondiste afirmativamente la pregunta anterior, describe la(s) otra(s) mascota(s) que tengas* Detalla la especie, raza y edad de cada una de tus otras mascotas. Si respondiste que no en la pregunta anterior, escribe “No aplica” en esta pregunta."
    name="describe-pets" />
  <FormRadio name="sterilized" type="Radio" label="3. ¿Tus mascotas están esterilizadas?" :options="defaultOptions" />

  <FormInput type="text" label="Explica los motivos por los que tus mascotas están o no están esterilizadas"
    name="reason-sterilized" />
  <FormRadio type="Radio" label="4. ¿Has tenido mascotas en los últimos 10 años que ya no estén contigo?"
    name="past-pets" :options="YesNoAnswere" />
  <FormInput type="text"
    label="Si respondiste sí a la pregunta anterior, ¿A qué edad y por qué causas estas mascotas dejaron de estar contigo?*
Detalla si fue por fallecimiento, extravío, porque tuviste que regalarla, o por los motivos que hayan sido. Si respondiste “No” en la pregunta anterior, escribe “No aplica”."
    name="past-pets-description" />
  <FormInput type="text" label="5. ¿Cuántas personas viven en tu casa?" name="home-people-count" />
  <FormRadio type="Radio" label="6. ¿Están de acuerdo con la adopción todas las personas que viven en tu casa?"
    name="people-agreement" :options="YesNoAnswere" />

  <FormRadio type="Radio" label="7. ¿Hay adultos mayores o personas con algún tipo de discapacidad en casa?"
    name="people-disability" :options="YesNoAnswere" />
  <FormRadio type="Radio" label="8. ¿Hay gente alérgica en casa?" name="people-allergic" "
    :options="dontKnow" />
  <FormRadio type="Radio" label="9. Tu casa es…" name="house-type" :options="houseType" />
  <FormRadio type="Radio" label='Si tu casa es alquilada, ¿permite el dueño tener masccotas?
Si tu casa es propia, escoge "No aplica".''
    name="house-allow-pets"
    :options="allowPets"
  />
  <FormInput
    type="text"
    label="10. Si debes cambiar de domicilio, ¿qué pasaría con tu mascota?"
    name="change-home"
  />
  <FormInput
    type="text"
    label="11. Si llegaras a tener un hijo, ¿de qué manera cambiaría la situación de tu mascota en casa?"
    name="baby-situation" "
  />
  <FormRadio
    type="Radio"
    label=' 12. ¿Cuántos años en promedio crees que vive un gato?' name="cat-life" :options="animalLife" />
  <FormRadio type="Radio" label='¿Cuántos años en promedio crees que vive un perro?' name="dog-life"
    :options="animalLife" />

  <FormRadio label="13. ¿En qué PARTE DE LA CASA dormirá el animal adoptado?
Señala todas las opciones que consideras posibles." name="pet-sleep" type="checkbox" :options="petSleepOptions" />
  <FormInput type="text" label="14. ¿Cuánto tiempo pasará sola tu mascota?" name="pet-alone-time" "
  />
  <FormInput
    type=" text"
    label="15. Si su comportamiento no es el deseado (mordelón, destructor, desaseado, hiperactivo), ¿Qué medidas tomarías?"
    name="bad-behavior-actions" />
  <FormRadio type="Radio" label='16. ¿Cuentas con los recursos suficientes para mantener a una mascota?'
    name="enough-resources" :options="YesNoAnswere" />
  <FormRadio type="Radio" label='17. ¿Cuánto crees que se gasta mensualmente en una mascota?'
    name="monthly-expense-estimate" :options="monthlyExpenseOptions" />
  <FormRadio label="18. Señala los cuidados que estás dispuesto a darle a tu mascota" name="pet-care" type="checkbox"
    :options="petCareOptions" />
  <FormRadio type="Radio" label='19. ¿Tienes un veterinario que atienda a tus mascotas?' name="vet"
    :options="YesNoAnswere" />
  <FormInput type="text" label="Si la respuesta anterior es afirmativa, ¿cuál es el nombre del veterinario y el lugar donde trabaja?
Si elegiste “No” en la pregunta anterior, escribe “No aplica” en esta pregunta." name="vet-name" />
  <FormRadio type="Radio" label="20. ¿Estás de acuerdo con que hagamos un monitoreo periódico para verificar el estado del animal adoptado?
El monitoreo puede ser por vía telefónica, electrónica o presencial." name="monitoring-agreement"
    :options="YesNoAnswere" />
  <FormInput type="text" label='Si tu respuesta anterior fue negativa, ¿por qué?
Si fue positiva, solo ingresa "No aplica".' name="monitoring-reason" />
  <FormRadio type="Radio" label="21. ¿Asumes el compromiso de esterilizar a tu perro o gato adoptado?"
    name="sterilize-commitment" :options="YesNoAnswere" />
  <FormInput type="text" label="¿Por qué sí o por qué no te comprometes a esterilizar a la mascota que quieres adoptar?"
    name="sterilize-reason" />
  <FormInput type="text" label="22. ¿Cómo te enteraste de nosotros?" name="how-did-you-hear" />
</template>
