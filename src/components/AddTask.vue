<template>
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add new task!</h5>
      </div>
      <div class="modal-body text-left">
        <form @submit.prevent="addPost">
          <div class="form-group">
            <label for="exampleFormControlInput1">Task Name</label>
            <input type="text" class="form-control" v-model="newTask.task_name" placeholder="Title">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea class="form-control" v-model="newTask.task_desc" rows="3"></textarea>
          </div>
          <div class="form-group text-center my-3">
            <button type="button" class="btn btn-outline-secondary mx-1" data-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-outline-primary mx-1" @click="addTask" data-dismiss="modal">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { tasksRef } from '@/firebase.js'

export default {
  data () {
    return {
      newTask: {
        task_name: '',
        task_desc: '',
        task_status: 'backlog'
      }
    }
  },
  firebase: {
    tasks: tasksRef
  },
  methods: {
    addTask () {
      console.log('add')
      tasksRef.push({
        task_name: this.newTask.task_name,
        task_desc: this.newTask.task_desc,
        task_status: this.newTask.task_status
      })
    }
  }
}
</script>

<style>

</style>
