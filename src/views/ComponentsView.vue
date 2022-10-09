<template>
  <!------------ Accordion ------------>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-8 offset-sm-2">
        <div class="accordion" id="accordion1">
          <!-- Parte 1 -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#c1"
                aria-expanded="true"
                aria-controls="c1"
              >
                Título 1
              </button>
            </h2>
            <!-- classe show que faz a linha ficar aberta-->
            <div
              id="c1"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordion1"
            >
              <div class="accordion-body">
                <div class="container">
                  <div class="row">
                    <div class="col-6">Coluna A</div>
                    <div class="col-6">Coluna B</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Parte 2 -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordion1"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>

          <!-- Parte 3 -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordion1"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr />

  <!------------ Alerts ------------>

  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-8 offset-sm-2">
        <!-- Alerta simples-->
        <div class="alert alert-danger">Texto de perigo</div>

        <!-- Alerta com link-->
        <div class="alert alert-primary" role="alert">
          A simple primary alert with
          <a href="#" class="alert-link">an example link</a>. Give it a click if
          you like.
        </div>
      </div>
    </div>
  </div>

  <hr />

  <!-- Badge -->
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-8 offset-sm-2">
        <div>
          <p>Notificações <span class="badge bg-danger">10</span></p>

          <button type="button" class="btn btn-primary">
            Notifications <span class="badge text-bg-secondary">4</span>
          </button>

          <!-- <br />
          <br /> -->

          <div class="mt-3 mb-5">
            <button type="button" class="btn btn-primary position-relative">
              Inbox
              <span
                class="
                  position-absolute
                  top-0
                  start-100
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                "
              >
                99+
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Breadcrumb -->
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col-sm-8 offset-sm-2 p-3 card bg-light">
        <nav class="breadcrumb" style="--bs-breadcrumb-divider: '>'">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Link 1</a></li>
            <li class="breadcrumb-item"><a href="#">Link 2</a></li>
            <li class="breadcrumb-item active">Link 3</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>