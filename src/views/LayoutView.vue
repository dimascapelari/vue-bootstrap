<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-6 offset-sm-3 bg-light p-5">
        <form action="" method="post">
          <div class="mb-3">
            <input class="form-control" type="text" name="" id="" />
          </div>

          <div class="row g-3 mb-3">
            <div class="col">
              <label class="form-label">Título 1</label>
              <input type="text" class="form-control" />
            </div>

            <div class="col">
              <label class="form-label">Título 2</label>
              <input type="text" class="form-control" />
            </div>

            <div class="col">
              <label class="form-label">Título 3</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="check1"
                  id="check1"
                />
                <label for="check1">Primeira opção</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="check2"
                  id="check2"
                />
                <label for="check2">Segunda opção</label>
              </div>
            </div>

            <div class="col">
              <div class="form-check">
                <input
                  type="radio"
                  name="radioOpt"
                  id="radio1"
                  class="form-check-input"
                />
                <label for="radio1">Homem</label>
              </div>
              <div class="form-check">
                <input
                  type="radio"
                  name="radioOpt"
                  id="radio2"
                  class="form-check-input"
                />
                <label for="radio2">Mulher</label>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <input class="form-control w-75" type="text" name="" id="" />
          </div>
          <div class="mb-3">
            <input class="form-control w-50" type="text" name="" id="" />
          </div>
          <div class="mb-3">
            <input class="form-control w-25" type="text" name="" id="" />
          </div>

          <div>
            <textarea class="form-control" name="" id="" rows="10"></textarea>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>