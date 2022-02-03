import { createStore } from "redux"
import { getData } from "../servicios"
const initialState = {
    puntos : 0,
    results : [],
    question:((async()=>{
        const res = await getData()
        return res
    })()),
    answer:[]
}



const reducerGame = (state=initialState , action)=>{

    if( state.puntos <=0 && action.type === "restar_puntos"){
        return state;
    }
    
    switch(action.type){
        case "agregar_puntos":  return {...state, puntos : state.puntos+=1};
        case "restar_puntos" :return {...state, puntos : state.puntos-=1};
        case "reset" :return {...state, ...initialState};
        case "agregar_respuestas" :  return {
            ...state, answer : [...state.answer,action.state]}; 
        case "reset_notify" :  return { ...state , puntos : 0};
        default:return state ;
        
        
    }
    
}
export default createStore(reducerGame)