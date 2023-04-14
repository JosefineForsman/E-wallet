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
        if(activeCardRedux)
        if(event.target.checked){
            dispatch(activeCard(active))
        }
        else if (event.target.checked == false){
            dispatch(removeActiveCard(active))
        }
        else
        alert('DU KAN BARA HA ETT AKTIVT KORT!')
            
    }
    if(props.card){

      console.log(props.card.vendor);
      return(
        <>
        {isCardRemoved? 
          <section className='Card' style={{ backgroundColor: changeColor()}}>
              <article className='Card__icon-continer'>
                  <img src={Chip} alt="" />
                  <article className='Card__icon'>
                      <img src={`../src/assets/${props.card.vendor}.svg`} />
                      <figure className='Card__remove-btn' onClick= { remove }>X</figure>
                      <label className="switch">
                        <input type="checkbox" id="myCheck" onChange={ handleChange }/>
                        <span className="slider round"></span>
                        </label>
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