import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import buyIceCream from '../redux/iceCream/IceCreamAction'

function HooksIceCreamContainer() {
    
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>num of icecreams - {numOfIceCreams}</h2>
            <button onClick={()=> dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default HooksIceCreamContainer
