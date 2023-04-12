import './CardStack.scss';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

function CardStack(){
    const cards = useSelector((state)=> {return state.cards})
    console.log(cards)
    
    const cartComponents = cards.map((card)=>{
        return( <Card card= {card} key={card.id}/>)
    })
    return(
        
        <section className='card-container'>
            {cartComponents}
        </section>
    )
}

export default CardStack;