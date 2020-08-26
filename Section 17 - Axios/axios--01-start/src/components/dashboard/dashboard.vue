<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email adress {{userData.email}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userData: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
        country: "",
        hobbies: "",
        terms: "",
      },
    };
  },
  created() {
    axios
      .get("/users.json")
      .then((data) => {
        const users = [];

        data.forEach((dataArray) => {
          const [userId, userObject] = dataArray;
          users.push(userObject);
        });
        this.userData.email = users[1].email;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: red;
}
</style>