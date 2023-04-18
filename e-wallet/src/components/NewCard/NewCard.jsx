import "./NewCard.scss";
import Bitcoin from "../../assets/bitcoin.svg";
import Chip from "../../assets/chip-dark.svg";

function NewCard({ cardNumber, name, validThru }) {
  return (
    <section className="card card__new-card">
      <article className="card__icon-continer--new-card">
        <img src={Chip} alt="" />
        <article className="card__icon card__icon--new-card">
          <img src={Bitcoin} />
        </article>
      </article>
      <article className="card__information">
        <p className="card__text card__text--black">{cardNumber}</p>
        <aside className="card__information-container">
          <aside className="card_name-container">
            <p className="card__label-name card__text--black">
              cardholder name
            </p>
            <p className="card__name card__text--black">{name}</p>
          </aside>
          <aside className="card_valid">
            <p className="card__label-name card__text--black">Valid thru</p>
            <p className="card__name card__text--black">{validThru}</p>
          </aside>
        </aside>
      </article>
    </section>
  );
}

export default NewCard;
