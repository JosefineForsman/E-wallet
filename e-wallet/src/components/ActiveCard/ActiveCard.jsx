import './ActiveCard.scss';
import Chip from '../../assets/chip-dark.svg';
import { useSelector, useDispatch } from 'react-redux';

function ActiveCard(){
    const activeCard = useSelector((state)=> {return state.activeCard})

    function changeColor(){
        switch (activeCard.vendor) {
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
    
if(activeCard.name){
    return(
        <section className='Card Card__active-card' 
        style={{ backgroundColor: changeColor()}} >
        <article className='Card__icon-continer'>
            <img src={Chip} alt="" />
            <article className='Card__icon'>
                <img src={`../src/assets/${activeCard.vendor}.svg`} />
            </article>
        </article>
        <article className='Card__information'>
            <p className='Card__text'>{activeCard.cardNumber}</p>
            <aside className='Card__information-container'>
                <aside className='Card_name-container'>
                <p className='Card__label-name'>cardholder name</p> 
                <p className='Card__name'>{activeCard.name}</p>
                </aside>
                    <aside className='Card_valid'>
                        <p className='Card__label-name'>Valid thru</p>
                        <p className='Card__name'>{activeCard.validThru}</p>
                    </aside>
            </aside>
        </article>
    </section>
    )
}

}
export default ActiveCard;