import React from "react";
import { Link } from "react-router-dom";

const ArtistsLanding = ({ artists }) => {
  return (
    <div>
      <section id="artists">
        <div className="section-content">
          <div className="container">
            {artists.map((p) => (
              <div key={p.id} className="row">
                <div className="col-md-12">
                  {/* <button onClick={() => getArtist(p.id)}>
                    <div className="whiteBox">
                      <div className="img-box">
                        <img
                          className="img-fluid"
                          src={`/img/artists/${p.image}`}
                          alt={`${p.name}`}
                        />
                      </div>
                      <div className="aboutArtist">
                        <p className="title">{p.name}</p>
                        <p>{p.text}</p>
                      </div>
                    </div>
                  </button> */}
                  <Link to={`/Artists/${p.id}`}>
                    <div className="whiteBox">
                      <div className="img-box">
                        <img
                          className="img-fluid"
                          src={`/img/artists/${p.image}`}
                          alt={`${p.name}`}
                        />
                      </div>
                      <div className="aboutArtist">
                        <p className="title">{p.name}</p>
                        <p>{p.text}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtistsLanding;
