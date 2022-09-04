import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";

const ArtistFocus = ({ artist, clickModal, open, activeModal }) => {
  return (
    <div className="pageIn">
      <section id="artistFocusTop">
        <div className="section-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div key={artist.id} className="img-box">
                  <img
                    className="img-fluid"
                    src={`/img/artists/${artist.image}`}
                    alt={`${artist.name}`}
                  />
                </div>

                <div className="selectedReleases d-none d-sm-block">
                  <p>Selected Releases</p>
                  <div className="row">
                    {/* Get releases */}

                    {artist.selectedReleases.map((r) => (
                      <div key={r.id} className="col-sm-4">
                        <Link to={`/Releases/${r.link}`}>
                          <img
                            className="img-fluid"
                            src={`/img/releases/${r.image}`}
                            alt={`${r.title}`}
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="aboutArtist">
                  <p className="title">{artist.name}</p>
                  <p>{artist.textFull}</p>
                </div>

                <div className="featuredTracks">
                  <p>Featured Tracks</p>

                  <ul>
                    {/* Get featured tracks */}

                    {artist.featuredTracks.map((track) => (
                      <li key={track.track}>
                        <iframe
                          title={`${track.title}`}
                          src={`${track.url}`}
                          seamless
                        >
                          <a href={`${track.albumLink}`}>{track.albumTitle}</a>
                        </iframe>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="artistFocusBottom">
        <div className="section-content">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="mediaTitle">
                  <p>Media</p>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Get artist media */}

              {artist.media.map((m, index) => (
                <div key={m.video} className="col-md-4">
                  <button onClick={() => clickModal(index)}>
                    <img
                      className="media img-fluid"
                      src={`/img/artists/${m.image}`}
                      alt={`${m.title}`}
                    />
                  </button>
                </div>
              ))}
              {open && (
                <Modal
                  isOpen={open}
                  onRequestClose={() => clickModal()}
                  dismissable
                >
                  <h4>{artist?.media[activeModal].title}</h4>
                  <iframe
                    title={`${artist?.media[activeModal].title}`}
                    width="560"
                    height="315"
                    src={`${artist?.media[activeModal].url}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtistFocus;
