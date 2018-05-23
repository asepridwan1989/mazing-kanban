<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Amazing Kanban</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <button class="btn btn-success" data-toggle="modal" data-target="#AddTask">New Task</button>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Modal -->
    <div class="modal modal fade" id="AddTask" tabindex="-1" role="dialog" aria-labelledby="AddTask" aria-hidden="true">
      <AddTask></AddTask>
    </div>

    <router-view/>
  </div>
</template>

<script>
import AddTask from '@/components/AddTask.vue'
import { tasksRef } from '@/firebase.js'

export default {
  components: {
    AddTask
  },
  firebase: {
    tasks: tasksRef
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
