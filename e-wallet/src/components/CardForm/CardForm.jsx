import "./CardForm.scss";

function CardForm({ setCardNumber, setName, setValidThru, setCcv, setVendor }) {
  const handleCardNumberChange = (e) => {
    const value = e.target.value.slice(0, 16);
    setCardNumber(value);
  };

  return (
    <form className="form">
      <label htmlFor="card-number" className="form__label">
        Card number
      </label>
      <input
        type="text"
        className="form__input"
        onChange={handleCardNumberChange}
        maxLength={16}
        required
      />
      <label htmlFor="card-name" className="form__label">
        Cardholder name
      </label>
      <input
        type="text"
        className="form__input"
        onChange={(e) => setName(e.target.value)}
      />
      <section className="form__container">
        <article className="form__box">
          <label htmlFor="card-valid" className="form__label">
            Valid thru
          </label>
          <input
            type="text"
            className="form__input form__input--small"
            pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$"
            maxLength={5}
            onChange={(e) => setValidThru(e.target.value)}
          />
        </article>
        <article className="form__box">
          <label htmlFor="card-ccv" className="form__label">
            ccv
          </label>
          <input
            type="text"
            pattern="\d{1,3}"
            maxLength={3}
            className="form__input form__input--small"
            onChange={(e) => setCcv(e.target.value)}
          />
        </article>
      </section>
      <select
        className="form__input"
        onChange={(e) => setVendor(e.target.value)}
      >
        <option value="bitcoin">Bitcoin inc</option>
        <option value="ninja">Ninja Bank</option>
        <option value="blockchain">Block Chain Inc</option>
        <option value="evil">Evil Corp</option>
      </select>
    </form>
  );
}

export default CardForm;
