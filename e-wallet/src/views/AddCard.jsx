import './AddCard.scss';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import CardForm from '../components/CardForm/CardForm';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addNewCard } from '../actions/cardAction';

function AddCard(props){
    const [cardNumber, setCardNumber] = useState('XXXX XXXX XXXX XXXX')
    const [name, setName] = useState('FIRSTNAME LASTNAME')
    const [validThru, setValidThru] = useState('MM/YY');
    const [ccv, setCcv] = useState();
    const [vendor, setVendor] = useState('bitcoin');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        props.setHeading('ADD A NEW BANK CARD');

    }, [])
    
    function addCard(){
        // splittar text strängen från value i option och lägger i en array.
        let newVendor = vendor.split(' ');
        console.log(newVendor);
        const newCard ={
            id: cardNumber,
            cardNumber: cardNumber,
            name: name,
            validThru: validThru,
            ccv: ccv,
            vendor: newVendor[0],
            img: newVendor[1],
            color: newVendor[2]
        }
        dispatch(addNewCard(newCard));
        navigate('/')
        console.log(newCard)
    }
    return(
        <section>
            <Header/>
            <Card cardNumber = {cardNumber} name = {name} validThru = {validThru} ccv = {ccv}
            vendor = { vendor }/>
            <CardForm setCardNumber = {setCardNumber} setName= { setName } setValidThru = { setValidThru } setCcv = { setCcv }
            setVendor = {setVendor} />

            <button className='button' onClick= { addCard }>Add card</button>
        </section>
    )
}

export default AddCard;