import { useReducer } from "react"

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement',
    payload: number,
}

type ResetAction = {
    type: 'reset'
}

type ActionType = UpdateAction | ResetAction; 
// discriminated unions

const initialState = {
    count: 0,
}

function reducer(state: CounterState, action: ActionType) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        case 'reset':
            return initialState;
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({type:'increment', payload: 1})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement', payload: 1})}>Decrement</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}   

export default Counter