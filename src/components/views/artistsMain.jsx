import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
// import { useArtists } from "../../resources/artists";

const ArtistsMain = () => {
  const { isLoading, isIdle, data, isError, error } = useQuery("artists", () =>
    // axios("https://soho-six-api.herokuapp.com/Artists/")
    axios("db_artists.json")
  );

  if (isLoading || isIdle) {
    //   @TODO ... Making a loading Component, just for fun
    return null;
  }

  if (isError) {
    //   @TODO ... Making a ERROR Component, just for fun
    console.log("error: ", error.message);
    return "There's problem";
  }

  // Get Artist array
  const {
    data: { Artists = [] },
  } = data;

  console.log("artists: ", Artists);

  return (
    <div>
      <section id="artists">
        <div className="section-content">
          <div className="container">
            {Artists.map((p) => (
              <div key={p.id} className="row">
                <div className="col-md-12">
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

export default ArtistsMain;
