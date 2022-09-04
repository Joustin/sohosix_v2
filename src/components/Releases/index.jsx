import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import ReleasesLanding from "./releasesLanding";
import ReleaseFocus from "./releaseFocus";
import { bgColorSwitch } from "../../utilities";
import Loading from "../Loading";

const ReleasesMain = (props) => {
  const [releases, setReleases] = useState([]);
  const [release, setRelease] = useState({});

  const { isLoading, isIdle, data, isError, error } = useQuery("releases", () =>
    // CORS issues
    // axios("https://soho-six-api.herokuapp.com/Artists/")
    axios("/db_releases.json")
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
      setReleases(data.data.Releases);
    }
  }, [data, releases]);

  useEffect(() => {
    const {
      match: { params },
    } = props;

    const getRelease = (id, releases) => {
      const selectedRelease = releases.filter((release) => {
        return release.id === parseInt(id);
      });
      setRelease(selectedRelease[0]);
    };

    if (Object.values(params).length && releases.length) {
      getRelease(params.id, releases);
    }
  }, [props, releases]);

  if (isLoading || isIdle) {
    return <Loading />;
  }

  if (isError) {
    //   @TODO ... Making a ERROR Component, just for fun
    console.log("error: ", error.message);
  }

  if (
    release &&
    Object.values(release).length &&
    Object.values(props.match.params).length
  ) {
    // Show selected Release
    return <ReleaseFocus release={release} />;
  }
  // Show all Releases
  return <ReleasesLanding releases={releases} />;
};

export default ReleasesMain;
