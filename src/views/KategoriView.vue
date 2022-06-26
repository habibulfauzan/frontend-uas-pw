<template>
<div>
<NavbarView />
  <div class="container fluid">
  </div>
  <br>
  <h2 class="text-center">Kategori</h2>
  <div class="row">
    <div class="col-lg-12">
      <table class="table table-bordered table stripped">
        <thead>
          <tr class="text-center bg-success text-light" style="font-size: 15px">
            <th>ID Kategori</th>
            <th>Nama Kategori</th>
            <th>Waktu update</th>
            <th>Edit</th>
            <th>Pembatalan</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="list_kategori in list_kategori"
            :key="list_kategori"
          >
            <td> {{ list_kategori.id }}</td>
            <td> {{ list_kategori.nama }}</td>
            <td> {{ list_kategori.created_at }}</td>
            <td>
              <a href="#" class="btn btn-primary text-white"
                @click="showEditModal = true;
                selectUser(list_kategori);">
                <i class="glyphicon gplypicon-edit"></i>
                Edit
              </a>
            </td>
            <td>
              <a href="#" class="btn btn-danger text-white"
                @click="showDeleteModal = true;
                selectUser(list_kategori);">
                <i class="glyphicon glyphicon-trash"></i>
                Batal
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- tambah barang -->
  <button class="btn btn-primary float-right" @click="showAddModal = true">
    <i class="fas fa-users"></i> + Tambah Kategori
  </button>
    <!-- end tambah barang -->

  <!-- edit -->
  <div id="overlay" v-if="showEditModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Kategori</h5>
            <button
              type="button"
              class="close"
              @click="showEditModal = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body p-4">
          <form action="#" method="post">
            <div class="form-group">
              <input
                type="text"
                name="nama"
                class="form-control form-control-lg"
                v-model="currentUser.nama"
              />
            </div>
            <div class="form-group">
              <button
                class="btn btn-primary btn-block btn-lg"
                style="color: white"
                @click="
                  showEditModal = false;
                  updateBarang();
                  clearMsg();">
                    Update Kategori
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- end edit -->

  <!-- delete -->
  <div id="overlay" v-if="showDeleteModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Batalkan Kategori</h5>
          <button
            type="button"
            class="close"
            @click="showDeleteModal = false"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body p-4">
          <h5>Apa kamu ingin membatalkan Kategori barang ini?</h5>
          <h5>Kamu akan membatalkan : {{ currentUser.nama }}</h5>
          <hr />
          <button
            class="btn btn-danger btn-lg"
            @click="
              showDeleteModal = false;
              deleteBarang();
              clearMsg();
            "
          >
            Batalkan
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            class="btn btn-success btn-lg"
            @click="showDeleteModal = false"
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- end delete -->
  
  <!-- add -->
  <div id="overlay" v-if="showAddModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Tambah Kategori Baru</h5>
          <button type="button" class="close" @click="showAddModal = false">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body p-4">
          <form action="#" method="post">
            <!-- <div class="form-group">
              <input
                type="number"
                name="id"
                class="form-control form-control-lg"
                placeholder="ID Kategori"
                v-model="newBarang.id"
              />
            </div> -->
            <div class="form-group">
              <input
                type="text"
                name="nama"
                class="form-control form-control-lg"
                placeholder="Nama Kategori"
                v-model="newBarang.nama"
              />
            </div>
            <div class="form-group">
              <button
                class="btn btn-primary btn-block btn-lg"
                style="color: white"
                @click="
                  showAddModal = false;
                  addBarang();
                  clearMsg();
                "
              >
                Tambahkan Kategori
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#07C41A" fill-opacity="1" d="M0,96L24,122.7C48,149,96,203,144,197.3C192,192,240,128,288,133.3C336,139,384,213,432,218.7C480,224,528,160,576,149.3C624,139,672,181,720,181.3C768,181,816,139,864,149.3C912,160,960,224,1008,261.3C1056,299,1104,309,1152,277.3C1200,245,1248,171,1296,149.3C1344,128,1392,160,1416,176L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
  <!-- end add -->
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
        showEditModal: false,
        showDeleteModal: false,
        showAddModal: false,
        errorMsg: "",
        successMsg: "",
        list_kategori: [],
        newBarang: {
          kode_barang: "",
          nama_barang: "",
          jumlah: "",
          kategori: "",
          created_at: "",
        },
        currentUser: {},
      };
    },
    mounted: function () {
      this.getAllBarang();
    },
    methods: {
      getAllBarang() {
        axios.get("https://mytest-page.000webhostapp.com/uas/kategori/list_kategori.php")
          .then((res) => {
            if (res.data.error) {
              this.errorMsg = res.data.message;
            } else {
              this.list_kategori = res.data.list_kategori;
            }
          });
      },
      updateBarang() {
        var formData = this.toFormData(this.currentUser);
        axios
        .post("https://mytest-page.000webhostapp.com/uas/kategori/update.php",
        formData)
        .then((res) => {
          this.currentUser = {};
          if(res.data.error){
            this.errorMsg = res.data.message;
          }else{
            this.successMsg = res.data.successMsg;
            this.getAllBarang();
          }
        });
      },
      deleteBarang() {
        var formData = this.toFormData(this.currentUser);
        axios.post("https://mytest-page.000webhostapp.com/uas/kategori/hapus.php",
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
      addBarang (){
        var formData = this.toFormData(this.newBarang);
        axios.post("https://mytest-page.000webhostapp.com/uas/kategori/tambah.php",
        formData)
        .then((res) => {
          this.newBarang = {
            kode_barang: "",
            nama_barang: "",
            jumlah: "",
            kategori: "",
            created_at: "",
          };
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
      selectUser(list_kategori){
        this.currentUser = list_kategori;
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
 