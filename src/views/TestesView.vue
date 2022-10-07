<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    <hr />

    <h1>HomeView</h1>

    <select class="form-select" aria-label="Default select example">
      <option selected>Produtos</option>
      <option value="1">Produto 1</option>
      <option value="2">Produto 2</option>
      <option value="3">Produto 3</option>
      <option value="4">Produto 4</option>
      <option value="5">Produto 5</option>
      <option value="6">Produto 6</option>
      <option value="7">Produto 7</option>
      <option value="8">Produto 8</option>
      <option value="9">Produto 9</option>
      <option value="10">Produto 10</option>
    </select>

    <hr />

    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img
            src="data:image/jpeg;base64,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"
            class="d-block w-10"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="data:image/jpeg;base64,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"
            class="d-block w-10"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://img1.gratispng.com/20180425/bzq/kisspng-scooter-motorcycle-helmets-car-motorcycle-accessor-cyclist-clipart-5ae003169832e2.2728001415246302946234.jpg"
            class="d-block w-10"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <hr />

    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>
  </div>

  <hr />

  <!-- Example split danger button -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Action</button>
    <button
      type="button"
      class="btn btn-danger dropdown-toggle dropdown-toggle-split"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>