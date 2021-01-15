// const redux = require('redux');
// const reduxLogger = require('redux-logger')
// const applyMiddleware = redux.applyMiddleware
// const createStore = redux.createStore
// const combineReducers = redux.combineReducers
// const logger = reduxLogger.createLogger()

// const BUY_CAKE = "BUY_CAKE";
// const BUY_ICECREAM = "BUY_ICECREAM";

// function buycake(){
//     return{
//         type: BUY_CAKE,
//         info: "First redux action"
//     }
// }

// function buyicecream(){
//     return{
//         type: BUY_ICECREAM,
//         info: "First Icecream action"
//     }
// }


// // const initialState={
// //     numOfCakes : 10,
// //     numOfIceCreams : 20
// // } 

// const initialCakeState={
//     numOfCakes : 10
// }

// const initialIceCreamState = {
//     numOfIceCreams : 20
// }


// // const reducer = (state = initialState, action) =>{
// //   switch(action.type){
// //       case BUY_CAKE : return{
// //           ...state,
// //           numOfCakes: state.numOfCakes - 1
// //       }
// //       case BUY_ICECREAM : return{
// //         ...state,
// //         numOfIceCreams: state.numOfIceCreams - 1
// //     }
// //       default: return state
// //   }
// // }

// const cakeReducer = (state = initialCakeState, action) =>{
//     switch(action.type){
//         case BUY_CAKE : return{
//             ...state,
//             numOfCakes : state.numOfCakes - 1
//         }       
//         default: return state
//     }
// }

// const iceCreamReducer = (state = initialIceCreamState, action) =>{
//     switch(action.type){
//         case BUY_ICECREAM : return{
//             ...state,
//             numOfIceCreams : state.numOfIceCreams - 1
//         }       
//         default: return state
//     }
// }

// const rootReducer = combineReducers({
//     cake: cakeReducer,
//     icecream: iceCreamReducer
// })
// const store = createStore(rootReducer, applyMiddleware(logger))
// console.log('initial state', store.getState()) 
// const unsubscribe =  store.subscribe(()=> {})
// store.dispatch(buycake())
// store.dispatch(buycake())
// store.dispatch(buycake())
// store.dispatch(buyicecream())
// store.dispatch(buyicecream())

// unsubscribe()
