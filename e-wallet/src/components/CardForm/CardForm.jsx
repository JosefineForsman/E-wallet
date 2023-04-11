import './CardForm.scss';

function CardForm(props){

    return(
        <form>
            <label htmlFor="card-number">Card number</label>
            <input type="number" max='16' onChange= {(e) => props.setCardNumber(e.target.value)}  />
            <label htmlFor="card-name">Cardholder name</label>
            <input type="text" onChange= {(e) => props.setName(e.target.value)}/>
            <label htmlFor="card-valid">Valid thru</label>
            <input type="number"  onChange= {(e) => props.setValidThru(e.target.value)}/>
            <label htmlFor="card-ccv">ccv</label>
            <input type="number"  onChange= {(e) => props.setCcv(e.target.value)}/>
            <select name="card-vendors" id="card-bank" onChange= {(e) => props.setVendor(e.target.value)}>
                <option value="bitcoin">Bitcoin inc</option>
                <option value="ninja">Ninja Bank</option>
                <option value="blockchain">Block Chain Inc</option>
                <option value="evil">Evil Corp</option>
            </select>

            </form>
    )
}

export default CardForm;