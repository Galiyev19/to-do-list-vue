<template>
    <div class="task">
        <div class="task_item">
            <h4 class="task_name_text">{{task.nameTask}}</h4> 
            <button class="deleteBtnTask"><font-awesome-icon icon="fa-solid fa-trash icon" /></button>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    name: "task-list",
    props: ['task']
}
</script>

<style>
    .task{
        display: flex;
        flex-direction: column;
        padding: 8px 6px;
    }
    .task_item{
        display: flex;
        justify-content: space-between;
    }
    .task_name_text{
        color: #000;
    }
    .line{
        width: 100%;
        border-bottom: 1px solid #d5d5d5;
        margin-top: 8px;
    }
    .deleteBtnTask{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        outline: none;
        border: none;
        background: #7f52ec;
        font-size: 24px;
        color: #ffff;
        cursor: pointer;
        border-radius: 8px;
        padding: 8px 12px;
    }
    .deleteBtnTask:hover{
        color: red;
    }
    .icon{
        height: 30px;
        width: 30px;
    }
</style>