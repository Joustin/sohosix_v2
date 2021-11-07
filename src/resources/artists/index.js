import axios from "axios";
import { useQuery } from "react-query";

const ARTISTS_URL = "https://soho-six-api.herokuapp.com/Artists/";

export class Artists {
  constructor(response) {
    this.response = response;
  }

  get image() {
    return this.response.image;
  }
}

export const useArtists = (options = {}) => {
  return useQuery(
    ARTISTS_URL,
    (url) =>
      axios
        .get(url)
        .then(({ data }) => data.map((artists) => new Artists(artists))),
    // .then(({ data }) => new Artists(data)),
    { ...options }
  );
};
