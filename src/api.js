import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID a3T7dRfgjy8AHeOvHk0CSlp5bf_4NxcSe1QuvVZPdJk",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
