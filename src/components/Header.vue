<template>
    <nav class="navbar navbar-expand-lg header-cont navbar-light bg-light ">
      <div class="container-fluid" style="margin-left: 9%; margin-right: 9%;">
      <img alt="openWorx logo" class="logo" src="@/assets/Header_Logo.png"  />
       <div class="collapse navbar-collapse d-flex" id="navbarSupportedContent">
        <RouterLink class="nav-link  pt-1 mx-3 fs-16 fw-600 contact" to="/contact">Contact</RouterLink>
        <RouterLink class="nav-link  pt-1 mx-2 fs-16 fw-600 demo" to="/sign-in">Sign In</RouterLink>
        <!-- <a class="nav-link  pt-1 mx-3 fs-16 fw-600 contact" routerLink="/contact/contact-us" routerLinkActive="active"> Contact</a> -->
        <!-- <a class="nav-link pt-1 mx-2 fs-16 fw-600 demo " routerLink="/sign-in" routerLinkActive="active"> Sign In</a> -->
        <button class="btn fs-16 fw-600 free-trial mx-3" routerLink="/"  type="button">Start Free Trial</button>
      </div>
    </div>
  </nav>
</template>

<style>

.nav-link:hover {
    cursor: pointer;
}

#navbarSupportedContent {
  justify-content:flex-end;  
}

.fs-16 {
  font-size: 16px !important;
}

.fw-600 {
  font-weight: 600 !important;
}

.contact {
  color: #2c3460 !important;
}

.demo {
  color: #0C8CE9 !important;
}

.free-trial {
  padding: 10px 20px !important;
  border-color: #0C8CE9 !important;
  color: #0C8CE9 !important;
  cursor: pointer;
  transition: all .3s ease 0s;
}

.free-trial:hover {
  background-color: #0C8CE9 !important;
  color: white !important;
}

</style>