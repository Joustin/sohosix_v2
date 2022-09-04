import React from "react";
import { Link } from "react-router-dom";

const ReleaseFocus = ({ release }) => {
  return (
    <div className="pageIn">
      <section id="releaseFocusTop">
        <div className="section-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div key={release.id} className="img-box">
                  <img
                    className="img-fluid"
                    src={`/img/releases/${release.image}`}
                    alt={`${release.title}`}
                  />
                </div>

                <div className="streamAlbum d-none d-sm-block">
                  <p>Stream Album</p>

                  {/* Stream Album */}

                  {release.stream.map((album) => (
                    <iframe
                      key={release.id}
                      title={album.title}
                      style={{
                        border: 0,
                        width: "100%",
                        height: `${album.height}`,
                      }}
                      src={`https://bandcamp.com/EmbeddedPlayer/album=${album.albumCode}/size=large/bgcol=ffffff/linkcol=333333/artwork=none/transparent=true/`}
                      seamless
                    >
                      <a href={album.link}>
                        {album.title} by {album.artist}
                      </a>
                    </iframe>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <div className="releaseArtist">
                  <p>{release.artist}</p>
                </div>

                <div className="releaseTitle">
                  <p>{release.title}</p>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="details">
                      <p>Released {release.date}</p>
                      <p>{release.cat}</p>
                    </div>
                  </div>
                  <div className="col-md-6 buy">
                    <a href={release.buy} rel="noreferrer" target="_blank">
                      BUY
                    </a>
                  </div>
                </div>

                <div className="tracklist">
                  <p>Tracklist</p>
                  <ol>
                    {/* Get tracks */}

                    {release.tracks.map((t) => (
                      <li key={t.id}>{t.name}</li>
                    ))}
                  </ol>
                </div>

                <div className="releaseAbout">
                  <p>{release.text}</p>
                </div>

                <div className="releasestyle">
                  <p>Style: {release.style}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="releaseFocusBottom">
        <div className="section-content">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="relatedTitle">
                  <p>Related Releases</p>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Get related releases */}
              {release.relatedReleases.map((r) => (
                <div key={r.id} className="col-md-3">
                  <Link to={`/Releases/${r.link}`}>
                    <img
                      className="media img-fluid"
                      src={`/img/releases/${r.image}`}
                      alt={`${r.title}`}
                    />
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

export default ReleaseFocus;
