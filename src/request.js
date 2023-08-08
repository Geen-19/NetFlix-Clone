const API_KEY = "8331d5b64a1e16c5e0d61e34b0292b34";

const requests = {
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&language=en-US`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetch

}
export default requests;