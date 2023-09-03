<template>
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">User Table</h2>
      <button type="button" class="btn btn-primary p-1 float-sm-right" data-toggle="modal"
                data-target="#ProductModal">Add new user</button>
    </div>
    <table class="table">
      <!-- Table headers -->
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>
        <!-- Iterate over users -->
        <tr v-for="(user, index) in users" :key="user.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        
        </tr>
      </tbody>
    </table>
  </div>
</template>



<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  setup() {
    // Create a reactive variable for users
    const users = ref([]);

    const getUser = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/users');
        // Update the users.value with the response data
        users.value = response.data.data;
       
      } catch (error) {
        console.error('Oops, an error occurred:', error);
        throw error;
      }
    };

    // Use the onMounted hook to fetch data after the component is mounted
    onMounted(() => {
      getUser();
    });

    // Expose the users variable to the template
    return {
      users
    };
  },
};
</script>