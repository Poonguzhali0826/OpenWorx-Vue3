
<template>
  <div class="container mt-3">
    <h1>This is an View-contact page</h1>
  </div>

  <div class="container mt-3">
    <div class="row align-item-center">
      <div class="col-md-4">
        <img alt="profile-image" class="profile-img" :src="contacts.PhotoUrl" />
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">
            Name:<span class="fw-bold ps-1">{{ contacts.name }}</span>
          </li>
          <li class="list-group-item">
            Email:<span class="fw-bold ps-1">{{ contacts.email }}</span>
          </li>
          <li class="list-group-item">
            Mobile Number:<span class="fw-bold ps-1">{{
              contacts.mobile
            }}</span>
          </li>
          <li class="list-group-item">
            Company:<span class="fw-bold ps-1">{{ contacts.company }}</span>
          </li>
          <li class="list-group-item">
            Title:<span class="fw-bold ps-1">{{ contacts.title }}</span>
          </li>
          <li class="list-group-item">
            Group:<span class="fw-bold ps-1">{{ group.name }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <RouterLink class="btn btn-success my-1" to="/contact"
          ><fa icon="arrow-left" class="pe-2" />Back</RouterLink
        >
      </div>
    </div>
  </div>
  <!-- <pre>{{ contacts }}</pre>
   <pre>{{ group }}</pre> -->
</template>

<script>
import contactService from "../Service/ContactService.js";

export default {
  name: "ViewContact",
  data: function () {
    return {
      contactID: this.$route.params.contactId,
      contacts: [],
      group: [],
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      let response = await contactService.getContact(this.contactID);
      console.log("response", response);
      this.contacts = response.data;
      let groups = await contactService.getGroups(response.data);
      this.group = groups.data;
    } catch (error) {
      this.errorMessage = error;
    }
  },
};
</script>

<style>
.profile-img {
  width: 150px !important;
  border-radius: 50%;
}
</style>