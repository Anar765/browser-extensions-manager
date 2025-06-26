import './Card.modules.css';

const Card = (props) => {

  return (
    <div className="card">
      <div className="info">
        <img src={props.logo} alt="Logo" />
        <div className="text">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </div>

      <div className="buttons">
        <button className="remove-btn" onClick={
          () => props.RemoveCard(props.id)
        }>Remove</button>

        <label className="switch">
          <input
            type="checkbox"
            onChange={() => props.func(props.id)}
            checked={props.isActive}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Card;
