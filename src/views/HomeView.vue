<template>
<div>
  <NavbarView />
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <div class="d-flex h-100">
          <div class="justify-content-center align-self-center">
            <h3>
              <strong>Web mempermudah kamu mencatat data,semua data dapat kamu Catat di sini !</strong> <br />
              <h5>in this website</h5>
            </h3>
            <p>Kamu bisa mengetahui data yang kamu olah </p>
            <router-link to="/ListBarang" class="btn btn-success btn-success text-white ">Lihat list barang</router-link>
          </div>
        </div>
      </div>
      <div class="col ml-auto mb-8">
        <img src="../assets/logo-inventaris.jpg" width="120%" />
      </div>
    </div>
  </div>
  <footer class="mt-2 mb-5">
      <hr />
      <div class="container">
          <div class="row">
              <div class="col text-center">
                  2022 Copyright Habibul & Yoga
              </div>
          </div>
      </div>
  </footer>
</div>

</template>

<script>
  import NavbarView from '../components/NavbarView'

  export default {
    name: 'HomeView',

    components: {
      NavbarView,
    },
  }
</script>
