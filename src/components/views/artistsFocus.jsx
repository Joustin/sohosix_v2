import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import Modal from "react-modal";

const Comp_WhiteBG = "white";

const ArtistsFocus = (props) => {
  const [artist, setArtist] = useState(null);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // const { isLoading, isIdle, data, isError, error } = useQuery("artists", () =>
  //   axios("/db_artists.json")
  // );

  // Get artist id
  const {
    match: { params },
  } = props;

  console.log("params: ", params);

  const isEmpty = Object.values(params);

  console.log("isEmpty: ", isEmpty);

  useEffect(() => {
    // getArtist(params.id);

    document.body.classList.add(Comp_WhiteBG);

    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // if (isLoading || isIdle) {
  //   //   @TODO ... Making a loading Component, just for fun
  //   return null;
  // }

  // if (isError) {
  //   //   @TODO ... Making a ERROR Component, just for fun
  //   console.log("error: ", error.message);
  //   return "There's problem";
  // }

  // const selectedArtist = Artists.filter((artist) => artist.id === params.id);
  // setArtist(selectedArtist[0]);

  //   const getArtist = (id) => {
  //     console.log("id: ", id);
  //     const selectedArtist = Artists.filter((artist) => artist.id === id);
  //     setArtist(selectedArtist[0]);
  //   };

  // console.log("params.id: ", params.id);

  // console.log("props: ", props);
  // console.log("artist: ", artist);

  // console.log("Artists: ", Artists);

  return (
    <div>heelooooooo</div>
    // <div className="pageIn">
    //   <section id="artistFocusTop">
    //     <div className="section-content">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-md-6">
    //             <div key={artist.id} className="img-box">
    //               <img
    //                 className="img-fluid"
    //                 src={`/img/artists/${artist.image}`}
    //                 alt={`${artist.name}`}
    //               />
    //             </div>

    //             <div className="selectedReleases d-none d-sm-block">
    //               <p>Selected Releases</p>
    //               <div className="row">
    //                 {/* Get releases */}

    //                 {artist.selectedReleases.map((r) => (
    //                   <div key={r.id} className="col-sm-4">
    //                     <Link to={`/Releases/${r.link}`}>
    //                       <img
    //                         className="img-fluid"
    //                         src={`/img/releases/${r.image}`}
    //                         alt={`${r.title}`}
    //                       />
    //                     </Link>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-md-6">
    //             <div className="aboutArtist">
    //               <p className="title">{artist.name}</p>
    //               <p>{artist.textFull}</p>
    //             </div>

    //             <div className="featuredTracks">
    //               <p>Featured Tracks</p>

    //               <ul>
    //                 {/* Get featured tracks */}

    //                 {artist.featuredTracks.map((track) => (
    //                   <li key={track.track}>
    //                     <iframe
    //                       title={`${track.title}`}
    //                       src={`${track.url}`}
    //                       seamless
    //                     >
    //                       <a href={`${track.albumLink}`}>{track.albumTitle}</a>
    //                     </iframe>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section id="artistFocusBottom">
    //     <div className="section-content">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-sm-12">
    //             <div className="mediaTitle">
    //               <p>Media</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="row">
    //           {/* Get artist media */}

    //           {artist.media.map((m, index) => (
    //             <div key={m.video} className="col-md-4">
    //               <a href="#" onClick={(e) => this.clickHandler(e, index)}>
    //                 <img
    //                   className="media img-fluid"
    //                   src={`/img/artists/${m.image}`}
    //                   alt={`${m.title}`}
    //                 />
    //               </a>
    //               <Modal isOpen={open} onRequestClose={onCloseModal} center>
    //                 <h4>{m.title}</h4>
    //                 <iframe
    //                   title={`${m.title}`}
    //                   width="560"
    //                   height="315"
    //                   src={`${m.url}`}
    //                   frameborder="0"
    //                   allow="autoplay; encrypted-media"
    //                   allowfullscreen
    //                 ></iframe>
    //               </Modal>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default ArtistsFocus;
