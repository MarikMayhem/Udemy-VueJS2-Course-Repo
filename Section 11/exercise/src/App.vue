<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <usernames @input="formData.userNames = $event" />
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="formData.email"
            />
            <small
              id="emailHelp"
              class="form-text text-muted"
            >We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="formData.password"
            />
          </div>
          <div class="form-group">
            <label for="radioForms">Store data?</label>

            <div class="form-check" id="radio-forms">
              <label for="True">
                <input type="radio" id="True" value="True" v-model="formData.shouldStore" />True
              </label>
              <label for="False">
                <input type="radio" id="False" value="False" v-model="formData.shouldStore" />False
              </label>
            </div>
          </div>
          <button type="button" class="btn btn-primary" @click="submitForm">Submit</button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name:{{formData.userNames}}</p>
            <p>Mail: {{formData.email}}</p>
            <p>Password: {{formData.password}}</p>
            <p>Store in Database?: {{formData.shouldStore}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Names from "./Names.vue";
export default {
  components: {
    usernames: Names,
  },
  data() {
    return {
      formData: {
        userNames: "",
        email: "",
        password: "",
        shouldStore: "True",
      },
      isSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      this.isSubmitted = true;
    },
  },
};
</script>

<style>
</style>
