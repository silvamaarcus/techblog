import img_card_1 from "../../assets/img/image-card-1.png";

const Card = () => {
  return (
    <>
      <div className="flex-center-column card">
        <img src={img_card_1} />
        <div className="py-4 px-3">
          <h6 className="bold">O que é linguagem de programação? Conheça as principais</h6>
          <p className="mt-1">Uma das mais populares vertentes da tecnologia da informação, a área de...</p>
        </div>
      </div>
    </>
  );
};
export default Card;
