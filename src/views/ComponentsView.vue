<template>
  <!------------ Accordion ------------>
  <h2 class="text-center">Accordion</h2>
  <div class="container">
    <div class="row">
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
  <h2 class="text-center">Alerts</h2>
  <div class="container">
    <div class="row">
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
  <h2 class="text-center">Badge</h2>
  <div class="container">
    <div class="row">
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

  <hr />

  <!-- Breadcrumb -->
  <h2 class="text-center">Breadcrumb</h2>
  <div class="container">
    <div class="row mb-5">
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

  <hr />

  <!-- Buttons -->
  <h2 class="text-center">Buttons</h2>
  <div class="container">
    <div class="row mb-5">
      <div class="col-sm-8 offset-sm-2 p-3 bg-light">
        <button class="btn btn-primary btn-lg disabled">Botão</button>
        <a class="btn btn-outline-primary btn-sm ms-3 disabled" href="#"
          >Link</a
        >
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row mb-5">
      <div class="col-sm-8 offset-sm-2 p-3 bg-light">
        <button class="btn btn-primary-dimas btn-150-dimas">Botão 1</button>
        <button class="btn btn-primary-dimas btn-150-dimas">
          Botão Salvar
        </button>
      </div>
    </div>
  </div>

  <hr />

  <h2 class="text-center">Button group</h2>
  <div class="container">
    <div class="row mb-5">
      <div class="col-sm-8 offset-sm-2 p-3 bg-light">
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-150-dimas">Left</button>
          <button class="btn btn-outline-secondary btn-150-dimas">
            Middle
          </button>
          <button class="btn btn-outline-danger btn-150-dimas">Right</button>
          <a href="#" class="btn btn-outline-warning btn-150-dimas"
            >Link normal</a
          >
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row mb-5">
      <div class="col-sm-8 offset-sm-2 p-3 bg-light">
        <div class="btn-group-vertical">
          <button class="btn btn-primary btn-150-dimas">Left</button>
          <button class="btn btn-secondary btn-150-dimas">Middle</button>
          <button class="btn btn-danger btn-150-dimas">Right</button>
          <a href="#" class="btn btn-warning btn-150-dimas">Link normal</a>
        </div>
      </div>
    </div>
  </div>

  <hr />

  <h2 class="text-center">Cards</h2>
  <div class="container">
    <div class="row mb-5">
      <div class="col-sm-8 offset-sm-2 p-3">
        <div class="card bg-light p4 text-center">
          <p>Texto dentro do card</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row mb-5">
      <div class="col-sm-8 offset-sm-2 p-3">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr />

  <h2 class="text-center">Carousel</h2>
  <div class="container">
    <div class="row mb-5">
      <div class="col-sm-8 offset-sm-2 p-3">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item p-5 bg-info active">
              <p>Texto 1</p>
            </div>
            <div class="carousel-item p-5 bg-warning">
              <p>Texto 2</p>
            </div>
            <div class="carousel-item p-5 bg-danger">
              <p>Texto 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr />

  <div class="container-fluid">
    <div class="row mb-5">
      <div class="col-12">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item p-5 bg-info active">
              <p>Texto 1</p>
            </div>
            <div class="carousel-item p-5 bg-warning">
              <p>Texto 2</p>
            </div>
            <div class="carousel-item p-5 bg-danger">
              <p>Texto 3</p>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <hr />

  <div class="container">
    <div class="row mb-5">
      <div class="col-sm-8 offset-sm-2 p-3">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="true"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div
              class="carousel-item bg-info active d-flex justify-content-center"
            >
              <img src="../assets/images/1.png" class="d-block w-25" />
              <img src="../assets/images/2.png" class="d-block w-25" />
              <img src="../assets/images/3.png" class="d-block w-25" />
              <img src="../assets/images/4.png" class="d-block w-25" />
            </div>
            <div class="carousel-item bg-warning">
              <img src="../assets/images/2.png" class="d-block w-25" />
            </div>
            <div class="carousel-item bg-danger">
              <img src="../assets/images/3.png" class="d-block w-25" />
            </div>
            <div class="carousel-item bg-dark">
              <img src="../assets/images/4.png" class="d-block w-25" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <hr />

  <h2 class="text-center">Collapse</h2>
  <div class="container-fluid p-0 bg-dark text-white">
    <div class="row mt-5 mb-5">
      <div class="col-6 offset-3">
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse_info"
        >
          Mais info...
        </button>

        <div class="bg-warning p-5 my-3 text-center text-dark">
          Aviso intermédio do meu layout
        </div>

        <div class="collapse mt-3 card bg-success" id="collapse_info">
          <div class="container-fluid">
            <div class="row">
              <div class="col p-5">Informação da coluna A</div>
              <div class="col p-5">Informação da coluna B</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr />

  <h2 class="text-center">Dropdowns</h2>

  <div class="container-fluid bg-primary">
    <div class="row">
      <div class="col text-end p-3">
        <div class="dropdown">
          <button
            class="btn btn-danger dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Dropdown button
          </button>

          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid bg-dark p-0">
    <div class="row mt-5">
      <div class="col-6 offset-3">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-flex">
                <img src="../assets/images/1.png" class="d-block w-25" />
                <img src="../assets/images/2.png" class="d-block w-25" />
                <img src="../assets/images/3.png" class="d-block w-25" />
                <img src="../assets/images/4.png" class="d-block w-25" />
              </div>
              <div class="carousel-caption d-none d-md-block">
                <h5 class="mb-0">First slide label</h5>
                <p class="mb-0">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex">
                <img src="../assets/images/2.png" class="d-block w-25" />
                <img src="../assets/images/3.png" class="d-block w-25" />
                <img src="../assets/images/4.png" class="d-block w-25" />
                <img src="../assets/images/1.png" class="d-block w-25" />
              </div>
              <div class="carousel-caption d-none d-md-block">
                <h5 class="mb-0">Second slide label</h5>
                <p class="mb-0">
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex">
                <img src="../assets/images/3.png" class="d-block w-25" />
                <img src="../assets/images/4.png" class="d-block w-25" />
                <img src="../assets/images/1.png" class="d-block w-25" />
                <img src="../assets/images/2.png" class="d-block w-25" />
              </div>
              <div class="carousel-caption d-none d-md-block">
                <h5 class="mb-0">Third slide label</h5>
                <p class="mb-0">
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="container-fluid p-0">
    <div class="row mt-5">
      <div class="col-6 offset-3"></div>
    </div>
  </div> -->

  <!--  Bootstrap Multi Slide Carousel  -->
  <div class="container bg-dark">
    <div class="container text-center my-3">
      <div class="row mx-auto my-auto justify-content-center">
        <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
          <!--Slides-->
          <div class="carousel-inner mb-5" role="listbox">
            <!-- Carousel indicador -->
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <!-- Carousel indicador -->
            <!--First slide-->
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-3">
                  <div class="card mb-2">
                    <img
                      class="card-img-top mx-auto w-75"
                      src="../assets/images/1.png"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>

                <div class="col-md-3 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top mx-auto w-75"
                      src="../assets/images/2.png"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>

                <div class="col-md-3 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top mx-auto w-75"
                      src="../assets/images/3.png"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>

                <div class="col-md-3 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top mx-auto w-75"
                      src="../assets/images/4.png"
                    />

                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Mensagem rodapé slides -->
              <div class="carousel-caption">
                <h5 class="mb-0 text-danger">First slide label</h5>
                <p class="mb-0 text-danger">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
              <!-- Mensagem rodapé slides -->
            </div>
            <!--/.First slide-->

            <!--Second slide-->
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--/.Second slide-->

            <!--Third slide-->
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--/.Third slide-->
          </div>

          <a
            class="carousel-control-prev bg-transparent w-aut"
            href="#recipeCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a
            class="carousel-control-next bg-transparent w-aut"
            href="#recipeCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-150-dimas {
  min-width: 150px !important;
}

.btn-primary-dimas {
  background-color: orange;
  border-color: orangered;
  color: #ffffff;
  font-weight: 600;
}

.btn-primary-dimas:hover {
  background-color: orangered;
  border-color: rgb(38, 255, 0);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);
}
</style>