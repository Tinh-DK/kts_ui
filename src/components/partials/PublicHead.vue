<template>
  <div class="header-top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-4 d-flex">
          <a href="index.html" class="site-logo">Company Name</a>

          <a
            href="#"
            class="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
          >
            <span class="icon-menu h3"></span>
          </a>
        </div>
        <div class="col-12 col-lg-8 ml-auto d-flex">
          <img src="http://placehold.it/740x100" alt/>
        </div>
      </div>
    </div>

    <div
      class="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
      role="banner"
    >
      <div class="container">
        <div class="d-flex align-items-center">
          <div class="mr-auto">
            <nav class="site-navigation position-relative text-right" role="navigation">
              <ul class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                <li class="active">
                  <a href="index.html" class="nav-link text-left">Home</a>
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left">Categories</a>
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left">Politics</a>
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left">Business</a>
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left">Health</a>
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left">Design</a>
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left">Sport</a>
                </li>
                <li>
                  <a href="contact.html" class="nav-link text-left">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "public-header",
  methods: {}
};
</script>