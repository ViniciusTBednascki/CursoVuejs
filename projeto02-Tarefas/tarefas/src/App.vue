<template>
	<div id="app">
		<h1>Tarefas</h1>
		<complete-bar :total="todo.length" :done="done"/>
		<create-task @newTaskAdded="addNewTask($event)"/>
		<task-list :taskList="todo" @statusChanged="changeStatus($event)"/>
	</div>
</template>

<script>
import CreateTask from '@/components/createTask.vue'
import TaskList from '@/components/taskList.vue'
import CompleteBar from '@/components/completeBar.vue'

export default {
	components : {CreateTask, TaskList, CompleteBar},
	data() {
		return{
            todo: [],
			done: 0
		}
	},
	methods: {
		addNewTask(newTask) {
			const contain = this.todo.indexOf(newTask) !== -1
			if(!contain) {
				this.todo.push({name: newTask, status: 'todo'})
			}
		},
		changeStatus(index) {
			this.todo[index].status = this.todo[index].status === 'todo' ? 'done' : 'todo'
			if(this.todo[index].status === 'done') {
				this.done += 1
			}else {
				this.done -= 1
			}
		}
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
