import "./ActiveCard.scss";
import Chip from "../../assets/chip-dark.svg";
import { useSelector } from "react-redux";

function ActiveCard() {
  const activeCard = useSelector((state) => {
    return state.activeCard[0];
  });

  function changeColor() {
    switch (activeCard.vendor) {
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

  if (activeCard) {
    return (
      <section
        className="card card__active-card"
        style={{ backgroundColor: changeColor() }}
      >
        <article className="card__icon-continer--active-card">
          <img src={Chip} alt="" />
          <article className="card__icon">
            <img src={`../src/assets/${activeCard.vendor}.svg`} />
          </article>
        </article>
        <article className="card__information">
          <p className="card__text">{activeCard.cardNumber}</p>
          <aside className="card__information-container">
            <aside className="card_name-container">
              <p className="card__label-name">cardholder name</p>
              <p className="card__name">{activeCard.name}</p>
            </aside>
            <aside className="card_valid">
              <p className="card__label-name">Valid thru</p>
              <p className="card__name">{activeCard.validThru}</p>
            </aside>
          </aside>
        </article>
      </section>
    );
  }
}
export default ActiveCard;
