import './Card.scss';
import Chip from '../../assets/chip-dark.svg';

function Card(props){
  console.log(props.card)
  // Behöver denna if-sats för att kunna loopa ut färger på korten.. 
  //men visar inte kortet i add new bank card?
  //Lägga till färger till texten i value i option så att allt syns.
  if(props.card){
      return(
          <section className='Card' style={{ backgroundColor: `${props.card.color}`}}>
              <article className='Card__icon-continer'>
                  <img src={Chip} alt="" />
                  <article className='Card__icon'>
                      <img src={props.card.img} />
                  </article>
              </article>
              <article className='Card__information'>
                  <p className='Card__text'>{props.card.cardNumber}</p>
                  <aside className='Card__information-container'>
                      <aside className='Card_name-container'>
                      <p className='Card__label-name'>cardholder name</p> 
                      <p className='Card__name'>{props.card.name}</p>
                      </aside>
                          <aside className='Card_valid'>
                              <p className='Card__label-name'>Valid thru</p>
                              <p className='Card__name'>{props.card.validThru}</p>
                          </aside>
                  </aside>
              </article>
          </section>
      )
  }
}
export default Card;