import './Card.scss';
import Chip from '../../assets/chip-dark.svg';
import { removeCard, activeCard, removeActiveCard } from '../../actions/cardAction';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Card(props){
    const [isCardRemoved, setIsCardRemoved] = useState(true);
    const activeCardRedux = useSelector((state)=> {return state.activeCard})
    const dispatch = useDispatch();
    console.log(activeCardRedux === 1)

    function changeColor(){
        switch (props.card.vendor) {
            case 'bitcoin':
                return '#FFAE34'
            case 'ninja':
                return '#222222'
            case 'blockchain':
                return '#8B58F9'
            case 'evil':
                return '#F33355'
            default:
                break;
        }
    }
    function remove(){
        dispatch(removeCard(props.card.id));
        setIsCardRemoved(!isCardRemoved);
    }

    function handleChange(event){
        const active = props.card;
        
        if (event.target.checked) {
        // Kontrollera om något annat kort har en aktiv kryssruta

        const otherCardsWithActive = document.querySelectorAll('.toggle-slider:checked');
        if (otherCardsWithActive.length > 1) {
        // event.preventDefault();

        alert('You can only have one active card, please uncheck the active one to make another one active!');
        event.target.checked = false;
        }
        else {
            
        // Triggar activeCard med dispatch för att göra aktuellt kort aktivt.
         dispatch(activeCard(active));
         
        }
    } else {
        // Triggar removeActiveCard för att ta bort aktiv status från aktuellt kort
        dispatch(removeActiveCard(active));
  }
    // Update isCardRemoved state based on active state
    setIsCardRemoved(activeCardRedux !== active.id);
}
    if(props.card){
        const isActive = activeCardRedux === props.card.id;

      console.log(props.card.vendor);
      return(
        <>
        {isCardRemoved? 
          <section className={`Card ${isActive ? 'active' : ''}`} data-id={props.card.id} style={{ backgroundColor: changeColor()}}>
              <article className='Card__icon-continer'>
                  <img src={Chip} alt="" />
                  <article className='Card__icon'>
                      <img src={`../src/assets/${props.card.vendor}.svg`} />
                      <figure className='Card__remove-btn' onClick= { remove }>X</figure>
                        <input id={`toggle-slider-${props.card.id}`} className="toggle-slider" type="checkbox" onChange={handleChange}/>
                  </article>
              </article>
            <article className='Card__information'>
                <p className='Card__text'>{props.card.cardNumber}</p>
                  <aside className='Card__information-container'>
                      <aside className='Card_name-container'>
                        <p className='Card__label-name'>cardholder name</p> 
                        <p className='Card__name'>{props.card.name}</p>
                      </aside>
                      <aside className='Card_valid'>
                        <p className='Card__label-name'>Valid thru</p>
                        <p className='Card__name'>{props.card.validThru}</p>
                    </aside>
                  </aside>
              </article> 
          </section>: null}
        </>
      )
    
  }

}

export default Card;