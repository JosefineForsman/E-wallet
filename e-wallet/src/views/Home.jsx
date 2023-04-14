import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Home.scss';
import CardStack from '../components/CardStack/CardStack';
import Card from '../components/Card/Card';
import ActiveCard from '../components/ActiveCard/ActiveCard';
import { useState } from 'react';

function Home(props){
    const navigate = useNavigate();

    useEffect(()=>{
        props.setHeading('E-WALLET');
    }, [])

    function goToAddCard(){
        navigate('/addcard')
    }

    return(
        <section className='main'>
        <ActiveCard />
         <CardStack/>
         <button className='button button__add' onClick={ goToAddCard }>Add a new card</button>
        </section>
    )
}

export default Home;