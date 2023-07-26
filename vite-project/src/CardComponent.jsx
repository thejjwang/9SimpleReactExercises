const CardComponent = ({avatar}) => {
  return (
    <div className="cardComponentContainer">
      {avatar.map((avatar, i) => (
        <div className="avatarCard" key={i}>
          <img src={avatar.avatar} alt={avatar.id} />
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