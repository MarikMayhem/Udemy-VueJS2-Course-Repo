<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server-status
        v-for="(server,idx) in servers"
        :status="server.status"
        :id="server.id"
        :key="idx"
      />
    </ul>
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus.vue";

export default {
  components: {
    "app-server-status": ServerStatus,
  },
  data() {
    return {
      servers: [
        {
          id: 1,
          status: "Normal",
        },
        {
          id: 2,
          status: "Critical",
        },
        {
          id: 3,
          status: "Unknown",
        },
        {
          id: 4,
          status: "Wrong",
        },
      ],
    };
  },
};
</script>

<style>
</style>
