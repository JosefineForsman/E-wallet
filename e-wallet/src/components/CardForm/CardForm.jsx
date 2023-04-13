import './CardForm.scss';

function CardForm({
    setCardNumber,
    setName,
    setValidThru,
    setCcv,
    setVendor
}){

    return(
        <form className='form'>
            <label htmlFor="card-number" className='form__label'>Card number</label>
            <input type="number" max='16' className='form__input'onChange= {(e) => setCardNumber(e.target.value)}  />
            <label htmlFor="card-name" className='form__label'>Cardholder name</label>
            <input type="text" className='form__input' onChange= {(e) => setName(e.target.value)}/>
            <section className='form__container'>
                <article className='form__box'>
                    <label htmlFor="card-valid"className='form__label' >Valid thru</label>
                    <input type="number" className='form__input form__input--small' onChange= {(e) => setValidThru(e.target.value)}/>
                </article>
                <article className='form__box'>
                    <label htmlFor="card-ccv" className='form__label'>ccv</label>
                    <input type="number" className='form__input form__input--small'  onChange= {(e) => setCcv(e.target.value)}/>
                </article>
            </section>
            <select className='form__input' onChange= {(e) => setVendor(e.target.value)}>
                <option value='bitcoin'>Bitcoin inc</option>
                <option value='ninja'>Ninja Bank</option>
                <option value='blockchain'>Block Chain Inc</option>
                <option value='evil'>Evil Corp</option>
            </select>

            </form>
    )
}

export default CardForm;