const movie = document.querySelector("video");
const movieName = document.querySelector(".movie_name");
const aboutMovie = document.querySelector(".about_movie");
const videoSource = document.querySelector(".video_source");

fetch("video.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Response not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.videoUrl);
    movie.src = data.videoUrl;
    movie.classList.add("video_width");
    movieName.textContent = data.title;
    aboutMovie.textContent = data.description;
    aboutMovie.classList.add("movie_text");
    videoSource.src = data.videoUrl;
  })
  .catch((error) => console.log(error));

  function playVideo(){
    movie.play();
    document.querySelector('.play-button').style.display = 'none';
  }