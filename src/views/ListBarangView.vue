<template>
<div>
<NavbarView />
  <div class="container fluid">
  </div>
  <br>
  <h2 class="text-center">List Barang</h2>
  <div class="row">
    <div class="col-lg-12">
      <table class="table table-bordered table stripped">
        <thead>
          <tr class="text-center bg-success text-light" style="font-size: 15px">
            <th>ID Barang</th>
            <th>Nama Barang</th>
            <th>Jumlah</th>
            <th>Kategori</th>
            <th>Created at</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="list_barang in list_barang"
            :key="list_barang"
          >
            <td> {{ list_barang.kode_barang}}</td>
            <td> {{ list_barang.nama_barang }}</td>
            <td> {{ list_barang.jumlah }}</td>
            <td> {{ list_barang.kategori }}</td>
            <td> {{ list_barang.created_at }}</td>
            <td>
              <a href="#" class="btn btn-danger text-white"
                @click="showDeleteModal = true;
                selectUser(list_barang);">
                <i class="glyphicon glyphicon-trash"></i>
                Hapus
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    <!-- delete -->
  <div id="overlay" v-if="showDeleteModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Hapus Barang</h5>
          <button
            type="button"
            class="close"
            @click="showDeleteModal = false"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body p-4">
          <h5>Apa kamu yakin menghapus data ini?</h5>
          <h5>kamu akan menghapus : {{ currentUser.nama_barang }}</h5>
          <hr />
          <button
            class="btn btn-danger btn-lg text-white"
            @click="
              showDeleteModal = false;
              deleteBarang();
              clearMsg();
            "
            
          >
            Hapus
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            class="btn btn-success btn-lg"
            @click="showDeleteModal = false"
          >
            Tidak jadi
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- end delete -->
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#07C41A" fill-opacity="1" d="M0,96L24,122.7C48,149,96,203,144,197.3C192,192,240,128,288,133.3C336,139,384,213,432,218.7C480,224,528,160,576,149.3C624,139,672,181,720,181.3C768,181,816,139,864,149.3C912,160,960,224,1008,261.3C1056,299,1104,309,1152,277.3C1200,245,1248,171,1296,149.3C1344,128,1392,160,1416,176L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
</div>


</template>

<script>
  import NavbarView from '../components/NavbarView';
  import axios from "axios";

  export default {
    name: 'BarangView',
    components: {
      NavbarView,
    },
    
    data: () => {
      return {
        showDeleteModal: false,
        errorMsg: "",
        successMsg: "",
        list_barang: [],
        currentUser: {},
      };
    },
    mounted: function () {
      this.getAllBarang();
    },
    methods: {
      getAllBarang() {
        axios.get("https://mytest-page.000webhostapp.com/uas/barang/list_barang.php")
          .then((res) => {
            if (res.data.error) {
              this.errorMsg = res.data.message;
            } else {
              this.list_barang = res.data.list_barang;
            }
          });
      },
      deleteBarang() {
        var formData = this.toFormData(this.currentUser);
        axios.post("https://mytest-page.000webhostapp.com/uas/barang/hapus.php",
        formData)
        .then((res) => {
          this.currentUser = {};
          if(res.data.error){
            this.errorMsg = res.data.message;
          }else{
            this.successMsg = res.data.message;
            this.getAllBarang();
          }
        });
      },
      toFormData(obj){
        var fd = new FormData();
        for (var i in obj){
          fd.append(i, obj[i]);
        }
        return fd;
      },
      selectUser(list_barang){
        this.currentUser = list_barang;
      },
      clearMsg(){
        this.errorMsg = "";
        this.successMsg = "";
      }
    },
  };
</script>
<style>
.container {
  text-align: center;
}
.container .btn-info {
  color: #ffff;
}
#overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(0, 0, 0, 0.6);
}
</style>
 