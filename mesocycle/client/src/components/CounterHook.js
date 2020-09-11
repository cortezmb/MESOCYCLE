import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import counterActions from '../actions/counterActions'

const CounterHook = () => {

    //useSelector is like mapStateToProps (pull down data from global state)
    //useDispatch is like mapDispatchToProps (update global state)

    let count = useSelector(state => state.counter)
    let dispatch = useDispatch()

    return (
        <>
            <h1>Inside of Counter Hook</h1>
            <h2>{count}</h2>

            <button onClick={()=>dispatch(counterActions())}>hook</button>
        </>
    )
}

export default CounterHook