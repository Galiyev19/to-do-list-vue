<template>
    <div class="home_main">
        <div class="home_main_sides left_side">
            <add-task-form/>
            <div class="task_view">
                <task-list  v-for="item in $store.getters.toDoList" :key="item.id" :task="item"  />
            </div>
        </div>
        <div class="home_main_sides right_side">
            <h1 class="header_text">TO DO LIST</h1>
        </div>
    </div>
</template>


<script>

import AddTaskForm from "@/components/AddTaskForm/AddTaskForm.vue"
import TaskList from '@/components/TaskLIst/TaskLIst.vue'

export default {
    name: "home-page",
    components: { AddTaskForm, TaskList }    
}
</script>

<style scoped>
    .header_text{
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-weight: bold;
        font-size: 100px;
    }

    .home_main{
        display: flex;
        min-height: 100vh;
    }

    .home_main_sides{
        display: flex;
        width: 50%;
        flex-direction: column;
    }

    .left_side{
        padding: 20% 0%;
    }

    .right_side{
        align-items: center;
        justify-content: center;
    }

    .task_view{
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 12px;
        padding: 18px 24px;
        width: 70%;
    }
    
</style>