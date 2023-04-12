import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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