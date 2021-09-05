<template>
    <div :key="task.id" v-for="task in allTasks">
        <Task :task="task"/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Task from './Task.vue';
export default {
    name:'Tasks',
    components:{
        Task,
    },
    methods:{
        ...mapActions(['fetchTasks'])
    },
    computed:mapGetters(['allTasks']),
    created(){
        this.fetchTasks()
    }
}
</script>