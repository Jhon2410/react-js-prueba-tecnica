import { createStore } from "redux"
const initialState = {
    points : 0,
    results : []
}



const reducerGame = (state=initialState , action)=>{
    console.log(action)
    if( state.puntos <=0 && action.type === "less"){
        return state;
    }
    switch(action.type){
        case "agregar":  return {...state, puntos : state.puntos+=1};
        case "less" :  return {
            ...state, puntos : state.puntos-=1
        }; 
        case "reset_notify" :  return { ...state , puntos : 0};
        default:return state ;
        
    }
    
}
export default createStore(reducerGame)