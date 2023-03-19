import { createStore } from "vuex";


const store =  createStore({
    state: {
        toDolist: [],
        count: 0,
    },
    getters: {
        toDoList (state) {
            return state.toDolist
        }
    },
    mutations: {
        addTask(state, task){
            
            const obj = {
                id: state.toDolist.length + 1,
                nameTask: task,
                done: false
            }
            
            console.log(obj)
            // console.log(this.state.toDolist)
            this.state.toDolist.push(obj)
        }
    },
    actions: {
        addTask({commit},task){
            commit('addTask',task)
        }
    }
})


export default store;