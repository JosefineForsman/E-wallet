import "./Card.scss";
import Chip from "../../assets/chip-dark.svg";
import {
  removeCard,
  activeCard,
  removeActiveCard,
} from "../../actions/cardAction";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";

function Card(props) {
  const [isCardRemoved, setIsCardRemoved] = useState(true);
  const activeCardRedux = useSelector((state) => {
    return state.activeCard;
  });
  const dispatch = useDispatch();

  function changeColor() {
    switch (props.card.vendor) {
      case "bitcoin":
        return "#FFAE34";
      case "ninja":
        return "#222222";
      case "blockchain":
        return "#8B58F9";
      case "evil":
        return "#F33355";
      default:
        break;
    }
  }
  function remove() {
    dispatch(removeCard(props.card.id));
    setIsCardRemoved(!isCardRemoved);
  }

  function handleChange(event) {
    const active = props.card;

    if (event.target.checked) {
      if (activeCardRedux) {
        // Triggar activeCard med dispatch för att göra aktuellt kort aktivt.
        dispatch(activeCard(active));
      }
    } else {
      // Triggar removeActiveCard för att ta bort aktiv status från aktuellt kort
      dispatch(removeActiveCard(active));
    }
    // Update isCardRemoved state beroende på vad som finns i activeCardRedux.
    setIsCardRemoved(activeCardRedux !== active.id);
  }
  if (props.card) {
    const isActive = activeCardRedux === props.card.id;

    return (
      <>
        {isCardRemoved ? (
          <section
            className={`Card ${isActive ? "active" : ""}`}
            data-id={props.card.id}
            style={{ backgroundColor: changeColor() }}
          >
            <article className="Card__icon Card__icon--card">
              <section className="Card__function-icons">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="radio"
                    onChange={handleChange}
                  />
                  <div className="rad-design"></div>
                  <div className="subheading subheading--white">Active</div>
                </label>
                <figure className="Card__remove-btn" onClick={remove}>
                  X
                </figure>
              </section>
            </article>
            <article className="Card__icon-continer">
              <img src={Chip} alt="" />
              <img src={`../src/assets/${props.card.vendor}.svg`} />
            </article>
            <article className="Card__information">
              <p className="Card__text">{props.card.cardNumber}</p>
              <aside className="Card__information-container">
                <aside className="Card_name-container">
                  <p className="Card__label-name">cardholder name</p>
                  <p className="Card__name">{props.card.name}</p>
                </aside>
                <aside className="Card_valid">
                  <p className="Card__label-name">Valid thru</p>
                  <p className="Card__name">{props.card.validThru}</p>
                </aside>
              </aside>
            </article>
          </section>
        ) : null}
      </>
    );
  }
}

export default Card;
