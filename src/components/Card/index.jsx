import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Card = ({
  img,
  title,
  link,
  size,
  cardText,
  className: parentClassName,
}) => {
  return (
    <Link to={`/Releases/${link}`} className="">
      <div
        className={classNames(
          "card",
          {
            "mb-5 featured-card": size === "large",
            "mb-4 fadeInView": size === "small",
          },
          parentClassName
        )}
      >
        <img className="card-img-top" src={`/img/${img}`} alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          {cardText ? <p className="card-text">{cardText}</p> : null}
        </div>
      </div>
    </Link>
  );
};

export default Card;
