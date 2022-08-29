import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
// import Modal from "react-modal";
// import { modalStyles } from "../Homepage";
import ArtistsLanding from "./artistsLanding";
import ArtistFocus from "./artistFocus";
// import { useArtists } from "../../resources/artists";

const Comp_WhiteBG = "white";

const ArtistsMain = (props) => {
  const [artists, setArtists] = useState([]);
  const [artist, setArtist] = useState({});
  const [open, setOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);

  const clickModal = (index) => {
    console.log("working?? ");
    if (open) {
      setActiveModal(null);
      setOpen(!open);
      return;
    }

    return setActiveModal(index), setOpen(!open);
  };

  const { isLoading, isIdle, data, isError, error } = useQuery("artists", () =>
    // CORS issues
    // axios("https://soho-six-api.herokuapp.com/Artists/")
    axios("/db_artists.json")
  );

  // const artistsNav = document.querySelector("#ArtistsNav");
  // console.log("nav?: ", artistsNav);

  useEffect(() => {
    if (Object.values(props.match.params).length) {
      document.body.classList.add(Comp_WhiteBG);
    } else {
      document.body.classList.remove(Comp_WhiteBG);
    }

    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [props, artist]);

  useEffect(() => {
    if (data) {
      setArtists(data.data.Artists);
      console.log("artists: ", artists);
    }
  }, [data, artists]);

  useEffect(() => {
    const {
      match: { params },
    } = props;

    const getArtist = (id, artists) => {
      const selectedArtist = artists.filter((artist) => {
        return artist.id === parseInt(id);
      });
      console.log("--- Setting Artist ----");
      setArtist(selectedArtist[0]);
    };

    if (Object.values(params).length && artists.length) {
      getArtist(params.id, artists);
    }
  }, [props, artists]);

  if (isLoading || isIdle) {
    //   @TODO ... Making a loading Component, just for fun
    return null;
  }

  if (isError) {
    //   @TODO ... Making a ERROR Component, just for fun
    console.log("error: ", error.message);
    return "There's a problem";
  }

  console.log("PROPS PARAMS: ", props.match.params);
  console.log("PROPS PARAMS VALUES: ", Object.values(props.match.params));
  console.log("activeModal: ", activeModal);
  console.log("open: ", open);
  console.log("artist: ", artist);

  if (
    artist &&
    Object.values(artist).length &&
    Object.values(props.match.params).length
  ) {
    // Show selected Artist
    return (
      <ArtistFocus
        artist={artist}
        clickModal={(index) => clickModal(index)}
        open={open}
        activeModal={activeModal}
      />
    );
  }

  // Show all Artists
  return <ArtistsLanding artists={artists} />;
};

export default ArtistsMain;
