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

  <div class="container">
    <form class="row g-3 needs-validation" novalidate>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Primeiro nome</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="Dimas"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Sobrenome</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom02"
          value="Capelari"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label"
          >Nome de usuário</label
        >
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
          <input
            type="text"
            class="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required
          />
          <div class="invalid-feedback">Please choose a username.</div>
        </div>
      </div>
      <div class="col-md-6">
        <label for="validationCustom03" class="form-label">Cidade</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom03"
          required
        />
        <div class="invalid-feedback">Please provide a valid city.</div>
      </div>
      <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Estado</label>
        <span>
          <select class="form-select" id="validationCustom04" required>
            <option v-for="(estado, index) in estados" :key="index" value="">
              {{ estado.uf }}
            </option>
          </select>
        </span>
        <div class="invalid-feedback">Please select a valid state.</div>
      </div>
      <div class="col-md-3">
        <label for="validationCustom05" class="form-label">CEP</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom05"
          required
        />
        <div class="invalid-feedback">Please provide a valid zip.</div>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck"
            required
          />
          <label class="form-check-label" for="invalidCheck">
            Concordo com os termos e condições
          </label>
          <div class="invalid-feedback">You must agree before submitting.</div>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit" @click="validaForm">
          Submit form
        </button>
      </div>
    </form>
  </div>

  <hr />
</template>

<script>
export default {
  data() {
    return {
      estados: [
        { uf: "...", nome: "..." },
        { uf: "AC", nome: "Acre" },
        { uf: "AL", nome: "Alagoas" },
        { uf: "AP", nome: "Amapá" },
        { uf: "AM", nome: "Amazonas" },
        { uf: "BA", nome: "Bahia" },
        { uf: "CE", nome: "Ceará" },
        { uf: "DF", nome: "Distrito Federal" },
        { uf: "ES", nome: "Espirito Santo" },
        { uf: "GO", nome: "Goiás" },
        { uf: "MA", nome: "Maranhão" },
        { uf: "MS", nome: "Mato Grosso do Sul" },
        { uf: "MT", nome: "Mato Grosso" },
        { uf: "MG", nome: "Minas Gerais" },
        { uf: "PA", nome: "Pará" },
        { uf: "PB", nome: "Paraíba" },
        { uf: "PR", nome: "Paraná" },
        { uf: "PE", nome: "Pernambuco" },
        { uf: "PI", nome: "Piauí" },
        { uf: "RJ", nome: "Rio de Janeiro" },
        { uf: "RN", nome: "Rio Grande do Norte" },
        { uf: "RS", nome: "Rio Grande do Sul" },
        { uf: "RO", nome: "Rondônia" },
        { uf: "RR", nome: "Roraima" },
        { uf: "SC", nome: "Santa Catarina" },
        { uf: "SP", nome: "São Paulo" },
        { uf: "SE", nome: "Sergipe" },
        { uf: "TO", nome: "Tocantins" },
      ],
    };
  },
  methods: {
    validaForm() {
      // Example starter JavaScript for disabling form submissions if there are invalid fields
      (() => {
        "use strict";

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll(".needs-validation");

        // Loop over them and prevent submission
        Array.from(forms).forEach((form) => {
          form.addEventListener(
            "submit",
            (event) => {
              if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
              }

              form.classList.add("was-validated");
            },
            false
          );
        });
      })();
    },
  },
};
</script>

<style>
</style>