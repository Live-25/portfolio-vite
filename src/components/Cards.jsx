import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


function Cards(props) {
  return (
    <div>
<div className="card" >
  <img className="card-img-top " src={props.img} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <Link href={props.link} className="btn btn-primary">Know More</Link>
  </div>
</div>
    </div>
  )
}

 Cards.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    link:PropTypes.string.isRequired,
    otherProp: PropTypes.any.isRequired, // Adjust the type as needed
  };
  

  export default Cards;