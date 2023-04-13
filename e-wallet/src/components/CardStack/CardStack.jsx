import './CardStack.scss';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import NewCard from '../NewCard/NewCard';

function CardStack(){
    const cards = useSelector((state)=> {return state.cards})
    const cartComponents = cards.map((card)=>{
        return( <Card card= {card} key={card.id}/>)
    })

    return(
        
        <section className='card-container'>
            <ul className='card-container__components'>{cartComponents}</ul>
        </section>
    )
}

export default CardStack;