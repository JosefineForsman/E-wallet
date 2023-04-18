import "./Card.scss";
import Chip from "../../assets/chip-dark.svg";
import {
  removeCard,
  activeCard,
  removeActiveCard,
} from "../../actions/cardAction";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

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
        dispatch(activeCard(active));
      }
    } else {
      dispatch(removeActiveCard(active));
    }

    setIsCardRemoved(activeCardRedux !== active.id);
  }
  if (props.card) {
    const isActive = activeCardRedux === props.card.id;

    return (
      <>
        {isCardRemoved ? (
          <section
            className={`card ${isActive ? "active" : ""}`}
            data-id={props.card.id}
            style={{ backgroundColor: changeColor() }}
          >
            <article className="card__icon card__icon--card">
              <section className="card__function-icons">
                <label className="card__radio-label">
                  <input
                    type="radio"
                    className="card__radio-input"
                    name="radio"
                    onChange={handleChange}
                  />
                  <div className="card__radio-design"></div>
                  <div className="subheading subheading--white">Active</div>
                </label>
                <figure className="card__remove-btn" onClick={remove}>
                  X
                </figure>
              </section>
            </article>
            <article className="card__icon-continer">
              <img src={Chip} alt="" />
              <img src={`../src/assets/${props.card.vendor}.svg`} />
            </article>
            <article className="card__information">
              <p className="card__text">{props.card.cardNumber}</p>
              <aside className="card__information-container">
                <aside className="card_name-container">
                  <p className="card__label-name">cardholder name</p>
                  <p className="card__name">{props.card.name}</p>
                </aside>
                <aside className="card_valid">
                  <p className="card__label-name">Valid thru</p>
                  <p className="card__name">{props.card.validThru}</p>
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
