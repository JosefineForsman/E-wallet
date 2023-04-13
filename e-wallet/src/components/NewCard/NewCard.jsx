import './NewCard.scss';
import Bitcoin from '../../assets/bitcoin.svg';
import Chip from '../../assets/chip-dark.svg';

function NewCard({
    cardNumber,
    name,
    validThru
}){

    return(
        <section className='Card Card__new-card'>
              <article className='Card__icon-continer'>
                  <img src={Chip} alt="" />
                  <article className='Card__icon'>
                      <img src={Bitcoin} />
                  </article>
              </article>
              <article className='Card__information'>
                  <p className='Card__text Card__text--black'>{cardNumber}</p>
                  <aside className='Card__information-container'>
                      <aside className='Card_name-container'>
                      <p className='Card__label-name Card__text--black'>cardholder name</p> 
                      <p className='Card__name Card__text--black'>{name}</p>
                      </aside>
                          <aside className='Card_valid'>
                              <p className='Card__label-name Card__text--black'>Valid thru</p>
                              <p className='Card__name Card__text--black' >{validThru}</p>
                          </aside>
                  </aside>
              </article>
          </section>
    )
}

export default NewCard;