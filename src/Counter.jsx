import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCount, increaseCount, resetCount } from './redux/CounterSlice'

function Counter() {
    const dispatch=useDispatch()
    const count=useSelector((store)=>store.counter.count)

    function handleIncrease(){
        dispatch(increaseCount())

    }
     function handleDecrease(){
        dispatch(decreaseCount())

    }
    function handleReset(){
        dispatch(resetCount())
    }


  return (
    <div>
        <div>
            <button onClick={handleDecrease}>-</button>
        <span>{count}</span>
         <button onClick={handleIncrease}>+</button>

        </div>
        <button onClick={handleReset}>reset</button>
        
    </div>
  )
}

export default Counter