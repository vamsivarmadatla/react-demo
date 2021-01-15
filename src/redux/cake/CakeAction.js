import {BUY_CAKE} from "./CakeType"

 const buyCake = (number = 1) =>{
    return{
        type: BUY_CAKE,
        payload: number
    }
}

export default buyCake;