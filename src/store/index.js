import { createStore } from 'redux'

const countReducer=(state = {counter:0}, action)=>{
    switch(action.type){
        case 'increment':
            return {
                counter: state.counter+1
        }
        case 'decrement':
            return{
                counter:state.counter-1
        }
        case 'incrementBy5':
            return{
                counter: state.counter+5
            }
        case 'decrementBy5':
            return{
                counter: state.counter-5
            }
        default: return state
    }
}


const store=createStore(countReducer)

export default store
