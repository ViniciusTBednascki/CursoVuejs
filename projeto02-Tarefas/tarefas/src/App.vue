<template>
	<div id="app">
		<h1>Tarefas</h1>
		<task-progress :total="todo.length" :done="done"/>
		<create-task @newTaskAdded="addNewTask($event)"/>
		<task-list :taskList="todo" @statusChanged="changeStatus($event)" @taskDeleted="deleteTask($event)"/>
	</div>
</template>

<script>
import CreateTask from '@/components/createTask.vue'
import TaskList from '@/components/taskList.vue'
import TaskProgress from '@/components/taskProgress.vue'

export default {
	components : {CreateTask, TaskList, TaskProgress},
	data() {
		return{
            todo: []
		}
	},
	methods: {
		addNewTask(newTask) {
			const result = this.todo.find(task => task.name === newTask.name)
			if(result === undefined) {
				this.todo.push(newTask)
			}
		},
		changeStatus(index) {
			this.todo[index].status = this.todo[index].status === 'todo' ? 'done' : 'todo'
		},
		deleteTask(index) {
			this.todo.splice(index,1)
		}
	},
	computed: {
		done() {
			return this.todo.filter(task => task.status == 'done').length
		}
	},
	watch: {
		todo: {
			deep: true,
			handler() {
				localStorage.setItem('todo', JSON.stringify(this.todo))
			}
		}
	},
	created() {
		const json = localStorage.getItem('todo')
		const array = JSON.parse(json)
		this.todo = Array.isArray(array) ? array : []
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
