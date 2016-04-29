<style lang="sass">
</style>

<template>
  <div>
    <h1 class="text-center text--white">Todo</h1>
    <ul class="list-group task-container">
      <li class="list-group-item">
        <form action="" style="margin-bottom:0;"  @submit.prevent="createNewTask(newTask)">
          <div class="input-group">
            <input type="text" class="form-control" name="taskinput" :value="newTask" @input="updateNewTask($event.target.value)" placeholder="Create Some Tasks ..." autocomplete="off">
            <span class="input-group-btn">
              <button class="btn btn-primary"><span class="fa fa-plus"></span></button>
            </span>
          </div>
        </form>
      </li>

      <!-- TASK COUNTERS -->
      <li class="list-group-item" style="border-left" v-if="tasks.length > 0" transition="task">
        <span class="label label-info">All Tasks : {{ tasks.length }}</span>
        <span class="label label-danger">Incomplete : {{ incompleteTasks.length }}</span>
        <span class="label label-success">Complete : {{ completeTasks.length }}</span>
      </li>

      <!-- INCOMPLETE TASKS  -->
      <li class="list-group-item task" v-if="task.status == 0" :class="{ 'task-completed':task.status }" v-for="task in tasks" track-by="$index" transition="task" transition-mode="out-in">
        <input type="checkbox" @change.prevent="toggleTaskStatus(task)" :checked="task.status == 1">
        {{ task.title | capitalize }}
        <button class="btn btn-danger pull-right btn-xs btn-circle" @click.prevent="deleteTask(task)"><span class="fa fa-trash-o"></span></button>
      </li>
      <!-- COMPLETE TASKS  -->
      <li class="list-group-item task" v-if="task.status == 1" :class="{ 'task-completed':task.status }" v-for="task in tasks" track-by="$index" transition="task" transition-mode="out-in">
        <input type="checkbox" @change.prevent="toggleTaskStatus(task)" :checked="task.status == 1">
        {{ task.title }}
        <button class="btn btn-danger pull-right btn-xs btn-circle" @click.prevent="deleteTask(task)"><span class="fa fa-trash-o"></span></button>
      </li>
      <!-- Clear Tasks Filters -->
      <li class="list-group-item" transition="task" v-if="completeTasks.length > 0">
        <div class="row">
          <div class="col-xs-12">
            <button class="btn btn-block btn-default btn-lg" @click.prevent="clearCompletedTasks(completeTasks)">Clear Completed Tasks</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import * as actions from '../vuex/actions';
export default {
  vuex: {
    getters: {
      tasks: state => state.Task.tasks,
      newTask: state => state.Task.newTask
    },
    actions
  },
  computed: {
    incompleteTasks(){
      return this.tasks.filter((task)=>task.status == 0);
    },
    completeTasks(){
      return this.tasks.filter((task)=>task.status == 1);
    }
  }
}
</script>
