<template>
    <div class="add_task_block">
        <form class="add_form_task" @submit.prevent>
            <input placeholder="Add task name" v-model="task" @input="onInputTask" type="text" class="input_task"/>
            <button @click="onSubmit(this.task)" type="submit" class="add_task_btn">Add</button>
        </form>
    </div>
</template>
<script>

import {mapActions} from 'vuex'

export default {
    name: "add-task-form",
    components: { },
    data(){
        return{
            task: ""
        }
    },
    methods: {
        ...mapActions([
            'addTask'
        ]),
        onInputTask(e){
            this.task = e.target.value
        },
        onSubmit(task){
            this.addTask(task)
            console.log(task)
            this.task = ""
        }
    }
}

</script>

<style>
    .add_task_block{
        display: flex;
        background: #ffff;
        padding: 18px 24px;
        border-radius: 12px;
        width: 70%;
        margin-bottom: 40px;
    }

    .input_task{
        border: 1px solid #f3f5f3;
        padding: 8px;
        width: 80%;
        outline: none;
    }

    .input_task::placeholder{
        color: #8e8e8e;
        font-size: 20px;
    }

    .add_form_task{
        display: flex;
        width: 100%;
    }

    .add_task_btn{
        padding: 8px 6px;
        background: #7f52ec;
        outline: none;
        border: none;
        margin-left: 5%;
        width: 20%;
        color: #f3f5f3;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 18px;
        font-weight: 500;
        border-radius: 8px;
        cursor: pointer;
    }

    .add_task_btn:hover{
        color: chartreuse;
    }
</style>