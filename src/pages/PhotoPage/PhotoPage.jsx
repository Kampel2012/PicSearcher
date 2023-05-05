import React, { useEffect, useState } from 'react';
import './PhotoPage.css';
import { Link, useParams } from 'react-router-dom';
import api from '../../API/Api';
import Spinner from '../../components/Spinner/Spinner';

const PhotoPage = (props) => {
  const { id } = useParams();
  const [photo, setPhoto] = useState({
    alt_description: '',
    user: {
      name: '',
      location: '',
    },
    links: {
      download: '',
    },
    urls: {
      regular: '',
    },
    likes: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      api
        .getPhotoById(id)
        .then((data) => {
          console.log(data);
          setPhoto(data);
        })
        .catch((e) => console.warn(e))
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  const title = photo.alt_description
    .split('')
    .map((item, iter) => (iter === 0 ? item.toUpperCase() : item));

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="PhotoPage">
          <Link to={'/'} className="PhotoPage__link">
            {' '}
            ⬅ go home{' '}
          </Link>
          <h1 className="PhotoPage__title">{title}</h1>
          <div className="PhotoPage__about About">
            <p className="About__Author">Author: {photo.user.name}</p>
            <p className="About__Place">Place: {photo.user.location}</p>
            <a className="About__downloadLink" href={photo.links.download}>
              Link for download 🎀
            </a>

            <img
              className="About__Image"
              src={photo.urls.regular}
              alt={photo.alt_description}
            />
            <p className="About__Likes">💖{photo.likes}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoPage;
