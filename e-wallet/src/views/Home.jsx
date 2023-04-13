import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Home.scss';
import CardStack from '../components/CardStack/CardStack';
import Card from '../components/Card/Card';

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
        <Card />
         <CardStack/>
         <button className='button' onClick={ goToAddCard }>Add a new card</button>
        </section>
    )
}

export default Home;