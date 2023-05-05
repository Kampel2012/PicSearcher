import { Link } from 'react-router-dom';
import './index.css';

function Card({ author, src, alt, id }) {
  return (
    <div className="Card">
      <Link to={`/PicSearcher/photos/${id}`}>
        <img className="Card-image" alt={alt} src={src} />
      </Link>
      <p className="Card-title">{alt}</p>
      <p className="Card-subtitle">{author}</p>
    </div>
  );
}

export default Card;
