<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-4 offset-sm-4">
        <form action="" method="post">
          <div class="mb-3">
            <label class="form-label">Usuário</label>
            <input type="text" name="" class="form-control" />
          </div>

          <div class="mb-3">
            <label class="form-label">Senha</label>
            <input type="password" name="" class="form-control" />
          </div>

          <div class="text-end">
            <input type="submit" value="Entrar" class="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  </div>

  <hr />

  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-6 offset-sm-3 card bg-light p-5 mb-5">
        <form action="" method="post">
          <div class="mb-3">
            <label class="form-label">Usuário</label>
            <input
              type="text"
              name=""
              class="form-control form-control-sm"
              placeholder="Escreva seu nome de usuário"
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Senha</label>
            <input type="password" name="" class="form-control" />
            <div class="form-text">
              A senha deve ter entre 6 e 16 caracteres.
            </div>
          </div>

          <!-- checkbok -->
          <div class="mb-3 form-check">
            <input
              class="form-check-input"
              type="checkbox"
              name="check_ligado"
              id="check_ligado"
            />
            <label class="form-check-label" for="check_ligado"
              >Permanecer logado</label
            >
          </div>

          <!-- radio buttons -->
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radioOpcao"
              id="radioOpcao1"
            />
            <label class="form-check-label" for="radioOpcao1">Homem</label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radioOpcao"
              id="radioOpcao2"
            />
            <label class="form-check-label" for="radioOpcao2">Mulher</label>
          </div>

          <!-- submit -->
          <div class="text-center">
            <input type="submit" value="Entrar" class="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  </div>

  <hr />

  <div class="container mb-5">
    <div class="row mt-5">
      <div class="col-sm-6 offset-sm-3 card bg-light p-5">
        <form action="" method="post">
          <!-- checkbok em modo swith -->
          <div class="form-check form-switch mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              name="check1"
              id="check1"
            />
            <label class="form-label-input" for="check1"
              >Gravação automática.</label
            >
          </div>

          <div class="form-check form-switch mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              name="check2"
              disabled
              id="check2"
            />
            <label class="form-label-input" for="check2"
              >Gravação automática.</label
            >
          </div>

          <div class="mb-3">
            <select class="form-select" name="combo_pais" id="combo_pais">
              <option value="1">Portugal</option>
              <option value="2">Brasil</option>
              <option value="3">Angola</option>
              <option value="4">Moçambique</option>
              <option value="5">Guiné</option>
            </select>
          </div>

          <!-- Range -->
          <label for="customRange1" class="form-label">Example range</label>
          <input
            type="range"
            class="form-range"
            id="customRange1"
            min="0"
            max="200"
            value="150"
          />

          <!-- submit -->
          <div class="text-center">
            <input class="btn btn-primary" type="submit" value="Entrar" />
          </div>
        </form>
      </div>
    </div>
  </div>

  <hr />
</template>

<script>
export default {};
</script>

<style>
</style>