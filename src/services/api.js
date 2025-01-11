// const getApiOptions = {
//     headers: {
//       Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
//     },
//   };
  
//   export default getApiOptions;

const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzY4ZTk5M2Q5YzM5Y2VhMWZiYmRkY2Q3YjY1MTEyNyIsIm5iZiI6MTcyNzk1Njc1Ni44ODQsInN1YiI6IjY2ZmU4NzE0OTI1ZmRmOTI1YjdjODczZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l2u8G4-1ZWJDdRYwGFVYYb-UqDx6fyKZ-irLTi7MVaI";
const getApiOptions = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

export default getApiOptions;