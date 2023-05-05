import React from 'react';
import './ErrorPage404.css';
import { Link } from 'react-router-dom';

const ErrorPage404 = (props) => {
  return (
    <div className="Error">
      <p className="Error__container_link">
        <Link to={'/PicSearcher'} className="Error__link">
          {' '}
          ⬅ go home{' '}
        </Link>
      </p>
      <h1 className="Error__title">Error 404, page is not found</h1>
    </div>
  );
};

export default ErrorPage404;
