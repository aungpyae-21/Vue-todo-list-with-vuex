<template>
    <header>
        <h1>{{title}}</h1>
        <Button @toggle-form="$emit('toggle-form')" :text="showAddForm?'Close':'Add Task'" :color="showAddForm?'red':'green'" />
    </header>
</template>

<script>
import Button from './Button.vue'
export default {
    name:'Header',
    props: {
        title:String,
        showAddForm:Boolean,
    },
    components: {
        Button
    },
    emit:['toggle-form']

}
</script>

<style scoped>
    header {
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:20px;

    }
</style>