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
  // Varför går det inte att använda en vanlig ternory operator här?
  // Min h2 displayas inte med det?
  return (
    <section className="main">
      {Object.values(activeCard).length === 0 ? (
        <h2>No active cards</h2>
      ) : (
        <ActiveCard />
      )}
      <CardStack />
      <button className="button button__add" onClick={goToAddCard}>
        Add a new card
      </button>
    </section>
  );
}

export default Home;
