import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import ArtistsLanding from "./artistsLanding";
import ArtistFocus from "./artistFocus";
import { bgColorSwitch } from "../../utilities";
import Loading from "../Loading";

const ArtistsMain = (props) => {
  const [artists, setArtists] = useState([]);
  const [artist, setArtist] = useState({});
  const [open, setOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const clickModal = (index) => {
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

  useEffect(() => {
    bgColorSwitch(props);

    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [props]);

  useEffect(() => {
    if (data) {
      setArtists(data.data.Artists);
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
      setArtist(selectedArtist[0]);
    };

    if (Object.values(params).length && artists.length) {
      getArtist(params.id, artists);
    }
  }, [props, artists]);

  if (isLoading || isIdle) {
    return <Loading />;
  }

  if (isError) {
    //   @TODO ... Making a ERROR Component, just for fun
    console.log("error: ", error.message);
    return "There's a problem";
  }

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
