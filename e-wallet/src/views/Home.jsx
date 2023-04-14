import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './Home.scss';
import CardStack from '../components/CardStack/CardStack';
import ActiveCard from '../components/ActiveCard/ActiveCard';

function Home({setHeading}){
    const activeCard = useSelector((state)=> {return state.activeCard})
    const [isActiveCard, setIsActiveCard] = useState(false) 
    const navigate = useNavigate();
    console.log(typeof activeCard)

    useEffect(()=>{
        setHeading('E-WALLET');
    }, [])

    function goToAddCard(){
        navigate('/addcard')
    }
   
    return(
        <section className='main'>
        <ActiveCard/>
         <CardStack/>
         <button className='button button__add' onClick={ goToAddCard }>Add a new card</button>
        </section>
    )
}

export default Home;