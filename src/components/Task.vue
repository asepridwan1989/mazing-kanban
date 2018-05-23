<template>
  <div class="">
    <div class="card border-danger mb-3" v-if="task.task_status === 'backlog'" style="max-width: 18rem; height: 13rem;">
      <div class="card-header">
        {{ task.task_name }}
        <button type="button" class="close" data-dismiss="modal" @click="deleteTask(task['.key'])" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <!-- BACKLOG -->
      <div class="card-body text-danger mb-3">
        <p class="card-text">{{ task.task_desc }}</p>
      </div>
      <div class="card-footer bg-transparent border-danger">
        <button class="btn btn-sm btn-warning mx-1" @click="setTodo(task['.key'])">Todo</button>
      </div>
    </div>
    <!-- TODO -->
    <div class="card border-warning mb-3" v-if="task.task_status === 'todo'" style="max-width: 18rem; height: 13rem;">
      <div class="card-header">
        {{ task.task_name }}
        <button type="button" class="close" data-dismiss="modal" @click="deleteTask(task['.key'])" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="card-body text-warning">
        <p class="card-text">{{ task.task_desc }}</p>
      </div>
      <div class="card-footer bg-transparent border-warning">
        <button class="btn btn-sm btn-danger mx-1" @click="setBacklog(task['.key'])">Backlog</button>
        <button class="btn btn-sm btn-primary mx-1" @click="setDoing(task['.key'])"> Doing</button>
      </div>
    </div>
    <!-- DOING -->
    <div class="card border-primary mb-3" v-if="task.task_status === 'doing'" style="max-width: 18rem; height: 13rem;">
      <div class="card-header">
        {{ task.task_name }}
        <button type="button" class="close" data-dismiss="modal" @click="deleteTask(task['.key'])" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="card-body text-primary">
        <p class="card-text">{{ task.task_desc }}</p>
      </div>
      <div class="card-footer bg-transparent border-primary">
        <button class="btn btn-sm btn-warning mx-1" @click="setTodo(task['.key'])">Todo</button>
        <button class="btn btn-sm btn-success mx-1" @click="setDone(task['.key'])">Done</button>
      </div>
    </div>
    <!-- DONE -->
    <div class="card border-success mb-3" v-if="task.task_status === 'done'" style="max-width: 18rem; height: 13rem;">
      <div class="card-header">
        {{ task.task_name }}
        <button type="button" class="close" data-dismiss="modal" @click="deleteTask(task['.key'])" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="card-body text-success">
        <p class="card-text">{{ task.task_desc }}</p>
      </div>
      <div class="card-footer bg-transparent border-success">
        <button class="btn btn-sm btn-primary mx-1" @click="setDoing(task['.key'])">Doing</button>
      </div>
    </div>
  </div>
</template>

<script>

import { tasksRef } from '@/firebase.js'

export default {
  props: ['task'],
  firebase: {
    tasks: tasksRef
  },
  methods: {
    deleteTask (key) {
      console.log('delete', key)
      tasksRef.child(key).remove()
    },
    setBacklog (key) {
      console.log('set backlog', key)
      tasksRef.child(key).update({ task_status: 'backlog' })
    },
    setTodo (key) {
      console.log('set todo', key)
      tasksRef.child(key).update({ task_status: 'todo' })
    },
    setDoing (key) {
      console.log('set doing', key)
      tasksRef.child(key).update({ task_status: 'doing' })
    },
    setDone (key) {
      console.log('set done', key)
      tasksRef.child(key).update({ task_status: 'done' })
    }
  }
}
</script>

<style>

</style>
