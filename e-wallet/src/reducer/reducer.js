const initialState = {
    cards:[],
    activeCard: {}
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'ADD_NEW_CARD':
            return{
                ...state,
                cards: [...state.cards, action.payload]
            }
        case 'REMOVE_CARD':
            return{
                ...state,
                cards: state.cards.filter(i=> i.id !== action.payload)
            }
        case 'ACTIVE_CARD':
        return{
            ...state,
            activeCard: state.activeCard = action.payload
        }
        default:
            return state;
    }
}

export default reducer;