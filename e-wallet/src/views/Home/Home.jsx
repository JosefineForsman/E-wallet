import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CardStack from "../../components/CardStack/CardStack";
import ActiveCard from "../../components/ActiveCard/ActiveCard";

function Home({ setHeading }) {
  const activeCard = useSelector((state) => {
    return state.activeCard;
  });
  const navigate = useNavigate();

  useEffect(() => {
    setHeading("E-WALLET");
  }, []);

  function goToAddCard() {
    navigate("/addcard");
  }

  return (
    <section className="home">
      {activeCard.length > 0 ? (
        <div>
          <h2 className="subheading">Active card</h2>
          <ActiveCard />
        </div>
      ) : (
        <h2 className="subheading">You have no active card</h2>
      )}
      <CardStack />
      <button className="button button__add" onClick={goToAddCard}>
        Add a new card
      </button>
    </section>
  );
}

export default Home;
