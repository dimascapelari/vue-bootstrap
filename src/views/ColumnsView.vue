<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6 text-center">
        <form action="">
          <input type="text" /> <br />
          <input type="text" /> <br />
          <input type="submit" value="Entrar" />
        </form>
      </div>
    </div>
  </div>

  <hr />

  <div class="container">
    <div class="row">
      <div class="col-sm-4 order-3">A</div>
      <div class="col-sm-4 order-2">B</div>
      <div class="col-sm-4 order-1">C</div>
    </div>
  </div>

  <hr />

  <div class="container">
    <div class="row">
      <div class="col-sm-4">A</div>

      <div class="col-sm-4 offset-sm-4">C</div>
    </div>
  </div>

  <hr />

  <div class="container">
    <div class="row">
      <div class="col-sm-4 px-5 py-2">
        <div class="bg-warning mt-5">AAAAAA</div>
      </div>
      <div class="col-sm-4">
        <div class="bg-warning">AAAAAA</div>
      </div>
      <div class="col-sm-4">
        <div class="bg-warning">AAAAAA</div>
      </div>
      <div class="col-sm-4">
        <div class="bg-warning">AAAAAA</div>
      </div>
      <div class="col-sm-4">
        <div class="bg-warning">AAAAAA</div>
      </div>
      <div class="col-sm-4">
        <div class="bg-warning">AAAAAA</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.4);
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
</style>