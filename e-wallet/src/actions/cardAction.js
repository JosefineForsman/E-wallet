function addNewCard(value){
    return{
        type:'ADD_NEW_CARD',
        payload: value
    }
}
function removeCard(value){
    return{
        type:'REMOVE_CARD',
        payload: value
    }
}
function activeCard(value){
    return{
        type:'ACTIVE_CARD',
        payload: value
    }
}
function removeActiveCard(value){
    return{
        type:'REMOVE_ACTIVE_CARD',
        payload: value
    }
}
export { addNewCard, removeCard, activeCard, removeActiveCard }