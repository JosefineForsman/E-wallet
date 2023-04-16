const initialState = {
    cards: [],
    activeCard: {}
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NEW_CARD':
        
        // Lägg till den nya kortet i befintliga kort och spara allt i localStorage
        const newCards = [...state.cards, action.payload];
        localStorage.setItem('cards', JSON.stringify(newCards));
        return {
          ...state,
          cards: newCards
        };
      case 'REMOVE_CARD':
        // Ta bort kortet med matchande id från befintliga kort och spara allt i localStorage
        const filteredCards = state.cards.filter((card) => card.id !== action.payload);
        localStorage.setItem('cards', JSON.stringify(filteredCards));
        
        // Ta bort det aktiva kortet från localStorage om det tas bort
        if (state.activeCard.id === action.payload) {
          localStorage.removeItem('activeCard');
        }
        
        return {
          ...state,
          cards: filteredCards,
          activeCard: {}
        };
      case 'ACTIVE_CARD':
        // Sätt det valda kortet som aktivt kort och spara det i localStorage
        localStorage.setItem('activeCard', JSON.stringify(action.payload));
        return {
          ...state,
          activeCard: action.payload
        };
      case 'REMOVE_ACTIVE_CARD':
        // Ta bort det aktiva kortet och spara det i localStorage
        localStorage.removeItem('activeCard');
        return {
          ...state,
          activeCard: {}
        };
      default:
        // Ladda korten och det aktiva kortet från localStorage, om det finns
        const cardsFromStorage = localStorage.getItem('cards');
        const activeCardFromStorage = localStorage.getItem('activeCard');
        return {
          ...state,
          // Om kort finns i localStorage, använd dem. Annars använd befintliga kort.
          cards: cardsFromStorage ? JSON.parse(cardsFromStorage) : state.cards,
          // Om det aktiva kortet finns i localStorage, använd det. Annars använd ett tomt objekt.
          activeCard: activeCardFromStorage ? JSON.parse(activeCardFromStorage) : state.activeCard
        };
    }
  };
  
  export default reducer;