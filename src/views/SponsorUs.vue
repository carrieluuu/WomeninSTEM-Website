<template>
  <div class="position-relative">
    <section class="section-shaped my-0">
      <div class="shape shape-style-1 bg-gradient-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container shape-container d-flex">
        <div class="col px-0">
          <div class="row">
            <div class="col-lg-6">
              <h1 class="display-2 text-white">Sponsor Us</h1>
              <p class="lead text-white">
                If you are interested in sponsoring us, find our sponsorship package below!
                <iframe
                  src="Bayview Women in STEM Sponsorship Package.pdf"
                  width="100%"
                  height="700px"
                ></iframe>
              </p>
              <h1 class="display-3 text-white">Huge thank you to our past sponsors and partners!</h1>
              <div class="row">
                <div class="column">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.cetaphil.ca/">
                    <img
                      class="img-blue"
                      src="img/sponsors/Cetaphil.png"
                      style="width:100%"
                      alt="cetaphil.png"
                    />
                  </a>
                </div>
                <div class="column">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.kernelspopcorn.com/"
                  >
                    <img
                      class="img-blue"
                      src="img/sponsors/Kernels.png"
                      style="width:100%"
                      alt="kernels.png"
                    />
                  </a>
                </div>
                <div class="column">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.nextdoorrestaurant.com/"
                  >
                    <img
                      class="img-blue"
                      src="img/sponsors/NextDoorRestaurant.png"
                      style="width:100%"
                      alt="nextDoorRestaurant.png"
                    />
                  </a>
                </div>
                <div class="column">
                  <a target="_blank" rel="noopener noreferrer" href="http://www.smashkitchen.com/">
                    <img
                      class="img-blue"
                      src="img/sponsors/Smash Kitchen.png"
                      style="width:100%"
                      alt="smashKitchen.png"
                    />
                  </a>
                </div>
                <div class="column">
                  <a target="_blank" rel="noopener noreferrer" href="http://www.yogurtys.com/">
                    <img
                      class="img-blue"
                      src="img/sponsors/Yogurtys.png"
                      style="width:100%"
                      alt="yogurtys.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style>
.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>
