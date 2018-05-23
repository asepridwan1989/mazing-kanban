<template>
  <div class="home">
    <div class="container">
      <div class="row text-center px-0 py-3">
        <div class="col-md-3 col-sm-12 p-1">
          <div class="card border-danger mb-3" style="max-width: 18rem;">
            <div class="card-header text-danger">Backlog</div>
            <div class="card-body text-danger">
              <div v-for="task in tasks" :key="task.task_name" v-if="task.task_status === 'backlog'">
                <Task :task="task" class="mb-3"></Task>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12  p-1">
          <div class="card border-warning mb-3" style="max-width: 18rem;">
            <div class="card-header text-warning">Todo</div>
            <div class="card-body text-warning">
              <div v-for="task in tasks" :key="task.task_name" v-if="task.task_status === 'todo'">
                <Task :task="task"></Task>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12  p-1">
          <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header text-primary">Doing</div>
            <div class="card-body text-primary">
              <div v-for="task in tasks" :key="task.task_name" v-if="task.task_status === 'doing'">
                <Task :task="task"></Task>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12  p-1">
          <div class="card border-success mb-3" style="max-width: 18rem;">
            <div class="card-header text-success">Done</div>
            <div class="card-body text-success">
              <div v-for="task in tasks" :key="task.task_name" v-if="task.task_status === 'done'">
                <Task :task="task"></Task>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Task from '@/components/Task.vue'
import { tasksRef } from '@/firebase.js'

export default {
  name: 'home',
  components: {
    Task
  },
  data () {
    return {
      task_name: ''
    }
  },
  firebase: {
    tasks: tasksRef
  },
  methods: {
    addTask () {
      tasksRef.push({ task_name: this.task_name })
      this.task_name = ''
    },
    deleteTask (key) {
      tasksRef.child(key).remove()
    },
    editTask (key) {
      tasksRef.child(key).update({ edit: true })
    }
  },
  created () {
    console.log('TASKREF', this.tasks)
  }
}
</script>
