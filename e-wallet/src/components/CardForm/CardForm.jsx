import "./CardForm.scss";

function CardForm({ setCardNumber, setName, setValidThru, setCcv, setVendor }) {
  // Hanterar ändringar i kortnumret och kontrollerar att endast siffror har angivits.
  // Rensar eventuella icke-siffror från input-fältet och uppdaterar
  // sedan state med det rensade kortnumret.
  function handleCardNumberChange(event) {
    let cardNumberInput = event.target.value;

    if (!/^[0-9]*$/.test(cardNumberInput)) {
      alert("Card number can only contain numbers");
      cardNumberInput = cardNumberInput.replace(/[^0-9]/g, "");
      event.target.value = cardNumberInput;
    }
    setCardNumber(cardNumberInput);
  }

  // Hanterar ändringar i namn-input-fältet och kontrollerar att endast
  // alfabetiska tecken och mellanslag har angivits. Rensar eventuella
  // icke-alfabetiska tecken och mellanslag från input-fältet och
  // uppdaterar sedan state med det rensade namnet.
  function handleNameInput(event) {
    let nameInput = event.target.value;
    const onlyAlphabetic = /^[a-zA-Z ]*$/;

    if (!onlyAlphabetic.test(nameInput)) {
      alert("Only alphabetic characters and spaces!");
      nameInput = nameInput.replace(/[^a-zA-Z ]/g, "");
      setName(nameInput);
      event.target.value = nameInput;
    } else {
      setName(nameInput);
    }
  }

  // Hanterar ändringar i utgångsdatum-input-fältet och kontrollerar
  // att endast siffror och '/' har angivits. Rensar eventuella
  // icke-siffror och '/' från input-fältet och uppdaterar sedan state med det
  function handleValidThruChange(event) {
    let validThruInput = event.target.value;

    if (!/^[0-9/]*$/.test(validThruInput)) {
      alert("Valid thru can only contain numbers and /");
      validThruInput = validThruInput.replace(/[^0-9/]/g, "");
      event.target.value = validThruInput;
    }
    setValidThru(validThruInput);
  }

  // Hanterar ändringar i CCV-input-fältet och kontrollerar att endast
  // siffror har angivits. Rensar eventuella icke-siffror från
  // input-fältet och uppdaterar sedan state med det rensade CCV-numret.
  function handleCcvChange(event) {
    let ccvInput = event.target.value;

    if (!/^[0-9]*$/.test(ccvInput)) {
      alert("CCV can only contain numbers");
      ccvInput = ccvInput.replace(/[^0-9]/g, "");
      event.target.value = ccvInput;
    }
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
