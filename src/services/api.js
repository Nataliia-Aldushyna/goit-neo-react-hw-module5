const getApiOptions = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY
    }`,
  },
};

export default getApiOptions;
