<template>
  <NavBar />
  <div class="container mt-3">
    <div class="row mt-3">
      <div class="col">
         <h1>This is an contact page</h1>
        <RouterLink class="btn btn-primary btn-sm mx-1" to="/contact/add"
          ><fa icon="plus" class="text-white mx-1" />Add Contact</RouterLink
        >
      </div>
      <p class="mt-2 fst-italic">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates
        deleniti modi deserunt aperiam voluptatum nesciunt officia itaque
        quisquam dolorem adipisci delectus, ducimus, incidunt reiciendis iusto
        aliquam illum molestias exercitationem. Molestias ullam nesciunt, animi
        voluptates id quibusdam ratione fugiat tempore quasi officia! Explicabo
        aliquam voluptatem amet officia magnam sit ullam vel ratione officiis
        perspiciatis consequatur assumenda, pariatur quidem, quo quaerat
        aperiam, eveniet natus eum suscipit quam reprehenderit inventore! Quidem
        autem sunt minus. Eaque optio aliquam, omnis repellendus, ratione
        distinctio doloribus asperiores explicabo maiores illum quisquam beatae
        inventore cupiditate placeat neque architecto veritatis. Voluptatem
        aperiam deserunt neque eum corrupti ut velit!
      </p>
    </div>
  </div>
  <div class="container">
    <form>
      <div class="row mt-3">
        <div class="col-md-3">
          <input
            v-model="message"
            class="form-control"
            placeholder="Search Name"
          />
          <!-- <p>{{ message }}</p> -->
        </div>
        <div class="col-md-3">
          <button class="btn btn-outline-dark" type="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>

  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <Loading />
      </div>
    </div>
  </div>

  <div class="container" v-if="!spinner && errorMessage">
    <div class="row">
      <div class="col">
        <h2>{{ errorMessage }}</h2>
      </div>
    </div>
  </div>

  <div class="container mt-3" v-if="contacts.length > 0">
    <div class="row">
      <div class="col-md-6" v-for="contact of contacts" :key="contact">
        <div class="card my-2 bg-light">
          <div class="card-body">
            <div class="row align-item-center">
              <div class="col-sm-4">
                <img
                  alt="Vue logo"
                  class="profile-img"
                  :src="contact.PhotoUrl"
                />
              </div>
              <div class="col-sm-7 mt-3 align-item-center">
                <ul class="list-group">
                  <li class="list-group-item">
                    Name:<span class="fw-bold ps-1"> {{ contact.name }}</span>
                  </li>
                  <li class="list-group-item">
                    Email:<span class="fw-bold ps-1">{{ contact.email }}</span>
                  </li>
                  <li class="list-group-item">
                    Mobile Number:<span class="fw-bold ps-1">{{
                      contact.mobile
                    }}</span>
                  </li>
                </ul>
              </div>
              <div
                class="
                  col-sm-1
                  d-flex
                  justify-content-evenly
                  flex-column
                  align-items-center
                "
              >
                <RouterLink
                  class="btn btn-warning my-1"
                  :to="`/contact/view/${contact.id}`"
                  ><fa icon="eye" class="text-white"
                /></RouterLink>
                <RouterLink
                  class="btn btn-primary my-1"
                  :to="`/contact/edit/${contact.id}`"
                  ><fa icon="pen" class="text-white"
                /></RouterLink>
                <button
                  class="btn btn-danger my-1"
                  @click="deleteContact(contact.id)"
                >
                  <fa icon="trash" class="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <pre>{{contact}}</pre> -->
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Loading from "../components/Loading.vue";
import contactService from "../Service/ContactService.js";
export default {
  name: "contact-us",
  components: { NavBar, Loading },
  data: function () {
    return {
      spinner: false,
      contacts: [],
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      this.spinner = true;
      let response = await contactService.getAllContacts();
      this.contacts = response.data;
      this.spinner = false;
    } catch (error) {
      this.errorMessage = error;
      this.spinner = false;
    }
  },
  methods: {
    deleteContact: async function (contactID) {
      try {
        let response = await contactService.deleteContact(contactID);
        if (response) {
          let response = await contactService.getAllContacts(); //getting fresh data
          this.contacts = response.data;
        } else {
          console.log("error", error);
        }
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>

<style>
.profile-img {
  width: 150px !important;
  border-radius: 50%;
}
</style>
