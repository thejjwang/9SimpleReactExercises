const CardComponent = ({ avatar }) => {
  return (
    // <div className="flipCard">
    //   <div className="flipCardInner">
        <div className="cardComponentContainer">
          {avatar.map((avatar, i) => (
            <div className="avatarCard" key={i}>
              <img src={avatar.avatar} alt={avatar.id} loading="lazy"/>
              <h3>
                {avatar.first_name} {avatar.last_name}
              </h3>
              <p>{avatar.employment.title}</p>
            </div>
          ))}
        </div>
        /* <div className="flipCardBack">
            <p>{avatar.gender}</p>
            <p>Email: {avatar.email}</p>
        </div> */
    //   </div>
    // </div>
  );
};
export default CardComponent;
