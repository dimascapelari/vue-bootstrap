<template>
  <div>
    <p class="bg-warning mt-5 mb-2">O meu texto de testes</p>
  </div>

  <hr />

  <div>
    <p class="bg-warning p-5 mt-5">O meu texto de testes</p>
    <p class="bg-warning p-4 mt-4">O meu texto de testes</p>
    <p class="bg-warning p-3 mt-3">O meu texto de testes</p>
    <p class="bg-warning p-2 mt-2">O meu texto de testes</p>
    <p class="bg-warning p-1 mt-1">O meu texto de testes</p>
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.4);
}

.red {
  box-shadow: inset 0px 0px 4px rgba(255, 0, 0, 1);
}

.green {
  box-shadow: inset 0px 0px 4px rgba(0, 150, 0, 1);
}

.blue {
  box-shadow: inset 0px 0px 4px rgba(0, 0, 255, 1);
}

.margem {
  margin: 10px;
}

.espaco {
  padding: 20px;
}

.text-primary {
  color: orangered !important;
}
</style>