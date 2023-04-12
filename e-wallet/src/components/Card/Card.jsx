import './Card.scss';
import Chip from '../../assets/chip-dark.svg';
import Bitcoin from '../../assets/bitcoin.svg';
import { useSelector } from 'react-redux';

function Card(props){
  
    return(
        <section className='Card'>
            <article className='Card__icon-continer'>
                <img src={Chip} alt="" />
                <article className='Card__icon'>
                    <img src={Bitcoin} />
                </article>
            </article>
            <article className='Card__information'>
                <p className='Card__text'>{props.cardNumber}</p>
                <aside className='Card__information-container'>
                    <aside className='Card_name-container'>
                    <p className='Card__label-name'>cardholder name</p> 
                    <p className='Card__name'>{props.name}</p>
                    </aside>
                        <aside className='Card_valid'>
                            <p className='Card__label-name'>Valid thru</p>
                            <p className='Card__name'>{props.validThru}</p>
                        </aside>
                </aside>
            </article>
        </section>
    )
}
export default Card;