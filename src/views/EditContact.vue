<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <h1>This is an Edit-contact page</h1>
      </div>
    </div>
  </div>

  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="submitUpdate()">
          <div class="mb-2">
            <input
              type="text"
              v-model="contacts.name"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              v-model="contacts.PhotoUrl"
              class="form-control"
              placeholder="Photo Url"
            />
          </div>
          <div class="mb-2">
            <input
              type="email"
              v-model="contacts.email"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="mb-2">
            <input
              type="number"
              v-model="contacts.mobile"
              class="form-control"
              placeholder="Mobile Number"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              v-model="contacts.company"
              class="form-control"
              placeholder="Company Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              v-model="contacts.title"
              class="form-control"
              placeholder="Title"
            />
          </div>
          <div class="mb-2">
            <select
              v-model="contacts.groupId"
              class="form-control"
              v-if="allGroups.length > 0"
            >
              <option value="">Select Group</option>
              <option
                :value="group.id"
                v-for="group of allGroups"
                :key="group.id"
              >
                {{ group.name }}
              </option>
            </select>
          </div>

          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Update" />
          </div>
        </form>
      </div>

      <div class="col-md-4">
        <img
          alt="profile-image"
          class="profile-img"
          v-bind:src="contacts.PhotoUrl"
        />
      </div>
    </div>
  </div>
  <!-- <pre>{{ contacts }}</pre>
  <pre>{{ allGroups }}</pre> -->
</template>

<script>
import contactService from "../Service/ContactService";
export default {
  name: "EditContact",
  data: function () {
    return {
      contactID: this.$route.params.contactId,
      contacts: {
        name: "",
        email: "",
        mobile: "",
        company: "",
        title: "",
        groupId: "",
        PhotoUrl: ""
      },
      allGroups: [],
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      let response = await contactService.getContact(this.contactID);
      console.log("response", response);
      this.contacts = response.data;
      // let groups = await contactService.getGroups(response.data);
      // this.group = groups.data;
      let allGroup = await contactService.getAllGroups();
      this.allGroups = allGroup.data;
    } catch (error) {
      this.errorMessage = error;
    }
  },
  methods: {
     submitUpdate: async function () {
      try {
        let response = await contactService.updateContact(this.contacts, this.contactID);
        console.log('update', response)
        if (response) {
          return this.$router.push("/contact");
        } else {
          return this.$router.push(`/contact/edit/${this.contactID}`);
        }
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>

<style>
.profile-img {
  width: 150px !important;
  border-radius: 50%;
}
</style>