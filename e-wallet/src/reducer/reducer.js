import { activeCard } from "../actions/cardAction"

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
                cards: state.cards.filter((card)=> card.id !== action.payload),
                activeCard: state.activeCard = []
            }
        case 'ACTIVE_CARD':
        return{
            ...state,
            activeCard: action.payload
        }
        case 'REMOVE_ACTIVE_CARD':
            return{
                ...state,
                activeCard: state.activeCard = []
            }
        default:
            return state;
    }
}

export default reducer;