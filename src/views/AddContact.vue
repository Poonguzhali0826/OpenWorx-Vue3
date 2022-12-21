<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <h1>This is an Add-contact page</h1>
      </div>
    </div>
  </div>

  <!-- <pre>{{ groups }}</pre> -->
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="submitCreate()">
          <div class="mb-2">
            <input
              type="text"
              v-model="contact.name"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              v-model="contact.PhotoUrl"
              class="form-control"
              placeholder="Photo Url"
            />
          </div>
          <div class="mb-2">
            <input
              type="email"
              v-model="contact.email"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="mb-2">
            <input
              type="number"
              v-model="contact.mobile"
              class="form-control"
              placeholder="Mobile Number"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              v-model="contact.company"
              class="form-control"
              placeholder="Company Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              v-model="contact.title"
              class="form-control"
              placeholder="Title"
            />
          </div>
          <div class="mb-2">
            <select
              v-model="contact.groupId"
              class="form-control"
              v-if="groups.length > 0"
            >
              <option value="">Select Group</option>
              <option :value="group.id" v-for="group of groups" :key="group.id">
                {{ group.name }}
              </option>
            </select>
          </div>

          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Create" />
          </div>
        </form>
      </div>

      <div class="col-md-4">
        <img
          alt="profile-image"
          class="profile-img"
          v-bind:src="contact.PhotoUrl"
        />
      </div>
    </div>
  </div>

  <!-- <pre>{{ contact }}</pre> -->
</template>

<script>
import contactService from "../Service/ContactService.js";
export default {
  name: "AddContact",
  data: function () {
    return {
      contact: {
        name: "",
        email: "",
        mobile: "",
        company: "",
        title: "",
        groupId: "",
      },
      groups: [],
    };
  },
  created: async function () {
    try {
      let allgroups = await contactService.getAllGroups();
      this.groups = allgroups.data;
    } catch (error) {
      this.errorMessage = error;
    }
  },
  methods: {
    submitCreate: async function () {
      try {
        let response = await contactService.createContact(this.contact);
        if (response) {
          return this.$router.push("/contact");
        } else {
          return this.$router.push("/contact/add");
        }
      } catch (error) {
        console.log(error);
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

