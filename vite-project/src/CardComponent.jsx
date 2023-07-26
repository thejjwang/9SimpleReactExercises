const CardComponent = ({avatar}) => {
  return (
    <div className="cardContainer">
      {avatar.map((avatar, i) => (
        <div className="card" key={i}>
          <h3>
            {avatar.first_name} {avatar.last_name}
          </h3>
          <p>{avatar.employment.title}</p>
        </div>
      ))}
    </div>
  );
};
export default CardComponent;