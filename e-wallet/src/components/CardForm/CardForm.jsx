import './CardForm.scss';
import bitcoin from '../../assets/bitcoin.svg';
import blockchain from '../../assets/blockchain.svg';
import ninja from '../../assets/ninja.svg';
import evil from '../../assets/evil.svg'


function CardForm(props){

    return(
        <form className='form'>
            <label htmlFor="card-number" className='form__label'>Card number</label>
            <input type="number" max='16' className='form__input'onChange= {(e) => props.setCardNumber(e.target.value)}  />
            <label htmlFor="card-name" className='form__label'>Cardholder name</label>
            <input type="text" className='form__input' onChange= {(e) => props.setName(e.target.value)}/>
            <section className='form__container'>
                <article className='form__box'>
                    <label htmlFor="card-valid"className='form__label' >Valid thru</label>
                    <input type="number" className='form__input form__input--small' onChange= {(e) => props.setValidThru(e.target.value)}/>
                </article>
                <article className='form__box'>
                    <label htmlFor="card-ccv" className='form__label'>ccv</label>
                    <input type="number" className='form__input form__input--small'  onChange= {(e) => props.setCcv(e.target.value)}/>
                </article>
            </section>
            <select className='form__input' onChange= {(e) => props.setVendor(e.target.value)}>
                <option value='bitcoin {bitcoin} #FFAE34'>Bitcoin inc</option>
                <option value='ninja {ninja} #222222'>Ninja Bank</option>
                <option value='blockchain {blockchain} #8B58F9'>Block Chain Inc</option>
                <option value='evil {evil} #F33355'>Evil Corp</option>
            </select>

            </form>
    )
}

export default CardForm;