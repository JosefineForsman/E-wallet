import './Card.scss';
import Chip from '../../assets/chip-dark.svg';
import { removeCard } from '../../actions/cardAction';
import { useDispatch } from 'react-redux';

function Card(props){
    const dispatch = useDispatch();

    function remove(){
        dispatch(removeCard(props.card.id));
    }
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
    if(props.card){

      console.log(props.card.vendor);
      return(
          <section className='Card' style={{ backgroundColor: changeColor()}}>
              <article className='Card__icon-continer'>
                  <img src={Chip} alt="" />
                  <article className='Card__icon'>
                      <img src={`../src/assets/${props.card.vendor}.svg`} />
                        <figure className='Card__remove-btn' onClick= { remove }>X</figure>
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
          </section>
      )
  }
}
export default Card;