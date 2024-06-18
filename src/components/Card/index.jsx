const Card = (props) => {
  return (
    <>
      <div className="flex-center-column card">
        <img src={props.img} />
        <div className="py-4 px-3">
          <h6 className="bold">{props.title}</h6>
          <p className="mt-1">{props.desc}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
