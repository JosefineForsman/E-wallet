import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Home.scss';
import CardStack from '../components/CardStack/CardStack';

function Home(props){
    useEffect(()=>{
        props.setHeading('E-WALLET');

    }, [])

    const navigate = useNavigate();

    function goToAddCard(){
        navigate('/addcard')
    }

    return(
        <section>
         <CardStack/>
         <button className='button' onClick={ goToAddCard }>Add a new card</button>
        </section>
    )
}

export default Home;