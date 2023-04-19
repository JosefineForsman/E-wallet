import "./CardForm.scss";

function CardForm({ setCardNumber, setName, setValidThru, setCcv, setVendor }) {
  function handleCardNumberChange(event) {
    let cardNumberInput = event.target.value;

    if (!/^[0-9]*$/.test(cardNumberInput)) {
      // meddela användaren att man endast får ange siffror
      alert("Card number can only contain numbers");
      // ta bort icke-siffror från input-fältet
      cardNumberInput = cardNumberInput.replace(/[^0-9]/g, "");
      // uppdatera state med rensad input
      event.target.value = cardNumberInput;
    }
    // uppdatera state med input
    setCardNumber(cardNumberInput);
  }

  function handleNameInput(event) {
    let nameInput = event.target.value;
    // För att matcha endast alfabetiska tecken och mellanslag
    const onlyAlphabetic = /^[a-zA-Z ]*$/;
    if (!onlyAlphabetic.test(nameInput)) {
      // meddela användaren att man endast får ange alfabetiska tecken och mellanslag
      alert("Only alphabetic characters and spaces!");
      // ta bort icke-alfabetiska tecken och mellanslag från input-fältet
      nameInput = nameInput.replace(/[^a-zA-Z ]/g, "");
      // uppdatera state med rensad input
      setName(nameInput);
      // uppdatera input-fältet med rensad input
      event.target.value = nameInput;
    } else {
      // uppdatera state med input
      setName(nameInput);
    }
  }
  function handleValidThruChange(event) {
    let validThruInput = event.target.value;

    if (!/^[0-9/]*$/.test(validThruInput)) {
      // meddela användaren att man endast får ange siffror och /
      alert("Valid thru can only contain numbers and /");
      // ta bort icke-siffror och / från input-fältet
      validThruInput = validThruInput.replace(/[^0-9/]/g, "");
      // uppdatera input-fältet med rensad input
      event.target.value = validThruInput;
    }

    // uppdatera state med input
    setValidThru(validThruInput);
  }
  function handleCcvChange(event) {
    let ccvInput = event.target.value;

    if (!/^[0-9]*$/.test(ccvInput)) {
      // meddela användaren att man endast får ange siffror
      alert("CCV can only contain numbers");
      // ta bort icke-siffror från input-fältet
      ccvInput = ccvInput.replace(/[^0-9]/g, "");
      // uppdatera state med rensad input
      event.target.value = ccvInput;
    }
    // uppdatera state med input
    setCcv(ccvInput);
  }

  return (
    <form className="form">
      <label htmlFor="card-number" className="form__label">
        Card number
      </label>
      <input
        className="form__input"
        maxLength={16}
        type="text"
        name="cardNumber"
        onInput={handleCardNumberChange}
        placeholder="XXXX XXXX XXXX XXXX"
        onBlur={(event) => {
          const inputCardNumber = event.target.value;
          if (inputCardNumber.length < 16) {
            alert("Please enter a valid 16-digit card number.");
            event.target.focus();
          }
        }}
      />
      <label htmlFor="card-name" className="form__label">
        Cardholder name
      </label>
      <input
        type="text"
        placeholder="FIRSTNAME LASTNAME"
        className="form__input"
        onInput={handleNameInput}
        onBlur={(event) => {
          const inputName = event.target.value;
          if (inputName.length === 0) {
            alert("Please enter first and last name.");
            event.target.focus();
          }
        }}
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
            placeholder="MM/YY"
            onChange={handleValidThruChange}
            onBlur={(event) => {
              const inputValidThru = event.target.value;
              if (inputValidThru.length < 5) {
                alert("Please enter a valid valid thru nr. MM/YY");
                event.target.focus();
              }
            }}
          />
        </article>
        <article className="form__box">
          <label htmlFor="card-ccv" className="form__label">
            ccv
          </label>
          <input
            placeholder="XXX"
            type="text"
            pattern="\d{1,3}"
            maxLength={3}
            className="form__input form__input--small"
            onChange={handleCcvChange}
            onBlur={(event) => {
              const inputCcv = event.target.value;
              if (inputCcv.length < 3) {
                alert("Please enter a valid ccv nr. XXX");
                event.target.focus();
              }
            }}
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
