<template>
  <button type="button">
    <span>Volver</span>
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s;
  padding: 10px 20px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  font-size: 15px;
}

button > svg {
  width: 34px;
  margin-left: 10px;
  transition: transform 0.3s ease-in-out;
}

button:hover svg {
  transform: translateX(5px);
}

button:active {
  transform: scale(0.95);
}
</style>
