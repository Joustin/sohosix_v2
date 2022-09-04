import React from "react";
import { Link } from "react-router-dom";

const ReleasesLanding = ({ releases }) => {
  return (
    <div>
      <section id="releases">
        <div className="section-content">
          <div className="container">
            <div className="row">
              {releases.map((p) => (
                <div key={p.id} className="col-md-3">
                  <Link to={`/Releases/${p.id}`}>
                    <div className="card mb-4 fadeInView">
                      <img
                        className="card-img-top"
                        src={`/img/releases/${p.image}`}
                        alt={`${p.title}`}
                      />
                      <div className="card-body">
                        <p className="card-title">{p.artist}</p>
                        <p className="card-text">{p.title}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReleasesLanding;
