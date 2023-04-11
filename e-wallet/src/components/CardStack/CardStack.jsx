import './CardStack.scss';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

function CardStack(){
    const cards = useSelector((state)=> {return state.cards})
    console.log(cards)
    const cartComponents = cards.map((card)=>{
        return( <Card cardNumber={card.cardNumber} name={card.name } validThru = {card.validThru} key={card.id}/>)
    })
    return(
        
        <section>CardStack
            {cartComponents}
        </section>
    )
}

export default CardStack;