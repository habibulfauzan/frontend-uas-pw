<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-success text-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Inventaris
        </a>
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
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/listBarang">List Barang</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/barangMasuk">Barang Masuk</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/barangKeluar">Barang Keluar</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/kategori">Kategori</router-link>
            </li>
          </ul>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarView",
  methods: {
    redirectLogout() {
      this.$router.push("/");
    },
    redirectProfile() {
      this.$router.push("/profile");
    },
  },
};
</script>