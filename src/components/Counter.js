import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const toggleCounterHandler = () => {};
  const counter = useSelector(state=>state.counter)
  const dispatch=useDispatch()

  const handleIncrement=()=>{
    dispatch({type:'increment'})
  }

  const handleDecrement=()=>{
    dispatch({type:'decrement'})
  }

  const handleIncrementBy5=()=>{
    dispatch({type:'incrementBy5'})
  }

  const handleDecrementBy5=()=>{
    dispatch({type:'decrementBy5'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
      <div>
        <button onClick={handleIncrementBy5}>increment by 5</button>

        <button onClick={handleDecrementBy5}>decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
