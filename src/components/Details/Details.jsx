import Header from "../Header/Header";
import "./Details.css";

const Details = () => {
  return (
    <>
      <Header />
      <div className="Details__Container">
        <div className="Details__Box">
          <div className="Details__Image"></div>
        </div>
        <h3 className="Details__Title">Lorem Ipsum</h3>
        <p className="Details__Description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sit
          natus nobis quam in excepturi dolorum dolorem magni maxime,
          repudiandae voluptatem ullam dolor earum quod commodi repellat, unde
          modi reiciendis.
        </p>
        <div className="Details__Colors">Colores: Rojo, Negro, Blanco</div>
        <div className="Details__Sizes">Talles: S - M - L</div>
        <div className="Details__Price">Precio: $1500</div>
        <button className="Details__Button">Lo Quiero</button>
      </div>
    </>
  );
};

export default Details;
